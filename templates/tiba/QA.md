# Pemeriksaan TIBA

24 Oktober 2026, preview HTTP lokal menggunakan headless Chrome dan Edge.

- 15 foto produk asli dari file lokal berhasil dirender.
- Tujuh viewport: 360×800, 390×844, 768×1024, 1024×768, 1440×720, 1440×900, 1920×1080. Tidak ditemukan overflow halaman.
- Filter, pencarian, hasil kosong, dialog detail, Escape, pengembalian fokus, navigasi keyboard, menu seluler, kontrol rail, dan reduced motion: lulus.
- Teks dan koleksi pada batas maksimum, logo lebar/tinggi, penggantian focal point, bagian opsional, bagian wajib, dan pesan kesiapan iframe: lulus.
- Pembaruan konfigurasi identik mempertahankan node kartu, FAQ terbuka, dan fokus. Input HTML menjadi teks; protokol gambar berbahaya ditolak.
- Suite browser: 24/24. Suite kontrak: 12/12. Bukti mesin tersedia di folder `qa/` pada proyek kerja.
- Tombol hero telah dihapus dan pemberitahuan usia 21+ telah ditambahkan; pemeriksaan akhir menghitung 0 tombol hero dan 15 entri katalog.

Template menggunakan struktur Standard 1 dan aset lokal. Editor Studio produksi lokal telah diuji; hasil publikasi source/Studio dicatat dalam laporan rilis. Ini bukan klaim kesamaan persis seluruh gerakan dan halaman Ghia.

Pembaruan footer: tombol WhatsApp tanpa badge contoh memakai nomor dummy +62 000-0000-0000. Tampilan 360px/1440px lulus; pesan hanya pertanyaan umum katalog dan tautan eksternal tidak dibuka saat QA.

## Pemeriksaan integrasi sebelum publikasi

- Sync valid: 22 template, dengan satu entri TIBA dalam kategori services dan 49 field.
- Production build Studio lulus dengan 64 halaman.
- Protokol konfigurasi Core, revision/applied, sectionVisibility, upload raster, dan state iframe: 21/21 lulus.
- Editor Studio nyata: penggantian judul, toggle bagian, status preview,15 foto, FAQ, dan mode seluler lulus.
- Analytics global Core memerlukan DATABASE_URL; fitur database tersebut berada di luar verifikasi template.
