---
title: Checklist Item
sidebar_position: 3
---

:::note
**`Menu Checklist Item digunakan untuk mengatur daftar item pemeriksaan`** yang digunakan oleh berbagai pihak (***TSC, Security, QC***) dalam proses distribusi dan operasional kendaraan.  Halaman menu License dapat dilihat pada **Gambar 2.3.1**.
:::

<img src="/img/masterdata/checklist/checklist 1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.3.1 Halaman Menu Driver
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah item pemeriksaan.|Tekan tombol Add Checklist Item.|
|Download|Mengunduh item pemeriksaan dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah item pemeriksaan dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Checklist Item Type|Pemilihan tipe pihak yang melakukan item pemeriksaan.|Tekan selektor pada tab pemilihan tipe pihak.
|Edit|Menyunting item pemeriksaan.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus item pemeriksaan.|Tekan tombol Delete pada kolom Action.|
|Multiple Delete|Menghapus beberapa item pemeriksaan sekaligus.|Pilih item pemeriksaan yang ingin dihapus dengan cara menekan baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Checklist Item ?`

**`Berikut petunjuk dalam menambahkan Checklist Item :`**

1. **`Tekan tombol`** ***Add Checklist Item*** dan pengguna akan diarahkan pada halaman penambahan item pemeriksaan seperti pada **Gambar 2.3.1.1**.

<img src="/img/masterdata/checklist/checklist 2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.3.1.1 Halaman Add checklist
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Duplicate Checklist Item|Formulir Checklist Item akan terisi Otomatis berdasarkan data yang sudah terdaftar|Tekan tombol Duplicate Checklist Item|

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Category|Kategori utama dari checklist item. Bisa dipilih dari daftar yang tersedia, atau ditulis manual jika kategori belum ada (misalnya: "Kondisi Manhole", "Kebersihan", dll).|Ya
|Name|Nama spesifik dari item yang akan diperiksa. Misalnya: “Segel”, “Bensin”, “Gembok”.|Ya
|Type|Menentukan siapa yang bertanggung jawab terhadap item ini, seperti ***TSC In, QC, Security Out***, dll. Biasanya mencerminkan bagian mana yang akan melakukan pemeriksaan.|Ya
|Vehicle Type|Menunjukkan jenis kendaraan yang relevan terhadap item ini. Biasanya pilihan antara ***Bulk, Non Bulk***, atau keduanya.|Ya
|Fulfill|Deskripsi kondisi ideal atau target yang harus dicapai agar item dianggap “terpenuhi” atau lolos pemeriksaan.|Ya
|Not Fulfill|Deskripsi kondisi gagal atau tidak memenuhi standar. Berguna untuk dokumentasi dan perbandingan jika item gagal diperiksa.|Ya
|Period|Frekuensi pemeriksaan, diisi dalam angka. Misalnya "1" jika item diperiksa per 1 tahun, atau angka lain sesuai kebutuhan.|Ya
|Unit|Satuan pengukuran atau keterangan (misalnya: unit visual, liter, checklist, dll) yang digunakan untuk menilai item ini.|Ya
|Photo Required|Menentukan apakah pengecekan item ini **harus dilampirkan foto** (Yes) atau tidak (No). Cocok untuk bukti visual saat audit.|Ya

2. **`Isilah data penambahan Checklist Item`** lalu tekan tombol ***Submit***.