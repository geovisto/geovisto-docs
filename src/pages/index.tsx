import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import './index.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import GeovistoShowcase from "@site/src/components/bootstrap/showCaseCards";
import {Button} from "react-bootstrap";
import GeovistoLogo from '@site/static/img/geovisto-logo1.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero dark heroBanner')}>
      <div className="container">
        <h1 className="highlight font-big">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src={GeovistoLogo}  alt={"logo"} id="front_image" className="pt-lg-5"/>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <div className="container-fluid w-100 p-3 pt-lg-5 text-center lead light">
              Geovisto is library written in TypeScript
          </div>
          <div className="container-fluid w-100 p-3 pt-lg-5 text-center display-6 light">
              Tutorial
          </div>
          <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead light">
              Don't know how to start using the map? Try tutorial!
          </div>
          <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead light">
              <Link to="/docs/intro" className="pe-lg-3">
                  <Button variant="default">Get started</Button>
              </Link>
              <Link to="/playground#playground-hook" className="ps-lg-3">
                  <Button variant="default">Playground</Button>
              </Link>
          </div>
          <div className="container-fluid w-100 p-3 pt-lg-5 text-center display-6 dark">
              Geovisto layers
          </div>
          <div className="container-fluid w-100 p-3 pb-lg-5 text-center dark lead">
              Geovisto offers several methods to visualize geodata, which are listed below and you can try all of them out!
          </div>
          <div className="container-fluid w-100 p-3 pb-lg-5 pt-lg-5 text-center dark">
            <GeovistoShowcase/>
          </div>
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
