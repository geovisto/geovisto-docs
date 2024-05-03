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
import { Tools } from "../components/bootstrap/tools/tools";
import { Research} from "../components/bootstrap/research/research";

import { useEffect } from "react";
/**
 * This file contains implementation of landing page
 *
 * @author Tomas Koscielniak
 */
const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    var i = 0;
    var j = 0;
    var slideInterval = 6000
    var images = []
    var timeoutBackground
    var timeoutOpacity1
    var timeoutOpacity2
    var timeoutOpacity3
    var opacity


    images.push('/img/slideshow/heat.png')
    images.push('/img/slideshow/connection.png')
    images.push('/img/slideshow/choro.png')
    images.push('/img/slideshow/tiles.png')

    const setBackground = () => {
        clearTimeout(timeoutBackground);
        document.getElementById("background").style.backgroundImage = "url(" + images[i] + ")"; 
        timeoutOpacity1 = setTimeout(function() {document.getElementById("background").style.opacity = '1';}, 0)
        timeoutOpacity2 = setTimeout(function() {document.getElementById("background").style.opacity = '0';}, 5000)
        timeoutOpacity3 = setTimeout(function() {document.getElementById("background").style.opacity = '1';}, 6000)
        timeoutBackground = setTimeout(setBackground, slideInterval)


        if (i < images.length-1) {
            i++;
        } else {
            i = 0;
        }
    }





    useEffect(() => {   
        timeoutBackground = setTimeout(setBackground, slideInterval)
        timeoutOpacity1 = setTimeout(function() {document.getElementById("background").style.opacity = '1';}, 0)
        timeoutOpacity2 = setTimeout(function() {document.getElementById("background").style.opacity = '0';}, 5000)
        timeoutOpacity3 = setTimeout(function() {document.getElementById("background").style.opacity = '1';}, 6000)



        return () => {
            clearTimeout(timeoutBackground);
            clearTimeout(timeoutOpacity1);
            clearTimeout(timeoutOpacity2);
            clearTimeout(timeoutOpacity3);
            console.log("cleaning up header");
        }
    },[]);

    return (
        <header >
            <div id="background" className="background-container">
            </div>
            <div className="header-container">
                <img
                    src={GeovistoLogo}
                    alt={"logo"}
                    id="front_image"
                    className="pt-lg-5"
                />
                <div className="header__button__wrapper">
                    <Link to="/tutorials">
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

export const Home = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
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
                <h4>{siteConfig.tagline}</h4>
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


            <Tools/>
            <Layers/>
            <Research/>

            

        </main>
    </Layout>
    )
};

export default Home;
