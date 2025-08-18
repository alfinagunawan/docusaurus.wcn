---
title: Customer
sidebar_position: 13
---

:::note
**`Menu ini digunakan untuk mendata dan mengelola seluruh informasi pelanggan (customer) perusahaan.`**  Pelanggan ini bisa berupa individu, toko, perusahaan, distributor, atau entitas lain yang melakukan pembelian produk atau jasa dari perusahaan.

Halaman Customer dapat dilihat pada **Gambar 2.13.1**
:::

<img src="/img/commerce/masterdata/customer1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.1 Halaman Customer
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah Customer.|Tekan tombol Add Customer.|
|Download|Mengunduh Customer dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah Customer dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat informasi Customer secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting Customer.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus Customer.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa Customer sekaligus.|Pilih Customer baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Customer ?`

**`Berikut petunjuk dalam menambahkan Customer :`**

1. **`Tekan tombol`** ***Add Customer*** dan pengguna akan diarahkan pada halaman penambahan Customer seperti pada **Gambar 2.13.2**.

### Customer `Info ?`

:::note
**`Bagian utama dari form`** saat menambahkan customer baru ke dalam sistem.
:::

<img src="/img/commerce/masterdata/customer2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.2 Halaman Add Customer Info
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Customer|Formulir Customer akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Customer|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Group|Kategori atau klasifikasi pelanggan, diambil dari menu Group.|Tidak
|Name|Nama pelanggan atau perusahaan.|Ya
|ID|Nomor atau kode unik untuk customer|Ya
|Credit Limit Sales|Batas maksimal nilai penjualan (dalam bentuk piutang) yang boleh diberikan ke customer.|Tidak
|Credit Limit Delivery|Batas maksimal nilai pengiriman yang boleh dilakukan sebelum pembayaran.|Tidak
|Currency|Mata uang yang digunakan untuk transaksi dengan customer ini.|Tidak
|NPWP Number|Nomor Pokok Wajib Pajak (NPWP) milik customer.|Tidak
|Default Tax|Pajak standar yang diterapkan pada transaksi customer ini.|Tidak
|Default Weight|Berat standar (misalnya per unit produk) untuk penghitungan logistik/pengiriman.|Tidak
|Receive Day|Hari tertentu customer ini menerima pengiriman barang.|Tidak

### Customer `Product ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mencatat produk-produk yang terkait secara khusus dengan pelanggan tertentu.`**
:::

<img src="/img/commerce/masterdata/customer3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.3 Halaman Add Customer Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Product|Produk yang ingin dikaitkan dengan customer ini.|Tidak
|MSQ (Minimum Sales Quantity)|Jumlah minimum unit produk yang bisa dijual ke customer ini dalam satu kali transaksi.|Tidak
|Price (Per Unit)|Harga khusus per unit produk untuk customer ini.|Tidak
|Delivery Tolerance Type|Jenis toleransi pengiriman yang diperbolehkan terhadap jumlah pesanan.|Tidak
|Delivery Tolerance|Nilai toleransi jumlah yang boleh dikirim lebih/kurang dari pesanan.|Tidak

### Customer `Address ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mencatat alamat yang terkait secara khusus dengan pelanggan tertentu.`**
:::

<img src="/img/commerce/masterdata/customer4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.4 Halaman Add Customer Address
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Bill To Address|Alamat penagihan untuk customer, biasanya digunakan pada dokumen invoice atau faktur.|Tidak|
|Ship To Address|Alamat pengiriman barang ke customer.|Tidak
|Address Name|Nama label atau identitas alamat, misalnya: ***“Kantor Pusat”***, dll.|Tidak
|NITKU Number (22 Digits)|Nomor identitas lokasi alamat untuk keperluan pajak atau kepatuhan, wajib 22 digit.|Tidak
|Address|Alamat lengkap tempat penagihan dilakukan.|Tidak
|Note|Catatan tambahan terkait alamat ini, seperti instruksi khusus atau info tambahan.|Tidak
|Berikat Zone|Centang jika alamat ini berada dalam zona berikat (bonded zone), yaitu wilayah dengan perlakuan khusus bea cukai.|Tidak
|Default|Menandai alamat ini sebagai alamat utama (default) untuk penagihan. Hanya satu alamat yang boleh ditetapkan sebagai default.|Tidak

### Customer `Bank ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mencatat informasi rekening bank milik customer yang akan digunakan untuk transaksi pembayaran, pengembalian dana, atau referensi administratif.`**
:::

<img src="/img/commerce/masterdata/customer5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.5 Halaman Add Customer Bank
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Bank|Nama bank tempat customer membuka rekening, misalnya BCA, Mandiri, dll.|Tidak
|Account |Akun pemilik rekening.|Tidak
|Address|Alamat pemilik rekening.|Tidak
|Note|Catatan tambahan, seperti jenis rekening|Tidak
|Default|Menandai rekening ini sebagai default account, yaitu rekening utama yang akan digunakan jika customer memiliki lebih dari satu rekening.|Tidak

### Customer `Term of Payment ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mengatur syarat atau ketentuan pembayaran yang disepakati antara perusahaan dan customer.`**
:::

<img src="/img/commerce/masterdata/customer6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.6 Halaman Add Customer Term of Payment
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Term of Payment|Nama atau jenis syarat pembayaran yang disepakati.|Tidak
|Interval|Jangka waktu pembayaran dalam jumlah hari sejak tanggal invoice diterbitkan.|Tidak
|Description|Deskripsi tambahan yang menjelaskan detail dari syarat pembayaran tersebut.|Tidak
|Default|Centang untuk menandai bahwa syarat pembayaran ini akan digunakan secara otomatis (default) untuk customer jika tidak dipilih syarat lain.|Tidak

### Customer `Contact Person ?`

:::note
**`Bagian dari data customer yang berfungsi untuk mengatur syarat atau ketentuan pembayaran yang disepakati antara perusahaan dan customer.`**
:::

<img src="/img/commerce/masterdata/customer7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.13.7 Halaman Add Customer Term of Payment
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama lengkap orang yang menjadi kontak dari pihak customer.|Tidak
|Email|Alamat email aktif dari contact person.|Tidak
|Phone|Nomor telepon atau ponsel yang bisa dihubungi langsung.|Tidak
|Address|Alamat tempat contact person berada, bisa berupa kantor atau lokasi operasional.|Tidak
|Note|Catatan tambahan terkait contact person ini.|Tidak
|Default|Menentukan apakah orang ini adalah kontak utama (default) customer.|Tidak

2. **`Isilah data penambahan Customer`** lalu tekan tombol ***Submit***.