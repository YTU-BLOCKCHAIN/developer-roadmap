// ============================================================
// Step 2 TESLİMİ — Cüzdan Kontrol
// ============================================================
//
// Komut satırından bir Sepolia adresi alıp bilgilerini yazdıran program.
//
// Çalıştırmak için:
//   pnpm cuzdan 0xKENDI_ADRESIN
//
// Beklenen çıktı (değerler sende farklı olacak):
//
//   🔎 Cüzdan Kontrol — Sepolia
//   Adres        : 0x1234...abcd
//   Güncel blok  : 9512345
//   ETH bakiyesi : 0.4821 ETH
//   İşlem sayısı : 7
//   LINK bakiyesi: 25 LINK
//
// Gereksinimler:
//   1. Adres verilmezse veya geçersizse anlamlı bir hata mesajı yazdır ve çık.
//      💡 viem'in isAddress() fonksiyonu ·  process.exit(1)
//   2. Güncel blok numarası            → client.getBlockNumber()
//   3. ETH bakiyesi (okunur formatta)  → client.getBalance() + bakiyeMetni()
//   4. İşlem sayısı (nonce)            → client.getTransactionCount()
//   5. LINK bakiyesi ve sembolü        → client.readContract() (balanceOf, symbol, decimals)
//                                         + tokenBakiyesiMetni()
//
// Bonuslar (opsiyonel):
//   ⭐ ETH bakiyesinin USD karşılığını da yaz      → ethFiyatiGetir()
//   ⭐ Birden fazla adres alıp hepsini AYNI ANDA sorgula  → hepsiniGetir()
//   ⭐ Bilgileri paralel çek (Promise.all) ve süreyi ölç
//
// Hiç test yok: bunu çalıştırıp çıktının ekran görüntüsünü PR'a ekleyeceksin,
// review'da da kodunu satır satır açıklayabilmen gerekecek.

import { isAddress } from "viem";
import { istemciOlustur, bakiyeMetni, tokenBakiyesiMetni, ERC20_ABI, LINK_ADRESI } from "./02-viem.ts";
import { ethFiyatiGetir, hepsiniGetir } from "./01-async.ts";

async function main() {
  const adres = process.argv[2];

  // TODO: 1. adresi kontrol et

  // TODO: 2–5. bilgileri çek ve yazdır
}

main().catch((hata) => {
  console.error("❌ Bir şeyler ters gitti:", hata instanceof Error ? hata.message : hata);
  process.exit(1);
});

// (Kullanmaya başlayınca bu satırları silebilirsin.)
void isAddress;
void istemciOlustur;
void bakiyeMetni;
void tokenBakiyesiMetni;
void ERC20_ABI;
void LINK_ADRESI;
void ethFiyatiGetir;
void hepsiniGetir;
