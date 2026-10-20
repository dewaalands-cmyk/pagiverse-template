# NODARA Data Center

Template Pagiverse Standard 1 berbahasa Indonesia untuk profil perusahaan data center, colocation, dedicated server, cloud, konektivitas, dan operasional. ID `nodara-data-center-001`; kategori `services`, label Data Center. NODARA adalah identitas demo; semua visual fasilitas adalah ilustrasi. Ganti identitas dan isi layanan sebelum digunakan untuk bisnis nyata. Template ini tidak membuat klaim lokasi, kapasitas, sertifikasi, harga, SLA, pelanggan, atau kontak bisnis yang belum diberikan.

## Struktur dan desain

`index.html`, `style.css`, `script.js`, `template.json`, `thumbnail.webp`, dan `assets/` membentuk paket portabel. `assets/site-ui.js` mengelola interaksi visual. Tidak ada framework, skrip eksternal, backend khusus, cart, atau checkout.

Desain mempertahankan art direction awal: bidang agate gelap, aksen oranye, tipografi Inter dengan label IBM Plex Mono, hero video, bab layanan sticky, crossfade visual, ticker, dan gerak ringan saat menggulir. Sudut dan komposisi mengikuti referensi yang telah disetujui; migrasi tidak mengubahnya menjadi gaya template lain. Font lokal dan lisensi SIL OFL berada di `assets/fonts/`. Font, ritme, komposisi, dan sumber video merupakan aset desain terlindungi.

Foto bisnis dapat diganti melalui descriptor gambar yang mendukung `src`, `alt`, serta `focalPoint.x/y` 0–100. Video hero ilustrasi bawaan hanya dipakai ketika poster demo asli masih dipilih. Mengganti foto hero dengan foto bisnis otomatis menonaktifkan montage demo agar kedua identitas visual tidak tercampur. `sections.hero.videoEnabled` juga dapat menonaktifkan video pada poster demo. Sumber video tidak dapat diganti melalui field pelanggan Standard 1.

## Kontrak konten

Manifest memiliki 65 field utama, termasuk empat koleksi berbatas:

| Koleksi | Batas | Isi demo |
| --- | --- | --- |
| `sections.services.items` | 1–8 | 5 layanan |
| `sections.about.layers` | 1–5 | 3 lapisan |
| `sections.process.items` | 1–6 | 4 tahap |
| `sections.faq.items` | 0–8 | 5 pertanyaan |

Judul hero memakai dua field teks tetap `headingLine1` dan `headingLine2`, masing-masing maksimum 36 karakter, untuk menjaga komposisi. Label navigasi maksimum 24 karakter; CTA utama maksimum 32 karakter, dan CTA bab layanan maksimum 44 karakter. Judul bagian serta bab memiliki batas masing-masing dalam manifest; ukuran tipografi dan pembungkusan responsif tetap dikendalikan desain. Seluruh copy bisnis, label navigasi, tombol, footer, label formulir, SEO, logo opsional, dan foto bisnis dideklarasikan. Teks pelanggan diperlakukan sebagai plain text; fitur/rincian layanan menggunakan satu baris per butir, tanpa HTML pelanggan.

Navigasi tetap memiliki empat target: layanan `#layanan`, infrastruktur `#infrastruktur`, proses `#proses`, dan FAQ `#faq`. Label dapat diubah; pelanggan tidak dapat membuat target navigasi baru. Bagian hero, layanan, kontak, dan footer wajib. Infrastruktur, proses, FAQ, serta band ajakan konsultasi opsional. `sectionVisibility.<id>` mengendalikan bagian opsional dan navigasi terkait. Warna dan font desain tidak diekspos untuk menghindari kombinasi yang merusak kontras.

Binding statis memakai `data-bind`, gambar memakai `data-image` dan `data-bind-src/data-bind-alt`, placeholder memakai `data-bind-placeholder`, dan metadata SEO memakai `data-bind-content`. Koleksi layanan memetakan satu sumber ke rail, bab, gambar sticky, menu, ticker, dan opsi formulir. Runtime harus mempertahankan caption `[data-static]` di `.story-visual-frame`. Pembaruan konfigurasi yang tidak mengubah koleksi mempertahankan DOM interaktif yang sedang digunakan.

## Formulir

UI `infrastructure-consultation` meminta nama, perusahaan opsional, email, pilihan layanan, dan kebutuhan. Pagiverse Core memiliki pengiriman, penyimpanan, anti-spam, integrasi, dan respons server. Template memancarkan deklarasi `pagiverse:form-submit`; ia tidak menyimpan kredensial dan tidak menyediakan endpoint bisnis buatan.

Preview dapat menyusun ringkasan lokal untuk disalin atau diunduh sebagai TXT. Ringkasan tersebut bukan bukti pengiriman ke bisnis. Pesan sistem tidak mengaku permintaan terkirim tanpa konfirmasi Core. Gunakan data contoh ketika menguji preview.

## Pemeriksaan dan publikasi

Validasi sebelum publikasi mencakup default, batas panjang teks, jumlah minimum/maksimum koleksi, section visibility, logo dengan rasio berbeda, focal point, keyboard, reduced motion, serta layar 360/768/1440 px. Bukti QA, sinkronisasi Studio, commit sumber, workflow, katalog, dan URL live dicatat oleh proses publikasi; keberhasilan preview lokal tidak dengan sendirinya membuktikan publikasi.
