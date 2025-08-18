---
title: Product
sidebar_position: 5
---

:::note
**`Menu ini digunakan untuk menambahkan informasi detail mengenai suatu produk ke dalam sistem.`** Produk ini dapat berupa barang (item), jasa (service), atau entitas lain seperti tenaga kerja (labour) atau perjalanan (travel), tergantung pada jenis bisnis.

Halaman Product dapat dilihat pada **Gambar 2.5.1**
:::

<img src="/img/commerce/masterdata/product1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.6.1 Halaman Product
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah produk.|Tekan tombol Add Product.|
|Download|Mengunduh produk dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah produk dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat informasi produk secara detail.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting produk.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus produk.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa produk sekaligus.|Pilih produk baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Product ?`

**`Berikut petunjuk dalam menambahkan Product :`**

1. **`Tekan tombol`** ***Add Product*** dan pengguna akan diarahkan pada halaman penambahan produk seperti pada **Gambar 2.5.2**.

<img src="/img/ppic/masterdata/product2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/ppic/masterdata/product3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.2 Halaman Add Product
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Product|Formulir Product akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Product|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Category|Pilihan kategori produk yang sebelumnya sudah dibuat di menu Category (Contoh : ***SAP, In Process, Incoming Material, Finished Goods***).|Ya
|Product Type|Menentukan kelompok atau jenis dari produk yang akan ditambahkan.|Tidak
|Name|Nama unik dan deskriptif dari produk.|Ya
|Oil Type|Klasifikasikan jenis minyak berdasarkan karakteristik atau penggunaan spesifiknya di dalam sistem.|Tidak
|ID|Nomor atau identitas unik|Ya
|Code|Kode identifikasi produk.|Tidak
|Group|Mengelompokkan produk berdasarkan kategori besar atau klasifikasi tertentu|Tidak
|Description|Penjelasan singkat tentang produk.|Tidak
|Type|Jenis produk|Tidak
|Batch Code|Menandai atau mengidentifikasi kelompok produksi atau lot produk yang dibuat dalam waktu, proses, atau kondisi yang sama.|Tidak
|Manage Item By|Menentukan metode pengelolaan unit produk di dalam sistem, khususnya dalam hal pelacakan stok, transaksi, dan identifikasi unit.|Tidak
|Inventory UoM|Satuan yang digunakan dalam gudang (misal: pcs, liter, kg).|Tidak
|Inventory Level Requirement|Level stok wajib minimal|Tidak
|Inventory Level Min|Stok minimum yang diizinkan.|Tidak
|Inventory Level Max|Stok maksimum yang sebaiknya tidak dilampaui.|Tidak
|Purchase UoM|Satuan pembelian (misal: box, roll).|Tidak
|Item Per Purchase|Jumlah item per unit pembelian.|Tidak
|Sales UoM|Satuan penjualan.|Tidak
|Item Per Sales|Jumlah item per unit penjualan.|Tidak
|BOM Type|Menentukan jenis Bill of Materials yang digunakan.|Tidak
|Production Quantity|Jumlah unit produk akhir yang akan dihasilkan dari 1 kali proses produksi berdasarkan BOM ini. Misalnya: 1 liter, 1 dus, 1 unit, dll.|Tidak
|Side Product|Komponen hasil samping yang ikut dihasilkan dalam proses produksi (jika ada).|Tidak
|Product|Produk/komponen yang menjadi bagian dari BOM|Tidak
|Percentage|Persentase komposisi dari masing-masing produk dalam BOM.|Tidak
|Type|Jenis penggunaan dari komponen.|Tidak
|Issue Method|Cara sistem mengurangi stok saat komponen digunakan dalam produksi.|Tidak

:::note mode
Dalam pembuatan produk BOM, pengguna dapat menentukan mode penambahan produk berdasarkan :
- **`Percentage`** : ***Persentase kontribusi suatu produk (bahan baku)*** terhadap produk akhir yang dihasilkan.
- **`Quantity`** : ***Jumlah pasti dari setiap komponen*** yang dibutuhkan untuk memproduksi 1 unit produk jadi.

<img src="/img/ppic/masterdata/product4.png" alt="Deskripsi gambar" class="center" />

:::

2. **`Isilah data penambahan Product`** lalu tekan tombol ***Submit***.