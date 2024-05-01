// Module
import { GeovistoChoroplethLayerTool } from "geovisto-layer-choropleth";

// Module styles
import "geovisto-layer-choropleth/dist/index.css";

// Custom styles

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-hierarchy.json";
import data from "../../../../../static/data/hierarchy_data.json";
import polygons from "../../../../../static/geo/hierarchy_geo.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";
import { Geovisto } from "geovisto";

const Tools = () => {
    const moduleToDisplay = GeovistoChoroplethLayerTool.createTool({
        id: "geovisto-tool-layer-choropleth",
    });

    const geoData = Geovisto.getGeoDataManager([
        Geovisto.getGeoDataFactory().geojson("Czech polygons", polygons),
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

export default Tools;
