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

export const RenderHeat = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Heat />;
        }}
    </BrowserOnly>
);

export const RenderChoropleth = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Choropleth />;
        }}
    </BrowserOnly>
);

export const RenderDot = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Dot />;
        }}
    </BrowserOnly>
);

export const RenderBubble = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Bubble />;
        }}
    </BrowserOnly>
);

export const RenderSpike = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Spike />;
        }}
    </BrowserOnly>
);

export const RenderMarker = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Marker />;
        }}
    </BrowserOnly>
);

export const RenderConnection = (): JSX.Element => (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return <Connection />;
        }}
    </BrowserOnly>
);
