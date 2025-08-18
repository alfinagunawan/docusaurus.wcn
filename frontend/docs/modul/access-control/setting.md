---
title: Setting
sidebar_position: 3
---

:::note
**`MenMenu Setting digunakan untuk mengatur konfigurasi dasar sistem,`** khususnya yang berkaitan dengan :
- ***Alamat dan port komunikasi PLC untuk membaca dan menulis data.***
- ***Pengaturan perubahan volume dalam satuan ton dan interval pembacaan data.***
- ***Pengaturan jeda (delay) pada pompa dan katup (valve) untuk memastikan proses berjalan aman.***
- ***Alamat dan port timbangan jembatan (weighbridge) yang terhubung dengan sistem.***

Halaman menu Setting dapat dilihat pada **Gambar 3.1.**
:::

<img src="/img/access-control/setting/1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 9.1.1 Halaman Setting
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Edit|Menyunting pengaturan.|Tekan tombol Edit.

## Edit `Setting ?`

**`Berikut petunjuk dalam menyunting Setting  :`**

1. **`Tekan tombol`** ***Add Edit Setting*** dan pengguna akan diarahkan pada halaman penyuntingan setting seperti pada **Gambar 3.2.**

<img src="/img/access-control/setting/2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 3.2 Halaman Edit Setting
</p>

|Isian|Deskripsi|
|--|--|
|PLC Address|Alamat IP dari PLC (Programmable Logic Controller) yang digunakan untuk komunikasi dengan sistem Access Control.
|Number of Tank|Jumlah total tangki yang terhubung dan dimonitor oleh sistem.
|PLC Port (Read)|Nomor port pada PLC yang digunakan untuk membaca data dari perangkat.
|Pump Delay (seconds)|Waktu tunda dalam detik sebelum pompa dijalankan atau dihentikan, untuk mencegah perubahan mendadak pada proses.
|PLC Port (Write)|Nomor port pada PLC yang digunakan untuk mengirim atau menulis data ke perangkat.
|Valve Delay (seconds)|Waktu tunda dalam detik sebelum katup dibuka atau ditutup, untuk menghindari lonjakan tekanan atau kerusakan mekanis.
|Volume Change (Ton)|Besar perubahan volume dalam satuan ton yang menjadi batas deteksi atau pembaruan pada sistem.
|Weighbridge Address|Alamat IP dari timbangan jembatan (weighbridge) yang terhubung ke sistem.
|Interval (seconds)|Jeda waktu dalam detik antar pembacaan atau pembaruan data dari perangkat.
|Weighbridge Port|Nomor port komunikasi yang digunakan oleh timbangan jembatan.

2. **`Isilah data terkait penyuntingan setting`** lalu tekan tombol ***Submit***.