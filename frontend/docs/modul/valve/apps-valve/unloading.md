---
title: Unloading
sidebar_position: 1
---

:::note
**`Menu Unloading digunakan untuk mencatat dan memantau proses pembongkaran muatan`** dari kendaraan tangki (truk tangki) ke dalam tangki timbun (storage tank) di pabrik. 

Halaman menu Unloading dapat dilihat pada **Gambar 2.1**.
:::

<img src="/img/valve/apps/unloading 1.png" alt="Deskripsi gambar" class="center" />
<img src="/img/valve/apps/unloading 2.png" alt="Deskripsi gambar" class="center" />
<img src="/img/valve/apps/unloading 3.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1 Halaman Unloading
</p>

**`Berikut penjelasan dari setiap bagian :`**

<img src="/img/valve/apps/unloading 4.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.2 Selektor Pompa
</p>

Pada gambar 2.2 --> **pengguna dapat memilih pompa** yang akan digunakan untuk proses ***unloading*** **(pembongkaran muatan)**  dengan menekan selektor dari masing masing pompa yang ingin digunakan.

<img src="/img/valve/apps/unloading 5.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.3 Form input Unloading
</p>

Pada gambar 2.3 --> **pengguna dapat menjalankan proses pembongkaran muatan secara otomatis** dengan mengisi form isian lalu menekan tombol ***Unload***, dan sistem akan mengirimkan perintah ke plc untuk memulai proses **pengisian ke dalam tangki**.

<img src="/img/valve/apps/unloading 6.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.4 Alarm atau Log Aktivitas
</p>

Pada gambar 2.4 --> merupakan informasi terkait **pencatatan dan menampilkan semua aktivitas dan peringatan (alarm)** yang terjadi dalam sistem secara otomatis. Ini berguna untuk **monitoring, evaluasi, dan** ***troubleshooting*** **(pemecahan masalah)**.

<img src="/img/valve/apps/unloading 7.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.5 Tampilan Jalur Unloading dan Maintenance Mode
</p>

Pada gambar 2.5 --> disajikan tampilan visual **jalur pembongkaran muatan** (***unloading***) yang menunjukkan hubungan antara:
- Pompa (***Pump***)
- Katup (***Valve***)
- Tangki Penyimpanan (***Tank***)

Selain itu juga, pengguna dapat menggunakan mode maintenance untuk melakukan pemeriksaan valve secara menyeluruh.

<img src="/img/valve/apps/unloading 8.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.6 Peringatan (Warning)
</p>

Pada gambar 2.6 --> menunjukkan pesan peringatan bahwa terdapat aturan sistem yang harus dipatuhi saat melakukan proses ***unloading***.

<img src="/img/valve/apps/unloading 9.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.7 Riwayat Unloading
</p>

Pada gambar 2.7 --> menampilkan riwayat proses ***unloading*** yang telah dilakukan.

## Proses Unloading

**`Berikut petunjuk dalam melakukan proses unloading (pembongkaran muatan) :`**

1. **`Isilah data terkait`** ***unloading*** pada format isian seperti pada **gambar 2.1.1** dengan ketentuan yang ada pada tabel berikut.

<img src="/img/valve/apps/unloading 10.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.1 Form input Unloading
</p>

|Isian|Deskripsi|
|--|--|
|Input|Cara penginputan data dapat dipilih dengan dua metode, yaitu: ***Scan Ticket*** (menyeken tiket, di mana data terkait plat kendaraan dan berat muatan akan otomatis terisi) atau ***Manual Input*** (memasukkan data plat kendaraan dan berat muatan secara manual).
|Tank|Pemilihan tangki.
|Line|Pemilihan jalur yang akan diproses unloading.
|Ticket|Menampilkan nomor tiket yang telah discan.|
|License Plate|Plat Kendaraan.
|Weight (kg)|Berat muatan dalam satuan kg.
|Actions (+)|Penambahan data unloading apabila Multi Armada
|Notes|Catatan terhadap proses unloading.

2. **`Bila format isian telah selesai diisi`**, tekan tombol ***Unload*** untuk memulai proses.

3. **`Setiap catatan aktivitas`** akan ditampilkan pada ***Alarm/Activity Log***.

4. **`Dalam proses terdapat 3 button`** antara lain :

