// ============================================================
// Bölüm 1 · Alıştırma 2 — Gas ücreti
// Konu: sayılar ve matematik (Ders 2: Numbers and Math)
// ============================================================
//
// Ethereum'da bir işlemin ücreti şöyle hesaplanır:
//
//   ücret (gwei) = gas kullanımı × gas fiyatı (gwei)
//   1 ETH = 1.000.000.000 gwei   (10^9)
//
// Örnek: Basit bir ETH transferi 21.000 gas harcar.
// Gas fiyatı 20 gwei ise: 21.000 × 20 = 420.000 gwei = 0.00042 ETH
//
// Kontrol etmek için:  pnpm test bolum-1

/**
 * Bir işlemin ücretini ETH cinsinden döndür.
 *
 * Örnek:
 *   gasUcretiEth(21000, 20)  →  0.00042
 */
export function gasUcretiEth(gasKullanimi, gasFiyatiGwei) {
  throw new Error("TODO: gasUcretiEth fonksiyonunu yaz");
}

/**
 * ETH miktarını Türk lirasına çevir.
 *
 * Örnek:
 *   ethToTl(0.5, 100000)  →  50000
 */
export function ethToTl(eth, ethFiyatiTl) {
  throw new Error("TODO: ethToTl fonksiyonunu yaz");
}
