// ============================================================
// Bölüm 2 · Alıştırma 1 — İşlem objesi
// Konu: fonksiyonlar, objeler (Ders 7–8) ve TypeScript tipleri
// ============================================================
//
// Artık TypeScript yazıyoruz. Aşağıdaki tipler bir blockchain
// işleminin nasıl göründüğünü tarif ediyor. Önce onları oku.
//
// Kontrol etmek için:  pnpm test bolum-2

import { kisaAdres } from "./yardimci.ts";

// Union + literal tip: durum sadece bu üç değerden biri olabilir.
export type IslemDurumu = "beklemede" | "basarili" | "basarisiz";

export type Islem = {
  hash: string;
  gonderen: string;
  alici: string;
  degerEth: number;
  durum: IslemDurumu;
};

/**
 * Yeni bir işlem objesi oluştur. Yeni işlemlerin durumu her zaman "beklemede"dir.
 *
 * Örnek:
 *   islemOlustur("0xabc", "0x111...", "0x222...", 1.5)
 *   →  { hash: "0xabc", gonderen: "0x111...", alici: "0x222...", degerEth: 1.5, durum: "beklemede" }
 */
export function islemOlustur(
  hash: string,
  gonderen: string,
  alici: string,
  degerEth: number,
): Islem {
  throw new Error("TODO: islemOlustur fonksiyonunu yaz");
}

/**
 * İşlemi tamamla: başarılıysa durum "basarili", değilse "basarisiz" olsun.
 *
 * ⚠️ Gelen objeyi DEĞİŞTİRME, yeni bir obje döndür.
 * 💡 İpucu: spread operatörü →  { ...islem, durum: ... }
 */
export function islemiTamamla(islem: Islem, basarili: boolean): Islem {
  throw new Error("TODO: islemiTamamla fonksiyonunu yaz");
}

/**
 * İşlemin tek satırlık özetini döndür. Adresler kisaAdres() ile kısaltılır.
 *
 * Örnek:
 *   "0x1111...1111 → 0x2222...2222 | 1.5 ETH | basarili"
 */
export function islemOzeti(islem: Islem): string {
  throw new Error("TODO: islemOzeti fonksiyonunu yaz");
}
