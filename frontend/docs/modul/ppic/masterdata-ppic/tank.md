---
title: Tank
sidebar_position: 6
---

:::note
**`Menu Tank digunakan untuk mencatat data terkait tangki penyimpanan`** yang digunakan dalam proses penyimpanan bahan baku.

Halaman menu Tank dapat dilihat pada **Gambar 2.6.1**.
:::

<img src="/img/ppic/masterdata/tank1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.6.1 Halaman Menu Tank
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
|Multiple Delete|Menghapus beberapa tangki sekaligus.|Pilih tangki yang ingin dihapus dengan cara menekan baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Tank ?`

**`Berikut petunjuk dalam menambahkan Tank :`**

1. **`Tekan tombol`** ***Add Tank*** dan pengguna akan diarahkan pada halaman penambahan tanki seperti pada **Gambar 2.6.2**.

<img src="/img/ppic/masterdata/tank2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.6.2 Halaman Add Tank
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Tank|Formulir Tank akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Tank|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama tangki.|Ya
|Product Type|Tipe Produk|Ya
|Height (m)|Tinggi fisik tangki dalam meter. Digunakan untuk perhitungan volume.|Ya
|Constant (Ton/meter)|Nilai konversi antara tinggi dan berat isi tangki.|Ya
|Minimum Stock (ton)|Batas minimum stok yang disarankan/diperbolehkan. Dapat digunakan untuk peringatan jika stok terlalu rendah.|Tidak
|Type |Jenis metode pengukuran level isi tangki: Radar (otomatis dengan sensor radar) atau Sounding (manual).|Ya

:::danger Tipe Tangki
Tentukan tipe dari tangki pada pemilihan ***Radar*** atau ***Sounding***.
- ***`Radar`*** : Tangki menggunakan sensor radar untuk mengukur ketinggian isi di dalam tangki secara otomatis dan real-time. Cocok untuk pengukuran presisi tinggi.
- ***`Sounding`*** : Tangki menggunakan metode sounding manual atau semi-manual (seperti pengukuran dengan alat ukur mekanis). Umumnya digunakan pada sistem yang belum dilengkapi otomatisasi penuh.
:::

### Type Radar

- **`Tentukan pemilihan Type pada Radar`** sistem akan mengaktifkan form isian seperti pada **Gambar 2.6.3**.

<img src="/img/ppic/masterdata/tank3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.6.3 Form Radar tidak digunakan dalam sistem manajemen valve
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Level Address|**Alamat input/output dari PLC** (***Programmable Logic Controller***) yang mengacu pada data level (ketinggian) isi dalam tangki.|Ya

### Type Sounding

:::note
Tangki menggunakan metode sounding manual atau semi-manual (seperti pengukuran dengan alat ukur mekanis). Umumnya digunakan pada sistem yang belum dilengkapi otomatisasi penuh.
:::

2. **`Isilah data penambahan Tank`** lalu tekan tombol ***Submit***.