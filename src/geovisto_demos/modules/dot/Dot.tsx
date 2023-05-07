// Module
import { GeovistoDotLayerTool } from "geovisto-layer-dot";

// Module styles
import "geovisto-layer-dot/dist/index.css";

// React
import React from "react";

// Static
import config from "../../../../static/config/config-dotLayer.json";
import data from "../../../../static/data/czechCities.json";

// Base core of Geovisto
import Base from "../../GeovistoBase";

const Dot = () => {
    const moduleToDisplay = GeovistoDotLayerTool.createTool({
        id: "geovisto-tool-layer-dot",
    });

    return (
        <Base
            {...{
                config,
                data,
                moduleToDisplay,
            }}
        />
    );
};

export default Dot;
