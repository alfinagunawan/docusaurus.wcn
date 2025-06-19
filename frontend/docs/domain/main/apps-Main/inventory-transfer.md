---
title: Inventory Transfer
sidebar_position: 2
---

:::note 
**`Mengelola perpindahan barang dari gudang ke gudang secara pembukuan`**. Berikut fitur-fitur yang terdapat dalam menu Inventory Transfer seperti pada **Gambar 3.2.1**.
:::

<img src="/img/main/it1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2.1. Halaman Inventory Transfer
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::


## Tambah `Inventory Transfer?`
Dalam menambahkan data Inventory Transfer hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) . 

**`Petunjuk penambahan Inventory Transfer :`** 
- `Tekan tombol add Inventory Transfer` : Pengguna akan diarahkan ke halaman penambahan inventory transfer dapat dilihat pada **Gambar 3.2.2.**

<img src="/img/main/it2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2.2. Halaman Add Inventory
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Source | Asal gudang | Ya |
| Destination | Tujuan gudang | Tidak |
| Notes | Catatan yang diperlukan dalam proses perpindahan barang antar gudang | Tidak |
| Item | Barang yang akan dipindahkan | Tidak |
| Quantity | Jumlah barang yang akan dipindahkan | Tidak |

- `Isi data terkait inventory transfer` lalu tekan tombol **Submit**.

:::info dampak perpindahan barang
- `Data yang berada di dalam kotak` menunjukan informasi mengenai dampak yang terjadi dari proses inventory transfer terhadap stok penjualan dan stok produksi seperti pada **Gambar 3.2.2**.
:::

| Status Perubahan | Deskripsi |
| -------- | --- |
| No Change | Tidak ada perubahan |
| Disable | Tidak aktif |
| Sales ↑↓ | Stok penjualan meningkat / menurun |
| Production ↑↓ | Stok produksi meningkat / menurun |

## Setuju dan Tolak `Inventory Transfer?`

**`Petunjuk menyetujui dan menolak Inventory Transfer :`** 
- `Tekan tombol details` (ikon mata) pada kolom action, dan pengguna akan diarahkan pada halaman details seperti pada **Gambar 3.2.3**.

<img src="/img/main/it3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2.3. Halaman Details Tombol Approve & Rejected
</p>

- `Tekan tombol approve` bila sesuai, dan `tombol rejected` bila tidak sesuai.

:::note
Proses penerimaan barang hasil transfer dapat dilakukan dengan 2 metode :
- `Penerimaan barang langsung pada menu inventory transfer ini`.

Pilihan tombol approve dan reject akan berubah menjadi format penerimaan barang jika tombol approve ditekan. Format penerimaan dapat dilihat pada **Gambar 3.2.4**.

<img src="/img/main/it4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2.4. Tombol Receive
</p>

Masukan jumlah barang diterima lalu tekan tombol **Confirm**. 

- `Penerimaan barang pada menu` [***Warehousing***](/docs/domain/main/apps-Main/warehousing.md).
:::

:::danger
- `Penerimaan barang dapat dilakukan dengan` penerimaan barang sebagian (**Partially Receive**) dan penerimaan barang sepenuhnya (**Fully Receive**). 
- `Waktu penerimaan barang akan dicatat oleh sistem`.
:::

## Status `Inventory Transfer?`

<img src="/img/main/it5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2.5. Status Inventory Transfer
</p>

| Status | Deskripsi |
| -------- | --- |
| Pending | Permintaan untuk inventory transfer. |
| Rejected | Inventory transfer ditolak. |
| Approved | Inventory transfer disetujui. |
| In Progress | Barang sedang dalam tahap pemindahan. |
| Completed | Inventory transfer selesai. |