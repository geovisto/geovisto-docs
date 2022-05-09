// React
import React, {Component} from "react";

// React-Geovisto
import ReactGeovistoMap from "../react/ReactGeovistoMap";

import {
    Geovisto,
} from 'geovisto-map';

import {GeovistoSelectionTool} from 'geovisto-map';
import {GeovistoThemesTool} from 'geovisto-map';
import {GeovistoSidebarTool} from 'geovisto-map';
import {GeovistoLegendTool} from 'geovisto-map';
import {GeovistoTilesLayerTool} from 'geovisto-map';
import {GeovistoMarkerLayerTool} from 'geovisto-map';
import {GeovistoInfoTool} from "geovisto-map";
import InfoFileRaw from '!!raw-loader!../../static/info/marker.txt';

import "./marker.css";
import "geovisto-map/dist/index.css";

export default class Marker extends Component<Record<string, never>, { data: unknown, config: Record<string, unknown> }> {

    private polygons: unknown;
    private centroids: unknown;
    private infodata: unknown;
    private map: React.RefObject<ReactGeovistoMap>;

    public constructor(props: Record<string, never>) {
        super(props);

        // initialize geo objects
        this.polygons = require("/static/geo/country_polygons.json");
        this.centroids = require("/static/geo/country_centroids.json");

        // data and config can be changed
        this.state = {
            // implicit data
            data: require('/static/data/gdp_oecd.json'),
            // implicit config
            config: require('/static/config/energy_config.json')
        };

        // initialize info objects
        const myObj = {
            default: undefined
        };
        myObj.default = InfoFileRaw;
        this.infodata = myObj;

        // reference to the rendered map
        this.map = React.createRef();
    }

    public render(): JSX.Element {
        console.log("rendering...");
        return (
            <div className="connection-container general-container">
                <div className="docs-showcase-map">
                    <ReactGeovistoMap
                        ref={this.map}
                        id="choropleth"
                        data={Geovisto.getMapDataManagerFactory().json(this.state.data)}
                        geoData={Geovisto.getGeoDataManager([
                            Geovisto.getGeoDataFactory().geojson("world centroids", this.centroids),
                        ])}
                        config={Geovisto.getMapConfigManagerFactory().default(this.state.config)}
                        globals={undefined}
                        templates={undefined}
                        tools={Geovisto.createMapToolsManager([
                            GeovistoSidebarTool.createTool({
                                id: "geovisto-tool-sidebar",
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
                            GeovistoInfoTool.createTool({
                                id: "geovisto-tool-info",
                                manager: GeovistoInfoTool.createInfoManager([
                                    GeovistoInfoTool.getInfoDataFactory().markdown("General", this.infodata),
                                ])
                            }),
                            GeovistoLegendTool.createTool({
                                id: "geovisto-tool-legend"
                            }),
                            GeovistoTilesLayerTool.createTool({
                                id: "geovisto-tool-layer-map"
                            }),
                            GeovistoMarkerLayerTool.createTool({
                                id: "geovisto-tool-layer-marker"
                            }),
                        ])}
                    />
                </div>
            </div>
        );
    }
}

