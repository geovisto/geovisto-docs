import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./tools.css";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */

const tools = [
    {
        title: 'Sidebar',
        description: 'This is main tool for map configuration',
        href: 'Sidebar'

    },
    {
        title: 'Info',
        description: 'This tool can give user main informations about your map',
        href: 'Info'

    },
    {
        title: 'Selection',
        description: 'Selection tool can be used for highlighting important object on map',
        href: 'Selection'

    },
    {
        title: 'Legend',
        description: 'Legend give user more informations about symbols printed on a map',
        href: 'Legend'

    },
    {
        title: 'Themes',
        description: 'User can pick his favorite theme for map',
        href: 'Themes'

    },
    {
        title: 'Timeline',
        description: 'User can track how the measured data changed over time',
        href: 'Timeline'

    },
    {
        title: 'Filters',
        description: 'Data can be filtered according to user-defined filters',
        href: 'Filters'

    },
    {
        title: 'Geo Downloader',
        description: 'User can download points or polygons from OverpassAPI (OSM) ',
        href: 'Geo-Downloader'
    },
    {
        title: 'Hierarchy',
        description: 'Tool provides ability to manage displayed geographic objects',
        href: 'Hierarchy'
    }
];


const Tool = (props) => {
    
    return (
        <div className="tools__block">
            <a className="tool__block href" href={"/docs/tools/" + props.href}>
                <h3>{props.title}</h3>
                <div>{props.description}</div>
            </a>
        </div>
    );
};


export const Tools = () => {


    return (
        <div className="container-fluid text-center darker">
            <div className="tools__container">
                <div className="tools__header lead">
                    <h1 className="title">
                        Tools
                    </h1>
                    <div className="w-100">
                        What are the tools of the geovisto library? 
                        Geovisto offers users many tools that can be used to configure the map itself or help to understand the visualized data.
                        This tools can be add to your map and enable by your configuration.
                    </div>
                </div>
                <div className="tools__wrapper p-3 pt-lg-5">
                    <div className="tools__blocks">
                        {tools.map((tool) => (
                            <Tool
                                key={tool["title"]}
                                title={tool["title"]}
                                description={tool["description"]}
                                href={tool["href"]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Tools;
