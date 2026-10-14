# ARUNA ENERGY

Pagiverse Template Standard 1. ID: aruna-energy-renewable-001. Category: renewable-energy (Energi Terbarukan).

Mode MIGRATE: lima halaman dan visual gelap sinematik dari website ARUNA dipertahankan. Runtime factory dipakai sebagai acuan kontrak binding, theme, koleksi, dan protokol preview; renderer koleksi khusus dibuat untuk menjaga layout proyek, FAQ, dan proses.

## Pengeditan

Isi bisnis ada di template.json: identitas, logo, navigasi, semua copy lima halaman, placeholder dan label form, gambar, SEO, accent. Koleksi proyek (0-12), FAQ (0-10), prinsip (1-8), wilayah (0-8), proses (1-6). Optional section: process, faq, location, cta. Halaman utama dan section required tidak bisa disembunyikan. Gambar mendukung altId/altEn dan focalPoint x/y 0-100.

Runtime menerima configuration flat maupun nested. Semua teks dibaca sebagai plain text, bukan HTML. Asset lokal, PNG/JPEG/WebP data URI, HTTP/HTTPS dibatasi; protocol eksekusi ditolak. Font Manrope lokal dan keputusan layout dilindungi. Tombol tetap pill dan kartu 12px sesuai desain asli.

## Form

Field dideklarasikan dengan provider pagiverse-core. Preview hanya meninjau, mengedit, dan mengunduh kebutuhan di browser. Lanjutkan Pengajuan memakai event pagiverse:form-submit yang sama dengan contoh template existing; backend penerimaan, storage, anti-spam, dan tindak lanjut milik Core. Tidak ada secret atau endpoint template. Template tidak mengklaim pengajuan diterima tanpa respons host. Tombol submit awal disabled jika JS tidak aktif.

## Data contoh

ARUNA ENERGY, proyek, kapasitas, dan visual adalah fiktif. Sesuaikan sebelum penggunaan bisnis. Tidak ada harga template yang ditetapkan dalam manifest.

## Aset

Foto hero, solar, dan battery dibuat dengan ImageGen untuk website awal dan dikompresi WebP. Font Manrope dari Google Fonts, lisensi OFL di assets/Manrope-OFL.txt. Logo SVG adalah wordmark dan lingkaran geometris sederhana.

## Validasi migrasi

Status: PASS untuk kompatibilitas template Standard 1.

- Validator resmi Studio: 12 template tersinkron, termasuk ARUNA.
- 226 field edit, lima halaman, lima koleksi, dan enam field wajib.
- Source/binding/asset/protokol preview: lulus audit.
- Browser: semua halaman diuji pada 360, 768, dan 1280px, termasuk copy maksimum tanpa overflow.
- Koleksi minimum, maksimum, dan kosong; optional section satu per satu dan bersama; required section tidak bisa disembunyikan.
- Editor Studio: judul berubah langsung, konfigurasi terbawa antarhalaman, proyek dapat ditambah, foto dapat diunggah, alt dan focal point 0%/100% diterapkan.
- Konfigurasi flat, nested, dan pengulangan revision tidak menghasilkan duplikasi atau konten transparan.
- Aksen hitam/putih, logo lebar, foto pengganti, serta foto putih dengan scrim kontras diuji.
- Keyboard skip link memindahkan fokus ke main. Reduced motion diuji pada cabang runtime dan gate CSS; emulasi preferensi OS browser tidak digunakan.
- Form: tinjau dan dokumen readonly dalam iframe lulus; event energy-needs diterima host uji. Ini tidak membuktikan penerimaan backend Core.
- Build produksi Studio lulus. Lighthouse/Core Web Vitals tidak diukur.

Dalam iframe Studio yang membatasi download, dokumen ringkasan ditampilkan untuk ditinjau/disalin. Preview mandiri menyediakan unduhan TXT. Pengiriman, penyimpanan, anti-spam, dan penerimaan permintaan tetap dikelola Pagiverse Core.
