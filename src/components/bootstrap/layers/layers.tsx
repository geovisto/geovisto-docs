import React, { useState } from "react";
import "../../../pages/index.css";
import "./layers.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Render_Choropleth, Render_Dot, Render_Marker, Render_Heat, Render_Connection, Render_Bubble, Render_Spike } from "../../../geovisto_demos/export";

import Link from "@docusaurus/Link";

/**
 * This file contains implementation of layers frontend for home page
 *
 * @author Iva Utikalova
 */

const Layer_Card = (props) => {
    return (
        <div className="layer_card">
            <div>
                <div className="titles">
                    {props.title}
                </div>
                <div className="map__container">
                    {props.map}
                </div>
                <Link to={props.buttonLink}>
                    <Button variant="default">
                        Show more!
                    </Button>
                </Link>
            </div>
        </div>
    );
};



export const Layers = () => {

    //default layer card is choropleth
    const [cardState, setCardState] = useState({
        title: "Choropleth",
        map: <Render_Choropleth />,
        buttonLink: "/docs/tools/choropleth",
    });



    const handleChange = (e) => {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        e.target.className = "active";
        switch (e.target.id) {
            case "Choropleth":
                setCardState({
                    title: "Choropleth",
                    map: <Render_Choropleth />,
                    buttonLink: "/docs/tools/choropleth",
                });
                break;
            case "Marker":
                setCardState({
                    title: "Marker",
                    map: <Render_Marker />,
                    buttonLink: "/docs/tools/marker",
                });
                break;
            case "Connection":
                setCardState({
                    title: "Connection",
                    map: <Render_Connection />,
                    buttonLink: "/docs/tools/connection",
                });
                break;
            case "Heat":
                setCardState({
                    title: "Heat",
                    map: <Render_Heat />,
                    buttonLink: "/docs/tools/heat",
                });
                break;
            case "Dot":
                setCardState({
                    title: "Dot",
                    map: <Render_Dot />,
                    buttonLink: "/docs/tools/dot",
                });
                break;
            case "Bubble":
                setCardState({
                    title: "Bubble",
                    map: <Render_Bubble />,
                    buttonLink: "/docs/tools/bubble",
                });
                break;
            case "Spike":
                setCardState({
                    title: "Spike",
                    map: <Render_Spike />,
                    buttonLink: "/docs/tools/spike",
                });
                break;
        }
    }


    return (
        <div className="container-fluid dark">
            <div className="w-100 p-3 pt-lg-5 text-center display-6 ">
                Geovisto Layers
            </div>
            <div className="w-100 p-3 pb-lg-3 text-center  lead">
                Geovisto offers several methods to visualize geodata, which are listed below and you can try all of them out!
            </div>
            <div className="tabs w-auto pb-lg-5 px-5">
                <div className="tabs__head">
                    <nav className="tabs__nav">
                        <ul onClick={handleChange}>
                            <li>
                                <a id="Choropleth" className="active tabs__link">
                                    Choropleth Layer
                                </a>
                            </li>
                            <li className="">
                                <a id="Marker" className="tabs__link" >
                                    Marker Layer
                                </a>
                            </li>
                            <li>
                                <a id="Connection" className="tabs__link">
                                    Connection Layer
                                </a>
                            </li>
                            <li>
                                <a id="Heat" className="tabs__link" >
                                    Heat Layer
                                </a>
                            </li>
                            <li>
                                <a id="Dot" className="tabs__link">
                                    Dot Layer
                                </a>
                            </li>
                            <li>
                                <a id="Bubble" className="tabs__link">
                                    Bubble Layer
                                </a>
                            </li>
                            <li>
                                <a id="Spike" className="tabs__link">
                                    Spike Layer
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="tabs__body pr-5">
                    <Layer_Card
                        id="map"
                        title={cardState.title}
                        map={cardState.map}
                        buttonLink={cardState.buttonLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Layers;
