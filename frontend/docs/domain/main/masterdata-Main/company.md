---
title: Company
sidebar_position: 9
---

:::note
**`Halaman Company digunakan untuk mengelola daftar perusahaan atau usaha`**, baik sebagai customer (**Sales**) maupun supplier (**Purchaser**). Detail tampilan halaman ini dapat dilihat pada **Gambar 2.9.1**.
:::

<img src="/img/commerce/masterdata/company1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.1 Halaman Company
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Company ?`
Dalam menambahkan data Company hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) .

**`Petunjuk penambahan company :`** 
- `Tekan tombol add company` : Pengguna akan diarahkan ke halaman penambahan company.

:::note
Pada sistem, penambahan company berdasarkan **4** data
- **`Info`** : Format identitas company.
- **`Item`** : Penambahan item *(menandakan company berperan sebagai **supplier** dan menjual item yang ditambahkan tersebut)*.
- **`Financial Account`** : Akun bank milik perusahaan tersebut.
- **`Shipping Address`** : Alamat pengiriman barang.
:::

### Format `Info Company` 

<img src="/img/commerce/masterdata/company2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.2 Halaman Add Company Info
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Company | Formulir Company akan terisi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Company |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Name | Nama perusahaan. | Ya |
| Company ID | ID Unik perusahaan. | Ya |
| Address | Alamat perusahaan. | Ya |
| Phone | Nomor telepon perusahaan. | Ya |
| Email | Email perusahaan. | Tidak |
| Type | Tipe usaha. | Tidak |
| Sector | Sektor usaha. | Tidak |
| Credit Limit | Total limit kredit yang pengguna berikan kepada perusahaan yang berperan sebagai **customer**. | Tidak |
| Term of Payment (Days) | Jangka waktu perusahaan untuk melakukan pembayaran. **Jika jangka waktu pembayaran 0**, maka barang harus dibayar sebelum dikirim oleh pemasok (supplier). **Jika jangka waktu pembayaran berisi jumlah hari tertentu**, maka barang dapat dikirim sebelum pembayaran dilakukan. | Tidak |
| Tax Required | Apabila **chekbox Tax Required** diaktifkan, maka setiap pesanan pembelian maupun penjualan pada perusahaan tersebut wajib menggunakan tax (pajak) | Tidak |
|Bypass Credit Limit|Apabila **checkbox Bypass Credit Limit** diaktifkan, pengguna memberikan izin kepada perusahaan untuk melanjutkan transaksi meskipun batas kredit yang telah ditentukan telah terlampaui.|Tidak|

### Format `Item Company` 
:::note perlu diingat
`Company yang berperan sebagai customer`, tidak diwajibkan untuk mengisi data ***`item`***.
:::

<img src="/img/commerce/masterdata/company3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.3 Halaman Add Company Item
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Item | Barang yang dijual | Tidak |
| MOQ (Minimum Order Quantity) | Total minimum pembelian | Tidak |
| Buying Price (Per Unit) | Harga item per satuan | Tidak |
| Buying Discount (%) | Diskon harga pembelian | Tidak |
|Valid Date|Tanggal berlaku harga item|Tidak|
| Actions ‘+’ | Menambah item | Tidak |

### Format `Financial Account Company` 
:::note
Pengguna dapat mendaftarkan beberapa nomor rekening (**multiple bank**).
:::

<img src="/img/commerce/masterdata/company20.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.4 Halaman Add Company Financial Account
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
|Bank|Nama Bank|Tidak|
|Account Name|Nama akun|Tidak|
|Account Number|Nomor akun|Tidak|

### Format `Shipping Address Company` 
:::note
Pengguna dapat mendaftarkan beberapa alamat pengiriman (**multiple address**).
:::

<img src="/img/commerce/masterdata/company21.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.5 Halaman Add Company Shipping Address
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
|Name|Nama alamat|Tidak|
|Phone|Nomor Telephone|Tidak|
|Address|Nomor akun|Tidak|

- `Isilah data terkait penambahan company`, lalu tekan tombol **submit**.

## Fitur Lanjutan `Company ?`

:::note 
Fitur ini terdapat pada tombol **Detail** di kolom action.
<img src="/img/commerce/masterdata/company4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
</p>

- **`Company Details Info`**
- **`Company Details Item`**
:::

### Company Details `Info`
:::note 
- **`Informasi umum mengenai perusahaan`**
- **`Informasi terkait Pajak`** : Jika Pajak Diperlukan, Setiap transaksi untuk perusahaan ini harus menyertakan Pajak.
- **`Credit Limit`** yang pengguna tentukan untuk company sebagai customer tersebut. Halaman Company Details Info dapat dilihat pada **Gambar 2.3.6**.
:::

<img src="/img/commerce/masterdata/company5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.6 Halaman Company Details - Info
</p>

| Data Credit Limit | Deskripsi |
| -------- | --- |
| Credit Limit | Total limit kredit yang pemilik bisnis berikan kepada perusahaan yang berperan sebagai customer.  |
| Exceed Credit Limit | **Melebihi batas kredit** : Total kredit yang belum dibayar telah melebihi batas kredit. |
| Credit Limit Available | **Limit kredit tersedia** : Total batas kredit yang masih dapat digunakan. |
|Bypass Credit Limit| **Melewati batas kredit** : **Allowed** (Diizinkan), **Not Allowed** (Tidak Diizinkan)
| Not Paid Sales Order | Total Sales Order yang belum dibayar |
| Paid Sales Order | Total Sales Order yang telah dibayar |

### Company Details `Item`
:::note
- **`Informasi mengenai item`** yang tersedia dalam perusahaan tersebut.  
- Sistem menyediakan fitur **`buy price history`**, dimana pengguna dapat melihat catatan pembelian item tersebut dengan cara menekan ikon tanda panah ‘ **`v`** ’ yang terletak di sebelah kiri item terlihat pada **Gambar 2.9.7**.
:::

<img src="/img/commerce/masterdata/company6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.7 Halaman Company Details - Item
</p>

<img src="/img/commerce/masterdata/company7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.8 Detail Buy Price History
</p>

:::note fitur 
- **`Direct Purchasing`** : Pengguna dapat melakukan pembelian item langsung pada company tersebut, tanpa melalui menu ***purchase request*** . 
:::

### Direct `Purchase`

**`Petunjuk melakukan Direct Purchase :`** 
- `Tekan tombol Direct Purchasing` : Sistem akan menampilkan format pengisian.

<img src="/img/commerce/masterdata/company10.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/masterdata/company11.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.9.9 Format Input
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Contact Person|Kontak perusahaan supplier yang menangani proses pembelian|Ya|
|(Checkbox) Make Company as Contact Person|Check box dapat diklik apabila perusahaan tersebut tidak memiliki kontak yang dapat dihubungi|Tidak|
|Purchaser|Kontak milik pengguna yang menangani proses pembelian|Tidak|
|Delivery Method| **Metode pengiriman** : **Self Pick-Up** (Pengambilan Mandiri), **Delivery** (Pengiriman)|Tidak|
|Currency|Mata uang|Tidak|
|Requested Item|Memilih barang yang akan dibeli|Tidak|
|Goods Notes|Catatan terhadap pembelian barang|Tidak|
|Service|Jasa layanan yang terdapat pada company tersebut, pengguna dapat memesan layanan yang terdapat di perusahaan tersebut bila dibutuhkan|Tidak|
|Service Notes|Catatan terhadap pembelian layanan|Tidak|
|Attachment|Lampiran|

- `Isilah data terkait pesanan pembelian` lalu tekan tombol **submit**.

:::note
Setelah menekan tombol **submit** , proses selanjutnya akan diteruskan pada menu [Purchase Order](/docs/domain/commerce/purchase/purchase-order.md).
:::