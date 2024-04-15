import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import "./index.css";
// @ts-ignore
import GeovistoLogo from "@site/static/img/geovisto-logo1.png";
import { Button } from "react-bootstrap";
import { Layers } from "../components/bootstrap/layers/layers";
import { Community } from "../components/bootstrap/community/community";
import { Features } from "../components/bootstrap/features/features";


/**
 * This file contains implementation of landing page
 *
 * @author Tomas Koscielniak
 */
const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero dark heroBanner")}>
            <div className="container">
                <h1 className="highlight font-big">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <img
                    src={GeovistoLogo}
                    alt={"logo"}
                    id="front_image"
                    className="pt-lg-5"
                />
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
            <div className="container-fluid w-100 p-3 pt-lg-5 text-center display-6">
                About Geovisto
            </div>
            <div className="container-fluid">
                <div className="container-sm w-100 p-3 pt-lg-5 text-center lead">
                    Geovisto is a modular library written in TypeScript that
                    provides multiple layers for geospatial data visualization.
                    It’s user interface enables user defined data mapping to
                    multiple configurable layers and it automatically transforms
                    the input data to a generic data model and serves it to the
                    user through the UI. Geovisto also enables export and import
                    of user-defined map configurations.
                </div>
            </div>

            <Features/>


            <div className="container-fluid w-100 p-3 pt-lg-5 text-center display-6 yellow">
                Learn Geovisto
            </div>
            <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead yellow">
                Don't know how to start using the map? Try tutorial!
            </div>

            <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead yellow">
                <Link to="/docs/intro" className="pe-lg-3">
                    <Button variant="default">Get started</Button>
                </Link>
            </div>

            <div className="container-fluid w-100 p-3 pt-lg-5 text-center display-6 yellow">
                Try Yourself
            </div>
            <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead yellow">
                You can try our online editor with our exemplary files or create your own.
            </div>
            <div className="container-fluid w-100 p-3 pb-lg-5 text-center lead yellow">

                <Link to="/playground#playground-hook" className="ps-lg-3">
                    <Button variant="default">Try Playground</Button>
                </Link>
            </div>


            {/*Geovisto Layers*/}
            <Layers />


            {/*Community*/}
            <Community />


        </main>
    </Layout>
);

export default Home;
