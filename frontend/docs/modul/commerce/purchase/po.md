---
title: Purchase Order
sidebar_position: 2
---

:::note
**`Menu ini digunakan sebagai pesanan pembelian yang dibuat oleh perusahaan kepada supplier/vendor.`**

Halaman Purchase Order dapat dilihat pada **Gambar 6.2.1**.
:::

<img src="/img/commerce/purchase/po1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.2.1 Halaman Purchase Order
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data pesanan pembelian.|Tekan tombol Add Purchase Order.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data pesanan pembelian secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting data pesanan pembelian.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data pesanan pembelian.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data pesanan pembelian sekaligus.|Pilih data pesanan pembelian baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Purchase Order ?`

**`Berikut petunjuk dalam menambahkan Purchase Order :`**

1. **`Tekan tombol`** ***Add Purchase Order*** dan pengguna akan diarahkan pada halaman penambahan data pesanan pembelian seperti pada **Gambar 6.2.2**.

<img src="/img/commerce/purchase/po2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/po3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.2.2 Halaman Add Purchase Order
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Supplier|Nama vendor atau penyedia barang/jasa yang akan dihubungi.|Ya
|Supplier Address|Alamat supplier yang dipilih.|Ya
|Contract Number|Nomor kontrak kerja sama (jika ada) antara perusahaan dan supplier, yang menjadi dasar transaksi.|Tidak
|Posting Date|Tanggal pencatatan PO ke dalam sistem (bisa sama dengan tanggal pembuatan).|Ya
|Purchase Type|Jenis pembelian|Tidak
|Delivery Type|Cara atau jenis pengiriman barang.|Ya
Purchaser|Nama atau identitas pengguna (user) yang bertanggung jawab atas proses pembelian atau pembuatan Purchase Order (PO).|Ya
|Contact Person|Nama orang yang menjadi kontak utama di pihak supplier untuk PO ini.|Tidak
|Currency|Mata uang transaksi pembelian.|Ya
|Term of Payment|Ketentuan pembayaran, misalnya: 30 Hari.|Tidak
|Requested By|Nama karyawan atau user yang mengajukan permintaan pembelian.|Ya
|Department|Divisi yang melakukan permintaan atau yang akan menggunakan barang/jasa yang dipesan.|Ya
|Ship To|Alamat tujuan pengiriman barang dari supplier.|Ya
|Purchase Request|Referensi ke dokumen ***Purchase Request*** (PR) yang sebelumnya telah dibuat.|Ya
|Product|Nama produk atau jasa yang dibeli.|Otomatis terisi mengikuti Purchase Request yang dipilih
|Note|Catatan tambahan umum pada PO, seperti instruksi khusus atau persyaratan tertentu.|Tidak
|Remark|Catatan tambahan umum pada PO, seperti instruksi khusus atau persyaratan tertentu.|Tidak
|Internal Note|	Catatan khusus yang hanya terlihat oleh pihak internal perusahaan, tidak dikirim ke supplier.|Tidak
|File|Upload dokumen pendukung seperti quotation, kontrak, atau gambar teknis. Format umum: PDF, Excel, gambar, dll.|Tidak

2. **`Isilah data penambahan pesanan pembelian`** lalu tekan tombol ***Submit***.

## Setuju & Tolak `Purchase Order ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Purchase Order :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Order seperti pada **Gambar 6.2.3**.

<img src="/img/commerce/purchase/po4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/po5.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/po6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.2.3 Halaman Details Purchase Request
</p>

2. **`Tentukan pesanan pembelian`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

## Pembatalan `Purchase Order ?`

:::note
**`Proses untuk membatalkan pesanan pembelian yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses pesanan pembelian **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Purchase Order :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Order seperti pada **Gambar 6.2.4**.

<img src="/img/commerce/purchase/pr5.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/pr6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.2.4 Tombol Cancel Halaman Details Purchase Order
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Purchase Order telah dibatalkan.

## Closed `Purchase Order ?`

:::note

:::

**`Berikut petunjuk dalam melakukan closed Purchase Order :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Order seperti pada **Gambar 6.2.5**.

<img src="/img/commerce/purchase/po5.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/po6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.2.5 Tombol Closed Halaman Details Purchase Order
</p>

2. **`Tekan tombol`** ***Closed*** lalu proses Purchase Order telah ditutup.