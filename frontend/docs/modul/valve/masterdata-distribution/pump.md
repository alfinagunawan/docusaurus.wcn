---
title: Pump
sidebar_position: 3
---

:::note
**`Menu Pump digunakan untuk menambahkan dan mengelola data pompa yang digunakan dalam proses pengisian atau pemindahan produk ke tangki`**. Setiap pompa dapat dikaitkan dengan jalur pengisian tertentu (Line) dan memiliki peran penting dalam memastikan distribusi produk berjalan lancar dan sesuai alur.

Halaman menu Pump dapat dilihat pada **Gambar 1.3**.
:::

<img src="/img/valve/masterdata/pump 1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 1.3 Halaman Menu Pump
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah pompa.|Tekan tombol Add Pump.|
|Download|Mengunduh pompa dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah pompa dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Edit|Menyunting pompa.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus pompa.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa pompa sekaligus.|Pilih pompa yang ingin dihapus dengan cara menekan baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Pump ?`

**`Berikut petunjuk dalam menambahkan Pump :`**

1. **`Tekan tombol`** ***Add Pump*** dan pengguna akan diarahkan pada halaman penambahan pompa seperti pada **Gambar 1.3.1**.

<img src="/img/valve/masterdata/line 2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 1.3.1 Halaman Add Pump
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Pump|Formulir Pump akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Pump|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama pompa.|Ya
|Product Type|Jenis produk atau tipe pompa yang digunakan|Ya
|Line|Jalur produksi yang menggunakan pompa tersebut. Bisa memilih lebih dari satu jalur.|Ya
|Open Address|Alamat input/output (IO address) untuk sinyal "***Open***" pompa.|Ya
|Resume Address|Alamat untuk sinyal melanjutkan (***resume***) operasi pompa|Ya
|Pause Address|Alamat untuk sinyal jeda (***pause***) operasi pompa.|Ya
|Error Address|Alamat sinyal untuk mendeteksi kesalahan (***error***) pada pompa.|Ya
|Maint ON Address|Alamat untuk sinyal aktifnya mode pemeliharaan (***maintenance ON***).|Ya
|Maint OFF Address|Alamat untuk sinyal nonaktifnya mode pemeliharaan (***maintenance OFF***).|Ya

2. **`Isilah data penambahan Pump`** lalu tekan tombol ***Submit***.