---
title: Warehouse
sidebar_position: 7
---

:::note
Pengguna dapat menambahkan gudang dimana tempat menyimpan barang seperti pada **Gambar 2.7.1**.
:::

<img src="/img/main/gudang.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.7.1. Halaman Warehouse
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Warehouse ?`
Dalam menambahkan data Warehouse hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) . 

**`Petunjuk penambahan Warehouse :`** 
- **`Tekan tombol add warehouse`** : Pengguna akan diarahkan ke halaman penambahan gudang dapat dilihat pada **Gambar 2.7.2.**

<img src="/img/main/gudang2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.7.2. Halaman Add Warehouse
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Warehouse | Formulir Warehouse akan terisi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Warehouse |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Name  | Nama lokasi | Ya |
| Type | Tipe gudang | Ya |
| Location | Lokasi gudang | Ya |

:::note perlu diperhatikan
Dalam sistem terdapat beberapa tipe gudang antara lain, gudang **`Raw, Finish Goods, WIP, Waste, Return, dan Universal`** seperti pada **Gambar 2.7.3** Berikut penjelasan dari masing - masing gudang.

<img src="/img/main/gudang3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.7.3. Tipe Gudang
</p>
:::

| Pemilihan Gudang | Deskripsi |
| -------- | --- |
| Raw | Gudang bahan baku. |
| Finish Goods | Gudang barang BOM. |
| WIP | Gudang khusus untuk barang yang akan diproduksi (**domain Manufacture**) dan barang dengan tipe sparepart (**domain Maintenance**). |
| Waste  | Gudang barang limbah / barang yang mengalami kerusakan atau cacat. |
| Return | Gudang untuk barang pengembalian (**domain Commerce**). |
| Universal | Gudang dengan barang Raw dan Finish Goods. |

:::danger perlu diingat
Pemilihan penempatan gudang akan **`mempengaruhi proses di setiap domain`**.
:::

## Simpan Barang di `Warehouse ?`

- **`Setelah menentukan tipe gudang`**, sistem akan menampilkan form untuk penambahan barang. Anda akan melihat opsi untuk **menambahkan item** dan **mengatur stok minimum** seperti pada **Gambar 2.7.4**.

<img src="/img/main/gudang4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.7.4. Form Menambah Item
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Item | Menambah barang | Tidak |
| Shelf | Rak | Tidak |
| Quantity | Total kuantitas barang | Tidak |
| Minimum | Total stok minimum | Tidak |
| UoM | Satuan ukur | Tidak |

- **`Isilah data terkait penambahan Warehouse`** lalu tekan tombol ***Submit***.