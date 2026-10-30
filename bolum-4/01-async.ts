// ============================================================
// Bölüm 4 · Alıştırma 1 — Async
// Konu: Promise, async/await, fetch (Ders 18)
// ============================================================
//
// Blockchain'den veri okumak her zaman asenkrondur: isteği gönderirsin,
// cevap bir süre sonra gelir. Bu alıştırmalar o kalıbı oturtuyor.
//
// 📌 Testler gerçek internete bağlanmıyor. fetchFn parametresine sahte
//    bir fetch veriyorlar. Sen kodunda her zaman `fetchFn`'i kullan,
//    global `fetch`'i doğrudan çağırma. (Gerçek çalıştırmada fetchFn = fetch olur.)
//
// Kontrol etmek için:  pnpm test bolum-4

export const FIYAT_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

/**
 * `ms` milisaniye bekleyen bir Promise döndür.
 * 💡 new Promise((resolve) => setTimeout(resolve, ms))
 */
export function bekle(ms: number): Promise<void> {
  throw new Error("TODO: bekle fonksiyonunu yaz");
}

/**
 * CoinGecko'dan güncel ETH/USD fiyatını getir.
 *
 * - FIYAT_URL'e fetchFn ile istek at
 * - Cevap başarısızsa (res.ok false ise) şu hatayı fırlat:  new Error("Fiyat alınamadı")
 * - Cevabın JSON'u şöyle görünür:  { "ethereum": { "usd": 3456.78 } }
 * - Sadece sayıyı döndür:  3456.78
 */
export async function ethFiyatiGetir(fetchFn: typeof fetch = fetch): Promise<number> {
  throw new Error("TODO: ethFiyatiGetir fonksiyonunu yaz");
}

/**
 * Birden fazla adresin bakiyesini AYNI ANDA getir (sırayla değil!).
 * bakiyeGetir her adres için bir Promise döndüren bir fonksiyon.
 *
 * Sonuç, adreslerin verildiği sırayla:  [{ adres, bakiye }, ...]
 *
 * 💡 Promise.all
 */
export async function hepsiniGetir(
  adresler: string[],
  bakiyeGetir: (adres: string) => Promise<bigint>,
): Promise<{ adres: string; bakiye: bigint }[]> {
  throw new Error("TODO: hepsiniGetir fonksiyonunu yaz");
}
