import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pengumpulan Data Selaras dan Utuh',
    Svg: require('@site/static/img/undraw_pengumpulan-data3 (1).svg').default,
    description: (
      <>
        Dapatkan data secara utuh, menyuluruh dan selaras, untuk memastikan semua data terekam dengan baik disetiap tahapan bisnis anda.
        Platform kami akan memastikan seluruh data akan terekam dengan baik tanpa membuat team Anda bekerja lebih berat
      </>
    ),
  },
  {
    title: 'Algoritma AI Analisa Cerdas',
    Svg: require('@site/static/img/undraw_algoritma-ai.svg').default,
    description: (
      <>
        Diperkuat dengan algoritma analisa cerdas secara otomatis, memberikan keuntungan yang lebih untuk bisnis Anda dan pesaing
        PHIBase menambah dan memberikan fitur unggulan ini secara berkala khusus untuk anda
      </>
    ),
  },
  {
    title: 'Wawasan Menyeluruh dan Ringkas',
    Svg: require('@site/static/img/undraw_wawasan3.svg').default,
    description: (
      <>
        Dipadukan dengan kemudahan melihat wawasan bisnis anda secara keseluruhan dengan ringkas dan menyeluruh.
        Platform data kami memastikan tidak ada satu pun alur bisnis Anda yang dapat Anda lihat hanya dengan 1 klik
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
