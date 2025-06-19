---
title: Item
sidebar_position: 5
---

:::note
**`Pengguna dapat menambahkan barang sesuai dengan kebutuhan perusahaan`**. Berikut beberapa fitur yang terdapat pada menu item seperti pada **Gambar 2.5.1**.
:::

<img src="/img/main/item.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.1 Halaman item
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Item ?`
Dalam menambahkan data Item hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) .

**`Petunjuk penambahan item :`** 
- `Tekan tombol` ***`Add Item`*** : Pengguna akan diarahkan ke halaman penambahan barang, dapat dilihat pada **Gambar 2.5.2**
<img src="/img/commerce/masterdata/item4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.2 Halaman Penambahan Barang
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Item  | Formulir Item Isi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Item |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Category | Memilih kategori barang : ***Raw*** (bahan baku) atau ***BOM*** (barang jadi) | Ya |
| UoM (Unit of Measurement) | Memilih jenis satuan ukuran | Ya |
| Name | Nama barang | Ya |
| ID | Nomor ID barang | Ya |

:::note jenis item
Pengguna dapat menentukan jenis dari item. **1 item dapat mencakup beberapa bahkan keseluruhan jenis**. <img src="/img/commerce/masterdata/tipeitem.png" alt="Deskripsi gambar" class="center" />
- **`Inventory`** : Barang fisik untuk ***penyimpanan*** stok di gudang.
- **`Purchase`** : Barang yang akan ***dibeli*** pada supplier.
- **`Sales`** : Barang yang akan ***dijual*** pada customer.
:::

### Item `Inventory`
:::note
**Centang apakah barang dapat disimpan di gudang**, hapus centang jika barang tersebut adalah ***layanan*** seperti pada **Gambar 2.5.3**.
:::

<img src="/img/commerce/masterdata/iteminven.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.3 Inventory
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Stock | Menentukan jumlah barang yang akan dimasukan menjadi stock bisnis | Tidak |
| Minimum Stock | Total minimum barang yang harus tersedia di warehouse | Tidak |
| SKU | Kode unik item, dapat disamakan dengan nomor ID item | Tidak |
| Fee Type | Jenis Biaya (Hanya bisa dipergunakan untuk tipe item service), terdiri dari Delivery (service pengiriman), Handling (service pengemasan), dan Other (service lainnya) | Tidak |

:::danger perlu diingat
- Pengguna dapat menambahkan barang berupa **`service (layanan)`**, dengan mengisi kolom **`Fee Type`**, seperti layanan **pengiriman**, layanan **pengemasan**, dan lain sebagainya, tanpa mencentang kolom checkbox.
:::

### Item `Purchase`
:::note
**Periksa apakah barang tersebut dapat dibeli dari vendor**, barang tersebut akan tersedia untuk dibeli, seperti pada **Gambar 2.5.4**.
:::

<img src="/img/commerce/masterdata/itempur.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.4 Purchase
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Currency | Mata uang yang digunakan | Tidak |
| Buying Price (per Unit) | Harga pembelian barang per unit | Tidak |
| Minimum Order Quantity (MOQ) | Jumlah minimal barang yang dapat dibeli | Tidak |
| Buying Discount (%) | Persen diskon dari pembelian | Tidak |

### Item `Sales`
:::note
**Periksa apakah barang tersebut dapat dijual kepada pelanggan**. Barang tersebut akan tersedia untuk dijual seperti pada **Gambar 2.5.5**.
:::

<img src="/img/commerce/masterdata/itemsales.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.5 Sales
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Cost Price | Harga modal | Tidak |
| Selling Price (per Unit) | Harga penjualan barang per unit. | Tidak |
| Minimum Sales Quantity (MSQ) | Jumlah minimal barang yang akan dijual | Tidak |
| Selling Discount (%) | Persen diskon dari penjualan | Tidak |

:::note Data tambahan
- Sistem menyediakan formulir untuk mengisi data tambahan yang dapat diinput oleh pengguna. 
- ***Formulir data tambahan ini bersifat opsional*** (dapat diisi atau tidak).
- Aktifkan dengan mencentang kotak centang **Show Additional Data**, seperti pada **Gambar 2.5.6**.
:::

<img src="/img/manufacture/masterdata/item3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.6 Data Tambahan
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Size | Ukuran barang | Tidak |
| Color | Warna barang | Tidak |
| Weight | Berat barang dalam satuan gram | Tidak |
| Length | Panjang barang dalam satuan mm | Tidak |
| Width | Lebar barang dalam satuan mm | Tidak |
| Height | Tinggi barang dalam satuan mm | Tidak |
| Item Type | Tipe barang (**Sparepart**) merupakan kategori barang yang akan digunakan dalam proses ***Maintenance***. Barang yang termasuk dalam kategori sparepart wajib mengisi **Item Type** agar dapat digunakan dalam domain **Maintenance** | Tidak |
|Item Photo|Foto barang|Tidak|
|Additional Currencies|Form dapat diisi bila item yang bersangkutan terlibat dalam transaksi multi mata uang. **Contoh** : Item dibeli dalam Dollar Singapura, dan dijual dalam Rupiah.|Tidak|

## Menambah `Item BOM ?`

`Petunjuk dalam menambah Item BOM :`

- `Tekan tombol` ***`Add Item`*** : Pengguna akan diarahkan ke halaman penambahan barang, dapat dilihat pada **Gambar 2.5.7.**
<img src="/img/commerce/masterdata/item4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.7 Halaman Penambahan Barang
</p>

- `Pilih kategori BOM` seperti pada **Gambar 2.5.8**.

<img src="/img/main/managebom.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.8 Kategori BOM
</p>

- `Isilah data yang diperlukan`
- `Pada kategori BOM terdapat tambahan form` seperti pada **Gambar 2.5.9** Pengguna dapat mengisi sesuai dengan deskripsi data pada tabel dibawah.

<img src="/img/main/komponenbom.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.9 Halaman Item
</p>

| Isian | Deskripsi |
| -------- | --- |
| Minimum Production Quantity (MPQ) | Menentukan jumlah barang dalam sekali produksi |

:::note catatan

<img src="/img/main/catata.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.10 Catatan
</p>

- **Gambar 2.5.10** menunjukkan bahwa pengguna perlu mengisi formulir tabel pada **Gambar 2.5.11**

<img src="/img/main/formkomponen.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.11 Form komponen item BOM
</p>

- **Gambar 2.5.11**  berisi daftar komponen yang diperlukan untuk memproduksi suatu produk ***(BOM)*** dalam jumlah tertentu. Jumlah ini akan mengikuti nilai yang dimasukkan pengguna pada data **MPQ** di atas.

- **`Jika membutuhkan lebih dari satu komponen`**, pengguna dapat menekan tombol **`+`** untuk menambahkan komponen lainnya.
:::

| Isian | Deskripsi |
| -------- | --- |
| Item | Komponen yang diperlukan |
| Cost Price | Harga dari komponen tersebut |
| Quantity | Jumlah komponen yang diperlukan |
| UoM | Satuan komponen |

:::note barang jenis sales
- `Barang BOM dengan jenis sales`, dapat melakukan perhitungan harga modal secara otomatis bila pengguna menekan selektor **automatic calculation** seperti pada **Gambar 2.5.12**. Perhitungan ini dilakukan dengan mengakumulasi harga dari semua komponen yang telah dimasukkan.

<img src="/img/commerce/masterdata/autocal.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.12 Selektor akumulasi harga modal
</p>
:::

- `Tekan tombol submit` Setelah semua data terisi.

## Fitur `Stok Item ?`

:::note
Pada kolom stock, pengguna dapat melihat **detail stock** dan **penyimpanan barang** hanya dengan **`menekan tombol lingkaran`** yang bertuliskan angka seperti pada **Gambar 2.5.13**.
:::

<img src="/img/manufacture/masterdata/item2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.13 Tombol Stock
</p>

- **`Gambar 2.5.14`** : Pop up yang menampilkan detail stok.

<img src="/img/main/item5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.14 Pop-up Detail Stok Barang
</p>

| Data Stock Item | Deskripsi |
| -------- | --- |
| Stock | Total stok barang |
| Sales Stock | Total stok barang yang dapat dijual |
| Available Sales Stock | Total stok barang jual yang tersedia |
| Booked Sales Stock | Stok Penjualan yang Dipesan |
| Insufficient Sales Stock | Total stok yang belum disimpan di gudang. | 

## Simpan Item di `Gudang ?`

:::note
Pengguna dapat melakukan penyimpanan item di gudang pada menu ini.
- **`Pastikan gudang sudah ditambahkan pada menu`** [**Warehouse**](/docs/domain/main/masterdata-Main/item-Main.md)
:::

**`Petunjuk penyimpanan item di gudang :`**

1. **`Tekan tombol`** ***button stock*** seperti pada **Gambar 2.5.15**.

<img src="/img/manufacture/masterdata/item2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.15 Pop-up Detail Stok Barang
</p>

2. **`Sistem akan menampilkan popup dan tekan tombol`** ***Store to Existing Warehouse*** seperti pada **Gambar 2.5.16**.

<img src="/img/main/item5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.16 Pop-up Detail Stok Barang
</p>

3. **`Sistem akan menampilkan popup penyimpanan`** seperti pada **Gambar 2.5.17.**

<img src="/img/main/item8.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.17 Pop-up Penyimpanan Barang
</p>

|Isian|Deskripsi|
|--|--|
|Warehouse|Gudang penyimpanan|
|Shelf|Rak|
|Quantity|Kuantitas|

4. **`Isilah data terkait penyimpanan barang`** lalu tekan tombol ***Submit***.

## Mengatur Stok `Item ?`

:::note
**Lakukan pengaturan stok item dengan menyunting data pada item** yang sudah ditambahkan.
:::

**`Petunjuk Sunting data stok :`**

1. **`Tekan tombol`** ***Edit*** pada kolom action seperti pada **Gambar 2.5.18**.

<img src="/img/main/item9.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.18 Tombol Edit pada kolom action
</p>

2. **`Lakukan sunting data stok`** pada kolom ***Stock*** seperti **Gambar 2.5.19**.

<img src="/img/main/item10.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5.19 Kolom Stock
</p>

3. **`Setelah sunting data stok selesai`**, tekan tombol ***Add***.