/**
 * Google Apps Script Web App for Mifta Fauzia Rahma Portfolio
 *
 * Cara Deploy:
 * 1. Buka https://script.google.com lalu klik 'New Project'
 * 2. Ganti nama project menjadi 'Mifta Fauzia Portfolio'
 * 3. Ganti isi file Code.gs dengan kode ini
 * 4. Buat file HTML baru (klik tanda + > HTML) dengan nama 'Index' (Index.html)
 * 5. Copy seluruh isi dari file Index.html di folder ini ke file Index di Google Apps Script
 * 6. Klik tombol 'Deploy' di kanan atas > 'New deployment'
 * 7. Pilih tipe 'Web app' (ikon gerigi > Web app)
 * 8. Konfigurasi:
 *    - Description: Portfolio Web App
 *    - Execute as: Me (email anda)
 *    - Who has access: Anyone (Siapa saja bisa akses gratis tanpa login!)
 * 9. Klik 'Deploy' dan salin URL Web App yang dihasilkan!
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Mifta Fauzia Rahma — UI/UX Designer & S.Kom.')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
