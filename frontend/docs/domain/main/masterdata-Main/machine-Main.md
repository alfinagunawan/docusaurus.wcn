---
title: Machine
sidebar_position: 12
---

:::note
Menu ini berfungsi untuk menambahkan informasi mengenai **mesin** yang melakukan proses produksi. Halaman machine dapat dilihat pada **Gambar 2.12.1.**
:::

<img src="/img/main/machine1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.12.1 Halaman Machine
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Fitur Lanjutan 
:::note
Pada halaman, fitur "**v**" dapat dipergunakan untuk melihat detail Mesin terkait ***perangkat*** yang ada pada mesin. 
- Tekan tombol "**v**" dan sistem akan menampilkan detail Mesin seperti pada gambar dibawah ini.
<img src="/img/main/machine2.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Machine ?`
Dalam menambahkan data Machine hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md). 

**`Petunjuk penambahan Machine :`** 
- `Tekan tombol add Machine` : Pengguna akan diarahkan ke halaman penambahan machine seperti pada **Gambar 2.12.2**.

<img src="/img/main/machine3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.12.2 Halaman Add Machine
</p>

| Fitur | Deskripsi | Cara Akses |
| -------- | --- | --- |
| Duplicate Machine | Formulir Machine akan terisi Otomatis berdasarkan data yang sudah terdaftar | Tekan tombol Duplicate Machine |

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- |
| Name | Nama mesin | Ya |
| Code| Nomer kode unik mesin | Ya |
| Description |Catatan SOP mengenai mesin | Tidak |
| Hardware List | Daftar perangkat yang menjadi kontroler mesin. Mesin yang bukan merupakan alat elektronik, tidak perlu menambahkan Hardware List | Tidak |

:::note Data tambahan
- Sistem menyediakan formulir untuk mengisi data tambahan yang dapat diinput oleh pengguna. 
- ***Formulir data tambahan ini bersifat opsional*** (dapat diisi atau tidak).
- Aktifkan dengan mencentang kotak centang **Show Additional Data**, seperti pada **Gambar 2.12.3**.
:::

<img src="/img/main/machine4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.12.3  Data Tambahan
</p>

- `Isilah data terkait penambahan machine`, lalu tekan tombol ***Submit***.