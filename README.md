# Website Portfolio — Mifta Fauzia Rahma, S.Kom. (2026)

Website portofolio interaktif, modern, responsif, dan siap kerja (*job-ready*) untuk **Mifta Fauzia Rahma**, Fresh Graduate S-1 Informatika Universitas Islam Indonesia (IPK 3.96 / 4.00) dan Alumna Apple Developer Academy Foundation Program (Batch 4).

Dibuat dengan arsitektur **HTML5 Semantic, Modern CSS System, dan Vanilla JavaScript (Zero-Dependency)** sehingga sangat ringan, memiliki waktu muat di bawah 500ms, dan **bisa di-hosting secara 100% GRATIS oleh siapa saja** di berbagai platform (GitHub Pages, Google Apps Script, Vercel, Netlify, atau Cloudflare Pages).

---

## 🌟 Fitur Utama Website

1. **Desain Kelas Dunia (2026 Ready)**:
   - Bento-Grid layout yang bersih, modern, dan profesional.
   - Dark Mode & Light Mode dengan transisi halus dan penyimpanan preferensi (*localStorage*).
   - Indikator status rekrutmen: `🟢 Open to Work · Fresh Graduate 2026`.
2. **5 Showcase Proyek Unggulan (Lengkap dengan Metrik & SDG)**:
   - **InStockCook** (2025) — iOS Cooking Assistant App (Apple Developer Academy Batch 4, Apple HIG, SwiftUI).
   - **YoloVision** (2024) — Assistive AI Scanner (Juara 4 LEVITASI FTI UII, YOLOv11, OCR, Bone-conduction Audio UX).
   - **Insight Grader** (2023) — AI-Assisted Grading Platform (Juara 3 ITCentrum Hackathon, Human-in-the-Loop AI).
   - **DiabetSavior** (2023) — Healthcare & Insulin Tracking (Google Solution Challenge 2023, Figma Design System, Flutter).
   - **Informatics Expo** (2023–2025) — Multi-Venue Tech Exhibition (3x Lead PIC Sleman City Hall & Pakuwon Mall, 800+ pengunjung, Agile Scrum).
3. **Modal Studi Kasus Interaktif (Deep Dive Case Study)**:
   - Analisis lengkap: Masalah pengguna (*Problem*), Solusi (*Solution*), Tantangan teknis & resolusi UX, galeri mockup/tampilan, tautan interaktif ke GitHub, Figma Prototype, Demo Video YouTube, dan Slide Deck.
4. **Slide Deck Presentation Viewer**:
   - Pengunjung dan perekrut bisa langsung melihat 5 slide portofolio asli resolusi tinggi langsung di browser tanpa perlu mengunduh file, dilengkapi tombol fullscreen lightbox.
5. **Jalur Kontak Rekrutmen Terpadu**:
   - Tombol 1-klik WhatsApp langsung ke `+62 812-3058-9309` dengan template pesan ramah.
   - Tombol 1-klik salin email (`miftafauziia@gmail.com`).
   - Tautan langsung profil LinkedIn (`linkedin.com/in/miftafauzia`).
   - Tombol unduh portofolio asli versi PDF.
   - Formulir pesan cepat (*Quick Message Form*).

---

## 📂 Struktur File & Folder

```text
mifta-portfolio/
├── index.html                   # Halaman utama portofolio
├── styles.css                   # Sistem desain, warna, dark/light theme, animasi
├── script.js                    # Logika interaktif: modal, filter proyek, slide viewer, clipboard
├── .nojekyll                    # Konfigurasi agar GitHub Pages memproses semua aset
├── .github/
│   └── workflows/
│       └── deploy.yml           # Otomatisasi deployment ke GitHub Pages via GitHub Actions
├── apps-script/                 # File khusus jika ingin deploy ke Google Apps Script
│   ├── Code.gs                  # Backend handler Web App Google Apps Script
│   └── Index.html               # File mandiri (HTML + CSS + JS) siap pakai di Google Apps Script
├── assets/
│   ├── Mifta_Fauzia_Rahma_Portfolio_2026.pdf # File PDF portofolio asli
│   └── img/                     # Gambar webp & mockup teroptimasi
└── README.md                    # Dokumentasi & panduan deployment
```

---

## 🚀 Cara Melihat Portofolio di Komputer Lokal

Anda bisa langsung membuka file `index.html` di browser Anda:

### Opsi 1: Klik Ganda File
Cukup buka folder `/Users/rafliaf/mifta-portfolio` di Finder, lalu klik ganda file **`index.html`**.

