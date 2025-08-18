---
title: Receiving
sidebar_position: 10
---

:::note
**`Menu ini digunakan untuk pencatatan penerimaan dana dari customer atau pihak lain.`** 

Halaman Receiving dapat dilihat pada **Gambar 7.10.1**.
:::

<img src="/img/commerce/sales/receiving1.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.10.1 Halaman Receiving
</p>

|Fitur|Deskripsi|Cara Akses|
|--|--|--|
|Add|Menambah data penerimaan dana.|Tekan tombol Add Receiving.|
|Filter|Menyaring data dengan kondisi tertentu|Tekan tombol Filter.|
|Reset Filter|Mengembalikan data pada kondisi semula|Tekan tombol Reset Filter.|
|Details|Melihat data kontrak secara lebih rinci.|Tekan tombol Details pada kolom Action.|
|Edit|Menyunting data penerimaan dana.|Tekan tombol Edit pada kolom Action.|
|Delete|Menghapus data penerimaan dana.|Tekan ikon sampah pada kolom Action.|
|Multiple Delete|Menghapus beberapa data penerimaan dana sekaligus.|Pilih data penerimaan dana baris atau dengan mencentang kotak pada sebelah kiri. Kemudian tekan tombol Multiple  Delete (berwarna merah).|

## Tambah `Receiving ?`

**`Berikut petunjuk dalam menambahkan Receiving :`**

1. **`Tekan tombol`** ***Add Receiving*** dan pengguna akan diarahkan pada halaman penambahan data penerimaan dana seperti pada **Gambar 7.10.2**.

<img src="/img/commerce/sales/receiving2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.10.2 Halaman Add Receiving
</p>

|Isian|Deskripsi|Wajib Diisi|
|--|--|--|
|Source|Sumber dana yang diterima.|Ya
|Payment Date|Tanggal ketika pembayaran benar-benar diterima (tanggal transfer atau bukti setoran).|Ya
|Posting Date|Tanggal pencatatan dalam sistem akuntansi.|Ya
|Note|Catatan tambahan untuk menjelaskan detail pembayaran.|Tidak
|Type|Jenis transaksi penerimaan dana, • ***Payment*** : Pembayaran atas tagihan/invoice. • ***Down Payment*** : Uang muka sebelum barang/jasa dikirim. • ***Refund*** : Dana dikembalikan ke sistem akibat pembatalan atau kelebihan pembayaran.|Ya
|Order|Dokumen sumber dari transaksi, • ***Invoice*** : Jika dana masuk berkaitan dengan invoice tertentu. • ***Order*** : Jika masih tahap sales order dan belum difakturkan, misalnya saat menerima DP.
|Currency|Mata uang yang digunakan dalam transaksi pembayaran.|Ya
|Converted Currency|Mata uang lokal atau yang digunakan dalam sistem pembukuan.|Ya
|Currency Rate|Nilai tukar antara currency transaksi dan converted currency.|Ya
|File|	Lampiran bukti pembayaran seperti transfer slip, bukti setoran, invoice terkait, atau surat konfirmasi pembayaran.|Tidak
|Other Details|	Kolom tambahan untuk data lain yang relevan, bisa berupa metode pembayaran, nomor referensi bank, atau instruksi khusus.|Tidak

2. **`Isilah data penambahan penerimaan dana`**, lalu tekan tombol ***Submit***.

## Pembatalan `Receiving ?`

:::note
**`Proses untuk membatalkan penerimaan dana yang sebelumnya telah dibuat`** dalam sistem. Ini biasanya dilakukan jika terjadi ***kesalahan input, perubahan rencana, atau transfer tidak jadi dilakukan*** dengan syarat proses penerimaan dana **`belum dilakukan proses lebih lanjut`**.
:::

**`Berikut petunjuk dalam melakukan pembatalan Receiving :`**

1. **`Tekan tombol`** ***Details*** dan pengguna akan diarahkan pada halaman details data Receiving seperti pada **Gambar 7.10.3**.

<img src="/img/commerce/sales/receiving3.png" alt="Deskripsi gambar" class="center" />
<img src="/img/commerce/sales/receiving4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 7.10.3 Tombol Cancel Halaman Details Receiving
</p>

2. **`Tekan tombol`** ***Cancel*** lalu proses Receiving telah dibatalkan.