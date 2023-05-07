// Module
import { GeovistoSpikeLayerTool } from "geovisto-layer-spike";

// React
import React from "react";

// Static
import config from "../../../../static/config/config-spikeLayer.json";
import data from "../../../../static/data/covidCases.json";

// Base core of Geovisto
import Base from "../../GeovistoBase";

const Spike = () => {
    const moduleToDisplay = GeovistoSpikeLayerTool.createTool({
        id: "geovisto-tool-layer-spike",
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

export default Spike;
