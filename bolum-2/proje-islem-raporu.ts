// ============================================================
// Bölüm 2 · MİNİ PROJE — İşlem Raporu
// ============================================================
//
// 1. bölümün gas raporunu, bu bölümün İşlem tipiyle birleştiriyoruz.
//
// Kontrol etmek için:  pnpm test bolum-2
// Çalıştırmak için:    pnpm b2

import { type Islem, islemOlustur, islemiTamamla, islemOzeti } from "./01-islem.ts";

/**
 * İşlem özetinin sonuna ücreti ekle. Ücret = gasKullanimi × gasFiyatiGwei / 10^9 ETH,
 * virgülden sonra 6 basamak.
 *
 * Örnek:
 *   "0x1111...1111 → 0x2222...2222 | 1.5 ETH | basarili | Ücret: 0.000420 ETH"
 */
export function islemRaporu(islem: Islem, gasKullanimi: number, gasFiyatiGwei: number): string {
  throw new Error("TODO: islemRaporu fonksiyonunu yaz");
}

if (process.argv[1]?.endsWith("proje-islem-raporu.ts")) {
  const islem = islemOlustur(
    "0xabc123",
    "0x1111111111111111111111111111111111111111",
    "0x2222222222222222222222222222222222222222",
    0.25,
  );
  console.log(islemRaporu(islem, 21000, 12));
  console.log(islemRaporu(islemiTamamla(islem, true), 21000, 12));
  console.log(islemOzeti(islemiTamamla(islem, false)));
}
