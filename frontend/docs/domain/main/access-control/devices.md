---
title: Devices
sidebar_position: 6
---

:::note
- Pengguna dapat **`menambahkan device`** yang akan digunakan untuk menjalankan executor dan scada fuxa.
- Pengguna juga bisa **`melakukan download file untuk excecutor`** yang ada pada halaman device. Berikut fitur-fitur yang terdapat dalam menu devices dan data yang dapat diisi seperti pada **Gambar 4.6.1**.
:::

<img src="/img/main/devices.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.1. Halaman Devices
</p>

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## Tambah `Device?`
Dalam menambahkan data Device hanya dapat dilakukan oleh pengguna yang berperan sebagai **Super Admin** atau peran yang diberikan hak akses untuk melakukan ***add*** (tambah), ***view*** (melihat), dan ***edit*** (menyunting) data. Penambahan peran atau hak akses dapat dilihat pada menu [**Role**](/docs/domain/main/access-control/role.md) .

**`Petunjuk penambahan Device :`** 
- `Tekan tombol add Device` : Pengguna akan diarahkan ke halaman penambahan device dapat dilihat pada **Gambar 4.6.2.**

<img src="/img/main/adddevices.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.2. Halaman Add Device
</p>

| Isian | Deskripsi | Wajib Diisi |
| -------- | --- | --- | 
| Name | Nama Device | Ya |
| Description | Catatan mengenai Device yang digunakan | Tidak |

- **`Isilah data terkait penambahan device`** lalu tekan tombol ***Submit***.

## Pembayaran `Device ?`

:::danger perlu diketahui
- **`Device yang baru ditambahkan belum dapat digunakan`**. Pengguna perlu menyelesaikan pembayaran terlebih dahulu. Berikut adalah petunjuk dan langkah-langkah untuk melakukan pembayaran.
:::

`Petunjuk melakukan Pembayaran :`

- **`Devices yang telah ditambahkan`** akan memiliki status ***Pending*** dan tipe ***Trial*** seperti pada **Gambar 4.6.3**.

<img src="/img/main/devices2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.3. Status Pending
</p>

- **`Tekan tombol Edit pada kolom action`**, seperti pada Gambar 4.6.4.

<img src="/img/main/devices3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.4. Tombol Edit
</p>

- **`Pengguna akan diarahkan ke halaman Edit Device`**, lalu tekan tombol ***Create Billing*** seperti pada **Gambar 4.6.5**.

<img src="/img/main/devices4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.5. Tombol Create Billing
</p>

- **`Lakukan pembayaran yang dikirim admin melalui email`**, lalu device baru dapat digunakan.

- **`Setelah melakukan pembayaran`**, device yang terdaftar akan berubah status menjadi ***Active*** dan tipe ***Full***.

## Detail `Device ?`

:::note
Pada detail device ini terdapat informasi terkait ***Device ID***, dan ***Serial Number*** yang akan digunakan untuk kebutuhan Executor.
:::

`Petunjuk melihat detail Device :`

- **`Tekan tombol Detail pada kolom action`**, dan pengguna akan diarahkan pada halaman detail Device seperti pada **Gambar 4.6.6**.

<img src="/img/main/devices5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.6. Halaman Detail Device
</p>

- **`Tekan tombol Open Detail`**, dan sistem akan menampilkan popup terkait informasi ***Device ID***, dan ***Serial Number*** seperti pada **Gambar 4.6.7**.

<img src="/img/main/devices6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.6.6. Popup Informasi
</p>