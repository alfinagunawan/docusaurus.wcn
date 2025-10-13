---
title: Invoice
sidebar_position: 9
---

:::note
**`Menu ini digunakan untuk mencatat dan menerbitkan tagihan resmi kepada pelanggan setelah terjadi transaksi, baik berupa penjualan barang maupun jasa.`** 

Halaman Invoice dapat dilihat pada **Gambar 7.9.1**.
:::

<img src="/img/commerce/sales/invoice1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.9.1 Halaman Invoice
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data Invoice.|Tekan tombol Add Invoice.
|Download|Mengunduh data Invoice dalam format file .xls atau .csv.|Tekan tombol Download.|
|Upload|Mengunggah data Invoice dari file dengan format .xlsx, .xls, atau .csv.|Tekan tombol Upload.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data Invoice barang secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|Edit|Menyunting data Invoice.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data Invoice.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data Invoice sekaligus.|Pilih data Invoice baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Invoice ?`

**`Berikut petunjuk dalam menambahkan Invoice :`**

1. **`Tekan tombol`** ***Add Invoice*** dan pengguna akan diarahkan pada halaman penambahan Invoice seperti pada **Gambar 7.9.2**.

<img src="/img/commerce/sales/invoice2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/invoice3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.9.2 Halaman Add Invoice
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Customer|Nama pelanggan yang akan ditagih.|Ya
|Currency|Mata uang yang digunakan dalam invoice.|Ya
|Posting Date|Tanggal invoice dicatat di sistem (memengaruhi periode akuntansi).|Ya
|Invoice Number|Nomor unik untuk identifikasi invoice.|Tidak
|Contract Number 1|Nomor kontrak utama yang menjadi dasar invoice.|Tidak
|Contract Number 2|Nomor kontrak tambahan (jika ada perjanjian lebih dari satu yang terkait).|Tidak
|PO Number|Nomor Purchase Order dari customer yang menjadi referensi invoice.|Tidak
|Term of Payment|Syarat pembayaran sesuai kesepakatan dengan customer.|Tidak
|Due Date|Tanggal jatuh tempo pembayaran invoice, dihitung dari posting date + term of payment.|Tidak
|Bill To|Alamat penagihan (bisa alamat kantor pusat customer).|Ya
|Ship To|Alamat pengiriman barang (jika berbeda dengan Bill To).|Ya
|Notify Party|Pihak lain yang harus diberi informasi terkait invoice/pengiriman.|Tidak
|Tax Invoice Number|Nomor faktur pajak yang terkait dengan invoice.|Tidak
|Tax Invoice Date|Tanggal faktur pajak diterbitkan.|Tidak
|Tax Invoice Type|Jenis faktur pajak.|Tidak
|Delivery Order|Nomor Delivery Order yang menjadi dasar pengiriman barang.|Tidak
|Other Details|Field tambahan untuk informasi custom (detail name & value).|Tidak
|Note|Catatan umum yang ditampilkan di invoice.|Tidak
|Remark|Keterangan singkat sebagai penanda khusus.|Tidak
|Internal Note|Catatan internal perusahaan, tidak tampil di invoice resmi.|Tidak
|File|Lampiran dokumen pendukung invoice.|Tidak

2. **`Pilih Customer pada field`** ***Customer***, dan sistem akan menampilkan detail produk, seperti ditunjukkan pada **Gambar 7.9.3**
<img src="/img/commerce/sales/invoice4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.9.3 Form Detail Product
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Product ID|Kode unik produk yang terdaftar di master data.|Tidak
|Product Name|Nama produk sesuai data master.|Tidak
|Description|Keterangan tambahan mengenai produk, misalnya spesifikasi, ukuran, warna, atau detail jasa.|Tidak
|QTY Note|Catatan tambahan terkait jumlah barang/jasa yang ditagihkan.|Tidak
|Quantity|Jumlah barang/jasa yang ditagihkan di invoice.|Tidak
|UoM|Satuan pengukuran dari quantity.|Tidak
|Price Per Unit|Harga jual per satuan barang/jasa.|Tidak
|Discount|Potongan harga untuk produk/jasa tertentu, bisa berupa persentase (%) atau nominal (Rp).|Tidak
|Tax|Pajak keluaran (Output Tax) yang dikenakan atas penjualan barang/jasa.|Tidak
|WH Tax|Pajak yang dipotong oleh customer sesuai aturan (biasanya PPh 23 untuk jasa).|Tidak
|CoA|Akun akuntansi pendapatan yang digunakan untuk mencatat transaksi produk/jasa tersebut.|Tidak

3. **`Isilah data penambahan Invoice`**, lalu tekan tombol ***Submit***.