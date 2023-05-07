// Module
import { GeovistoBubbleLayerTool } from "geovisto-layer-bubble";

// Module styles
import "geovisto-layer-bubble/dist/index.css";

// React
import React from "react";

// Static
import config from "../../../../static/config/config-bubbleLayer.json";
import data from "../../../../static/data/covidCases.json";

// Base core of Geovisto
import Base from "../../GeovistoBase";

const Bubble = () => {
    const moduleToDisplay = GeovistoBubbleLayerTool.createTool({
        id: "geovisto-tool-layer-bubble",
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

export default Bubble;
