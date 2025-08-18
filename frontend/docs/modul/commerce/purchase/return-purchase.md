---
title: Return Purchase
sidebar_position: 5
---

:::note
**`Menu ini digunakan untuk mencatat dan mengelola proses pengembalian barang ke supplier yang sebelumnya telah dibeli melalui Purchase Order (PO). `**

Halaman Return Purchase dapat dilihat pada **Gambar 6.5.1**.
:::

<img src="/img/commerce/purchase/return1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.5.1 Halaman Return Purchase
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data pengembalian barang.|Tekan tombol Add Good Receipt.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data pengembalian barang secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting data pengembalian barang.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data pengembalian barang.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data pengembalian barang sekaligus.|Pilih data pengembalian barang baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Return Purchase ?`

**`Berikut petunjuk dalam menambahkan Return Purchase :`**

1. **`Tekan tombol`** ***Add Return Purchase*** dan pengguna akan diarahkan pada halaman penambahan data pengembalian barang seperti pada **Gambar 6.5.2**.

<img src="/img/commerce/purchase/return2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.5.2 Halaman Add Return Purchase
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Return By|Nama pengguna atau staff yang melakukan proses pengembalian barang.|Ya
|Return Date|Tanggal saat barang dikembalikan ke supplier.|Ya
|Purchase Order|Nomor atau referensi PO (Purchase Order) terkait barang yang dikembalikan.|Ya
|Note|Catatan tambahan terkait alasan pengembalian atau instruksi khusus (misalnya: “kemasan rusak”, “barang tidak sesuai spesifikasi”, dsb).|Tidak
|File|	Lampiran dokumen pendukung, seperti foto kondisi barang yang dikembalikan, bukti surat jalan pengembalian, atau form retur fisik yang ditandatangani.|Tidak

2. **`Pilih Purchase Order pada field`** ***Purchase Order***, dan sistem akan menampilkan detail produk yang terdapat pada PO tersebut, seperti ditunjukkan pada **Gambar 6.5.3**.

<img src="/img/commerce/purchase/return3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.5.3 Form Detail Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Return Qty|Jumlah barang yang dikembalikan ke supplier.|Ya
|Note (Product)|Catatan atau alasan pengembalian untuk masing-masing produk.|Tidak

3. **`Isilah data penambahan Return Purchase`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Return Purchase ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Return Purchase :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Return Purchase seperti pada **Gambar 6.5.4**.

<img src="/img/commerce/purchase/return4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/return5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.5.4 Halaman Details Return Purchase
</p>

2. **`Tentukan pengembalian barang`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

3. **`Sistem akan menampilkan popup Peringatan`** : ***This action will close the order and cannot be undone!*** (Tindakan ini akan menutup pesanan dan tidak dapat dibatalkan!) seperti yang ditunjukan pada **Gambar 6.5.5**. 

<img src="/img/commerce/purchase/return6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.5.5 Popup peringatan Approve
</p>

4. **`Centang kolom checkbox`** lalu tekan tombol ***Submit***.