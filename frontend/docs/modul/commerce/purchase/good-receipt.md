---
title: Good Receipt
sidebar_position: 4
---

:::note
**`Menu ini digunakan untuk mencatat penerimaan barang yang datang dari supplier`** berdasarkan ***Purchase Order (PO)*** atau ***Purchase Request (PR)*** yang telah dibuat sebelumnya.

Halaman Good Receipt dapat dilihat pada **Gambar 6.4.1**.
:::

<img src="/img/commerce/purchase/good1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.4.1 Halaman Good Receipt
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data penerimaan barang.|Tekan tombol Add Good Receipt.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data penerimaan barang secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Delete|Menghapus data penerimaan barang.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data penerimaan barang sekaligus.|Pilih data penerimaan barang baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Good Receipt ?`

**`Berikut petunjuk dalam menambahkan Good Receipt :`**

1. **`Tekan tombol`** ***Add Good Receipt*** dan pengguna akan diarahkan pada halaman penambahan data penerimaan barang seperti pada **Gambar 6.4.2**.

<img src="/img/commerce/purchase/good2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.4.2 Halaman Add Good Receipt
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Supplier|Pilih nama supplier yang mengirim barang. Ini akan menentukan daftar Purchase Order (PO) yang tersedia.|Ya
|Posting Date|Tanggal dokumen pencatatan dilakukan di sistem. Bisa berbeda dengan tanggal barang diterima.|Ya
|Received By|Nama orang yang bertugas menerima barang di gudang (bisa tim gudang, admin logistik, dll).|Ya
|Received Date|	Tanggal barang fisik benar-benar diterima dari supplier.|Ya
|Delivery Number|Nomor unik untuk setiap dokumen pengiriman (Delivery Order / DO).|Tidak
|Purchase Order|Pilih PO yang relevan dengan barang yang dikirim. Sistem akan menarik detail produk dari PO tersebut.|Ya
|Weightbridge Data|Data hasil penimbangan barang/armada di jembatan timbang (weighbridge).|Tidak
|Note|Catatan tambahan, misalnya kondisi barang, kekurangan kuantitas, kerusakan, atau dokumen tidak lengkap.|Tidak
|Remark|Mirip dengan note, tapi biasanya lebih singkat dan digunakan sebagai highlight/keterangan khusus.|Tidak
|Internal Note|Catatan khusus yang hanya bisa dilihat internal perusahaan, tidak tampil di dokumen resmi yang dikirim keluar.|Tidak
|File|Upload file pendukung seperti surat jalan, bukti pengiriman, foto kondisi barang, atau dokumen lainnya.|Tidak

2. **`Pilih Supplier pada field`** ***Supplier***, dan sistem akan mengaktifkan kolom Puchase order dan menampilkan detail produk yang terdapat pada PO tersebut, seperti ditunjukkan pada **Gambar 6.4.3**.

<img src="/img/commerce/purchase/good3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.4.3 Form Detail Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Type|Menentukan jenis sumber penerimaan barang. Terdiri dari dua pilihan : (***Warehouse*** : Penerimaan barang disimpan di gudang. ***Tank*** : Penerimaan barang ditujukan langsung ke tangki penyimpanan. Pilihan ini akan mempengaruhi field selanjutnya.)|Ya
|Warehouse/Tank|***Warehouse***, maka sistem akan menampilkan daftar gudang yang tersedia. ***Tank***, maka daftar tangki penyimpanan yang tersedia akan muncul.|Ya
|Quantity Surat Jalan|Jumlah barang yang tercantum pada surat jalan dari supplier.|Ya
|Third Party|Jumlah barang (dalam kuantitas) yang dikirim melalui atau dialokasikan untuk pihak ketiga.|Ya
|Good Receipt WCN|Jumlah barang (qty) yang diterima.|Ya

3. **`Isilah data penambahan Good Receipt`**, lalu tekan tombol ***Submit***.

## Pembatalan `Good Receipt ?`

:::note
**`Proses untuk membatalkan penerimaan barang yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses penerimaan barang **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Good Receipt :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Good Receipt seperti pada **Gambar 6.4.4**.

<img src="/img/commerce/purchase/good4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/good5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.3.4 Tombol Cancel Halaman Details Expense
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Good Receipt telah dibatalkan.