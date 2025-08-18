import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Consultar',
    Svg: require('@site/static/img/facil.svg').default,
    description: (
      <>
        Toda la documentación en un solo lugar, organizada y accesible para que encuentres lo que necesitas rápidamente.
      </>
    ),
  },
  {
    title: 'Enfocado en lo Importante',
    Svg: require('@site/static/img/importante.svg').default,
    description: (
      <>
        Las guías y manuales están diseñados para que vayas directo al contenido que resuelve tus dudas.
      </>
    ),
  },
  {
    title: 'Siempre Actualizado',
    Svg: require('@site/static/img/actualizado.svg').default,
    description: (
      <>
        La documentación se mantiene al día, asegurando que cuentes con la información más confiable en cada momento.
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
