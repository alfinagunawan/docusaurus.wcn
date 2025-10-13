---
title: Supplier
sidebar_position: 15
---

:::note
**`Menu ini digunakan untuk mendata dan mengelola seluruh informasi pemasok (supplier) perusahaan.`**  Pemasok ini bisa berupa individu, toko, perusahaan, distributor, atau entitas lain yang menyediakan produk atau jasa kepada perusahaan.

Halaman Supplier dapat dilihat pada **Gambar 2.15.1**
:::

<img src="/img/commerce/masterdata/supplier1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.1 Halaman Supplier
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah Supplier.|Tekan tombol Add Supplier.|
|Download|Mengunduh Supplier dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah Supplier dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat informasi Supplier secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting Supplier.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus Supplier.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa Supplier sekaligus.|Pilih Supplier baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Supplier ?`

**`Berikut petunjuk dalam menambahkan Supplier :`**

1. **`Tekan tombol`** ***Add Supplier*** dan pengguna akan diarahkan pada halaman penambahan Supplier seperti pada **Gambar 2.15.2**.

### Supplier `Info ?`

:::note
**`Bagian utama dari form`** saat menambahkan Supplier baru ke dalam sistem.
:::

<img src="/img/commerce/masterdata/supplier2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.2 Halaman Add Supplier Info
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Supplier|Formulir Supplier akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Supplier|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Group|Kategori atau klasifikasi pemasok, diambil dari menu Group.|Tidak
|Name|Nama pemasok atau perusahaan.|Ya
|ID|Nomor atau kode unik untuk supplier|Ya
|Credit Limit Purchase|Batas maksimal nilai pembelian secara kredit yang diperbolehkan kepada supplier oleh perusahaan, tanpa pembayaran langsung di muka.|Tidak
|Credit Limit Delivery|Batas maksimal nilai pengiriman yang boleh dilakukan sebelum pembayaran.|Tidak
|Currency|Mata uang yang digunakan untuk transaksi dengan supplier ini.|Tidak
|NPWP Number|Nomor Pokok Wajib Pajak (NPWP) milik supplier.|Tidak
|NIB Number|Tanda pengenal perusahaan yang berlaku secara nasional.|Tidak
|Default Tax|Pajak standar yang diterapkan pada transaksi supplier ini.|Tidak
|Default Weight|Berat standar (misalnya per unit produk) untuk penghitungan logistik/pengiriman.|Tidak
|Receive Day|Hari tertentu di mana supplier bisa menerima permintaan pembelian, melakukan pengiriman, atau menangani order dari perusahaan.|Tidak

### Supplier `Product ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mencatat produk-produk yang terkait secara khusus dengan pemasok tertentu.`**
:::

<img src="/img/commerce/masterdata/supplier3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.3 Halaman Add Supplier Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Product|Produk yang ingin dikaitkan dengan supplier ini.|Tidak
|MOQ (Minimum Order Quantity)|Jumlah minimum unit produk yang bisa dibeli dari supplier dalam satu kali transaksi.|Tidak
|Price (Per Unit)|Harga khusus per unit produk.|Tidak
|Delivery Tolerance Type|Jenis toleransi pengiriman yang diperbolehkan terhadap jumlah pesanan.|Tidak
|Delivery Tolerance|Nilai toleransi jumlah yang boleh dikirim lebih/kurang dari pesanan.|Tidak

### Supplier `Address ?`

:::note
**`Bagian dari data supplier yang berfungsi untuk mencatat alamat yang terkait secara khusus dengan pemasok tertentu.`**
:::

<img src="/img/commerce/masterdata/supplier4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.4 Halaman Add Supplier Address
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Bill To Address|Alamat penagihan untuk supplier, biasanya digunakan pada dokumen invoice atau faktur.|Tidak|
|Ship To Address|Alamat pengiriman barang dari supplier.|Tidak
|Notify Party Address|Alamat pihak yang harus diberi pemberitahuan ketika barang tiba di pelabuhan tujuan atau saat proses pengiriman.|Tidak
|Address Name|Nama label atau identitas alamat, misalnya: ***“Kantor Pusat”***, dll.|Tidak
|NITKU Number (22 Digits)|Nomor identitas lokasi alamat untuk keperluan pajak atau kepatuhan, wajib 22 digit.|Tidak
|Address|Alamat lengkap tempat penagihan dilakukan.|Tidak
|Note|Catatan tambahan terkait alamat ini, seperti instruksi khusus atau info tambahan.|Tidak
|Default|Menandai alamat ini sebagai alamat utama (default) untuk penagihan. Hanya satu alamat yang boleh ditetapkan sebagai default.|Tidak

### Supplier `Bank ?`

:::note
**`Bagian dari data supplier yang berfungsi untuk mencatat informasi rekening bank milik supplier yang akan digunakan untuk transaksi pembayaran, pengembalian dana, atau referensi administratif.`**
:::

<img src="/img/commerce/masterdata/supplier5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.5 Halaman Add Supplier Bank
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Bank|Nama bank tempat supplier membuka rekening, misalnya BCA, Mandiri, dll.|Tidak
|Account |Akun pemilik rekening.|Tidak
|Swift Code|kode identifikasi internasional yang digunakan untuk mengenali bank secara unik dalam transaksi keuangan global.|Tidak
|Address|Alamat pemilik rekening.|Tidak
|Note|Catatan tambahan, seperti jenis rekening|Tidak
|Default|Menandai rekening ini sebagai default account, yaitu rekening utama yang akan digunakan jika customer memiliki lebih dari satu rekening.|Tidak

### Supplier `Term of Payment ?`

:::note
**`Bagian dari data supplier yang berfungsi untuk mengatur syarat atau ketentuan pembayaran yang disepakati antara perusahaan dan supplier.`**
:::

<img src="/img/commerce/masterdata/supplier6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.6 Halaman Add Supplier Term of Payment
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Term of Payment|Nama atau jenis syarat pembayaran yang disepakati.|Tidak
|Interval|Jangka waktu pembayaran dalam jumlah hari yang dilakukan oleh supplier.|Tidak
|Description|Deskripsi tambahan yang menjelaskan detail dari syarat pembayaran tersebut.|Tidak
|Default|Centang untuk menandai bahwa syarat pembayaran ini akan digunakan secara otomatis (default) untuk supplier jika tidak dipilih syarat lain.|Tidak

### Supplier `Contact Person ?`

:::note
**`Bagian dari data supplier yang berfungsi untuk mengatur syarat atau ketentuan pembayaran yang disepakati antara perusahaan dan supplier.`**
:::

<img src="/img/commerce/masterdata/supplier7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.15.7 Halaman Add Supplier Term of Payment
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama lengkap orang yang menjadi kontak dari pihak supplier.|Tidak
|Email|Alamat email aktif dari contact person.|Tidak
|Phone|Nomor telepon atau ponsel yang bisa dihubungi langsung.|Tidak
|Address|Alamat tempat contact person berada, bisa berupa kantor atau lokasi operasional.|Tidak
|Note|Catatan tambahan terkait contact person ini.|Tidak
|Default|Menentukan apakah orang ini adalah kontak utama (default) supplier.|Tidak

2. **`Isilah data penambahan Supplier`** lalu tekan tombol ***Submit***.