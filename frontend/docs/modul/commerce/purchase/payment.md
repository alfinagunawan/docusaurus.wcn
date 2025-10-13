---
title: Payment
sidebar_position: 10
---

:::note
**`Menu ini digunakan untuk mencatat dan mengelola proses pembayaran kepada supplier berdasarkan tagihan (billing) yang telah dibuat.`**

Halaman Payment dapat dilihat pada **Gambar 6.10.1**.
:::

<img src="/img/commerce/purchase/payment1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.10.1 Halaman Payment
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data pembayaran.|Tekan tombol Add Payment.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data pembayaran secara lebih rinci.|Tekan tombol Details pada kolom Action.
|Edit|Menyunting data pembayaran.|Tekan tombol Edit pada kolom Action.
|Delete|Menghapus data pembayaran.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data pembayaran sekaligus.|Pilih data pembayaran baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Payment ?`

**`Berikut petunjuk dalam menambahkan Payment :`**

1. **`Tekan tombol`** ***Add Payment*** dan pengguna akan diarahkan pada halaman penambahan data Payment seperti pada **Gambar 6.10.2**.

<img src="/img/commerce/purchase/payment2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.10.2 Halaman Add Payment
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Source|Sumber pembayaran.|
|Posting Date|Tanggal pencatatan atau pengakuan pembayaran dalam sistem akuntansi.|Ya
|Type|	Jenis transaksi pembayaran.|Ya
|Payment Date|Tanggal saat pembayaran benar-benar dilakukan atau dijadwalkan dilakukan.|Ya
|Note|Catatan tambahan yang relevan dengan pembayaran.|Tidak
|Order|Referensi ke dokumen pesanan terkait.|Ya
|Currency|Mata uang yang digunakan untuk melakukan pembayaran.|Ya
|Converted Currency|Jika pembayaran dilakukan dalam mata uang asing, di sini dicatat mata uang yang dikonversi ke mata uang dasar perusahaan.|Ya
|Currency Rate|Nilai tukar mata uang saat transaksi dilakukan.|Tidak
|File|Upload dokumen pendukung, seperti bukti transfer, kwitansi, atau lampiran invoice sebagai referensi pembayaran.|Tidak
|Other Details|Menambahkan informasi tambahan yang tidak tersedia pada form|Tidak

2. **`Isilah data penambahan Payment`**, lalu tekan tombol ***Submit***.

## Setuju & Tolak `Payment ?`

**`Berikut petunjuk dalam melakukan setuju & tolak Payment :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Payment seperti pada **Gambar 6.10.3**.

<img src="/img/commerce/purchase/payment3.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/purchase/payment4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.10.3 Halaman Details Payment
</p>

2. **`Tentukan permintaan pembayaran`** dengan menekan tombol ***Approve*** untuk menyetujui atau ***Reject*** untuk menolak.

## Pembatalan `Payment ?`

:::note
**`Proses untuk membatalkan pembayaran yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses pembayaran **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Payment :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Payment seperti pada **Gambar 6.10.4**.

<img src="/img/commerce/purchase/payment5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 6.10.4 Tombol Cancel Halaman Details Payment
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Payment telah dibatalkan.