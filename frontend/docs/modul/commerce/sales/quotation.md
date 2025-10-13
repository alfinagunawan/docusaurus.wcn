---
title: Quotation
sidebar_position: 2
---

:::note
**`Menu ini digunakan untuk membuat dokumen penawaran resmi kepada calon pelanggan sebelum terjadi transaksi atau kontrak.`**

Halaman Quotation dapat dilihat pada **Gambar 7.2.1**.
:::

<img src="/img/commerce/sales/quotation1.png" alt="Deskripsi gambar" class="center" />
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
|Notify Party|Pihak ketiga yang perlu diberi pemberitahuan terkait kontrak, biasanya digunakan dalam konteks ekspor/impor atau logistik.|Tidak
|Posting Date|Tanggal saat quotation ini dimasukkan/diposting ke sistem.|Ya
|Term Of Payment|Syarat pembayaran.|Tidak
|Currency|Mata uang yang digunakan untuk quotation ini.|Ya
|Contract Number 1|Nomor kontrak utama yang digunakan sebagai referensi resmi.|Tidak
|Contract Number 2|Nomor kontrak tambahan/alternatif jika ada format berbeda (misalnya kontrak internal perusahaan vs kontrak dari customer).|Tidak
|PO Number|Nomor Purchase Order dari customer jika sudah ada.|Tidak
|Sales Type|Jenis penjualan.|Tidak
|Product|Daftar produk atau jasa yang ditawarkan dalam quotation ini.|Tidak
|Other Details|Tempat menambahkan informasi tambahan (custom field).|Tidak
|Note|Catatan tambahan, bisa diisi dengan penjelasan atau syarat khusus.|Tidak
|Remark|Catatan singkat yang berfungsi sebagai penanda khusus kontrak.|Tidak
|Internal Note|Catatan internal yang hanya bisa dilihat oleh tim perusahaan.|Tidak
|File|	Upload file pendukung kontrak (misal: dokumen PO, perjanjian, dsb).|Tidak

2. **`Pilih Customer pada field`** ***Customer***, dan sistem akan menampilkan detail produk, seperti ditunjukkan pada **Gambar 7.2.3**.

<img src="/img/commerce/sales/quotation4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.2.3 Form Detail Quotation
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Product ID|Kode unik produk yang terdaftar di master data.|Tidak
|Product Name|Nama produk sesuai data master.|Tidak
|Description|Keterangan tambahan mengenai produk, misalnya spesifikasi, ukuran, warna, atau detail jasa.|Tidak
|Quantity|Jumlah barang/jasa yang dikontrakkan.|Tidak
|UoM|Satuan pengukuran untuk quantity.|Tidak
|Price Per Unit|Harga per satuan produk.|Tidak
|Discount|Potongan harga yang diberikan, bisa dalam bentuk persentase (%) atau nominal (Rp).|Tidak
|Tax|Pajak yang dikenakan pada produk, misalnya PPN 11%.|Tidak
|With Holding Tax|Pajak yang dipotong dari transaksi (biasanya PPh 23 untuk jasa).|Tidak
|Address|Alamat tujuan pengiriman produk dalam kontrak.|Tidak
|Delivery Date|Tanggal barang dijadwalkan dikirim atau jasa diberikan.|Tidak
|PO Number|Nomor Purchase Order dari customer (jika kontrak berbasis pesanan).|Tidak

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