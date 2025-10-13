---
title: Purchase Request
sidebar_position: 1
---

:::note
**`Menu ini digunakan untuk mengajukan permintaan pembelian barang atau jasa oleh departemen atau pengguna internal. `** Menu ini merupakan langkah awal dalam proses pengadaan, sebelum dilanjutkan ke tahap approval, lalu menjadi Purchase Order (PO).

Halaman Purchase Request dapat dilihat pada **Gambar 6.1.1**.
:::

<img src="/img/commerce/purchase/pr1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.1.1 Halaman Purchase Request
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data permintaan pembelian.|Tekan tombol Add Purchase Request.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data permintaan pembelian secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting data permintaan pembelian.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data permintaan pembelian.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data permintaan pembelian sekaligus.|Pilih data permintaan pembelian baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Purchase Request ?`

**`Berikut petunjuk dalam menambahkan Purchase Request :`**

1. **`Tekan tombol`** ***Add Purchase Request*** dan pengguna akan diarahkan pada halaman penambahan data permintaan pembelian seperti pada **Gambar 6.1.2**.

<img src="/img/commerce/purchase/pr2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.1.2 Halaman Add Purchase Request
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Request Number|Nomor unik yang diberikan untuk setiap Purchase Request (PR) yang dibuat.|Ya (Dapat diisi secara default oleh sistem, atau disesuaikan dengan kebutuhan.)
|Department|Departemen atau divisi yang membutuhkan barang atau jasa tersebut.|Ya
|Requested By|Nama karyawan atau pengguna sistem yang mengajukan permintaan. Biasanya diisi otomatis oleh sistem sesuai akun login.|Ya
|Requested Date|Tanggal saat permintaan dibuat.|Ya
|Product ID|Kode unik untuk mengidentifikasi produk.|Otomatis terisi mengikuti product yang dipilih.
|Product Name|Nama barang atau jasa yang diminta. Bisa dipilih dari daftar produk yang sudah terdaftar di sistem.|Ya
|Description Product|Deskripsi produk agar mudah dipahami.|Tidak
|Quantity|Jumlah unit barang atau jasa yang dibutuhkan.|Ya
|UoM|Satuan dari produk tersebut, seperti pcs, liter, kg, meter, dll.|Otomatis terisi mengikuti product yang dipilih.
|Currency|Mata uang yang digunakan untuk harga produk.|Ya
|Unit Price|Harga per satuan produk sesuai currency.|Ya
|Supplier|Nama pemasok yang menyediakan produk.|Ya
|Delivery Date|Tanggal penerimaan barang.|Ya
|Note (Product)|	Catatan khusus untuk produk tertentu. Misalnya: ukuran, warna, merk, spesifikasi teknis, atau kebutuhan khusus lainnya.|Tidak
|File|Lampiran dokumen pendukung (opsional).|Tidak

2. **`Isilah data penambahan permintaan pembelian`** lalu tekan tombol ***Submit***.

## Setuju & Tolak `Purchase Request ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Purchase Request :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Request seperti pada **Gambar 6.1.3**.

<img src="/img/commerce/purchase/pr3.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/pr4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.1.3 Halaman Details Purchase Request
</p>

2. **`Tentukan permintaan pembelian`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

:::note perlu diingat
**`Purchase Request yang telah disetujui`** (***approve***), selanjutnya akan diproses pada menu ***Purchase Order***.
:::

## Pembatalan `Purchase Request ?`

:::note
**`Proses untuk membatalkan permintaan pembelian yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses permintaan pembelian **`belum dilakukan proses purchase order`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Purchase Request :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Request seperti pada **Gambar 6.1.4**.

<img src="/img/commerce/purchase/pr5.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/pr6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.1.4 Tombol Cancel Halaman Details Purchase Request
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Purchase Request telah dibatalkan.

## Closed `Purchase Request ?`

:::note

:::

**`Berikut petunjuk dalam melakukan closed Purchase Request :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Purchase Request seperti pada **Gambar 6.1.5**.

<img src="/img/commerce/purchase/pr5.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/pr6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.1.5 Tombol Closed Halaman Details Purchase Request
</p>

2. **`Tekan tombol`** ***Closed*** lalu proses Purchase Request telah ditutup.