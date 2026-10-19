# Satria Capital

Pagiverse Template Standard 1. ID: satria-capital-multi-asset-001.

Enam halaman: Beranda, Pendekatan Investasi, Riset & Perspektif, Tentang Satria, Percakapan Privat, dan detail artikel. Desain editorial mengikuti palette lampiran pengguna. Tombol percakapan hanya berada pada penutup setelah footer dan seluruh konten. Halaman kontak memakai formulir deklaratif Pagiverse Core; template tidak memiliki endpoint pengiriman, rekening, pembayaran, WhatsApp, atau kredensial.

Narasi, riset konseptual, dan fungsi tim adalah contoh yang dapat diganti. Tidak ada klaim AUM, imbal hasil, izin, sejarah perusahaan, atau nama profesional rekaan. Detail perusahaan nyata dan konfigurasi pengiriman perlu diisi sebelum penggunaan bisnis.

## Infrastruktur yang digunakan kembali

Disusun dari factory/website-blank-v1: baseline template.json, namespace field kanonis, section visibility, runtime vanilla, dan protokol ready/config/applied. Komposisi editorial, filter riset, detail artikel, dan accordion aset dibuat khusus untuk brief ini. Konfigurasi koleksi yang tidak berubah tidak mengganti DOM sehingga fokus dan status accordion tetap terjaga.

## Font dan bentuk

Font komersial TWK Lausanne, PP Mondwest, dan Editorial New tidak disertakan dalam lampiran. Template memakai Cormorant Garamond dan Manrope lokal berlisensi SIL OFL; lisensi disertakan pada assets/fonts/. Font merupakan keputusan desain yang dilindungi. Tombol 5px dan gambar 14px mengikuti brief eksplisit pengguna.

## Editabilitas

Field, batas panjang, koleksi, metadata gambar/focal point, dan label form terdapat pada template.json. Warna tema dikunci agar kontras dan palette terjaga. Materi pelanggan dirender sebagai teks biasa; URL berbahaya ditolak; tidak ada dependensi runtime pihak ketiga.

## Revisi referensi New Form

Komposisi dan gerak direka ulang secara mandiri dari referensi publik: hero sans empat baris dan empat pasangan foto, wipe foto 3/8 detik, story pinned, marquee serif halus/bitmap, diagram progresif, kutipan bertahap, batas section melengkung, menu organik, dan smooth scroll desktop. Brand, copy, dan foto New Form tidak dipakai. Inter variable dan Cormorant Garamond berlisensi terbuka menjadi pengganti font komersial yang tidak dilampirkan. Animasi merupakan kode desain terlindungi, bukan kontrol animasi visual pelanggan.

GSAP 3.15.0, ScrollTrigger, dan ScrollSmoother disimpan lokal pada assets/vendor/ beserta lisensi resminya. CSS dan kode scene digabung ke style.css/script.js agar seluruhnya ikut alur sync Pagiverse. Mode reduced motion menampilkan semua isi dalam alur baca biasa.
