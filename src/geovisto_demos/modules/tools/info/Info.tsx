// Module
import { GeovistoChoroplethLayerTool } from "geovisto-layer-choropleth";

// Module styles
import "geovisto-layer-choropleth/dist/index.css";

// Custom styles

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-tool-info.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";
import { Geovisto } from "geovisto";

const Info = () => {
    const moduleToDisplay = GeovistoChoroplethLayerTool.createTool({
        id: "geovisto-tool-layer-choropleth",
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

export default Info;
