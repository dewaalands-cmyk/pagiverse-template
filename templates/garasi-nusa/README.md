# GARASI NUSA

Template dealer mobil harian dan bekas satu halaman untuk Pagiverse Template Standard 1. ID: `garasi-nusa-auto-001`. Bahasa Indonesia, harga katalog dalam Rupiah.

## Data contoh

GARASI NUSA adalah merek fiktif. Alamat, jadwal, spesifikasi, jarak tempuh, stok, dan harga merupakan data demo yang harus diganti sebelum digunakan untuk bisnis. Foto adalah ilustrasi dan tidak menyatakan kondisi atau identitas unit aktual. Tidak ada klaim inspeksi, riwayat, garansi, pembiayaan, atau penilaian tukar tambah yang otomatis berlaku.

`contact.whatsapp` dan `location.mapsUrl` sengaja kosong. Tombol WhatsApp menampilkan pesan demo ketika nomor belum diatur; template tidak menghubungi nomor acak. Isi nomor dealer dalam format kode negara dan angka, misalnya awalan 62, melalui editor Pagiverse. Tautan Maps hanya menerima HTTPS.

## Pratinjau lokal

Jalankan server HTTP statis dari folder template, lalu buka alamat lokalnya. Contoh apabila Python tersedia:

```powershell
python -m http.server 8080
```

Buka `http://localhost:8080`. Gunakan HTTP, karena runtime memuat `template.json` melalui `fetch`. Membuka `index.html` langsung sebagai `file://` tidak cukup untuk menguji kontrak konfigurasi.

## Struktur dan integrasi

- `template.json`: metadata, 74 field tingkat atas, batas konten, koleksi mobil, navigasi, dan visibilitas bagian.
- `index.html`, `style.css`, `script.js`: halaman vanilla HTML/CSS/JavaScript tanpa framework runtime.
- `thumbnail.webp`: pratinjau katalog Pagiverse.
- `assets/`: logo, foto ilustrasi, serta font lokal.

Bagian wajib: `hero`, `products`, `contact`, `footer`. Bagian opsional: `about`, `services`, `location`, `faq`. Navigasi ke bagian opsional mengikuti visibilitas bagian. Semua konten bisnis yang ditampilkan dideklarasikan di manifest; font, komposisi, dan warna desain dilindungi.

Runtime mendukung objek konfigurasi bertingkat maupun path datar dan nilai awal `window.PAGIVERSE_DATA`. Pengikatan memakai `data-bind`, `data-bind-src`, koleksi berbatas, dan render teks biasa. Tidak ada HTML atau JavaScript dari isian pelanggan. Gambar bisnis dapat diganti dengan URL aman atau upload PNG/JPEG/WebP, dengan focal point.

Protokol preview iframe Pagiverse:

1. Template mengirim `pagiverse:ready` setelah manifest siap.
2. Parent asal sama mengirim `{ type: "pagiverse:config", templateId: "garasi-nusa-auto-001", configuration, revision }`.
3. Template merender konfigurasi dan mengirim `pagiverse:applied` dengan `revision` yang diterima.

Pesan harus berasal dari parent dan origin yang sama. Tidak diperlukan perubahan khusus di Pagiverse Core. Katalog, pencarian, filter, urutan harga/tahun, dan dialog detail merupakan fitur katalog Standard 1; tidak ada keranjang atau checkout. Tukar tambah dan kunjungan diarahkan ke percakapan WhatsApp, tanpa formulir penyimpanan data atau janji penilaian otomatis.

## Penyuntingan katalog

`sections.products.items` menerima 0–18 unit. Setiap unit memiliki merek/model, varian, kategori SUV/MPV/HATCHBACK, tahun, jarak tempuh, transmisi OTOMATIS/MANUAL, bahan bakar, harga, deskripsi, dan gambar. Masukkan harga sebagai digit Rupiah tanpa pemisah; runtime memformatnya sebagai IDR. Nilai harga kosong atau tidak valid tidak diperlakukan sebagai penawaran harga.

`sections.about.items` menerima 0–6 langkah. `sections.faq.items` menerima 0–8 pertanyaan. Gunakan batas panjang di manifest untuk menjaga tata letak. Logo dan gambar dapat diganti tanpa mengubah struktur halaman.

## Desain dan gerak

Arah visual mengikuti berkas referensi pengguna: heading uppercase, tracking `0.023em`, satu bobot 400, sudut 0px, jarak berbasis 8px, permukaan gelap `#202020` bergantian dengan putih/`#f5f5f5`, tanpa bayangan dan pemisah dekoratif. Aksen Giallo Vivo `#ffc000` dipakai sebagai satu sinyal tindakan per viewport; keadaan hover dapat memakai `#917300`. Runtime memilih satu kandidat aksi kuning yang terlihat agar beberapa bagian yang bersinggungan tidak menampilkan beberapa aksen sekaligus.

Barlow Condensed 400 yang dihosting lokal dipakai sebagai pengganti font LamboType berdasarkan persetujuan pengguna. Ini mempertahankan arah tipografi tanpa menyertakan font proprietary yang tidak dilampirkan. Font dan token warna tidak menjadi kontrol pelanggan.

Gerak sinematik mencakup dorongan kamera perlahan pada satu foto hero dan transisi masuk bagian. Kontrol jeda/lanjut dapat digunakan dengan keyboard. Preferensi `prefers-reduced-motion` menonaktifkan gerak yang tidak diperlukan; konten dan fungsi tetap tersedia tanpa animasi.

## Verifikasi dan publikasi

Validasi harus mencakup file baseline, manifest, bindings teks/gambar/koleksi, handshake iframe, array kosong/maksimum, judul panjang, bagian opsional tersembunyi, focal point, navigasi keyboard, dialog detail, pencarian/filter, format harga, tombol kontak demo, reduced motion, dan ukuran mobile/tablet/desktop. Laporan QA aktual disampaikan bersama hasil implementasi; dokumen ini bukan bukti bahwa seluruh pemeriksaan telah dijalankan.

Template ini disiapkan secara lokal. Tidak ada commit, push, sinkronisasi Studio, atau publikasi yang dinyatakan oleh README ini. Publikasi memerlukan alur dan bukti terpisah.

## Hasil pemeriksaan lokal

Status: PASS. Validator produksi dijalankan pada salinan terisolasi; tidak mengubah Studio. Browser diuji pada360/768/1024/1440px: filter, pencarian, pengurutan, detail mobil, keyboard, reduced motion, 0/18 unit, teks panjang, URL berbahaya, dan pesan konfigurasi iframe berulang. Tidak ada console error atau overflow horizontal. Lighthouse lokal mobile: performa96, aksesibilitas100, praktik terbaik100, SEO100; LCP2.7s, CLS0. Detail dalam QA.json. Ini pengukuran lab lokal; kinerja hosting belum diukur.

Aset foto ada di assets/; prompt dan sumber pembuatan tercatat di assets/ASSET-SOURCES.md. Foto merupakan ilustrasi AI, bukan foto unit aktual. Font Barlow Condensed400 dipakai atas persetujuan pengguna sebagai pengganti LamboType.
