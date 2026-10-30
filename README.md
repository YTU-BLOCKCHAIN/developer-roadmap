# Step 2 — Programlama ve Blockchain Temelleri

YTÜ Blockchain Developer Roadmap'in Step 2 alıştırmaları. Anlatım, videolar ve açıklamalar Notion'da:
**Teamspace Home → Developer Roadmap → Step 2**.

Bu branch'te 4 bölüm var. Her bölümde alıştırma dosyaları, bir mini proje ve onları kontrol eden testler bulunuyor.

```
bolum-1/   JavaScript'e giriş          → mini proje: Gas Raporu
bolum-2/   Fonksiyonlar, objeler, TS   → mini proje: İşlem Raporu
bolum-3/   Diziler ve döngüler         → mini proje: Kulüp Kasası
bolum-4/   Async ve viem               → TESLİM: Cüzdan Kontrol
```

---

## Başlarken (bir kere yapılır)

Step 1'deki `developer-roadmap` fork'unun içinde:

```bash
cd ~/dev/developer-roadmap
git remote add upstream git@github.com:YTU-BLOCKCHAIN/developer-roadmap.git
git fetch upstream
git switch -c step-2 upstream/step-2
git push -u origin step-2
pnpm install
pnpm test
```

Son komutta her şeyin **kırmızı** olması normal: henüz hiçbir alıştırmayı yapmadın. 🙂

Sonra GitHub'da kendi fork'unun sayfasına git ve bir **Draft Pull Request** aç:

- **base:** `YTU-BLOCKCHAIN/developer-roadmap` → `step-2`
- **compare:** `KULLANICIADIN/developer-roadmap` → `step-2`
- **Başlık:** `Step 2 — kullaniciadin`
- **Create pull request** butonunun yanındaki oka basıp **Create draft pull request** seç.

Bu PR **hiçbir zaman merge edilmeyecek.** İlerlemeni gösteren panon. Her push'unda otomatik güncellenir ve testler GitHub'da da çalışır.

---

## Çalışma döngüsü

```bash
pnpm izle bolum-1      # testleri izleme modunda çalıştırır: dosyayı kaydettikçe sonuç güncellenir
```

1. Alıştırma dosyasını aç, açıklamayı oku.
2. `throw new Error("TODO...")` satırını sil, kodunu yaz.
3. Kaydet, terminalde testin yeşile dönmesini izle.
4. Bir şeyi bitirdiğinde commit'le ve push'la:

```bash
git add .
git commit -m "feat: bölüm 1 alıştırma 2 tamamlandı"
git push
```

Push'ladığın an Draft PR'ında testler çalışır ve hangi bölümlerin geçtiğini ✅ / ❌ olarak görürsün.

### Faydalı komutlar

| Komut | Ne yapar |
|---|---|
| `pnpm test` | Bütün testleri bir kere çalıştırır |
| `pnpm test bolum-2` | Sadece bir bölümün testleri |
| `pnpm izle bolum-2` | Kaydettikçe testleri tekrar çalıştırır |
| `pnpm tip-kontrol` | TypeScript tip hatalarını kontrol eder |
| `pnpm b1` / `b2` / `b3` | Mini projeleri çalıştırır |
| `pnpm cuzdan 0x...` | Teslim projesi |

---

## Kurallar

- **`testler/` klasörlerine dokunma.** Testi değiştirerek geçirmek mümkün, ama PR'ındaki "Files changed" sekmesinde görünür. 🙂
- **Upstream'deki `step-2` branch'ine kod göndermeye çalışma.** Senin çözümlerin senin fork'unda yaşar; Draft PR sadece ilerlemeyi göstermek için.
- **AI'ı öğretmen olarak kullan, ödevini yaptırma.** "Bu testi geçir" yerine "Bu hata ne demek?", "İpucu ver ama çözümü verme" diye sor.
- **Takıldığında:** Notion'daki *2.5 Sorun Giderme* sayfasına bak, sonra developer grubuna sor.

---

## Upstream güncellenirse

Bir alıştırma düzeltilir veya yenisi eklenirse duyurulur. Kendi branch'ine almak için:

```bash
git switch step-2
git pull upstream step-2
```
