// React
import React, { Component } from "react";

// React-Geovisto
import ReactGeovistoMap from "../react/ReactGeovistoMap";
import {

} from "geovisto";

import loadable from '@loadable/component'

import {
    Geovisto,
    IMap,
    IMapProps
} from 'geovisto';
import 'geovisto/dist/index.css';

import { GeovistoSelectionTool } from 'geovisto-selection';
import { GeovistoThemesTool } from 'geovisto-themes';
import { GeovistoFiltersTool } from 'geovisto-filters';
import { GeovistoSidebarTool } from 'geovisto-sidebar';
import 'geovisto-sidebar/dist/index.css';
import { GeovistoTilesLayerTool } from 'geovisto-layer-tiles';
import { GeovistoChoroplethLayerTool } from 'geovisto-layer-choropleth';
import 'geovisto-layer-choropleth/dist/index.css';
import { GeovistoMarkerLayerTool } from 'geovisto-layer-marker';
import 'geovisto-layer-marker/dist/index.css';
import { GeovistoConnectionLayerTool } from 'geovisto-layer-connection';
import 'geovisto-layer-connection/dist/index.css';

import "./connection.css";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_data = "leaflet-combined-map-select-data";
const C_ID_check_data = "leaflet-combined-map-check-data";
const C_ID_input_data = "leaflet-combined-map-input-data";
const C_ID_check_config = "leaflet-combined-map-check-config";
const C_ID_input_config = "leaflet-combined-map-input-config";
const C_ID_input_import = "leaflet-combined-map-input-import";
const C_ID_input_export = "leaflet-combined-map-input-export";

export default class Connection extends Component<Record<string, never>, { data: unknown, config: Record<string, unknown> }> {

    private polygons: unknown;
    private centroids: unknown;
    private polygons2: unknown;
    private centroids2: unknown;
    private map: React.RefObject<ReactGeovistoMap>;

    public constructor(props: Record<string, never>) {
        super(props);

        // initialize geo objects
        this.polygons = require("/static/geo/country_polygons.json");
        this.centroids = require("/static/geo/country_centroids.json");

        // data and config can be changed
        this.state = {
            // implicit data
            data: require('/static/data/trade_oecd.json'),
            // implicit config
            config: require('/static/config/trade_config.json')
        };

        // reference to the rendered map
        this.map = React.createRef();
    }

    public render(): JSX.Element {
        console.log("rendering...");
        return (
            <div className="choropleth-container">
                <div className="choropleth-map">
                    <ReactGeovistoMap
                        ref={this.map}
                        id="choropleth"
                        data={Geovisto.getMapDataManagerFactory().json(this.state.data)}
                        geoData={Geovisto.getGeoDataManager([
                            Geovisto.getGeoDataFactory().geojson("world polygons", this.polygons),
                            Geovisto.getGeoDataFactory().geojson("world centroids", this.centroids),
                            Geovisto.getGeoDataFactory().geojson("czech polygons", this.polygons2),
                            Geovisto.getGeoDataFactory().geojson("czech centroids", this.centroids2)
                        ])}
                        config={Geovisto.getMapConfigManagerFactory().default(this.state.config)}
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
                                    GeovistoFiltersTool.createFilterOperationReg()
                                ])
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
                                    GeovistoThemesTool.createThemeBasic()
                                ])
                            }),
                            GeovistoSelectionTool.createTool({
                                id: "geovisto-tool-selection"
                            }),
                            GeovistoTilesLayerTool.createTool({
                                id: "geovisto-tool-layer-map"
                            }),
                            GeovistoChoroplethLayerTool.createTool({
                                id: "geovisto-tool-layer-choropleth"
                            }),
                            GeovistoMarkerLayerTool.createTool({
                                id: "geovisto-tool-layer-marker"
                            }),
                            GeovistoConnectionLayerTool.createTool({
                                id: "geovisto-tool-layer-connection"
                            }),
                        ])}
                    />
                </div>
            </div>
        );
    }
}