|Button|Deskripsi|
|--|--|
|Pause <img src="/img/valve/apps/unloading 11.png" alt="Deskripsi gambar" class="center" />|Tombol ***PAUSE*** berfungsi untuk mematikan pompa (*OFF*), namun valve master dan valve tangki tetap dalam kondisi terbuka. Dalam kondisi ini, proses dianggap masih berjalan (*running*).
|Resume <img src="/img/valve/apps/unloading 11.png" alt="Deskripsi gambar" class="center" />|Tombol ***RESUME*** berfungsi untuk menyalakan kembali (*ON*) pompa. Status pompa akan berubah menjadi *ON* yang ditandai dengan warna hijau pada indikator pompa.
|Stop <img src="/img/valve/apps/unloading 12.png" alt="Deskripsi gambar" class="center" />|Tombol ***STOP*** berfungsi untuk menghentikan proses pengisian ke tangki. Setelah pengisian selesai, Operator menekan tombol *STOP* dan akan muncul notifikasi konfirmasi di layar. Setelah dikonfirmasi, pompa akan mati (*OFF*) dan katup (*valve*) akan tertutup (*CLOSE*), ditandai dengan indikator pompa dan valve berubah menjadi warna merah.

## Alarm

:::note Alarm
**`Alarm akan berbunyi jika muatan menyentuh batas level tinggi maksimum tangki`**, yang ditandai dengan perubahan warna tampilan tangki menjadi merah, tombol ***ACK*** yang berwarna kuning, dan informasi alarm pada Alarm/Activity Log seperti pada **Gambar 2.1.2 - 2.1.3.**
:::

<img src="/img/valve/apps/unloading 13.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.2 Tangki Full Muatan
</p>

<img src="/img/valve/apps/unloading 14.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3 Alarm di Activity Log
</p>

Pengguna dapat mengirimkan sinyal perintah ke plc untuk mematikan alarm dengan menekan tombol merah ***ACK*** pada kolom action di Alarm/Activity Log.

## Maintenance Mode

:::note
**`Maintenance mode digunakan untuk pengecekan valve secara keseluruhan.`**
:::

### Aktifkan Maintenance Mode

<img src="/img/valve/apps/unloading 15.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.1.1 Maintenance Mode
</p>

1. **`Tekan tombol`** ***Maintenance Mode*** untuk melakukan pengecekan.

### Button Valve Pump

<img src="/img/valve/apps/unloading 16.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.2.1 Button Valve Pump
</p>

1. **`Tekan button`** ***Lingkaran*** yang ada pada valve pump, dan plc akan memberikan sinyal untuk mengaktifkan valve seperti pada **Gambar 2.1.3.2.2**.

<img src="/img/valve/apps/unloading 17.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.2.2  Indikator Valve Aktif
</p>

2. **`Bila tidak terdapat perubahan warna pada indikator valve`**, lakukan troubleshooting sesuai dengan arahan pada bab ***troubleshooting***.

### Button Valve Tank

<img src="/img/valve/apps/unloading 18.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.3.1 Button Valve Tank
</p>

1. **`Tekan button`** ***Lingkaran*** yang ada pada valve tank, dan plc akan memberikan sinyal untuk mengaktifkan valve seperti pada **Gambar 2.1.3.3.2**.

<img src="/img/valve/apps/unloading 19.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.3.2 Indikator Valve Aktif
</p>

2. **`Bila tidak terdapat perubahan warna pada indikator valve`**, lakukan troubleshooting sesuai dengan arahan pada bab ***troubleshooting***.

### Non-Aktifkan Maintenance Mode

1. **`Pastikan tidak ada valve dalam kondisi aktif`**.

2. **`Tekan tombol`** ***Maintenance Mode*** kembali untuk menon-aktifkan maintenance mode.

### Button Maintenance

<img src="/img/valve/apps/unloading 20.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.5.1 Button Maintenance
</p>

1. **`Pastikan tidak ada valve dalam kondisi aktif.`**

2. **`Tekan tombol`** ***Maint*** lalu tampilan tangki akan berubah warna seperti pada **Gambar 2.1.3.5.2**.

<img src="/img/valve/apps/unloading 21.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 2.1.3.5.2 Indikator Tank Maintenance
</p>

3. **`Bila maintenance telah selesai dilakukan`**, aktifkan kembali tank dengan menekan tombol ***Maint*** kembali.