# RUMA — Pagiverse Template Standard 1

Template ID: `ruma-arsitektur-001`. Bahasa: Indonesia. Kategori: Studio Arsitektur (`services`, ditampilkan di Website Company Profile).

RUMA adalah identitas studio fiktif dan seluruh proyek merupakan contoh yang dapat diganti. Lima gambar arsitektur adalah ilustrasi konsep yang dibuat dengan AI, bukan dokumentasi proyek terbangun. Ganti nama studio, narasi, foto, SEO, dan endpoint kontak sebelum penggunaan bisnis nyata. Tidak ada email, nomor telepon, WhatsApp, atau akun Instagram bisnis yang diasumsikan.

Galeri sengaja bergerak horizontal pada desktop dan menjadi halaman vertikal pada ponsel. Pengunjung dapat melihat karya dan cerita lebih dahulu; kontak, formulir, tautan sosial, dan navigasi kembali hanya muncul di akhir. Panel bone (`#f2edde`), tinta (`#000000`), dan rust (`#af6446`) serta radius 0 dipertahankan dari desain yang disetujui. Palet dan font dilindungi agar kontras serta karakter editorial tetap terjaga.

Font lokal: Space Grotesk untuk display dan Inter untuk teks, keduanya berlisensi SIL Open Font License; pertahankan berkas lisensi asli di `assets/fonts/`. Tidak ada font MANNA berlisensi komersial yang disertakan atau diklaim.

## Konfigurasi

`template.json` mendeklarasikan 47 field, enam section, satu halaman, galeri 0–12 item, dan pendekatan kerja 0–6 item. Section pembuka, kontak, dan identitas studio wajib. Galeri, studio, dan pendekatan kerja dapat disembunyikan. Setiap gambar karya menerima `src`, `alt`, dan `focalPoint`; `imageAlt` dapat menimpa alt struktur gambar. Font dan palet tidak dapat diedit pelanggan.

Integrasi menerima data konfigurasi Pagiverse; seluruh copy diperlakukan sebagai teks biasa. Tautan kontak hanya dirender bila endpoint valid tersedia. URL Instagram hanya menerima HTTPS. Aset gambar dan font tersedia lokal, tanpa dependensi runtime pihak ketiga.

## Formulir

Form `project-inquiry` mendeklarasikan nama, email, jenis proyek, dan cerita untuk Pagiverse Core. Mode contoh membuat unduhan ringkasan TXT di perangkat pengunjung. Template mengeluarkan peristiwa formulir untuk host Core; demo tidak mengirim brief ke studio dan tidak membuktikan backend, penyimpanan database, anti-spam, email, atau integrasi pihak ketiga. Infrastruktur pengiriman dan penyimpanan merupakan tanggung jawab Pagiverse Core.

## Berkas dan pemeriksaan

Baseline: `index.html`, `style.css`, `script.js`, `template.json`, `thumbnail.webp`, dan `assets/`. Metadata dan gambar pratinjau SEO dapat dikonfigurasi. Jalankan validator repository, pemeriksaan binding/iframe, responsivitas 360/768/1280+, koleksi minimum/maksimum, section opsional, penggantian logo/focal point, keyboard, reduced motion, dan URL tidak aman sebelum publikasi. Hasil validasi serta bukti source/Studio/live dicatat oleh workflow publikasi; README ini tidak mengklaim pengujian yang belum dijalankan.
