// ============================================================
// Bölüm 2 · Alıştırma 3 — Tip hatalarını düzelt
// Konu: TypeScript'in hataları kod çalışmadan önce yakalaması
// ============================================================
//
// Bu dosyada 4 tip hatası var. VS Code onları kırmızı dalgalı çizgiyle
// gösteriyor olmalı. Fareyi üstüne getir ve hata mesajını OKU.
//
// Hepsini düzelt. Kontrol etmek için:  pnpm tip-kontrol
// Çıktı boşsa (hiç hata yazmıyorsa) tamamdır.
//
// Kural: Tipleri (`type Uye`, fonksiyon imzaları) DEĞİŞTİRME.
//        Hatalı olan değerleri ve kullanımları düzelt.

type Uye = {
  ad: string;
  adres: string;
  bakiyeEth: number;
};

// Hata 1
export const ali: Uye = {
  ad: "Ali",
  adres: "0x1111111111111111111111111111111111111111",
  bakiyeEth: "2.5",
};

export function toplamBakiye(a: Uye, b: Uye): number {
  return a.bakiyeEth + b.bakiyeEth;
}

// Hata 2
export const toplam: string = toplamBakiye(ali, ali);

// Hata 3
export const durum: "basarili" | "basarisiz" = "basarli";

// Hata 4
export function selam(uye: Uye): string {
  return "Merhaba " + uye.isim;
}
