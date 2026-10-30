// ⚠️ Bu dosyayı DEĞİŞTİRME. Testleri geçmek için alıştırma dosyalarını düzenle.
import { describe, it, expect } from "vitest";
import { selamla } from "../01-merhaba.js";
import { gasUcretiEth, ethToTl } from "../02-gas-ucreti.js";
import { ucretSeviyesi } from "../03-ucret-seviyesi.js";
import { adresGecerliMi, kisaAdres } from "../04-adres.js";
import { gasRaporu } from "../proje-gas-raporu.js";

const LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

describe("01 · selamla", () => {
  it("isimle karşılama mesajı döndürür", () => {
    expect(selamla("Ayşe")).toBe("Merhaba, Ayşe! YTÜ Blockchain'e hoş geldin.");
  });
  it("farklı isimlerle de çalışır", () => {
    expect(selamla("Mehmet")).toBe("Merhaba, Mehmet! YTÜ Blockchain'e hoş geldin.");
  });
});

describe("02 · gas ücreti", () => {
  it("basit transferin ücretini ETH olarak hesaplar", () => {
    expect(gasUcretiEth(21000, 20)).toBeCloseTo(0.00042, 10);
  });
  it("büyük işlemlerde de doğru hesaplar", () => {
    expect(gasUcretiEth(150000, 45)).toBeCloseTo(0.00675, 10);
  });
  it("gas fiyatı 0 ise ücret 0'dır", () => {
    expect(gasUcretiEth(21000, 0)).toBe(0);
  });
  it("ETH'yi TL'ye çevirir", () => {
    expect(ethToTl(0.5, 100000)).toBe(50000);
    expect(ethToTl(0.00042, 100000)).toBeCloseTo(42, 6);
  });
});

describe("03 · ücret seviyesi", () => {
  it("10'dan küçükse düşük", () => {
    expect(ucretSeviyesi(0)).toBe("düşük");
    expect(ucretSeviyesi(9.9)).toBe("düşük");
  });
  it("10 ile 30 arası (dahil) normal", () => {
    expect(ucretSeviyesi(10)).toBe("normal");
    expect(ucretSeviyesi(20)).toBe("normal");
    expect(ucretSeviyesi(30)).toBe("normal");
  });
  it("30'dan büyükse yüksek", () => {
    expect(ucretSeviyesi(30.1)).toBe("yüksek");
    expect(ucretSeviyesi(200)).toBe("yüksek");
  });
  it("negatifse geçersiz", () => {
    expect(ucretSeviyesi(-1)).toBe("geçersiz");
  });
});

describe("04 · adres", () => {
  it("geçerli adresi tanır", () => {
    expect(adresGecerliMi(LINK)).toBe(true);
  });
  it("0x olmayan adresi reddeder", () => {
    expect(adresGecerliMi(LINK.slice(2))).toBe(false);
  });
  it("yanlış uzunluktaki adresi reddeder", () => {
    expect(adresGecerliMi("0x1234")).toBe(false);
    expect(adresGecerliMi(LINK + "a")).toBe(false);
  });
  it("adresi kısaltır", () => {
    expect(kisaAdres(LINK)).toBe("0x7798...4789");
  });
});

describe("Mini proje · gas raporu", () => {
  it("raporu doğru formatta üretir", () => {
    expect(gasRaporu(21000, 20, 100000)).toBe(
      "İşlem ücreti: 0.000420 ETH (≈ 42.00 TL) | Seviye: normal",
    );
  });
  it("yüksek ücretli işlemi raporlar", () => {
    expect(gasRaporu(150000, 45, 120000)).toBe(
      "İşlem ücreti: 0.006750 ETH (≈ 810.00 TL) | Seviye: yüksek",
    );
  });
  it("düşük ücretli işlemi raporlar", () => {
    expect(gasRaporu(21000, 5, 120000)).toBe(
      "İşlem ücreti: 0.000105 ETH (≈ 12.60 TL) | Seviye: düşük",
    );
  });
});
