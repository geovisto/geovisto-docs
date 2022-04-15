import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

export function Render_Choropleth(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
        const Choropleth = require('./choropleth').default;
        return <Choropleth />;
    }}
    </BrowserOnly>
);
}

export function Render_Marker(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Marker = require('./marker').default;
                return <Marker />;
            }}
        </BrowserOnly>
    );
}

export function Render_Connection(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Connection = require('./connection').default;
                return <Connection />;
            }}
        </BrowserOnly>
    );
}