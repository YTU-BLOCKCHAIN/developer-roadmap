// ============================================================
// Bölüm 2 · Alıştırma 2 — bigint
// Konu: blockchain'de büyük sayılar (Notion'daki "bigint" bölümünü oku)
// ============================================================
//
// Blockchain'de miktarlar ETH olarak değil, en küçük birim olan WEI olarak tutulur:
//
//   1 ETH  = 1.000.000.000.000.000.000 wei   (10^18)
//   1 gwei = 1.000.000.000 wei               (10^9)
//
// JavaScript'in normal `number` tipi bu kadar büyük sayıları hassas tutamaz.
// Bu yüzden `bigint` kullanıyoruz. bigint sayıların sonunda `n` olur:
//
//   const birEth = 1_000_000_000_000_000_000n;
//   const onUzeriOnSekiz = 10n ** 18n;            // aynı şey
//
// ⚠️ bigint ile number'ı karıştıramazsın:  10n * 2  → HATA,  10n * 2n → 20n
// ⚠️ bigint bölmede küsuratı atar:         7n / 2n → 3n
//
// Kontrol etmek için:  pnpm test bolum-2

/** ETH → wei.   Örnek: ethToWei(2n) → 2000000000000000000n */
export function ethToWei(eth: bigint): bigint {
  throw new Error("TODO: ethToWei fonksiyonunu yaz");
}

/** gwei → wei.  Örnek: gweiToWei(20n) → 20000000000n */
export function gweiToWei(gwei: bigint): bigint {
  throw new Error("TODO: gweiToWei fonksiyonunu yaz");
}

/** wei → gwei (küsurat atılır).  Örnek: weiToGwei(25000000000n) → 25n */
export function weiToGwei(wei: bigint): bigint {
  throw new Error("TODO: weiToGwei fonksiyonunu yaz");
}

/**
 * Bir işlemin ücretini wei olarak hesapla:  gas kullanımı × gas fiyatı (gwei → wei)
 *
 * Örnek: islemUcretiWei(21000n, 20n) → 420000000000000n
 */
export function islemUcretiWei(gasKullanimi: bigint, gasFiyatiGwei: bigint): bigint {
  throw new Error("TODO: islemUcretiWei fonksiyonunu yaz");
}

/**
 * ⭐ ZOR (opsiyonel ama dene): wei'yi okunur ETH metnine çevir.
 *
 * Örnekler:
 *   weiToEthMetni(1500000000000000000n)  →  "1.5"
 *   weiToEthMetni(2000000000000000000n)  →  "2"
 *   weiToEthMetni(420000000000000n)      →  "0.00042"
 *   weiToEthMetni(0n)                    →  "0"
 *
 * 💡 İpuçları:
 *   - tam kısım  = wei / 10n ** 18n
 *   - küsurat    = wei % 10n ** 18n
 *   - küsuratı 18 haneye tamamla: .toString().padStart(18, "0")
 *   - sondaki sıfırları at: .replace(/0+$/, "")
 *
 * (4. bölümde viem'in formatEther fonksiyonu bunu senin için yapacak.
 *  Ama bir kere elle yazmak, ne yaptığını anlamanı sağlar.)
 */
export function weiToEthMetni(wei: bigint): string {
  throw new Error("TODO: weiToEthMetni fonksiyonunu yaz");
}