### Opsi 2: Jalankan Local Server (Terminal)
```bash
cd /Users/rafliaf/mifta-portfolio
python3 -m http.server 8080
```
Buka browser dan akses: `http://localhost:8080`

---

## 🌐 Cara Publikasi / Hosting Gratis untuk Semua Orang

Pilih salah satu cara berikut sesuai preferensi Anda:

---

### OPSI 1: Deploy Gratis ke GitHub Pages (SANGAT DIREKOMENDASIKAN ⭐)

GitHub Pages adalah standar industri untuk website portofolio developer & desainer. Gratis selamanya, URL rapi (`https://<username>.github.io/<repo>`), dan memiliki CDN cepat di seluruh dunia.

#### Langkah-langkah:
1. Buka [GitHub.com](https://github.com) dan buat repository baru (misal diberi nama `portfolio` atau `mifta-portfolio`).
   - Pilih visibilitas: **Public**.
2. Di Terminal Mac Anda, jalankan perintah ini (ganti `<username>` dan `<repo-name>` dengan milik Anda):
   ```bash
   cd /Users/rafliaf/mifta-portfolio
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Buka halaman repository di GitHub:
   - Klik tab **Settings** > menu sebelah kiri pilih **Pages**.
   - Pada bagian **Build and deployment**:
     - *Source*: Pilih **Deploy from a branch**.
     - *Branch*: Pilih **main** dan folder **/(root)**.
     - Klik **Save**.
4. Selesai! Dalam 1-2 menit, website Anda sudah aktif dan bisa diakses gratis di:
   `https://<username>.github.io/<repo-name>/`

---

### OPSI 2: Deploy Gratis ke Google Apps Script

Jika Anda ingin website berjalan di ekosistem Google tanpa perlu membuat akun GitHub:

#### Langkah-langkah:
1. Buka [script.google.com](https://script.google.com) lalu klik tombol **+ New Project** (atau **Project Baru**).
2. Ubah judul project di kiri atas menjadi **Portofolio Mifta Fauzia**.
3. Pada file bawaan `Code.gs`:
   - Hapus kode default, lalu salin dan tempel isi dari file [apps-script/Code.gs](file:///Users/rafliaf/mifta-portfolio/apps-script/Code.gs).
4. Buat file HTML baru:
   - Klik ikon **+** di samping menu *Files* > pilih **HTML**.
   - Beri nama persis: `Index` (akan menjadi `Index.html`).
   - Buka file [apps-script/Index.html](file:///Users/rafliaf/mifta-portfolio/apps-script/Index.html), salin seluruh isinya (Ctrl+A / Cmd+A, Cmd+C), lalu tempel ke file `Index.html` di Google Apps Script.
5. Klik tombol **Deploy** di kanan atas > pilih **New deployment** (*Penerapan baru*).
6. Klik ikon gerigi (Select type) > pilih **Web app** (*Aplikasi web*).
7. Konfigurasi:
   - **Description**: Portofolio Mifta Fauzia Rahma
   - **Execute as**: *Me (email anda)*
   - **Who has access**: **Anyone** (*Siapa saja*) -> **PENTING** agar bisa diakses umum tanpa harus login akun Google.
8. Klik **Deploy**.
9. Anda akan mendapatkan URL Web App berformat:
   `https://script.google.com/macros/s/.../exec`
10. Selesai! Bagikan URL tersebut ke rekruter atau siapapun.

---

### OPSI 3: Deploy Gratis ke Netlify atau Vercel (1 Menit Drag & Drop)

Jika menggunakan Netlify:
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
2. Seret (*drag and drop*) folder `/Users/rafliaf/mifta-portfolio` langsung ke jendela browser.
3. Website langsung aktif dalam 5 detik dengan alamat URL gratis `https://xxxx.netlify.app`.

---

## 🎨 Informasi Kontak yang Tertera pada Website

- **Nama**: Mifta Fauzia Rahma, S.Kom.
- **WhatsApp**: [+62 812-3058-9309](https://wa.me/6281230589309)
- **Email**: [miftafauziia@gmail.com](mailto:miftafauziia@gmail.com)
- **LinkedIn**: [linkedin.com/in/miftafauzia](https://linkedin.com/in/miftafauzia)
- **Almamater**: Universitas Islam Indonesia (Informatika S-1, IPK 3.96)
- **Akademi**: Apple Developer Academy Foundation Program (Batch 4 @ Universitas Ciputra Surabaya)
