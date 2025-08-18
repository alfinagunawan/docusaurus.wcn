---
title: Production Order
sidebar_position: 6
---

:::note
Menu ini digunakan untuk ***menindaklanjuti rencana produksi yang sudah disetujui (approved) di Production Planning menjadi perintah produksi resmi***.

Halaman menu Production Order dapat dilihat pada **Gambar 3.6.1**.
:::

<img src="/img/ppic/apps/productionorder1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.6.1 Halaman Menu Production Order
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah Production Order.|Tekan tombol Add Production Order|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data Production Order secara rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting data Production Order.|Tekan tombol Edit pada kolom Action.
|Approve|Menyetujui data Production Order.|Tekan tombol Approve pada kolom Action.
|Cancel|Membatalkan data Production Order.|Tekan tombol Cancel pada kolom Action.
|Delete|Menghapus data Production Order.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data Production Order sekaligus.|Pilih data Production Order baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Production Order ?`

**`Berikut petunjuk dalam menambahkan Production Order :`**

1. **`Tekan tombol`** ***Add Production Order*** dan pengguna akan diarahkan ke halaman penambahan Production Order seperti pada **Gambar 3.6.2**.

<img src="/img/ppic/apps/productionorder2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.6.2 Halaman Add Production Order
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Product|Produk utama yang akan diproduksi dalam perintah produksi ini.|Ya
|Production Line|Jalur produksi atau lini mesin yang akan digunakan untuk memproses produk tersebut.|Ya
|Production Planning|Nomor atau referensi rencana produksi yang menjadi sumber pembuatan Production Order ini.|Ya

2. **`Isikan data terkait`** ***Product, Production Line, dan Production Planning*** yang akan dibuat menjadi order. Setelah itu, sistem akan menampilkan form tambahan seperti yang ditunjukkan pada **Gambar 3.6.3**.

<img src="/img/ppic/apps/productionorder3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.6.3 Form Tambahan
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Component (Feeds)|Menampilkan bahan baku atau komponen yang akan digunakan dalam proses produksi.|Ya
|Quantity|Kolom input untuk mengisi jumlah aktual bahan baku yang akan digunakan (dalam kilogram).|Ya
|Tank|Pilihan lokasi atau tangki penyimpanan dari mana bahan baku akan diambil.|Ya
|Finished|Kolom untuk mengisi jumlah produk jadi yang dihasilkan setelah proses produksi selesai (dalam kilogram).|Ya
|Storage|Pilihan lokasi atau tangki tempat produk jadi akan disimpan setelah proses selesai.|Ya

3. **`Isilah data terkait penambahan Production Order`** lalu tekan tombol ***Submit***.

## Setuju & Tolak `Production Order ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Production Order :`**

1. **`Tekan tombol`** ***Approve*** untuk menyetujui Production Order dan ***Reject*** untuk menolak Production Order pada kolom Action seperti pada **Gambar 3.6.4**.

<img src="/img/ppic/apps/productionorder4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.6.4 Tombol Approve dan Reject
</p>