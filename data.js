// File: data.js - Data configuration
const stats = [
    { value: "923", label: "Sertifikat Terbit" },
    { value: "116", label: "Klien Industri" },
    { value: "3", label: "Tahun Pengalaman" },
    { value: "5", label: "Ahli K3 Bersertifikat" }
];

const services = [
    {
        id: "papa-paa",
        title: "PAPA / PAA",
        desc: "Pesawat Angkat dan Pesawat Angkut. Inspeksi menyeluruh untuk crane, forklift, dan alat berat lainnya.",
        detail: "Pengujian beban (load test), pemeriksaan visual struktur, dan verifikasi fungsi safety device untuk memastikan kelayakan operasi sesuai Permenaker No. 8 Tahun 2020.",
        icon: "truck",
        category: "Logistik",
        color: "blue"
    },
    {
        id: "pubt",
        title: "PUBT",
        desc: "Pesawat Uap dan Bejana Tekan. Pengujian ketahanan dan keamanan tekanan tinggi.",
        detail: "Pemeriksaan ketebalan dinding (thickness test), safety valve, dan hydrotest pada boiler, tangki timbun, dan bejana tekan lainnya sesuai standar ASME dan regulasi Depnaker.",
        icon: "flame",
        category: "Industri",
        color: "orange"
    },
    {
        id: "fire-security",
        title: "Fire Security",
        desc: "Inspeksi sistem proteksi kebakaran aktif dan pasif.",
        detail: "Audit sistem hydrant, sprinkler, fire alarm, dan APAR untuk memastikan kesiapan fasilitas dalam mitigasi risiko kebakaran industri.",
        icon: "bell",
        category: "Safety",
        color: "red"
    },
    {
        id: "elevator",
        title: "Elevator / Eskalator",
        desc: "Riksa uji kelayakan sarana transportasi vertikal gedung.",
        detail: "Pemeriksaan sistem governor, wire rope, buffer, dan interlock pintu pada lift penumpang, lift barang, dan eskalator demi keamanan publik.",
        icon: "arrow-up-down",
        category: "Gedung",
        color: "blue"
    },
    {
        id: "electric",
        title: "Instalasi Listrik & Petir",
        desc: "Audit keselamatan kelistrikan dan proteksi sambaran petir.",
        detail: "Pengukuran tahanan isolasi, thermography, dan pemeriksaan sistem penangkal petir (konvensional/elektrostatis) untuk mencegah korsleting dan kerusakan akibat surja.",
        icon: "zap",
        category: "Elektrik",
        color: "yellow"
    },
    {
        id: "grounding",
        title: "Grounding System",
        desc: "Pengukuran resistansi pembumian untuk stabilitas sistem.",
        detail: "Verifikasi nilai tahanan grounding di bawah 5 Ohm untuk perlindungan peralatan elektronik sensitif dan keselamatan personal dari tegangan sentuh.",
        icon: "anchor",
        category: "Sistem",
        color: "blue"
    },
    {
        id: "ptp",
        title: "PTP",
        desc: "Pesawat Tenaga dan Produksi. Inspeksi mesin-mesin produksi.",
        detail: "Pemeriksaan pada genset, turbin, mesin perkakas, dan tanur untuk menjamin efisiensi kinerja dan keamanan operator di lantai produksi.",
        icon: "settings",
        category: "Produksi",
        color: "green"
    }
];

export { stats, services };