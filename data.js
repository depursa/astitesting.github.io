// File: data.js - Data configuration
const stats = [
    { value: "1000", label: "Sertifikat Terbit" },
    { value: "116", label: "Klien Industri" },
    { value: "3", label: "Tahun Pengalaman" },
    { value: "9", label: "Ahli K3 Bersertifikat" }
];

const services = [
    {
        id: "paa",
        title: "PAA – Pesawat Angkat dan Angkut",
        desc: "Pemeriksaan dan Pengujian Pesawat Angkat dan Angkut serta Alat Bantu Angkat dan Angkut.",
        detail: "Pemeriksaan Visual Struktur, Pengukuran Dimensi, Pengujian Tidak Merusak (NDT), Pengujian Beban, serta Pengujian Fungsi Safety Device untuk memastikan Kelayakan dan Keselamatan Operasi.",
        icon: "truck",
        category: "Logistik",
        color: "blue"
    },

    {
        id: "pesawat-uap",
        title: "Pesawat Uap",
        desc: "Pemeriksaan dan Pengujian Pesawat Uap serta Peralatan Pendukungnya.",
        detail: "Pemeriksaan Kondisi Konstruksi, Komponen Utama, Perlengkapan Pengaman, Sistem Kontrol, serta Pengujian yang Diperlukan untuk memastikan Pesawat Uap memenuhi Persyaratan Keselamatan dan Layak Dioperasikan.",
        icon: "flame",
        category: "Industri",
        color: "orange"
    },

    {
        id: "bejana-tekanan",
        title: "Bejana Tekanan",
        desc: "Pemeriksaan dan Pengujian Keselamatan Bejana Tekanan.",
        detail: "Pemeriksaan Visual, Pengukuran Ketebalan Material (Thickness Test), Pemeriksaan Sambungan Las, Pengujian Tidak Merusak (NDT), Pemeriksaan Safety Valve dan Perlengkapan Pengaman, serta Pengujian Lainnya sesuai Jenis dan Kondisi Bejana Tekanan.",
        icon: "cylinder",
        category: "Industri",
        color: "orange"
    },

    {
        id: "tangki-timbun",
        title: "Tangki Timbun",
        desc: "Pemeriksaan dan Pengujian Keselamatan Tangki Timbun.",
        detail: "Pemeriksaan Kondisi Konstruksi, Shell, Roof, Bottom Plate, Nozzle, Sambungan Las, Perlengkapan Pengaman, Pengukuran Ketebalan Material, serta Pengujian Lainnya untuk memastikan Tangki Timbun Aman dan Layak Digunakan.",
        icon: "database",
        category: "Industri",
        color: "orange"
    },

    {
        id: "proteksi-kebakaran",
        title: "Proteksi Kebakaran",
        desc: "Pemeriksaan dan Pengujian Sistem Proteksi Kebakaran Aktif dan Pasif.",
        detail: "Pemeriksaan dan Pengujian Sistem Hydrant, Sprinkler, Fire Alarm, Fire Pump, Hose Reel, APAR, serta Perangkat Proteksi Kebakaran Lainnya untuk memastikan Kesiapan Sistem dalam Menghadapi Risiko Kebakaran.",
        icon: "bell",
        category: "Safety",
        color: "red"
    },

    {
        id: "elevator",
        title: "Elevator / Lift",
        desc: "Pemeriksaan dan Pengujian Kelayakan Sarana Transportasi Vertikal.",
        detail: "Pemeriksaan Sistem Penggerak, Governor, Wire Rope, Brake System, Safety Device, Buffer, Interlock Pintu, serta Komponen Keselamatan Lainnya pada Lift Penumpang maupun Lift Barang.",
        icon: "arrow-up-down",
        category: "Gedung",
        color: "blue"
    },

    {
        id: "eskalator-travelator",
        title: "Eskalator dan Travelator",
        desc: "Pemeriksaan dan Pengujian Kelayakan Sarana Transportasi Orang pada Bangunan.",
        detail: "Pemeriksaan Sistem Penggerak, Step/Pallet, Handrail, Comb Plate, Brake System, Emergency Stop, Safety Device, serta Komponen Keselamatan Lainnya untuk memastikan Eskalator dan Travelator Aman Dioperasikan.",
        icon: "arrow-up-down",
        category: "Gedung",
        color: "blue"
    },

    {
        id: "instalasi-listrik",
        title: "Instalasi Listrik",
        desc: "Pemeriksaan dan Pengujian Keselamatan Instalasi serta Peralatan Listrik.",
        detail: "Pemeriksaan Instalasi Listrik, Panel Listrik, Kabel dan Penghantar, Sistem Proteksi, Peralatan Pengaman, serta Pengujian Kelistrikan yang Diperlukan untuk memastikan Instalasi Aman dan Memenuhi Persyaratan Keselamatan dan Kesehatan Kerja.",
        icon: "zap",
        category: "Elektrik",
        color: "yellow"
    },

    {
        id: "pengukuran-grounding",
        title: "Pengukuran Tahanan Pembumian",
        desc: "Pengukuran Tahanan Pembumian (Grounding) pada Instalasi Listrik dan Sistem Proteksi.",
        detail: "Pengukuran Tahanan Pembumian Menggunakan Earth Resistance Tester serta Pemeriksaan Sistem Grounding untuk memastikan Nilai Tahanan Pembumian Memenuhi Persyaratan Teknis dan Mendukung Keselamatan Instalasi.",
        icon: "activity",
        category: "Elektrik",
        color: "yellow"
    },

    {
        id: "proteksi-petir",
        title: "Sistem Proteksi Petir",
        desc: "Pemeriksaan dan Pengujian Sistem Proteksi terhadap Sambaran Petir.",
        detail: "Pemeriksaan Air Terminal, Konduktor Penyalur, Sistem Pembumian, Sambungan dan Perlengkapan Pendukung, serta Pengukuran Tahanan Pembumian untuk memastikan Sistem Proteksi Petir Berfungsi dengan Baik.",
        icon: "cloud-lightning",
        category: "Elektrik",
        color: "yellow"
    },

    {
        id: "ptp",
        title: "PTP – Pesawat Tenaga dan Produksi",
        desc: "Pemeriksaan dan Pengujian Pesawat Tenaga dan Produksi serta Mesin Produksi.",
        detail: "Pemeriksaan dan Pengujian pada Genset, Kompresor, Mesin Perkakas, Mesin Produksi, Turbin, Tanur, serta Pesawat Tenaga dan Produksi Lainnya untuk memastikan Keselamatan Operasi dan Perlindungan Tenaga Kerja.",
        icon: "settings",
        category: "Produksi",
        color: "green"
    },

    {
        id: "support-inspeksi",
        title: "Support Inspeksi dan Pengujian",
        desc: "Layanan Pendukung Inspeksi, Pemeriksaan, dan Pengujian Peralatan serta Instalasi.",
        detail: "Meliputi Non-Destructive Testing (NDT), Pemeriksaan dan Pengujian Wire Rope, Pemeriksaan Safety Valve dan Pressure Safety Valve (PSV), Pemeriksaan Alat Bantu Angkat, Support K3 Lingkungan Kerja (LINGKER), Pengujian Komponen Keselamatan, Pemeriksaan dan Pengujian APAR, Refill APAR, serta Layanan Teknis Pendukung Inspeksi Lainnya.",
        icon: "wrench",
        category: "Support",
        color: "green"
    }
];

export { stats, services };