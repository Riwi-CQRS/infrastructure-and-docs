import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/arquitectura">
            Ver documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación técnica de CQRS Engine">
      <HomepageHeader />
      <main className="container padding-vert--lg">
        <div className="row">
          <div className="col col--4">
            <div className="card padding--lg">
              <Heading as="h3">Arquitectura</Heading>
              <p>Decisiones de diseño, entornos y lineamientos técnicos.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="card padding--lg">
              <Heading as="h3">Equipo</Heading>
              <p>Responsables, repositorios y convenciones de trabajo.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="card padding--lg">
              <Heading as="h3">QA</Heading>
              <p>Estado de cobertura y resultados por entrega.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
