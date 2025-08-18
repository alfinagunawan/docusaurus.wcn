---
title: Valve Pump
sidebar_position: 7
---

:::note
**`Menu Valve Pump digunakan untuk mengatur koneksi antara pompa dan valve yang mengarah ke berbagai jalur distribusi`** (misalnya jalur PKO, CNO, Green, dan Yellow). Hal ini penting agar sistem tahu pompa mana yang terhubung ke valve mana, dan bagaimana cara mengendalikan buka/tutup valve tersebut secara otomatis.

Halaman menu Valve Pump dapat dilihat pada **Gambar 1.7**.
:::

<img src="/img/valve/masterdata/valve 1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 1.7 Halaman Valve Pump
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Update|**Mengisi atau mengedit** pengaturan koneksi pompa ke valve.|Tekan tombol Update

## Update `Valve Pump ?`

**`Berikut petunjuk dalam update Valve Pump :`**

1. **`Tekan tombol`** ***Update*** dan pengguna akan diarahkan pada halaman penambahan tangki seperti pada **Gambar 1.7.1**.

<img src="/img/valve/masterdata/valve 2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 1.7.1 Halaman Add Tank
</p>

|Isian|Deskripsi|
|--|--|
|Label|Nama atau kode valve yang digunakan. Ini untuk mempermudah identifikasi di sistem. Contoh: "Valve C4".|
|Input|Alamat input dari sensor valve (berisi status valve: apakah terbuka atau tertutup). Biasanya menggunakan format seperti M1300, M1340, dll.
|Output|Alamat output PLC untuk mengendalikan valve (misalnya memberi perintah untuk membuka/tutup valve).
|Open|Alamat khusus untuk memerintahkan valve agar **terbuka**.|
|Close|Alamat khusus untuk memerintahkan valve agar **tertutup**.
|Write|Nilai unik yang dipakai sistem untuk **menulis perintah** pada valve tersebut. Contoh: 1, 2, 3, dst.

2. **`Isilah data update Valve Pump`** lalu tekan tombol ***Submit***.