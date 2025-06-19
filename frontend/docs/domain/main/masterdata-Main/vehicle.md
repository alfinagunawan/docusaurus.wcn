---
title: Vehicle
sidebar_position: 14
---

:::note
Mendaftarkan informasi mengenai data **`kendaraan pengiriman`**. Halaman vehicle dapat dilihat pada **Gambar 2.14.1**.
:::

<img src="/img/main/vehicle1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.14.1 Halaman Vehicle
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

:::warning status kendaraan
Pada daftar kendaraan terdapat status :
- **`Available`** : Kendaraan tersedia.
- **`Not Available`** : Kendaraan sedang melakukan proses ***pengiriman/pemeliharaan***.
:::

<img src="/img/main/vehicle4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.14.2 Status Vehicle
</p>

## Tambah `Vehicle ?`
Dalam menambahkan data Vehicle hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md). 

**`Petunjuk penambahan Vehicle :`** 
- `Tekan tombol add Vehicle` : Pengguna akan diarahkan ke halaman penambahan Vehicle seperti pada **Gambar 2.14.3**.

<img src="/img/main/vehicle2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.14.3 Halaman Add Vehicle
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Vehicle | Formulir Vehicle akan terisi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Vehicle |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Vehicle Name | Nama kendaraan. | Ya |
| Ownership | Kepemilikan. | Ya |
| Vehicle Type | Jenis kendaraan | Ya |
| License Plate(Area Code) | Kode area Kendaraan | Ya |
| License Plate(Police Name) | Nomor polisi kendaraan | Ya |
| License Plate(Serial Number) | Nomor seri kendaraan  | Ya |
| License Plate(Date Annual Vehicle Tax) | Tanggal pajak kendaraan tahunan | Tidak |

:::note Data tambahan
- Sistem menyediakan formulir untuk mengisi data tambahan yang dapat diinput oleh pengguna. 
- ***Formulir data tambahan ini bersifat opsional*** (dapat diisi atau tidak).
- Aktifkan dengan mencentang kotak centang **Show Additional Data**, seperti pada **Gambar 2.14.4**.
:::

<img src="/img/main/vehicle3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.14.4  Data Tambahan
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| KIR(Province Code) | Kode provinsi (Uji Kendaraan Bermotor) | Tidak |
| KIR(District Number) | Nomor distrik (Uji Kendaraan Bermotor) | Tidak |
| KIR(Category) | Kategori (Uji Kendaraan Bermotor) | Tidak |
| KIR(Date end KIR) | Tanggal berakhir KIR (Uji Kendaraan Bermotor) | TIdak |
| KIR(Serial Number) | Nomor Seri (Uji Kendaraan Bermotor) | Tidak |
| Company name | Nama Perusahaan. | Tidak |
| Email Alert | Nama email petugas | Tidak |
| Expired Insurance Date | Tanggal asuransi kadaluarsa | Tidak |
| Last Maintenance Date | Tanggal pemeliharaan terakhir | Tidak |
| Document | Dokumen / surat yang berhubungan dengan distribusi | Tidak |
| Document Number | Nomor dokumen | Tidak |
| Expire Date | Tanggal kadaluarsa dokumen | Tidak |

- `Isilah data terkait penambahan vehicle`, lalu tekan tombol **submit**.