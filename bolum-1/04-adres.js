// ============================================================
// Bölüm 1 · Alıştırma 4 — Cüzdan adresi
// Konu: string metotları (Ders 3: Strings)
// ============================================================
//
// Bir Ethereum adresi "0x" ile başlar ve toplam 42 karakterdir.
// Örnek: 0x779877A7B0D9E8603169DdbD7836e478b4624789
//
// 💡 İhtiyacın olabilecekler: .startsWith(), .length, .slice()
//
// Kontrol etmek için:  pnpm test bolum-1

/**
 * Adres "0x" ile başlıyor VE 42 karakterse true, değilse false döndür.
 *
 * Örnekler:
 *   adresGecerliMi("0x779877A7B0D9E8603169DdbD7836e478b4624789")  →  true
 *   adresGecerliMi("779877A7B0D9E8603169DdbD7836e478b4624789")    →  false
 *   adresGecerliMi("0x1234")                                       →  false
 */
export function adresGecerliMi(adres) {
  throw new Error("TODO: adresGecerliMi fonksiyonunu yaz");
}

/**
 * Uzun adresi ekranda göstermek için kısalt:
 * ilk 6 karakter + "..." + son 4 karakter
 *
 * Örnek:
 *   kisaAdres("0x779877A7B0D9E8603169DdbD7836e478b4624789")  →  "0x7798...4789"
 */
export function kisaAdres(adres) {
  throw new Error("TODO: kisaAdres fonksiyonunu yaz");
}
