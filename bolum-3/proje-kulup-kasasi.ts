// ============================================================
// Bölüm 3 · MİNİ PROJE — Kulüp Kasası
// ============================================================
//
// Kulübün gelir/gider kayıtlarından bir özet çıkaran program.
//
// Kontrol etmek için:  pnpm test bolum-3
// Çalıştırmak için:    pnpm b3

export type KasaKaydi = {
  aciklama: string;
  tutar: number; // her zaman pozitif, gelir mi gider mi `tur` söyler
  tur: "gelir" | "gider";
  kategori: string;
};

export type KasaOzeti = {
  toplamGelir: number;
  toplamGider: number;
  bakiye: number; // toplamGelir - toplamGider
  enBuyukGider: KasaKaydi | undefined; // gider yoksa undefined
  kategoriGiderleri: Record<string, number>; // her kategori için GİDERLERİN toplamı
};

/**
 * Kayıtlardan özet çıkar.
 *
 * Örnek kategoriGiderleri:  { "etkinlik": 3500, "yemek": 1200 }
 * (Gelir kayıtları kategoriGiderleri'ne girmez.)
 */
export function kasaOzeti(kayitlar: KasaKaydi[]): KasaOzeti {
  throw new Error("TODO: kasaOzeti fonksiyonunu yaz");
}

if (process.argv[1]?.endsWith("proje-kulup-kasasi.ts")) {
  const kayitlar: KasaKaydi[] = [
    { aciklama: "Sponsor desteği", tutar: 15000, tur: "gelir", kategori: "sponsorluk" },
    { aciklama: "Workshop ikramı", tutar: 1200, tur: "gider", kategori: "yemek" },
    { aciklama: "Salon kirası", tutar: 3500, tur: "gider", kategori: "etkinlik" },
    { aciklama: "Sticker baskısı", tutar: 800, tur: "gider", kategori: "tanıtım" },
    { aciklama: "Hackathon ödülü", tutar: 5000, tur: "gelir", kategori: "ödül" },
    { aciklama: "Hackathon yol masrafı", tutar: 2400, tur: "gider", kategori: "etkinlik" },
  ];
  console.log(kasaOzeti(kayitlar));
}
