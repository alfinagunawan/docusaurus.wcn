---
title: Return Sales
sidebar_position: 7
---

:::note
**`Menu ini digunakan untuk mencatat pengembalian barang oleh customer setelah proses penjualan selesai.`** 

Halaman Return Sales dapat dilihat pada **Gambar 7.7.1**.
:::

<img src="/img/commerce/sales/return1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.7.1 Halaman Return Sales
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data pengembalian barang.|Tekan tombol Add Return Sales.
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data pengembalian barang secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|Edit|Menyunting data pengembalian barang.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data pengembalian barang.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data pengembalian barang sekaligus.|Pilih data pengembalian barang baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Return Sales ?`
**`Berikut petunjuk dalam menambahkan data Return Sales : `**

1. **`Tekan tombol`** ***Add Return Sales*** dan pengguna akan diarahkan pada halaman penambahan data pengembalian barang seperti pada **Gambar 7.7.2**.

<img src="/img/commerce/sales/return2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.7.2 Halaman Add Return Sales
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Return By|Nama orang atau pihak (bisa customer atau perwakilannya) yang mengembalikan barang.|Ya
|Return Date|Tanggal saat barang dikembalikan atau tanggal dokumen retur dibuat.|Ya
|Delivery Order|Pemilihan nomor delivery order.|Ya
|Note|Kolom catatan untuk menjelaskan alasan retur, kondisi barang, atau instruksi tambahan dari customer/tim internal.|Tidak
|File|Tempat untuk mengunggah dokumen pendukung seperti foto barang yang dikembalikan, surat pengantar retur, tanda terima dari gudang, dll.|Tidak

2. **`Isilah data penambahan Return Sales`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Return Sales ?`

**`Petunjuk menyetujui dan menolak Return Sales : `**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Return Sales seperti pada **Gambar 7.7.4**.

<img src="/img/commerce/sales/return4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/return5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.7.4 Halaman Details Return Sales
</p>

2. **`Tentukan Return Sales`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

3. **`Saat melakukan approve pada data yang dipilih`**, sistem akan menampilkan pop-up peringatan seperti yang ditunjukkan pada **Gambar 7.7.5.**

<img src="/img/commerce/sales/return6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.7.5 Halaman Details Return Sales
</p>

:::danger peringatan
- **`Tindakan ini bersifat final/permanen`**
- **`Setelah order ditutup, kamu tidak bisa mengubah, membatalkan, atau memproses ulang order tersebut`**
- **`Harus benar-benar yakin bahwa proses bisnis sudah selesai`**

***Jika dicentang***, Order yang menjadi referensi dari dokumen ini (misalnya SO, PO, atau Pick List) juga akan ditutup otomatis.

***ika tidak dicentang***, hanya dokumen saat ini saja yang ditutup, tanpa mempengaruhi order referensinya.
:::

## Pembatalan `Return Sales  ?`

:::note
**`Proses untuk membatalkan Return Sales yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses Return Sales **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Return Sales :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Return Sales seperti pada **Gambar 7.7.6**.

<img src="/img/commerce/sales/return7.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/return8.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.7.6 Tombol Cancel Halaman Details Return Sales
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Return Sales telah dibatalkan.