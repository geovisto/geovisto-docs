// Module
import { GeovistoMarkerLayerTool } from "geovisto-layer-marker";

// Module styles
import "geovisto-layer-marker/dist/index.css";

// Custom styles
import "./Marker.css";

// React
import React from "react";

// Static
import config from "../../../../static/config/energy_config.json";
import data from "../../../../static/data/energy_un.json";
import centroids from "../../../../static/geo/country_centroids.json";

// Base core of Geovisto
import Base from "../../GeovistoBase";
import { Geovisto } from "geovisto";

const Marker = () => {
    const moduleToDisplay = GeovistoMarkerLayerTool.createTool({
        id: "geovisto-tool-layer-marker",
    });

    const geoData = Geovisto.getGeoDataManager([
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

export default Marker;
