---
title: Contract
sidebar_position: 1
---

:::note
**`Menu ini digunakan untuk membuat atau mencatat kontrak penjualan antara perusahaan Anda dan pelanggan.`**

Halaman  Contract dapat dilihat pada **Gambar 7.1.1**.
:::

<img src="/img/commerce/sales/contract1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.1.1 Halaman Contract
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data kontrak.|Tekan tombol Add Convert Product.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data kontrak secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|+ Sales Order|Membuat ***sales order*** (pesanan penjualan) yang berdasarkan kontrak yang sedang Anda isi.|Tekan tombol + Sales Order pada kolom Action.
|Edit|Menyunting data kontrak.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus data kontrak.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data kontrak sekaligus.|Pilih data kontrak baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Contract ?`

**`Berikut petunjuk dalam menambahkan Contract :`**

1. **`Tekan tombol`** ***Add Contract*** dan pengguna akan diarahkan pada halaman penambahan data kontrak seperti pada **Gambar 7.1.2**.

<img src="/img/commerce/sales/contract2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/contract3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.1.2 Halaman Add Contract
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Customer|Pilih pelanggan yang akan menjadi pihak dalam kontrak.|Ya
|Address|Alamat lengkap dari customer yang terkait kontrak.|Ya
|Bank|Nama bank milik customer (atau pihak yang menerima pembayaran).|Tidak
|Account|Nomor rekening bank milik customer.|Tidak
|Posting Date|Tanggal kontrak dicatat di sistem (biasanya tanggal hari ini atau saat kontrak dibuat).|Ya
|Start Date|Tanggal mulai berlakunya kontrak.|Ya
|End Date|Tanggal berakhirnya kontrak.|Ya
|Sales|Pilih sales person atau tim penjualan yang menangani kontrak ini.|Ya
|Contact Person|Kontak dari pihak customer yang menjadi penanggung jawab.|Tidak
|Bill To|Alamat penagihan (biasanya otomatis mengikuti customer).|Ya
|Ship To|Alamat pengiriman barang.|Ya
|Notify Party|Pihak ketiga yang perlu diberi pemberitahuan terkait kontrak, biasanya digunakan dalam konteks ekspor/impor atau logistik.|Tidak
|Currency|Mata uang yang digunakan dalam kontrak (misalnya: IDR, USD).|Ya
|Term Of Payment|Syarat pembayaran.|Tidak
|Contract Number 1|Nomor kontrak utama yang digunakan sebagai referensi resmi.|Tidak
|Contract Number 2|Nomor kontrak tambahan/alternatif jika ada format berbeda (misalnya kontrak internal perusahaan vs kontrak dari customer).|Tidak
|PO Number|	Nomor Purchase Order dari customer.|Tidak
|Sales Type|Jenis penjualan.|Tidak
|Product|Produk yang termasuk dalam kontrak.|Ya
|Other Details|Tempat menambahkan informasi tambahan (custom field).|Tidak
|Note|Catatan tambahan, bisa diisi dengan penjelasan atau syarat khusus.|Tidak
|Remark|Catatan singkat yang berfungsi sebagai penanda khusus kontrak.|Tidak
|Internal Note|Catatan internal yang hanya bisa dilihat oleh tim perusahaan.|Tidak
|File|	Upload file pendukung kontrak (misal: dokumen PO, perjanjian, dsb).|Tidak

2. **`Pilih Customer pada field`** ***Customer***, dan sistem akan menampilkan detail produk, seperti ditunjukkan pada **Gambar 7.1.3**.

<img src="/img/commerce/sales/contract4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.1.3 Form Detail Product
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

3. **`Isilah data penambahan Contract`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Contract ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Contract :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Contract seperti pada **Gambar 7.1.4**.

<img src="/img/commerce/sales/contract6.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/contract7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.1.4 Halaman Details Contract
</p>

2. **`Tentukan kontrak`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

## Closed `Contract ?`

:::note

:::

**`Berikut petunjuk dalam melakukan closed Contract :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Contract seperti pada **Gambar 7.1.5**.

<img src="/img/commerce/sales/contract8.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/contract9.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.1.5 Halaman Details Contract
</p>

2. **`Tekan tombol`** ***Closed***.

## Tambah Sales Order `Contract ?`

:::note

:::

