---
title: Quotation
sidebar_position: 2
---

:::note
**`Menu ini digunakan untuk membuat dokumen penawaran resmi kepada calon pelanggan sebelum terjadi transaksi atau kontrak.`**

Halaman Quotation dapat dilihat pada **Gambar 7.2.1**.
:::

<img src="/img/commerce/sales/contract1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.2.1 Halaman Quotation
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data quotation.|Tekan tombol Add Quotation.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data quotation secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|Edit|Menyunting data quotation.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus data quotation.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data quotation sekaligus.|Pilih data quotation baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Quotation ?`

**`Berikut petunjuk dalam menambahkan Quotation :`**

1. **`Tekan tombol`** ***Add Quotation*** dan pengguna akan diarahkan pada halaman penambahan data Quotation seperti pada **Gambar 7.2.2**.

<img src="/img/commerce/sales/quotation2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/quotation3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.2.2 Halaman Add Quotation
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Customer|	Nama atau kode pelanggan yang akan menerima quotation.|Ya
|Delivery Type|	Jenis pengiriman barang.|Ya
|Requested Date|Tanggal yang diminta oleh customer untuk pengiriman barang/jasa.|Ya
|Expired Date|Tanggal berakhirnya penawaran.|Ya
|Sales|Nama sales representative atau tim penjualan yang menangani transaksi ini.|Ya
|Contact Person|Orang yang bisa dihubungi dari sisi customer terkait quotation ini.|Tidak
|Bill To|Alamat atau pihak yang akan menerima tagihan/invoice.|Ya
|Ship To|	Alamat pengiriman barang.|Ya
|Posting Date|Tanggal saat quotation ini dimasukkan/diposting ke sistem.|Ya
|Term Of Payment|Syarat pembayaran.|Tidak
|Currency|Mata uang yang digunakan untuk quotation ini.|Ya
|PO Number|Nomor Purchase Order dari customer jika sudah ada.|Tidak
|Sales Type|Jenis penjualan.|Tidak
|Product|Daftar produk atau jasa yang ditawarkan dalam quotation ini.|Tidak
|File|Lampiran tambahan seperti spesifikasi teknis, gambar produk, brosur, atau dokumen pendukung lainnya.|Tidak
|Note|Catatan tambahan terkait quotation, bisa berupa ketentuan khusus, info diskon, atau arahan dari customer.|Tidak

2. **`Pilih Product pada field`** ***Product***, dan sistem akan menampilkan detail produk, seperti ditunjukkan pada **Gambar 7.2.3**.

<img src="/img/commerce/sales/quotation4.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/quotation5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.2.3 Form Detail Quotation
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Address|Alamat tujuan pengiriman untuk produk tertentu ini.|Ya
|Delivery Date|Tanggal barang harus dikirim atau sampai ke customer untuk produk tersebut.|Tidak
|Note|Catatan umum yang terkait produk ini (misalnya: warna khusus, spesifikasi tambahan, dsb).|Tidak
|Internal Note|	Catatan internal yang hanya bisa dilihat oleh tim internal.|Tidak
|Price Per Unit|Harga satuan produk.|Ya
|Total Quantity|Jumlah unit produk yang dipesan.|Ya
|Premium Cost|Biaya tambahan untuk produk ini.|Tidak
|Discount|Potongan harga khusus yang diberikan pada produk ini (bisa dalam persen atau nominal).|Tidak
|Tax|Pajak yang dikenakan untuk produk ini, biasanya dalam bentuk PPN (misal: 11% VAT).|Tidak
|With Holding Tax|Pajak pemotongan (misalnya PPh 23) yang dibayarkan langsung oleh customer ke pemerintah atas nama Anda.|Tidak
|Discount (Order Summary)|Diskon keseluruhan dari total pesanan.|Tidak|

3. **`Isilah data penambahan Quotation`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Quotation ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Quotation :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Quotation seperti pada **Gambar 7.2.4**.

<img src="/img/commerce/sales/quotation6.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/quotation7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.2.4 Halaman Details Quotation
</p>

2. **`Tentukan Quotation`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

:::note perlu diingat
**`Quotation yang telah disetujui`** (***approve***), selanjutnya akan diproses pada menu ***Sales Order***.
:::