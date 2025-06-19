---
title: Convert Item
sidebar_position: 3
---

:::note
- Pengguna dapat **`mengkonversi barang pada jenis pengukuran yang sama dengan satuan yang berbeda`** berdasarkan perhitungan pada [**Tabel Konversi**](/docs/domain/main/masterdata-Main/conversion-table.md)
-  Mengkonversi barang bahan baku (**raw material**) atau barang jadi (**BOM**) menjadi barang limbah (**Waste**) apabila barang mengalami kerusakan maupun cacat. Halaman convert item terlihat dapat dilihat pada **Gambar 3.3.1**.
::: 

<img src="/img/main/ci1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.3.1. Halaman Convert Item
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::


## Tambah `Convert Item?`
Dalam menambahkan data Convert Item hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) .

**`Petunjuk penambahan Convert Item :`** 
- `Tekan tombol add Convert Item` : Pengguna akan diarahkan ke halaman penambahan Convert Item dapat dilihat pada **Gambar 3.3.2.**

<img src="/img/main/ci2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.3.2. Halaman Add Convert Item
</p>

### Data isian pada format `input (Item awal)`.

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Item | Barang yang akan dikonversi | Ya |
| Warehouse | Gudang | Ya |
| Quantity | Jumlah barang yang akan dikonversi | Ya |

### Data isian pada format `output (Hasil item)`.
:::danger
**Data output** yang diterima dapat dibedakan menjadi 2 jenis barang
- **`Other`** : Barang dengan jenis yang sama tetapi berbeda satuan
- **`Waste`** : Barang yang mengalami kerusakan atau cacat.
:::

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Item | Barang yang akan dikonversi. | Ya |
| Warehouse | Gudang. | Ya |
| Quantity | Jumlah barang hasil konversi. | Ya |

- `Isilah data terkait convert item`, lalu tekan tombol ***Submit***.
- `Barang akan langsung bertambah pada gudang tujuan.`