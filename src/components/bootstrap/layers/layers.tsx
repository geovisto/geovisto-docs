import React, { useState } from "react";
import "../../../pages/index.css";
import "./layers.css";
import { Button } from "react-bootstrap";

import { Render_Choropleth, Render_Dot, Render_Marker, Render_Heat, Render_Connection, Render_Bubble, Render_Spike, Render_Map } from "../../../geovisto_demos/export";

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
        buttonLink: "/docs/layers/Choropleth",
    });



    const handleChange = (e) => {
        var elems = document.querySelectorAll(".tab__active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("tab__active");
        });
        e.target.classList.add("tab__active");
        switch (e.target.id) {
            case "Choropleth":
                setCardState({
                    title: "Choropleth",
                    map: <Render_Choropleth />,
                    buttonLink: "/docs/layers/choropleth",
                });
                break;
            case "Marker":
                setCardState({
                    title: "Marker",
                    map: <Render_Marker />,
                    buttonLink: "/docs/layers/Marker",
                });
                break;
            case "Connection":
                setCardState({
                    title: "Connection",
                    map: <Render_Connection />,
                    buttonLink: "/docs/layers/Connection",
                });
                break;
            case "Heat":
                setCardState({
                    title: "Heat",
                    map: <Render_Heat />,
                    buttonLink: "/docs/layers/Heat",
                });
                break;
            case "Dot":
                setCardState({
                    title: "Dot",
                    map: <Render_Dot />,
                    buttonLink: "/docs/layers/Dot",
                });
                break;
            case "Bubble":
                setCardState({
                    title: "Bubble",
                    map: <Render_Bubble />,
                    buttonLink: "/docs/layers/Bubble",
                });
                break;
            case "Spike":
                setCardState({
                    title: "Spike",
                    map: <Render_Spike />,
                    buttonLink: "/docs/layers/Spike",
                });
                break;
            case "Tiles":
                setCardState({
                    title: "Tiles",
                    map: <Render_Map />,
                    buttonLink: "/docs/layers/Tiles",
                });
                break;
    
        }
    }


    return (
        <div className="layers container-fluid light">
            <div className="w-100 lead">
                <h1 className="w-100 text-center title">
                    Geovisto Layers
                </h1>
                <div className="w-100 text-center ">
                    Geovisto offers several methods to visualize geodata, which are listed below and you can try all of them out!
                </div>
            </div>
            <div className="tabs w-auto">
                <div className="tabs__head">
                    <nav className="tabs__nav">
                        <ul onClick={handleChange}>
                            <li className="tabs__link tab__active">
                                <a id="Choropleth" className="tabs__link tab__active">
                                    Choropleth Layer
                                </a>
                            </li>
                            <li>
                                <a id="Tiles" className="tabs__link">
                                    Tiles Layer
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
