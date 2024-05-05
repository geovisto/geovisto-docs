// Module
import { GeovistoHeatLayerTool } from "geovisto-layer-heat";

// Module styles
import "geovisto-layer-heat/dist/index.css";

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-layer-tiles.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";

const Map = () => {
    const moduleToDisplay = GeovistoHeatLayerTool.createTool({
        id: "geovisto-tool-layer-heat",
    });

    return (
        <Base
            {...{
                config,
                //data,
                moduleToDisplay,
            }}
        />
    );
};

export default Map;
