// ⚠️ Bu dosyayı DEĞİŞTİRME. Testleri geçmek için alıştırma dosyalarını düzenle.
import { describe, it, expect } from "vitest";
import type { Islem } from "../../bolum-2/01-islem.ts";
import {
  basarililar,
  basariliToplam,
  adresinIslemleri,
  enBuyukIslem,
  benzersizAdresler,
} from "../01-islem-listesi.ts";
import { kasaOzeti, type KasaKaydi } from "../proje-kulup-kasasi.ts";

const A = "0xAAAA000000000000000000000000000000000001";
const B = "0xBBBB000000000000000000000000000000000002";
const C = "0xCCCC000000000000000000000000000000000003";

const islemler: Islem[] = [
  { hash: "0x01", gonderen: A, alici: B, degerEth: 1, durum: "basarili" },
  { hash: "0x02", gonderen: B, alici: C, degerEth: 5, durum: "basarisiz" },
  { hash: "0x03", gonderen: A, alici: C, degerEth: 2.5, durum: "basarili" },
  { hash: "0x04", gonderen: C, alici: A, degerEth: 0.5, durum: "beklemede" },
];

describe("01 · işlem listesi", () => {
  it("başarılı işlemleri filtreler", () => {
    expect(basarililar(islemler).map((i) => i.hash)).toEqual(["0x01", "0x03"]);
  });
  it("başarılı işlemlerin toplamını hesaplar", () => {
    expect(basariliToplam(islemler)).toBe(3.5);
    expect(basariliToplam([])).toBe(0);
  });
  it("adrese göre işlemleri bulur (gönderen veya alıcı)", () => {
    expect(adresinIslemleri(islemler, A).map((i) => i.hash)).toEqual(["0x01", "0x03", "0x04"]);
  });
  it("adres karşılaştırması büyük/küçük harf duyarsız", () => {
    expect(adresinIslemleri(islemler, B.toLowerCase()).map((i) => i.hash)).toEqual([
      "0x01",
      "0x02",
    ]);
  });
  it("en büyük işlemi bulur", () => {
    expect(enBuyukIslem(islemler)?.hash).toBe("0x02");
    expect(enBuyukIslem([])).toBeUndefined();
  });
  it("benzersiz adresleri ilk görünme sırasıyla döndürür", () => {
    expect(benzersizAdresler(islemler)).toEqual([A, B, C]);
    expect(benzersizAdresler([])).toEqual([]);
  });
  it("orijinal diziyi değiştirmez", () => {
    const kopya = JSON.stringify(islemler);
    basarililar(islemler);
    adresinIslemleri(islemler, A);
    enBuyukIslem(islemler);
    expect(JSON.stringify(islemler)).toBe(kopya);
  });
});

const kayitlar: KasaKaydi[] = [
  { aciklama: "Sponsor", tutar: 15000, tur: "gelir", kategori: "sponsorluk" },
  { aciklama: "İkram", tutar: 1200, tur: "gider", kategori: "yemek" },
  { aciklama: "Salon", tutar: 3500, tur: "gider", kategori: "etkinlik" },
  { aciklama: "Ödül", tutar: 5000, tur: "gelir", kategori: "ödül" },
  { aciklama: "Yol", tutar: 2400, tur: "gider", kategori: "etkinlik" },
];

describe("Mini proje · kulüp kasası", () => {
  it("toplamları ve bakiyeyi hesaplar", () => {
    const ozet = kasaOzeti(kayitlar);
    expect(ozet.toplamGelir).toBe(20000);
    expect(ozet.toplamGider).toBe(7100);
    expect(ozet.bakiye).toBe(12900);
  });
  it("en büyük gideri bulur", () => {
    expect(kasaOzeti(kayitlar).enBuyukGider?.aciklama).toBe("Salon");
  });
  it("kategori bazında giderleri toplar (gelirler dahil değil)", () => {
    expect(kasaOzeti(kayitlar).kategoriGiderleri).toEqual({ yemek: 1200, etkinlik: 5900 });
  });
  it("boş liste", () => {
    expect(kasaOzeti([])).toEqual({
      toplamGelir: 0,
      toplamGider: 0,
      bakiye: 0,
      enBuyukGider: undefined,
      kategoriGiderleri: {},
    });
  });
});
