// Core
import {
    Geovisto,
    IGeoData,
    IMapDomainArrayManager,
    IMapProps,
    IMapTool,
} from "geovisto";

// Core styles
import "geovisto/dist/index.css";

// Common Modules
import { GeovistoFiltersTool } from "geovisto-filters";
import { GeovistoTilesLayerTool } from "geovisto-layer-tiles";
import { GeovistoSelectionTool } from "geovisto-selection";
import { GeovistoSidebarTool } from "geovisto-sidebar";
import { GeovistoThemesTool } from "geovisto-themes";

// common modules styles
import "geovisto-sidebar/dist/index.css";
import "geovisto-layer-marker/dist/index.css";
import "geovisto-layer-connection/dist/index.css";
import "geovisto-legend/dist/index.css";
import "geovisto-layer-heat/dist/index.css";

// React
import React, { FC } from "react";

// Wrapper
import ReactGeovistoMap from "../react/ReactGeovistoMap";

interface IGeovistoBaseProps {
    config: Record<string, unknown>;
    data: unknown;
    moduleToDisplay: IMapTool;
    geoData?: IMapDomainArrayManager<IGeoData>;
}

const GeovistoBase: FC<IGeovistoBaseProps & IMapProps> = ({
    config,
    data,
    moduleToDisplay,
    geoData,
}) => {
    return (
        <div className="choropleth-container general-container">
            <div className="docs-showcase-map">
                <ReactGeovistoMap
                    id="base"
                    data={Geovisto.getMapDataManagerFactory().json(data)}
                    config={Geovisto.getMapConfigManagerFactory().default(
                        config
                    )}
                    geoData={geoData}
                    globals={undefined}
                    templates={undefined}
                    tools={Geovisto.createMapToolsManager([
                        GeovistoSidebarTool.createTool({
                            id: "geovisto-tool-sidebar",
                        }),
                        GeovistoFiltersTool.createTool({
                            id: "geovisto-tool-filters",
                            manager: GeovistoFiltersTool.createFiltersManager([
                                // filter operations
                                GeovistoFiltersTool.createFilterOperationEq(),
                                GeovistoFiltersTool.createFilterOperationNeq(),
                                GeovistoFiltersTool.createFilterOperationReg(),
                            ]),
                        }),
                        GeovistoThemesTool.createTool({
                            id: "geovisto-tool-themes",
                            manager: GeovistoThemesTool.createThemesManager([
                                // style themes
                                GeovistoThemesTool.createThemeLight1(),
                                GeovistoThemesTool.createThemeLight2(),
                                GeovistoThemesTool.createThemeLight3(),
                                GeovistoThemesTool.createThemeDark1(),
                                GeovistoThemesTool.createThemeDark2(),
                                GeovistoThemesTool.createThemeDark3(),
                                GeovistoThemesTool.createThemeBasic(),
                            ]),
                        }),
                        GeovistoSelectionTool.createTool({
                            id: "geovisto-tool-selection",
                        }),
                        GeovistoTilesLayerTool.createTool({
                            id: "geovisto-tool-layer-map",
                        }),
                        moduleToDisplay,
                    ])}
                />
            </div>
        </div>
    );
};

export default GeovistoBase;
