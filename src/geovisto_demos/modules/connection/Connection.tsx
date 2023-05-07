// Module
import { GeovistoConnectionLayerTool } from "geovisto-layer-connection";

// Module styles
import "geovisto-layer-connection/dist/index.css";

// Custom styles
import "./Connection.css";

// React
import React from "react";

// Static
import config from "../../../../static/config/trade_config.json";
import data from "../../../../static/data/trade_oecd.json";
import polygons from "../../../../static/geo/country_polygons.json";
import centroids from "../../../../static/geo/country_centroids.json";

// Base core of Geovisto
import Base from "../../GeovistoBase";
import { Geovisto } from "geovisto";

const Connection = () => {
    const moduleToDisplay = GeovistoConnectionLayerTool.createTool({
        id: "geovisto-tool-layer-connection",
    });

    const geoData = Geovisto.getGeoDataManager([
        Geovisto.getGeoDataFactory().geojson("world polygons", polygons),
        Geovisto.getGeoDataFactory().geojson("world centroids", centroids),
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

export default Connection;
