# KABAR STUDIO

Template agensi kreatif full-service berbahasa Indonesia. ID: kabar-studio-creative-001. Kategori manifest: services; jenis template: agensi kreatif. Satu halaman, Pagiverse Standard 1, vanilla HTML/CSS/JS, tanpa dependensi runtime eksternal.

## Status

Validasi lokal PASS. Bukti publikasi remote diperiksa setelah push.

Empat font pengganti telah dipasang sesuai izin pengguna. Font dan lisensinya di-host lokal; pemeriksaan aset lokal PASS dengan 0 missing. QA visual dan responsive dengan font pengganti, validasi aset, dan build produksi Studio telah lolos. Publikasi remote diverifikasi terpisah setelah push. Pengguna sudah mengizinkan upload langsung setelah pekerjaan selesai; tidak perlu meminta persetujuan upload ulang.

## Desain dan font

Rujukan: empat file DESIGN (1).md, tokens.json, variables.css, theme.css dari Downloads dan guideline pengguna di chat. Guideline pengguna diutamakan bila contoh token bertentangan. Pengguna mengizinkan font serupa karena font asli tidak tersedia.

| Peran                       | Font rujukan        | Font yang digunakan    | Berkas lokal                              |
| --------------------------- | ------------------- | ---------------------- | ----------------------------------------- |
| Banner/display              | Canopee             | Bodoni Moda 800        | assets/fonts/bodoni-moda-800.woff2        |
| Body, navigasi, judul kecil | Editorial New 300   | Newsreader 300         | assets/fonts/newsreader-300.woff2         |
| Judul pendamping            | Domaine Display 500 | Playfair Display 500   | assets/fonts/playfair-display-500.woff2   |
| Aksen gothic                | Germgoth 400        | UnifrakturMaguntia 400 | assets/fonts/unifrakturmaguntia-400.woff2 |

Skala Minor Third: 31 x 1.2^n. Body memakai Newsreader 300; display memakai Bodoni Moda 800, line-height 0.78 dan negative tracking. Divider minimal 230.34px pada semua breakpoint; tampilan bisa membungkus menjadi poster pada layar sempit. Playfair Display 500 dan UnifrakturMaguntia 400 menjadi aksen huruf. Font tetap keputusan desainer dan tidak diekspos sebagai field pelanggan.

