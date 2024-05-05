// Module
import { GeovistoGeoDownloaderTool } from "geovisto-geo-downloader"; 

// Module styles
import "geovisto-layer-choropleth/dist/index.css";

// Custom styles

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-tool-geo-downloader.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";
import { Geovisto } from "geovisto";

const Geo_Downloader = () => {
    const moduleToDisplay = GeovistoGeoDownloaderTool.createTool({
        id: "geovisto-tool-geo-downloader",
    });

    return (
        <Base
            {...{
                config,
                moduleToDisplay,
            }}
        />
    );
};

export default Geo_Downloader;
