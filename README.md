# Dokumentasi Landing Page

## 🚀 Teknologi yang Digunakan

### Teknologi Utama

#### React ⚛️
- **Fungsi**: Library JavaScript untuk membangun antarmuka pengguna
- **Alasan Pemilihan**: 
  - Arsitektur berbasis komponen
  - Virtual DOM untuk rendering yang efisien
  - Dukungan komunitas yang besar
- **Instalasi**:
```bash
npm install react react-dom
```

#### Vite ⚡
- **Fungsi**: Build tool modern untuk frontend
- **Alasan Pemilihan**:
  - Hot Module Replacement (HMR) yang sangat cepat
  - Dukungan TypeScript bawaan
  - Performa build yang optimal
- **Instalasi**:
```bash
npm create vite@latest landing-page --template react
```

### Alat Pengembangan

#### @vitejs/plugin-react 🔌
- **Fungsi**: Plugin resmi React untuk Vite
- **Alasan Pemilihan**: 
  - Mendukung Fast Refresh
  - Terintegrasi dengan Babel
- **Instalasi**:
```bash
npm install @vitejs/plugin-react --save-dev
```

#### ESLint 🔍
- **Fungsi**: Pemeriksaan kualitas dan gaya kode
- **Alasan Pemilihan**:
  - Menjaga konsistensi kode
  - Mendeteksi potensi kesalahan
  - Menerapkan praktik terbaik
- **Instalasi**:
```bash
npm install eslint eslint-plugin-react --save-dev
```

### Fitur Tambahan (Opsional)

#### TypeScript 📝
- **Fungsi**: Pengecekan tipe statis
- **Alasan Pemilihan**:
  - Meningkatkan keandalan kode
  - Pengalaman pengembang yang lebih baik
  - Dukungan IDE yang lebih baik
- **Instalasi**:
```bash
npm install typescript @types/react @types/react-dom --save-dev
```

## 🚀 Memulai Proyek

### Prasyarat
- Node.js (v14.18+ atau 16.0+)
- npm atau yarn

### Langkah Instalasi

1. **Clone repositori**
```bash
git clone <url-repositori>
cd landing-page
```

2. **Instal dependensi**
```bash
npm install
```

3. **Jalankan server pengembangan**
```bash
npm run dev
```

4. **Akses aplikasi**
- Buka browser
- Kunjungi: http://localhost:5173

### Perintah yang Tersedia

- `npm run dev` - Menjalankan server pengembangan
- `npm run build` - Build untuk produksi
- `npm run preview` - Preview build produksi
- `npm run lint` - Menjalankan pemeriksaan ESLint

## 📁 Struktur Proyek

```
landing-page/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🤝 Kontribusi

1. Fork repositori
2. Buat branch fitur (`git checkout -b fitur/FiturBaru`)
3. Commit perubahan (`git commit -m 'Menambah FiturBaru'`)
4. Push ke branch (`git push origin fitur/FiturBaru`)
5. Buat Pull Request

## 📝 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.
