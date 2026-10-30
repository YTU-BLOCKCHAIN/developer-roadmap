// ============================================================
// Bölüm 1 · MİNİ PROJE — Gas Raporu
// ============================================================
//
// Bu bölümdeki alıştırmaları birleştirip tek satırlık bir rapor üretiyoruz.
//
// Aşağıdaki import satırlarını biz yazdık: başka dosyalardaki
// fonksiyonları buraya getiriyorlar. Modülleri ileride öğreneceksin,
// şimdilik "diğer dosyadaki fonksiyonu burada kullanabiliyorum" demek yeterli.
import { gasUcretiEth, ethToTl } from "./02-gas-ucreti.js";
import { ucretSeviyesi } from "./03-ucret-seviyesi.js";

/**
 * Şu formatta bir rapor döndür:
 *
 *   "İşlem ücreti: 0.000420 ETH (≈ 42.00 TL) | Seviye: normal"
 *
 * Kurallar:
 *   - ETH miktarı virgülden sonra 6 basamak     → .toFixed(6)
 *   - TL miktarı virgülden sonra 2 basamak      → .toFixed(2)
 *   - Seviye ucretSeviyesi() fonksiyonundan gelir
 *
 * Örnek:
 *   gasRaporu(21000, 20, 100000)
 *   →  "İşlem ücreti: 0.000420 ETH (≈ 42.00 TL) | Seviye: normal"
 */
export function gasRaporu(gasKullanimi, gasFiyatiGwei, ethFiyatiTl) {
  throw new Error("TODO: gasRaporu fonksiyonunu yaz");
}

// ------------------------------------------------------------
// Çalıştırmak için:  pnpm b1
// Aşağıdaki değerlerle oynayıp farklı sonuçları dene.
// Güncel gas fiyatı: https://etherscan.io/gastracker
// ------------------------------------------------------------
if (process.argv[1]?.endsWith("proje-gas-raporu.js")) {
  console.log(gasRaporu(21000, 12, 120000)); // basit ETH transferi
  console.log(gasRaporu(65000, 12, 120000)); // token transferi
  console.log(gasRaporu(150000, 45, 120000)); // yoğun saatte bir swap
}
