---
title: Troubleshooting
sidebar_position: 4
---

:::note
Panduan yang disediakan untuk membantu pengguna dalam **`mengidentifikasi dan mengatasi masalah teknis`** yang mungkin terjadi selama penggunaan aplikasi.
:::

## Indikator Pump `tidak berubah pada Dashboard ?`

<img src="/img/valve/troubleshooting/trouble 1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.1 Indikator Pompa
</p>

- Jika saat melakukan pengisian tangki secara otomatis dengan menekan tombol Unload pada form pengisian pompa tidak menunjukkan perubahan warna, **`lakukan penekanan button manual pada pompa`**.

## Indikator Valve `tidak berubah atau berwarna kuning pada Dashboard ?`

<img src="/img/valve/troubleshooting/trouble 2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.2 Indikator Valve
</p>

- **`Lakukan pengecekan pada output terminal PLC`** dan pastikan terdapat tegangan yang memberikan sinyal.

- **`Lakukan pengecekan pada input valve`** dan pastikan terdapat tegangan pada kabel input.

- **`Periksa apakah terdapat perubahan status pada feedback`**. Jika tidak ada perubahan, periksa kondisi kabel yang menghubungkan input valve dengan terminal output PLC.

## Indikator Alarm `tidak berubah pada Dashboard ?`

<img src="/img/valve/troubleshooting/trouble 3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.3 Indikator Alarm (ACK)
</p>

- **`Jika ACK aktif tapi alarm tidak berbunyi`**, lakukan pengecekan pada output terminal PLC dan pastikan terdapat tegangan yang memberikan sinyal agar alarm dapat berbunyi.