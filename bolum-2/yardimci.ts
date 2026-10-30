// Bu dosyayı biz yazdık, değiştirmene gerek yok.
// 1. bölümde yazdığın kisaAdres fonksiyonunun TypeScript hali.

export function kisaAdres(adres: string): string {
  return `${adres.slice(0, 6)}...${adres.slice(-4)}`;
}
