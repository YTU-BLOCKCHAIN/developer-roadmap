# YTÜ Blockchain — Developer Roadmap

YTÜ Blockchain Kulübü'nün yeni developer üyeleri için pratik ve teslim reposu.

Roadmap'in kendisi kulübün Notion'unda (**Teamspace Home → Developer Roadmap**). Bu repo, roadmap'teki teslimlerin Pull Request (PR) ile yapıldığı yer.

---

## Nasıl çalışır?

Her step'in sonunda bir teslim var. Teslimini bu repoya PR olarak gönderirsin, bir mentör inceler, onaylanınca bir sonraki step'e geçersin.

```
Step'i çalış → Teslimi hazırla → PR gönder → Mentör review → Onay → Sonraki step
```

`main` branch'i korumalıdır. Kimse doğrudan push edemez, her değişiklik PR ve review ile gelir.

---

## Step 1 teslimi: adım adım

> Ön koşul: Notion'daki Step 1'in 1.1–1.6 bölümlerini bitirmiş ve 1.7'deki Görev 1 ile Görev 2'yi yapmış olmalısın (`hello-ytu` ve `hello-foundry` repoların GitHub'da hazır).

### 1. Bu repoyu fork'la

Sağ üstteki **Fork** butonuna bas. Hesabında bu reponun bir kopyası oluşur.

### 2. Kendi fork'unu bilgisayarına indir

```bash
cd ~/dev
git clone git@github.com:KULLANICIADIN/developer-roadmap.git
cd developer-roadmap
```

### 3. Yeni bir branch aç

```bash
git switch -c add/KULLANICIADIN
```

### 4. Üye dosyanı oluştur

Şablonu kopyala ve kendi GitHub kullanıcı adınla adlandır:

```bash
cp members/_TEMPLATE.md members/KULLANICIADIN.md
code members/KULLANICIADIN.md
```

Dosyayı doldur ve kaydet.

> Dosya adı GitHub kullanıcı adınla **birebir aynı** olmalı ve küçük harf kullanılmalı. Örnek: `members/mehmetyilmaz.md`

### 5. Commit'le ve gönder

```bash
git add members/KULLANICIADIN.md
git commit -m "docs: KULLANICIADIN üye dosyası eklendi"
git push -u origin add/KULLANICIADIN
```

### 6. PR aç

GitHub'da fork'unun sayfasına git, çıkan **Compare & pull request** butonuna bas.

- Hedefin `YTU-BLOCKCHAIN/developer-roadmap` reposunun `main` branch'i olduğunu kontrol et.
- Açılan şablondaki kontrol listesini doldur.
- Kurulum kontrolü ekran görüntünü açıklamaya sürükle-bırak.

### 7. Review'ı bekle

Mentör yorum bırakırsa düzeltmeyi **aynı branch'te** yap ve tekrar push'la:

```bash
git add .
git commit -m "fix: review düzeltmeleri"
git push
```

PR otomatik güncellenir, yeni PR açmana gerek yok.

---

## Kurallar

- **Sadece kendi dosyana dokun.** Başkasının dosyasını veya README'yi değiştiren PR kabul edilmez.
- **Private key, seed phrase, `.env` asla bu repoya veya başka bir repoya girmez.**
- **Commit mesajları anlamlı olsun.** `feat:`, `fix:`, `docs:`, `chore:` ön eklerini kullan.
- **Takıldığında** önce Notion'daki *1.6 Sorun Giderme* sayfasına bak, çözülmediyse developer grubuna sor.

---

## Repo yapısı

```
developer-roadmap/
├── README.md                          # Bu dosya
├── members/
│   ├── _TEMPLATE.md                   # Üye dosyası şablonu
│   └── <kullaniciadi>.md              # Her üyenin kendi dosyası
└── .github/
    └── pull_request_template.md       # PR açılınca gelen kontrol listesi
```
