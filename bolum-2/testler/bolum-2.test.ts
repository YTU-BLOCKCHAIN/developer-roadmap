// ⚠️ Bu dosyayı DEĞİŞTİRME. Testleri geçmek için alıştırma dosyalarını düzenle.
import { describe, it, expect } from "vitest";
import { islemOlustur, islemiTamamla, islemOzeti } from "../01-islem.ts";
import {
  ethToWei,
  gweiToWei,
  weiToGwei,
  islemUcretiWei,
  weiToEthMetni,
} from "../02-bigint.ts";
import { islemRaporu } from "../proje-islem-raporu.ts";

const A = "0x1111111111111111111111111111111111111111";
const B = "0x2222222222222222222222222222222222222222";

describe("01 · işlem objesi", () => {
  it("yeni işlem 'beklemede' durumunda oluşur", () => {
    expect(islemOlustur("0xabc", A, B, 1.5)).toEqual({
      hash: "0xabc",
      gonderen: A,
      alici: B,
      degerEth: 1.5,
      durum: "beklemede",
    });
  });
  it("işlem başarılı tamamlanır", () => {
    const islem = islemOlustur("0xabc", A, B, 1.5);
    expect(islemiTamamla(islem, true).durum).toBe("basarili");
  });
  it("işlem başarısız tamamlanır", () => {
    const islem = islemOlustur("0xabc", A, B, 1.5);
    expect(islemiTamamla(islem, false).durum).toBe("basarisiz");
  });
  it("islemiTamamla gelen objeyi değiştirmez, yenisini döndürür", () => {
    const islem = islemOlustur("0xabc", A, B, 1.5);
    const yeni = islemiTamamla(islem, true);
    expect(islem.durum).toBe("beklemede");
    expect(yeni).not.toBe(islem);
    expect(yeni.hash).toBe("0xabc");
  });
  it("özet doğru formatta", () => {
    const islem = islemiTamamla(islemOlustur("0xabc", A, B, 1.5), true);
    expect(islemOzeti(islem)).toBe("0x1111...1111 → 0x2222...2222 | 1.5 ETH | basarili");
  });
});

describe("02 · bigint", () => {
  it("ETH → wei", () => {
    expect(ethToWei(1n)).toBe(1_000_000_000_000_000_000n);
    expect(ethToWei(2n)).toBe(2_000_000_000_000_000_000n);
    expect(ethToWei(0n)).toBe(0n);
  });
  it("gwei → wei", () => {
    expect(gweiToWei(20n)).toBe(20_000_000_000n);
  });
  it("wei → gwei (küsurat atılır)", () => {
    expect(weiToGwei(25_000_000_000n)).toBe(25n);
    expect(weiToGwei(25_999_999_999n)).toBe(25n);
  });
  it("işlem ücretini wei olarak hesaplar", () => {
    expect(islemUcretiWei(21000n, 20n)).toBe(420_000_000_000_000n);
  });
  it("sonuçlar gerçekten bigint", () => {
    expect(typeof ethToWei(1n)).toBe("bigint");
    expect(typeof islemUcretiWei(21000n, 20n)).toBe("bigint");
  });
});

describe("02 · ⭐ weiToEthMetni", () => {
  it("tam sayı ETH", () => {
    expect(weiToEthMetni(2_000_000_000_000_000_000n)).toBe("2");
  });
  it("küsuratlı ETH", () => {
    expect(weiToEthMetni(1_500_000_000_000_000_000n)).toBe("1.5");
    expect(weiToEthMetni(420_000_000_000_000n)).toBe("0.00042");
  });
  it("sıfır ve en küçük birim", () => {
    expect(weiToEthMetni(0n)).toBe("0");
    expect(weiToEthMetni(1n)).toBe("0.000000000000000001");
  });
});

describe("Mini proje · işlem raporu", () => {
  it("özetin sonuna ücreti ekler", () => {
    const islem = islemiTamamla(islemOlustur("0xabc", A, B, 1.5), true);
    expect(islemRaporu(islem, 21000, 20)).toBe(
      "0x1111...1111 → 0x2222...2222 | 1.5 ETH | basarili | Ücret: 0.000420 ETH",
    );
  });
  it("bekleyen işlemi raporlar", () => {
    const islem = islemOlustur("0xabc", A, B, 0.25);
    expect(islemRaporu(islem, 65000, 12)).toBe(
      "0x1111...1111 → 0x2222...2222 | 0.25 ETH | beklemede | Ücret: 0.000780 ETH",
    );
  });
});
