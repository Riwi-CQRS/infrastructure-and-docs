import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CQRS',
    description: (
      <>
        Separación de comandos y consultas para escalar lectura y escritura de
        forma independiente.
      </>
    ),
  },
  {
    title: 'Event Sourcing',
    description: (
      <>
        El estado se reconstruye a partir de eventos, con trazabilidad completa
        de cada cambio.
      </>
    ),
  },
  {
    title: 'Documentación técnica',
    description: (
      <>
        Toda la arquitectura, decisiones y guías del proyecto en un solo lugar.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
