---
title: Currency
sidebar_position: 4
---

:::note
Menu yang digunakan untuk menambahkan daftar mata uang. Halaman company dapat dilihat pada **Gambar 2.4.1**.
:::

<img src="/img/main/currency1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.4.1 Halaman Currency
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Currency ?`
Dalam menambahkan data Currency hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md).

**`Petunjuk penambahan Currency :`** 
- `Tekan tombol add Currency` : Pengguna akan diarahkan ke halaman penambahan Currency seperti pada **Gambar 2.4.2**.

<img src="/img/commerce/masterdata/currency2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.4.2 Halaman Add Currency
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Currency | Formulir Currency Isi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Currency |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
|Name|Nama mata uang yang digunakan disuatu negara, contoh : **Rupiah Indonesia**.|Ya|
|Code|Kode mata uang dalam format ISO 4217 atau kode internasional, contoh : **IDR, USD**.|Ya|
|Symbol|Simbol yang mewakili mata uang tersebut, contoh : **Rp , $**.|Ya|
|Country|Negara mata uang yang berlaku.|Ya|

- `Isilah data terkait penambahan currency`, lalu tekan tombol **submit**.

## Tetapkan Default `Currency ?`

:::note
Dalam penambahan mata uang, pengguna dapat menentukan mata uang mana yang akan diterapkan sebagai standar transaksi.
:::

`Petunjuk Penetapan Default` :

- **`Tekan tombol Set as Default`** pada kolom action, seperti pada **Gambar 2.4.3**.

<img src="/img/commerce/masterdata/currency3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.4.3 Tombol Set as Default
</p>

- Setelah ditekan, mata uang yang digunakan sebagai standar akan terlihat seperti pada **Gambar 2.4.4**.

<img src="/img/commerce/masterdata/currency4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.4.4 Mata uang sebagai Default
</p>