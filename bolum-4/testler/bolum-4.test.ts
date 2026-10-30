// ⚠️ Bu dosyayı DEĞİŞTİRME. Testleri geçmek için alıştırma dosyalarını düzenle.
import { describe, it, expect, vi } from "vitest";
import { bekle, ethFiyatiGetir, hepsiniGetir, FIYAT_URL } from "../01-async.ts";
import { istemciOlustur, bakiyeMetni, tokenBakiyesiMetni } from "../02-viem.ts";

// Gerçek internete gitmeyen sahte fetch
function sahteFetch(govde: unknown, ok = true) {
  return vi.fn(async () => ({ ok, json: async () => govde }) as Response) as unknown as typeof fetch;
}

describe("01 · async", () => {
  it("bekle verilen süre kadar bekler", async () => {
    const baslangic = Date.now();
    await bekle(100);
    expect(Date.now() - baslangic).toBeGreaterThanOrEqual(90);
  });

  it("ETH fiyatını getirir", async () => {
    const fetchFn = sahteFetch({ ethereum: { usd: 3456.78 } });
    await expect(ethFiyatiGetir(fetchFn)).resolves.toBe(3456.78);
  });

  it("doğru adrese istek atar", async () => {
    const fetchFn = sahteFetch({ ethereum: { usd: 1 } });
    await ethFiyatiGetir(fetchFn);
    expect(fetchFn).toHaveBeenCalledTimes(1);
    expect((fetchFn as unknown as ReturnType<typeof vi.fn>).mock.calls[0][0]).toBe(FIYAT_URL);
  });

  it("başarısız cevapta 'Fiyat alınamadı' hatası fırlatır", async () => {
    const fetchFn = sahteFetch({}, false);
    await expect(ethFiyatiGetir(fetchFn)).rejects.toThrow("Fiyat alınamadı");
  });

  it("bakiyeleri sırayı koruyarak getirir", async () => {
    const bakiyeler: Record<string, bigint> = { "0xa": 1n, "0xb": 2n, "0xc": 3n };
    const sonuc = await hepsiniGetir(["0xa", "0xb", "0xc"], async (a) => bakiyeler[a]);
    expect(sonuc).toEqual([
      { adres: "0xa", bakiye: 1n },
      { adres: "0xb", bakiye: 2n },
      { adres: "0xc", bakiye: 3n },
    ]);
  });

  it("istekleri sırayla değil, aynı anda atar", async () => {
    const baslangic = Date.now();
    await hepsiniGetir(["0xa", "0xb", "0xc", "0xd"], async () => {
      await new Promise((r) => setTimeout(r, 150));
      return 1n;
    });
    // Sırayla olsaydı ~600 ms sürerdi
    expect(Date.now() - baslangic).toBeLessThan(400);
  });
});

describe("02 · viem", () => {
  it("Sepolia'ya bağlanan bir istemci oluşturur", () => {
    const client = istemciOlustur();
    expect(client.chain?.id).toBe(11155111);
    expect(typeof client.getBalance).toBe("function");
  });

  it("wei'yi ETH metnine çevirir", () => {
    expect(bakiyeMetni(1_500_000_000_000_000_000n)).toBe("1.5 ETH");
    expect(bakiyeMetni(0n)).toBe("0 ETH");
  });

  it("token bakiyesini decimals'a göre çevirir", () => {
    expect(tokenBakiyesiMetni(25_000_000_000_000_000_000n, 18, "LINK")).toBe("25 LINK");
    expect(tokenBakiyesiMetni(1_500_000n, 6, "USDC")).toBe("1.5 USDC");
  });
});
