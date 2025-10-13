---
title: Tank
sidebar_position: 8
---

:::note
**`Menu ini digunakan untuk mencatat, mengelola, dan memantau informasi mengenai tangki penyimpanan yang digunakan dalam proses produksi atau penyimpanan bahan baku, bahan setengah jadi, atau produk jadi`**.

Halaman Tank dapat dilihat pada **Gambar 2.8.1**
:::

<img src="/img/commerce/masterdata/tank1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.8.1 Halaman Tank
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah tangki.|Tekan tombol Add Tank.|
|Download|Mengunduh tangki dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah tangki dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Edit|Menyunting tangki.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus tangki.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa tangki sekaligus.|Pilih tangki baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Tank ?`

**`Berikut petunjuk dalam menambahkan Tank :`**

1. **`Tekan tombol`** ***Add Tank*** dan pengguna akan diarahkan pada halaman penambahan tangki seperti pada **Gambar 2.8.2**.

<img src="/img/commerce/masterdata/tank2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.8.2 Halaman Add Tank
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Tank|Formulir Tank akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Tank|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama atau kode identitas unik untuk tangki.|Ya
|Product Type|Menentukan jenis produk atau bahan yang boleh/akan disimpan di dalam tangki.|Ya
|Height|Tinggi fisik tangki (biasanya dalam meter).|Ya
|Type|Jenis tangki berdasarkan fungsi atau desainnya.|Ya
|Constant (T/m)|Nilai konversi tetap dari tinggi (meter) ke berat (ton). ***Artinya*** : berapa ton isi tangki per satu meter tinggi cairan.|Ya
|Level Address|Alamat sensor level atau titik pembacaan tangki dari sistem SCADA/PLC.|Ya
|Minimum Capacity (T)|Kapasitas minimum (dalam ton) yang dianggap sebagai batas aman atau batas proses minimum.|Ya

2. **`Isilah data penambahan Tank`** lalu tekan tombol ***Submit***.