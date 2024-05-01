import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import "./index.css";
// @ts-ignore
import GeovistoLogo from "@site/static/img/geovisto-logo4.png";
import { Button } from "react-bootstrap";
import { Layers } from "../components/bootstrap/layers/layers";
import { Research } from "../components/bootstrap/research/research";
import { Tools } from "../components/bootstrap/tools/tools";
import { Authors } from "../components/bootstrap/authors/authors";


/**
 * This file contains implementation of landing page
 *
 * @author Tomas Koscielniak
 */
const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero heroBanner")}>
            <div className="container header-container">
                <img
                    src={GeovistoLogo}
                    alt={"logo"}
                    id="front_image"
                    className="pt-lg-5"
                />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className="header__button__wrapper">
                    <Link to="/docs/intro">
                        <Button variant="default" className="btn-header">Get started</Button>
                    </Link>
                    <Link to="/playground#playground-hook">
                        <Button variant="default" className="btn-header">Try Playground</Button>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export const Home = (): JSX.Element => (
    <Layout
        title={`Home`}
        description="Description will go into a meta tag in <head />"
    >
        <HomepageHeader />
        <main>
            <div className="container-fluid text-center lead primary">
                <h1 className="w-100 title">
                    About Geovisto
                </h1>
                <div className="container-sm w-100">
                    Geovisto is a modular library written in TypeScript that
                    provides multiple layers for geospatial data visualization.
                    It’s user interface enables user defined data mapping to
                    multiple configurable layers and it automatically transforms
                    the input data to a generic data model and serves it to the
                    user through the UI. Geovisto also enables export and import
                    of user-defined map configurations.
                </div>
            </div>

            {/*Tools*/}
            <Tools/>
            
            {/*Geovisto Layers*/}
            <Layers />

            {/*Research*/}
            <Research />

        </main>
    </Layout>
);

export default Home;
