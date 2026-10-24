# TIBA | Ruang Kenal Minuman

Template katalog informatif berbahasa Indonesia untuk audiens dewasa. Identitas TIBA adalah contoh yang dapat diganti. ID: `tiba-beverage-editorial-001`.

## Isi

- 15 entri dengan foto produk asli, deskripsi singkat, dan detail: VIBE, Jack Daniel’s, Mansion House, Kawa Kawa, Orang Tua, Congyang, BINTANG, Schweppes, sloki, dan Johnnie Walker Red Label.
- Katalog horizontal, enam filter kategori, pencarian, dialog detail, navigasi seluler, FAQ, dan galeri.
- Hero foto penuh, navigasi overlay yang menjadi ringkas setelah scroll, marquee, gerakan menu, dan transisi interaksi yang diadaptasi dari tampilan Ghia.
- Tombol “Jelajahi koleksi” pada hero sudah dihapus sesuai permintaan.
- Tombol footer “Tanya via WhatsApp” memakai nomor contoh +62 000-0000-0000. Nomor ini belum terhubung ke akun; field `contact.whatsapp` dapat diganti. Pesan hanya menanyakan informasi umum katalog.

## Preview

Buka `index.html` melalui server HTTP statis. Semua foto dan font sudah berada di folder `assets/`; template tidak membutuhkan instalasi paket atau runtime framework.

## Integrasi Pagiverse

Struktur mengikuti Pagiverse Template Standard 1: `index.html`, `style.css`, `script.js`, `template.json`, `thumbnail.webp`, dan `assets/`. `assets/content.js` harus tetap ikut disalin dan dimuat sebelum `script.js`. Lokasi di dalam assets memastikan berkas data ikut tersinkronkan oleh Pagiverse.

Konfigurasi mengikuti namespace `business`, `navigation`, `seo`, dan `sections`. Gunakan `document.dispatchEvent(new CustomEvent('pagiverse:config', { detail: config }))` atau pesan iframe `pagiverse:config`. Runtime mengirim `pagiverse:ready` setelah inisialisasi. Detail kontrak, batas teks, koleksi, dan bagian yang bisa disembunyikan ada di `template.json`.

Foto bisnis mendukung penggantian gambar, alt text, dan focal point. Font dan warna dikunci untuk menjaga identitas dan kontras. Nama merek contoh serta teks dapat diedit. Pembaruan konfigurasi yang identik mempertahankan node katalog dan status FAQ.

## Aset dan sumber

Foto produk adalah foto asli dari situs resmi, distributor, atau katalog sumber yang dicatat di `SOURCES.md`. Beberapa gambar memiliki latar studio atau tanda katalog sumber. Hak merek dan foto tetap pada pemilik masing-masing; pencantuman di demo ini tidak menyatakan afiliasi resmi.

`assets/hero.webp` dan `assets/editorial.webp` adalah foto suasana yang dibuat dengan imagegen, tanpa label merek asli. Foto tersebut tidak dipakai sebagai foto produk bermerek. Prompt tersedia di `assets/IMAGE-PROMPTS.md`.

Font Bodoni Moda, DM Sans, dan Lora didistribusikan beserta lisensi SIL OFL di `assets/fonts/`. Semuanya merupakan padanan bebas lisensi, bukan font proprietary Ghia.

## Batas hasil

Kemiripan tata letak dan motion adalah adaptasi berdasarkan inspeksi situs Ghia pada 24 Oktober 2026. Template ini tidak menyatakan salinan persis seluruh animasi dan halaman referensi. Komponen transaksi dan ulasan pelanggan pada referensi diganti dengan informasi kategori dan detail produk.

Template divalidasi dengan protokol pesan Pagiverse Core, termasuk configuration, revision, applied, sectionVisibility, dan penggantian gambar raster. Bukti publikasi dan verifikasi live disimpan dalam laporan rilis.
