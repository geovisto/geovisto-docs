// Module
import { GeovistoGeoDownloaderTool } from "geovisto-geo-downloader"; 

// Module styles
import "geovisto-layer-choropleth/dist/index.css";

// Custom styles

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-geo-downloader.json";
import data from "../../../../../static/data/demo1.json";
import polygons from "../../../../../static/geo/country_polygons.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";
import { Geovisto } from "geovisto";

const Geo_Downloader = () => {
    const moduleToDisplay = GeovistoGeoDownloaderTool.createTool({
        id: "geovisto-tool-geo-downloader",
    });

    const geoData = Geovisto.getGeoDataManager([
        Geovisto.getGeoDataFactory().geojson("world polygons", polygons),
    ]);

    return (
        <Base
            {...{
                config,
                data,
                moduleToDisplay,
                geoData,
            }}
        />
    );
};

export default Geo_Downloader;
