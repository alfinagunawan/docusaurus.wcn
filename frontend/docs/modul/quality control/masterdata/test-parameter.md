---
title: Test Parameter
sidebar_position: 2
---

:::note
**`Menu ini digunakan untuk mengelola daftar parameter pengujian yang menjadi acuan dalam proses pemeriksaan kualitas produk.`**

Halaman Test Parameter dapat dilihat pada **Gambar 2.2.1**
:::

<img src="/img/qc/masterdata/testparameter1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.2.1 Halaman Test Parameter
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah test parameter.|Tekan tombol Add Test Parameter.|
|Download|Mengunduh test parameter dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah test parameter dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Edit|Menyunting test parameter.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus test parameter.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa test parameter sekaligus.|Pilih test parameter baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Test Parameter ?`

**`Berikut petunjuk dalam menambahkan Test Parameter :`**

1. **`Tekan tombol`** ***Add Test Parameter*** dan pengguna akan diarahkan pada halaman penambahan Test Parameter seperti pada **Gambar 2.2.2**.

<img src="/img/qc/masterdata/testparameter2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.2.2 Halaman Add Test Parameter
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Test Parameter|Formulir Test Parameter akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Test Parameter|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama lengkap parameter pengujian.|Ya
|Alias|Singkatan atau nama alternatif dari parameter yang lebih ringkas atau sesuai kebiasaan internal.|Ya
|Method|Metode atau standar pengujian yang digunakan.|Ya
|Type|Menentukan format data hasil pengujian, apakah berupa ***numerik*** (angka) atau ***alphanumerik*** (kombinasi huruf dan angka).|Ya
|Display Only|Jika dicentang, parameter **tidak akan ditampilkan** pada dokumen ***Certificate of Analysis (CoA)***.|Tidak

2. **`Tentukan`** ***Type***, dan sistem akan menampilkan form tambahan yang sesuai untuk pengisian nilai parameter.

### Numeric

<img src="/img/qc/masterdata/testparameter3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.2.3 Form Type Numeric
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Min Spec|Nilai spesifikasi minimum yang dapat diterima untuk parameter uji tersebut.|Ya
|Max Spec|Nilai spesifikasi maksimum yang dapat diterima untuk parameter uji tersebut.|Ya

### Alphanumeric

<img src="/img/qc/masterdata/testparameter4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.2.4 Form Type Alphanumeric
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Name|Nama atau label kategori nilai parameter. Contohnya : ***Warna Minyak, Aroma, Kondisi Fisik, atau deskripsi lain yang relevan***.|Ya
|Value|Pilihan atau status hasil uji yang bersifat deskriptif (alphanumeric), biasanya terdiri dari dua opsi utama : ***In Spec*** — Menunjukkan hasil uji sesuai dengan spesifikasi yang ditetapkan. ***Out Spec*** — Menunjukkan hasil uji tidak sesuai dengan spesifikasi yang ditetapkan.|Ya

3. **`Isilah data penambahan Test Parameter`** lalu tekan tombol ***Submit***.