import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import GeovistoShowcase from "@site/src/components/bootstrap/showCaseCards";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Geovisto`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <GeovistoShowcase/>
      </main>
    </Layout>
  );
}

export function Render_geovisto(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Choropleth = require('../geovisto_demos/choropleth').default;
                return <Choropleth />;
            }}
        </BrowserOnly>
    );
}
