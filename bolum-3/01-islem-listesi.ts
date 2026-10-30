// ============================================================
// Bölüm 3 · Alıştırma 1 — İşlem listesi
// Konu: diziler, döngüler, map/filter/reduce (Ders 11–12)
// ============================================================
//
// Bir cüzdanın işlem geçmişi aslında bir İşlem dizisidir.
// Bu fonksiyonlar Etherscan'in "Transactions" sekmesinin yaptığı şeyin küçük bir versiyonu.
//
// Her fonksiyonu önce for döngüsüyle, sonra map/filter/reduce ile yazmayı dene.
// İkisi de testi geçer, ama ikincisi daha kısa ve okunaklı.
//
// Kontrol etmek için:  pnpm test bolum-3

import type { Islem } from "../bolum-2/01-islem.ts";

/** Sadece durumu "basarili" olan işlemleri döndür. */
export function basarililar(islemler: Islem[]): Islem[] {
  throw new Error("TODO: basarililar fonksiyonunu yaz");
}

/** Başarılı işlemlerin degerEth toplamını döndür. Liste boşsa 0. */
export function basariliToplam(islemler: Islem[]): number {
  throw new Error("TODO: basariliToplam fonksiyonunu yaz");
}

/**
 * Verilen adresin gönderen VEYA alıcı olduğu işlemleri döndür.
 * ⚠️ Adresler büyük/küçük harf duyarsız karşılaştırılmalı:
 *    "0xABC..." ile "0xabc..." aynı adrestir. 💡 .toLowerCase()
 */
export function adresinIslemleri(islemler: Islem[], adres: string): Islem[] {
  throw new Error("TODO: adresinIslemleri fonksiyonunu yaz");
}

/** degerEth'i en büyük işlemi döndür. Liste boşsa undefined. */
export function enBuyukIslem(islemler: Islem[]): Islem | undefined {
  throw new Error("TODO: enBuyukIslem fonksiyonunu yaz");
}

/**
 * Listede geçen bütün adresleri (gönderen ve alıcı), her birini BİR KEZ olacak şekilde,
 * ilk göründükleri sırayla döndür.
 * 💡 İpucu: Set
 */
export function benzersizAdresler(islemler: Islem[]): string[] {
  throw new Error("TODO: benzersizAdresler fonksiyonunu yaz");
}
