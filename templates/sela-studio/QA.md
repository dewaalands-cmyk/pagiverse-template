# Verifikasi Sela Studio

Tanggal: 22 Oktober 2026 (Asia/Jakarta).

## Lokal

- JavaScript parse dan template.json valid; semua binding HTML terdaftar.
- Browser Chrome: 360, 390, 768, 1024, 1440 px; 4 karya default dan tidak ada horizontal overflow.
- Desktop/mobile diperiksa visual dari screenshot halaman penuh; semua font dan gambar yang dimuat valid.
- Menu mobile buka/tutup/Escape, filter Digital, dialog proyek/Escape, pause motion, reduced-motion lulus.
- Form kosong menampilkan 4 error; isian valid menghasilkan ringkasan dan unduhan brief-proyek.txt. Tidak ada pengiriman backend.
- Iframe same-origin: konfigurasi berulang mempertahankan node layanan, status details terbuka, dan fokus; HTML customer tampil sebagai teks; section wajib tetap terlihat; section opsional dan navigasinya dapat disembunyikan.
- Galeri kosong serta maksimum 12 item stabil; layanan dan proses kosong/maksimum stabil.
- Semua text/textarea pada batas maksimum diuji di 360/768/1024/1440 px, tanpa horizontal overflow. Kontrol satu baris memakai ellipsis untuk copy ekstrem.
- Logo pengganti, focal point/crop, URL gambar berbahaya, wrong-origin/template-id diperiksa.
- 0 page errors pada pengujian.

## Produksi

Validasi memakai source/Studio checkout terpisah dari main remote agar perubahan lama pengguna tidak tersentuh. Production templates:sync final lulus: 21 template, termasuk sela-studio-design-001 dengan 67 field dan kategori agency. Build Studio final lulus: kompilasi, lint, type checks, 62/62 halaman. JavaScript parse dan git diff --check lulus. DATABASE_URL tidak disetel; fungsi database/backend tidak diverifikasi.

## Batas bukti

Lighthouse/Core Web Vitals tidak diukur. Form saat ini browser-local; email/database/backend delivery tidak diuji.
