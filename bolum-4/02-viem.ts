// ============================================================
// Bölüm 4 · Alıştırma 2 — viem
// Konu: blockchain'e bağlanmak (viem videosu, 0:00–26:05 ve 59:10–1:12:02)
// ============================================================
//
// viem dokümantasyonu: https://viem.sh
//
// Kontrol etmek için:  pnpm test bolum-4

import { createPublicClient, http, formatEther, formatUnits, parseAbi } from "viem";
import { sepolia } from "viem/chains";
import type { PublicClient } from "viem";

// Sepolia'daki test LINK token'ı. Chainlink faucet'ten ücretsiz alabilirsin:
// https://faucets.chain.link/sepolia
export const LINK_ADRESI = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

// ABI: kontratın hangi fonksiyonları olduğunu viem'e anlatan tarif.
// Biz sadece okuyacağımız fonksiyonları yazıyoruz.
export const ERC20_ABI = parseAbi([
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address owner) view returns (uint256)",
]);

/**
 * Sepolia ağına bağlanan bir public client oluştur ve döndür.
 * 💡 createPublicClient({ chain: ..., transport: http() })
 */
export function istemciOlustur(): PublicClient {
  throw new Error("TODO: istemciOlustur fonksiyonunu yaz");
}

/**
 * Wei cinsinden bakiyeyi okunur metne çevir. viem'in formatEther'ini kullan.
 *
 * Örnek:  bakiyeMetni(1500000000000000000n)  →  "1.5 ETH"
 */
export function bakiyeMetni(wei: bigint): string {
  throw new Error("TODO: bakiyeMetni fonksiyonunu yaz");
}

/**
 * Token bakiyesini okunur metne çevir. viem'in formatUnits'ini kullan.
 * Her token'ın decimals değeri farklı olabilir (ETH 18, USDC 6).
 *
 * Örnekler:
 *   tokenBakiyesiMetni(25000000000000000000n, 18, "LINK")  →  "25 LINK"
 *   tokenBakiyesiMetni(1500000n, 6, "USDC")                →  "1.5 USDC"
 */
export function tokenBakiyesiMetni(ham: bigint, decimals: number, sembol: string): string {
  throw new Error("TODO: tokenBakiyesiMetni fonksiyonunu yaz");
}

// (Bu import'lar şu an kullanılmıyor gibi görünebilir; fonksiyonları yazınca kullanacaksın.)
void createPublicClient;
void http;
void formatEther;
void formatUnits;
void sepolia;
