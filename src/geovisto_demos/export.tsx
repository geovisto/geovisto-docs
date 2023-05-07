import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";
import {
    Bubble,
    Choropleth,
    Connection,
    Dot,
    Heat,
    Marker,
    Spike,
} from "./modules";
/**
 * This file contains exports of React wrappers with Geovisto maps
 * They need to be exported this way, otherwise the production build will fail
 *
 * @author Tomas Koscielniak
 */

export function Render_Heat(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Heat = require("./modules/heat/Heat").default;
                return <Heat />;
            }}
        </BrowserOnly>
    );
}

export function Render_Choropleth(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Choropleth =
                    require("./modules/choropleth/Choropleth").default;
                return <Choropleth />;
            }}
        </BrowserOnly>
    );
}

export function Render_Dot(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Dot = require("./modules/dot/Dot").default;
                return <Dot />;
            }}
        </BrowserOnly>
    );
}

export function Render_Bubble(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Bubble = require("./modules/bubble/Bubble").default;
                return <Bubble />;
            }}
        </BrowserOnly>
    );
}

export function Render_Spike(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Spike = require("./modules/spike/Spike").default;
                return <Spike />;
            }}
        </BrowserOnly>
    );
}
export function Render_Marker(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Marker = require("./modules/marker/Marker").default;
                return <Marker />;
            }}
        </BrowserOnly>
    );
}
export function Render_Connection(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Connection =
                    require("./modules/connection/Connection").default;
                return <Connection />;
            }}
        </BrowserOnly>
    );
}
