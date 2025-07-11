// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMAN 1 PATI',
    major: 'IPA'
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'SMPN 1 JUWANA',
    major: 'MTS'
  },
  {
    id: 4,
    period: '2011 - 2017',
    institution: 'SDN TANJUNGSARI',
    major: 'SD'
  },
];


const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Mahir' },

];


const projects = [
  {
    title: 'DemonTix',
    image: 'https://i.imgur.com/vTyatK5.png',
    description: 'Website rekomendasi jual beli tiket event.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/iqblmlnf/DemonTix-Kelompok-5.git' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
