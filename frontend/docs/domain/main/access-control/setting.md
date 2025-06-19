---
title: Setting
sidebar_position: 4
---

:::note
Menu Setting ini terbagi menjadi 2 :
- **`General`** : Pengaturan umum seperti (***Report, SMTP, Midtrans,*** dan ***Icon***).
- **`POS`** : Pengaturan yang akan digunakan pada domain POS seperti (***Profile, Warehouse,*** dan ***Tax & Charge***)
:::

:::note tips penggunaan
Tekan tombol ***Tour***, untuk mengetahui  fitur dan fungsinya. <img src="/img/commerce/masterdata/tour.png" alt="Deskripsi gambar" class="center" />
:::

## General
### Report
:::note
Pengaturan yang digunakan terkait halaman report seperti **Letter Head**, **Header** dan **Footer**. 
Halaman setting Report dapat dilihat pada **Gambar 4.4.1**.
:::

<img src="/img/main/settingreport.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.1. Halaman Setting Report
</p>

|Isian|Deskripsi|
|--|--|
|Letter Head|Kop surat yang berisi nama, dan informasi perusahaan yang muncul di bagian atas dokumen.|
|Header Image|Gambar yang ditampilkan di bagian atas dokumen, bisa berupa logo atau desain khusus.|
|Footer|Bagian bawah dokumen yang biasanya berisi informasi tambahan, seperti alamat perusahaan, atau catatan penting.|

### SMTP
:::note
**`SMTP`** (***Simple Mail Transfer Protocol***) digunakan untuk ***mengatur pengiriman email dari sistem***  yang dilakukan pengguna kepada perusahaan supplier, customer maupun internal perusahaan. Halaman setting SMTP dapat dilihat pada **Gambar 4.4.2**.
:::

<img src="/img/main/settingsmtp.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.2. Halaman Setting SMTP
</p>

| Isian | Deskripsi |
| -------- | --- |
| Email | Alamat email yang digunakan untuk mengirim pesan (misalnya, noreply@perusahaan.com). |
| Password | Kata sandi atau kode autentikasi yang diperlukan untuk masuk ke server email. |
| Name | Nama pengirim yang akan muncul di email penerima (misalnya, "Support Perusahaan"). |
| Host | Alamat server SMTP yang digunakan untuk mengirim email (misalnya, smtp.gmail.com untuk Gmail). |
| Port | Nomor jalur komunikasi yang digunakan untuk menghubungkan ke server email (contoh: 465 untuk SSL, 587 untuk TLS). |

### Midtrans
:::note
**`Menu Midtrans digunakan untuk mengatur metode pembayaran online melalui Midtrans`**, yaitu salah satu penyedia layanan payment gateway di Indonesia. Dengan mengonfigurasi Midtrans, pengguna dapat menerima pembayaran dari berbagai metode, seperti :

- ***Transfer bank (Virtual Account)***
- ***Kartu kredit/debit***
- ***E-wallet (GoPay, OVO, ShopeePay, dll.)***

Halaman setting Midtrans dapat dilihat pada **Gambar 4.4.3**.
:::

<img src="/img/main/midtrans.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.3. Halaman Setting Midtrans
</p>

| Isian | Deskripsi |
| -------- | --- |
|Server key|Digunakan untuk autentikasi di sisi server. Kunci ini bersifat ***rahasia*** dan digunakan untuk memproses transaksi, seperti membuat pembayaran atau mengecek status transaksi.|
|Client Key|Digunakan untuk autentikasi di sisi klien (pengguna). Kunci ini ***tidak rahasia*** dan biasanya digunakan di frontend aplikasi untuk menampilkan metode pembayaran atau menginisiasi transaksi.|

### Icon
:::note
**`Menu Icon digunakan untuk mengatur logo atau design bisnis`**.
Halaman setting Icon dapat dilihat pada **Gambar 4.4.4**.
:::

<img src="/img/main/icon.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.4. Halaman Setting Icon
</p>

| Isian | Deskripsi |
| -------- | --- |
|Icon Image |Gambar yang ditampilkan di bagian atas profil.|

## POS
### Profile
:::note
**`Mengatur informasi perusahaan yang akan ditampilkan di struk transaksi`**.
Halaman setting Profile dapat dilihat pada **Gambar 4.4.5**.
:::

<img src="/img/main/posprofile.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.5. Halaman Setting Profile
</p>

| Isian | Deskripsi |
| -------- | --- |
|Company Name |Nama perusahaan yang muncul di struk.|
|Address|Alamat perusahaan yang tercetak di struk.
|Contact Number|Nomor kontak yang dapat dihubungi.
|Company Logo|Logo perusahaan yang ditampilkan di struk untuk tampilan lebih profesional.

### Warehouse
:::note
**`Mengatur gudang penyimpanan barang yang akan dilakukan transaksi`**.
Halaman setting Warehouse dapat dilihat pada **Gambar 4.4.6**.
:::

<img src="/img/main/poswarehouse.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.6. Halaman Setting Warehouse
</p>

| Isian | Deskripsi |
| -------- | --- |
|Select Warehouse used in Point of Sales |Tentukan gudang yang akan dilakukan transaksi POS|

### Tax & Charge
:::note
**`Menu Tax & Charge Settings ini digunakan untuk mengatur pajak, biaya tambahan, dan metode pembayaran terkait pajak atau penyesuaian harga di sistem POS.`**.
Halaman setting Tax & Charge dapat dilihat pada **Gambar 4.4.7**.
:::

<img src="/img/main/postax.png" alt="Deskripsi gambar" class="center" />
<img src="/img/main/postax2.png" alt="Deskripsi gambar" class="center" />
<p style={{textAlign: 'center', fontSize: '0.8em'}}>
Gambar 4.4.7. Halaman Setting Tax & Charge
</p>

| Isian | Deskripsi |
| -------- | --- |
|Bank Transfer|**Menampilkan metode pembayaran melalui transfer bank** yang terhubung dengan Midtrans. **Terdapat opsi Set Amount, jika dicentang**, pengguna bisa menentukan biaya tambahan untuk metode ini.
|QRIS|**Menampilkan metode pembayaran melalui QRIS** yang terhubung dengan Midtrans. **Terdapat opsi Set Amount** untuk menetapkan biaya tambahan dalam bentuk persentase.
|TBAF|**Digunakan untuk penyesuaian pajak dasar**. **Numerator**: Faktor penyesuaian pajak (angka pembilang). **Denominator**: Angka penyebut untuk perhitungan persentase pajak. **Persentase penyesuaian pajak dihitung berdasarkan nilai numerator dan denominator**.
|Charge Types|Jenis biaya tambahan yang dikenakan, seperti Service Charge.
|Name|Nama biaya tambahan (misalnya: "Service").
|Amount|Besaran biaya tambahan yang dikenakan, bisa dalam bentuk persen (%).