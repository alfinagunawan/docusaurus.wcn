---
title: Production Line
sidebar_position: 11
---

:::note
**`Menu ini digunakan untuk mengelola dan mendefinisikan jalur atau lini produksi dalam suatu pabrik.`** 

Halaman Production Line dapat dilihat pada **Gambar 2.11.1**
:::

<img src="/img/ppic/masterdata/production1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.11.1 Halaman Production Line
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah lini produksi.|Tekan tombol Add Production Line.|
|Download|Mengunduh lini produksi dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah lini produksi dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Edit|Menyunting lini produksi.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus lini produksi.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa lini produksi sekaligus.|Pilih lini produksi baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Production Line ?`

**`Berikut petunjuk dalam menambahkan Production Line :`**

1. **`Tekan tombol`** ***Add Production Line*** dan pengguna akan diarahkan pada halaman penambahan lini produksi seperti pada **Gambar 2.11.2**.

<img src="/img/ppic/masterdata/production2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.11.2 Halaman Add Production Line
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Production Line|Formulir Production Line akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Production Line|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama dari lini produksi. Contoh: ***Blending Line A, Filling Line 1***.|Ya
|Process Type|Jenis proses produksi yang dilakukan di lini ini :🔹 ***Continuous*** – Proses produksi berjalan terus-menerus tanpa jeda (misal: penyulingan, pemompaan.) 🔹 ***Batch*** – Produksi dilakukan per kelompok atau per siklus (batch).|Ya
|Batch Capacity (ton/batch)|Kapasitas maksimum produksi dalam satu batch, dihitung dalam ton.|Tidak
|Production Department|Departemen atau divisi yang bertanggung jawab atas lini produksi ini.|Tidak
|Product Type|Jenis produk yang diproses di lini ini.|Tidak
|Parameters|Parameter kontrol kualitas atau operasional yang digunakan pada lini ini.|Tidak
|Installed Machine Capacity (MTPH)|Kapasitas mesin yang terpasang di lini ini, dihitung dalam Metric Ton per Hour (ton per jam). Ini adalah kapasitas teoritis mesin.|Ya
|Installed Machine Cpacity (MTPD)|Kapasitas mesin terpasang dalam Metric Ton per Day (ton per hari). Biasanya dihitung dari kapasitas per jam dikalikan durasi operasi per hari.|Ya
|Actual Machine Capacity (MTPH)|Kapasitas aktual mesin berdasarkan performa nyata di lapangan, dalam ton per jam. Bisa lebih kecil dari installed capacity karena efisiensi, downtime, atau faktor lain.|Ya
|Actual Machine Capacity (MTPD)|Kapasitas aktual mesin dalam ton per hari. Mengacu pada performa nyata, digunakan untuk perencanaan produksi yang realistis.|Ya
|SKU Code|Kode SKU (Stock Keeping Unit) dari produk utama yang diproduksi di lini ini.|Tidak
|Notes|Catatan tambahan jika ada informasi khusus terkait lini produksi ini.|Tidak

2. **`Isilah data penambahan Production Line`** lalu tekan tombol ***Submit***.