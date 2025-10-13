---
title: Pick List
sidebar_position: 5
---

:::note
**`Menu ini digunakan untuk mengambil (mem-“pick”) barang-barang dari stok berdasarkan permintaan penjualan yang sudah diterima dan disetujui (misalnya dari Sales Order).`** 

Halaman Pick List dapat dilihat pada **Gambar 7.5.1**.
:::

<img src="/img/commerce/sales/pick1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.5.1 Halaman Pick List
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data pick list.|Tekan tombol Add Pick List.
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data pick list secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|Edit|Menyunting data pick list.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data pick list.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data pick list sekaligus.|Pilih data pick list baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Pick List ?`
**`Berikut petunjuk dalam menambahkan data Pick List : `**

1. **`Tekan tombol`** ***Add Pick List*** dan pengguna akan diarahkan pada halaman penambahan data Pick List seperti pada **Gambar 7.5.2**.

<img src="/img/commerce/sales/pick2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.5.2 Halaman Add Pick List
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Posting Date|Tanggal pencatatan picklist ke dalam sistem.|Ya
|Sales Type|Jenis penjualan yang terkait dengan picklist.|Tidak
|Note|Catatan umum terkait picklist.|Tidak
|Remark|Keterangan tambahan yang sifatnya lebih singkat sebagai penanda khusus.|Tidak
|Internal Note|Catatan internal yang hanya bisa dilihat oleh tim perusahaa (tidak tampil di dokumen resmi).|Tidak

2. **`Pilih Sales Type pada field`** ***Sales Type***, dan sistem akan menampilkan detail produk, seperti ditunjukkan pada **Gambar 7.5.3**.

<img src="/img/commerce/sales/pick3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.5.3 Form Detail Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Customer|Nama pelanggan yang terkait dengan produk dalam picklist.|Tidak
|PO Number|Nomor Purchase Order (PO) dari customer yang menjadi dasar pemesanan produk.|Tida
|Address|Alamat tujuan pengiriman produk.|Tidak
|Sales Order|Nomor Sales Order (SO) internal yang menjadi acuan transaksi.|Tidak
|Product Name|Nama produk/jasa yang akan dipick.|Tidak
|Product ID|Kode unik produk dari master data.|Tidak
|Qty Pick List|Jumlah barang yang harus disiapkan/dipick untuk pesanan ini.|Tidak
|Delivery Date|Tanggal barang dijadwalkan dikirim ke customer.|Tidak
|Note|Catatan tambahan khusus terkait produk yang dipick.|Tidak

3. **`Isilah data penambahan Pick List`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Pick List ?`

**`Petunjuk menyetujui dan menolak Pick List : `**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Pick List seperti pada **Gambar 7.5.4**.

<img src="/img/commerce/sales/pick4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/pick5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.5.4 Halaman Details Pick List
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|On Need Approval|Jika diaktifkan → menandai bahwa approval dibutuhkan.|Tekan tombol On Need Approval
|1st Approval|Disetujui oleh pihak pertama, misalnya ***supervisor gudang, staff logistik, atau QC***. Mengecek ketersediaan stok, kesesuaian order, dsb.|Tekan tombol 1st Approval
|2nd Approval|Disetujui oleh pihak kedua, biasanya ***level manager atau kepala divisi***.|Tekan tombol 2nd Approval

2. **`Tentukan Pick List`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

## Pembatalan `Pick List ?`

:::note
**`Proses untuk membatalkan Pick List yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses Pick List **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Pick List :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Pick List seperti pada **Gambar 7.5.5**.

<img src="/img/commerce/sales/pick6.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/pick7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.5.5 Tombol Cancel Halaman Details Pick List
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Pick List telah dibatalkan.