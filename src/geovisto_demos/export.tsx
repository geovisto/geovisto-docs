import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

/**
 * This file contains exports of React wrappers with Geovisto maps
 * They need to be exported this way, otherwise the production build will fail
 *
 * @author Tomas Koscielniak
 */

export function Render_Map(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Map = require("./modules/layers/map/Map").default;
                return <Map />;
            }}
        </BrowserOnly>
    );
}

export function Render_Heat(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Heat = require("./modules/layers/heat/Heat").default;
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
                    require("./modules/layers/choropleth/Choropleth").default;
                return <Choropleth />;
            }}
        </BrowserOnly>
    );
}

export function Render_Dot(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Dot = require("./modules/layers/dot/Dot").default;
                return <Dot />;
            }}
        </BrowserOnly>
    );
}

export function Render_Bubble(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Bubble = require("./modules/layers/bubble/Bubble").default;
                return <Bubble />;
            }}
        </BrowserOnly>
    );
}

export function Render_Spike(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Spike = require("./modules/layers/spike/Spike").default;
                return <Spike />;
            }}
        </BrowserOnly>
    );
}
export function Render_Marker(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Marker = require("./modules/layers/marker/Marker").default;
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
                    require("./modules/layers/connection/Connection").default;
                return <Connection />;
            }}
        </BrowserOnly>
    );
}

export function Render_Sidebar(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Sidebar = require("./modules/tools/sidebar/Sidebar").default;
                return <Sidebar />;
            }}
        </BrowserOnly>
    );
}

export function Render_Info(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Info = require("./modules/tools/info/Info").default;
                return <Info />;
            }}
        </BrowserOnly>
    );
}

export function Render_Legend(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Legend = require("./modules/tools/legend/Legend").default;
                return <Legend />;
            }}
        </BrowserOnly>
    );
}

export function Render_Selection(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Selection = require("./modules/tools/selection/Selection").default;
                return <Selection />;
            }}
        </BrowserOnly>
    );
}

export function Render_Themes(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Themes = require("./modules/tools/themes/Themes").default;
                return <Themes />;
            }}
        </BrowserOnly>
    );
}

export function Render_Timeline(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Themes = require("./modules/tools/timeline/Timeline").default;
                return <Themes />;
            }}
        </BrowserOnly>
    );
}

export function Render_Filters(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Filters = require("./modules/tools/filters/Filters").default;
                return <Filters />;
            }}
        </BrowserOnly>
    );
}

export function Render_Geo_Downloader(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Geo_Downloader = require("./modules/tools/geo-downloader/Geo-Downloader").default;
                return <Geo_Downloader />;
            }}
        </BrowserOnly>
    );
}

export function Render_Hierarchy(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Themes = require("./modules/tools/hierarchy/Hierarchy").default;
                return <Themes />;
            }}
        </BrowserOnly>
    );
}