Semua font menggunakan SIL Open Font License 1.1. Berkas OFL dan metadata unduhan ada di assets/fonts/. Sumber resmi Google Fonts: [Bodoni Moda](https://github.com/google/fonts/tree/main/ofl/bodonimoda), [Newsreader](https://github.com/google/fonts/tree/main/ofl/newsreader), [Playfair Display](https://github.com/google/fonts/tree/main/ofl/playfairdisplay), [UnifrakturMaguntia](https://github.com/google/fonts/tree/main/ofl/unifrakturmaguntia). Detail nama berkas dan URL unduhan tersimpan dalam assets/fonts/sources.json.

Parchment #e2dedb, Bone Cream #cdc6be, Ink #1d1d1b. Ember Orange #c03f13 hanya badge NEW. Gambar radius 0, badge 2.88px. Badge memakai 14.95px dalam kotak 48px dengan teks putih agar terbaca dan lolos kontras AA. Warna putih hanya untuk teks badge; latar halaman dan kartu tetap Parchment/Bone Cream. Teks kecil memakai Ink agar terbaca. Tidak ada gradient, blur, glassmorphism, atau shadow umum.

## Editabilitas dan perilaku

Baseline 62 field manifest, 3 array berbatas: proyek 0–6, layanan 1–6, proses 0–6. Konfigurasi flat dan nested, window.PAGIVERSE_DATA, dan bridge same-origin pagiverse:ready/config/applied. Bagian hero/contact/footer wajib; bagian lain opsional. Semua teks bisnis diperlakukan plain text. URL gambar dibatasi relative same-origin/http/https; data, javascript, blob, protocol-relative ditolak. Focal point dibatasi 0–100. SEO memakai field kanonis seo.title, seo.description, dan seo.ogImage.

Filter proyek, detail modal native dialog, menu, accordion layanan, navigasi, logo, SEO, dan section visibility tersedia. Update konfigurasi sejenis mempertahankan filter, accordion, dan input form. Tautan ke bagian opsional ikut disembunyikan jika bagiannya nonaktif.

Form project-inquiry hanya mendeklarasikan UI dan memancarkan pagiverse:form-submit ke parent same-origin serta event lokal. Penyimpanan, anti-spam, integrasi, dan respons server milik Pagiverse Core. Pesan sistem dan validasi tidak diekspos sebagai variabel template. Demo menampilkan “Brief sudah diperiksa. Ini demo; pesan belum dikirim.” setelah isian valid, tidak mengaku pesan terkirim, dan tidak menghapus input. Tidak ada cart/checkout.

## Isi demo dan aset

Identitas KABAR STUDIO, AKAR, RUANG, SORA dan seluruh proyek adalah contoh fiktif yang harus diganti untuk bisnis nyata. Tidak ada klaim pelanggan, testimoni, atau metrik hasil.

Tiga aset dibuat menggunakan built-in imagegen, dikonversi format ke WebP1536x1024, dan disimpan sebagai assets/akar.webp, ruang.webp, sora.webp. Thumbnail pengembangan memakai artwork AKAR; thumbnail screenshot situs disiapkan setelah QA visual.

Prompt final aset (palet seluruhnya parchment/bone/ink/charcoal, horizontal3:2, tanpa aksen oranye):

- AKAR: premium editorial coffee packaging still life; matte charcoal bag printed AKAR in vintage serif, ceramic cup, cream identity card, beans, tactile parchment setting, direct side light, analog halftone grain.
- RUANG: tactile art-exhibition identity installation; sculptural folded paper, standing exhibition poster printed RUANG, matching physical print pieces, bone gallery, dramatic sharp shadows, analog grain.
- SORA: premium fashion campaign; anonymous adult model with face outside frame, sculptural black clothing, folded newsprint poster printed SORA, raw concrete set, directional light, warm halftone grain.

## Bukti validasi saat ini

- PASS: pemeriksaan aset lokal setelah font pengganti dipasang, 0 missing; empat berkas WOFF2 serta empat lisensi OFL tersedia.
- PASS: syntax runtime dan cakupan 52 binding/koleksi dalam 62 field manifest; tidak ada binding yang hilang.
- Pemeriksaan lokal terdahulu mencakup menu, filter, modal, Escape/focus, form, repeated iframe config, koleksi kosong/maksimum, section visibility, plain text, dan penolakan URL berbahaya. QA visual dan responsive dengan font pengganti sudah lolos pada 360/768/1440px, termasuk default dan maksimum koleksi serta teks panjang.
- PASS: empat font dimuat nyata di browser; screenshot thumbnail aktual; Lighthouse desktop lokal 98 performa,100 aksesibilitas,100 best practices,100 SEO; LCP1.09s,CLS0.000075,TBT0ms. Ini pengukuran lab lokal, bukan metrik pengunjung live.
- PASS: sync Studio16template dan productionbuild52staticpages, mencakup kedua route KABAR. Hanya peringatan DATABASE_URL tidak diset; build exit0.
- Reviewed: aturan CSS prefers-reduced-motion menonaktifkan animasi/transisi; fungsi inti tidak bergantung pada gerak.
- Bukti remote SHA/workflow/katalog/library/route dikumpulkan setelah push; jangan menyamakan validasi lokal dengan bukti live.

## Melanjutkan publikasi

Repo source terisolasi: C:/Users/I DEWA GEDE ALAN D/pagiverse-kabar-studio, branch codex/kabar-studio, base271567d4b51cf227b3ba3bb807790d61a761f65a. Repo asli pagiverse-template-upload memiliki perubahan style tak terkait yang tidak disertakan.

Selesaikan pengujian font yang benar-benar dimuat, QA visual/editor/responsive, thumbnail, validasi penuh, serta sinkronisasi/build Studio dari checkout yang sesuai. Stage hanya templates/kabar-studio, commit/push source main sesuai instruksi pengguna, lalu verifikasi SHA/workflow/catalog/library/canonical live route. PASS pemeriksaan lokal atau metadata belum membuktikan publikasi.
