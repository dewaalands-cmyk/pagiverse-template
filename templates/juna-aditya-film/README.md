# Juna Aditya Film

Template Pagiverse Standard 1 untuk portofolio sutradara. Identitas, lima film, delapan still AI, dan montase video bawaan merupakan materi contoh yang dapat diganti.

## Konten yang dapat diubah

Ada 47 field utama, termasuk satu koleksi berisi 0–12 film. Setiap film memiliki judul, tahun, format, sinopsis, gambar utama/sekunder beserta teks alternatif, pilihan bingkai warna, orientasi crop, dan tautan film opsional. Nama lengkap, wordmark pendek, logo, profil, navigasi, video rangkaian frame, metadata SEO, serta kontak juga dapat diubah. Profil dan kontak adalah bagian opsional.

Wordmark dibatasi 16 karakter dan ukurannya menyesuaikan ruang yang tersedia. Untuk gambar utama, pilih orientasi lanskap atau potret sesuai crop yang diinginkan. Gambar sekunder mengikuti perbandingan sisi berkas. Metadata focal point dan fit diterapkan pada gambar. Font dan palet struktural dilindungi untuk mempertahankan desain.

## Perilaku

Galeri dua dimensi mendukung drag, roda gulir, dan tombol panah. Menu dan detail film menggunakan dialog native. Gerak otomatis dapat dijeda, berhenti saat fokus keyboard berada di galeri, dan mengikuti preferensi reduced motion. Pratinjau iframe memulai galeri dalam keadaan dijeda.

Adapter memakai pola binding, konfigurasi, dan handshake Website Blank v1, dengan renderer khusus untuk galeri, daftar film, dan modal. Konfigurasi berulang yang setara tidak membangun ulang DOM, sehingga pan, status jeda, dialog, fokus, dan posisi gulir tetap terjaga. Konten customer dirender sebagai teks biasa dan URL divalidasi.

## Media dan kontak

`assets/rangkaian-frame.mp4` adalah montase delapan gambar AI selama 24 detik tanpa audio, bukan cuplikan film yang telah diproduksi. Ganti URL dan keterangannya saat memasukkan karya nyata. Kontak kosong secara default; tautan email, telepon, Instagram, dan YouTube muncul hanya bila tujuan yang valid diisi. Tidak ada formulir, pengiriman pesan, atau backend khusus dalam template ini.

Asal gambar, prompt, dan lisensi font tercatat di `ASSETS.md` dan `assets/fonts/sources.json`. Helvetica adalah pilihan pertama bila tersedia di perangkat; berkas font lokal yang dibundel adalah Inter 700 berlisensi SIL OFL sebagai fallback yang disetujui dalam brief.

## Struktur

`index.html`, `style.css`, `script.js`, `template.json`, `thumbnail.webp`, `favicon.svg`, serta `assets/`. Tidak ada framework, proses build, skrip pihak ketiga, atau dependensi runtime eksternal. Studio/Core mengelola publikasi dan canonical URL.
