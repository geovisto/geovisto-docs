// React
import React, { Component } from "react";

// React-Geovisto
import ReactGeovistoMap from "../react/ReactGeovistoMap";

import {
    Geovisto,
    IMap,
    IMapProps
} from 'geovisto';

import "./playground.css";
import "geovisto/dist/index.css";
import { PlaygroundBarGeojson } from "./components";
import { PlaygroundBarData } from "./components";
import { PlaygroundBarConfig } from "./components";
import { PlaygroundBarSearchDatasets } from "./components";
import { GeovistoSidebarTool } from "geovisto-sidebar";
import { GeovistoFiltersTool } from "geovisto-filters";
import { GeovistoThemesTool } from "geovisto-themes";
import { GeovistoSelectionTool } from "geovisto-selection";
import { GeovistoTilesLayerTool } from "geovisto-layer-tiles";
import { GeovistoChoroplethLayerTool } from "geovisto-layer-choropleth";
import { GeovistoMarkerLayerTool } from "geovisto-layer-marker";
import { GeovistoConnectionLayerTool } from "geovisto-layer-connection";
import { GeovistoBubbleLayerTool } from "geovisto-layer-bubble";
import { GeovistoDotLayerTool } from "geovisto-layer-dot";
import { GeovistoHeatLayerTool } from "geovisto-layer-heat";
import { GeovistoSpikeLayerTool } from "geovisto-layer-spike";
import { GeovistoTimelineTool } from "geovisto-timeline";
import { GeovistoInfoTool } from "geovisto-info";

import IReactGeovistoMapProps from "../react/IReactGeovistoMapProps";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_input_data = "leaflet-combined-map-input-data";

const C_ID_input_config = "leaflet-combined-map-input-config";

const C_ID_input_geojson = "leaflet-combined-map-input-geojson";

const C_ID_input_data_export = "leaflet-combined-map-input-export-data";
const C_ID_input_config_export = "leaflet-combined-map-input-export-config";
const C_ID_input_geojson_export = "leaflet-combined-map-input-export-geojson";

export default class Playground extends Component<Record<string, never>, { data: unknown, config: Record<string, unknown>, geojson: Array<any>}> {

    private map: React.RefObject<IMap>;

    public constructor(props: Record<string, never>) {
        super(props);

        // data and config can be changed
        this.state = {
            // implicit data
            data: require('/static/data/timeData.json'),
            // implicit config
            config: require('/static/config/config.json'),
            // implicit geojson
            geojson: []

        };

        // reference to the rendered map
        this.map = React.createRef();

    }

    private handleEvent() {
        console.log("handle change")
    }
    
    public  downloadGeojson = async (name) => {
        
        if (!this.state.geojson.find(e => e.key === name)) 
        {
            const response = await fetch('https://avi278.github.io/resources/geojson/' + name);
            const geojson = await response.json();
            this.state.geojson.push({key:name, geo:geojson});
            this.setState({
                geojson: this.state.geojson
            });
    

        }

        (document.getElementById('geojson') as HTMLInputElement).value = JSON.stringify(this.state.geojson.find(e => e.key === name).geo, null, 4);

    }

    public downloadData = async (name) => {

        const response = await fetch('https://avi278.github.io/resources/data/' + name);
        const data = await response.json();
        this.setState({
            data: data
        });

        (document.getElementById('data') as HTMLInputElement).value = JSON.stringify(data, null, 4);

    }

    public downloadConfig = async (name) => {

        const response = await fetch('https://avi278.github.io/resources/config/' + name);
        const config = await response.json();

        this.setState({
            config: config
        });

        (document.getElementById('config') as HTMLInputElement).value = JSON.stringify(config, null, 4);
    }


    public setDataset = async (data, geo, name) => {
        this.state.geojson.push({key:name, geo:geo});
        this.setState({
            data: data,
            geojson: this.state.geojson
        });

        (document.getElementById('data') as HTMLInputElement).value = JSON.stringify(data, null, 4);
        (document.getElementById('geojson') as HTMLInputElement).value = JSON.stringify(this.state.geojson.find(e => e.key === name).geo, null, 4);
    }

    public componentDidMount(): void {


        // ------ process files ------ //

        // process path
        const pathSubmitted = function(file: File, result: { json: unknown | undefined }, type: any) {
            const reader = new FileReader();
            const onLoadAction = function(e: ProgressEvent<FileReader>) {
                try {
                    console.log(e);
                    //console.log(reader.result);
                    if(typeof reader.result == "string") {
                        result.json = JSON.parse(reader.result);
                        //(document.getElementById('data') as HTMLInputElement).value = JSON.stringify(result.json, null, 4);
                    }
                } catch(ex) {
                    console.log("unable to read file");
                    console.log(ex);
                    // TODO: notify user
                    alert("unable to read file");
                }  
            };

            reader.onload = onLoadAction;
            reader.onloadend = () => {
                console.log('onloadend');
                console.log(reader);            

                if (type == "data") {
                    (document.getElementById('data') as HTMLInputElement).value = JSON.stringify(result.json, null, 4);
                    document.getElementById('data').dispatchEvent(new Event('change'));
                }

                if (type == "config") {
                    (document.getElementById('config') as HTMLInputElement).value = JSON.stringify(result.json, null, 4);
                    document.getElementById('config').dispatchEvent(new Event('change'));
                }

                if (type == "geojson") {
                    (document.getElementById('geojson') as HTMLInputElement).value = JSON.stringify(result.json, null, 4);
                    document.getElementById('geojson').dispatchEvent(new Event('change'));
                }
            };

            reader.readAsText(file);
        };

        // process data path
        const data = {
            json: undefined
        };
        const dataPathSubmitted = (e: Event) => {
            console.log((e.target as HTMLInputElement).files);
            pathSubmitted((e.target as HTMLInputElement).files[0], data, "data")

        };
        document.getElementById(C_ID_input_data).addEventListener('change', dataPathSubmitted, false);

        // process config path
        const config = {
            json: undefined
        };
        const configPathSubmitted = function(this: HTMLInputElement) {
            console.log(this.files);
            pathSubmitted(this.files[0], config, "config");
            console.log(config.json);

        };
        document.getElementById(C_ID_input_config).addEventListener('change', configPathSubmitted, false);

        // process geojson path
        const geojson = {
            json: undefined
        };
        const geojsonPathSubmitted = function(this: HTMLInputElement) {
            console.log(this.files);
            pathSubmitted(this.files[0], geojson, "geojson");
        };
        document.getElementById(C_ID_input_geojson).addEventListener('change', geojsonPathSubmitted, false);
        

        // ------ export ------ //

        // export action data
        const exportActionData = (e: MouseEvent) => {
            console.log(e);

            // expert map data
            const data = JSON.stringify(this.state.data, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
            element.setAttribute('download', "data.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            console.log("rendered map:", );
        };
        document.getElementById(C_ID_input_data_export).addEventListener('click', exportActionData);
                
        // export action config
        const exportActionConfig = (e: MouseEvent) => {
            console.log(e);

            // expert map configuration
            const config = JSON.stringify(this.state.config, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(config));
            element.setAttribute('download', "config.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            console.log("rendered map:", );
        };
        document.getElementById(C_ID_input_config_export).addEventListener('click', exportActionConfig);

        // export action geojson
        const exportActionGeojson = (e: MouseEvent) => {
            console.log(e);

            // expert map configuration
            const geojson = JSON.stringify(this.state.geojson, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(geojson));
            element.setAttribute('download', "config.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            console.log("rendered map:", );
        };
        document.getElementById(C_ID_input_geojson_export).addEventListener('click', exportActionGeojson);
        

        // ------ result ------ //
        const resultActionData = (e: MouseEvent) => {

            console.log("result action");
            try {
                data.json = JSON.parse((document.getElementById('data') as HTMLInputElement).value);

                // update state
                this.setState({
                    data: data.json
                });
            } catch (error) {
                alert("Data json error");
            }    
        };

        const resultActionConfig = (e: MouseEvent) => {

            console.log("result action");
            try {
                config.json = JSON.parse((document.getElementById('config') as HTMLInputElement).value);

                // update state
                this.setState({
                    config: config.json
                });

                console.log("config");
                console.log(this.state.config);
        
            } catch (error) {
                alert("Config json error");
            }    
        };

        const resultActionGeojson = (e: MouseEvent) => {

            console.log("result action");
            try {
                geojson.json = JSON.parse((document.getElementById('geojson') as HTMLInputElement).value);

                if (!this.state.geojson.find(e => e.key === "Your geojson"))
                {
                    console.log("new");
                    this.state.geojson.push({key:"Your geojson", geo:geojson.json})
                }
                else
                {
                    console.log("old");
                    console.log(geojson.json);
                    this.state.geojson.find(e => e.key === "Your geojson").geo = geojson.json;
                }
                // update state
                this.setState({
                    geojson: this.state.geojson
                });
            } catch (error) {
                alert("Config json error");
            }    
        };geojsonPathSubmitted
        document.getElementById('data').addEventListener('change', resultActionData, false);
        document.getElementById('config').addEventListener('change', resultActionConfig, false);
        document.getElementById('geojson').addEventListener('change', resultActionGeojson, false);



        // ------ automatic result ------ //

        var typingTimerData;
        var typingTimerConfig;
        var typingInterval = 1500;

        const startTimerData = () => {
            clearTimeout(typingTimerData);
            typingTimerData = setTimeout(resultActionData, typingInterval);
        };

        const startTimerConfig = () => {
            clearTimeout(typingTimerConfig);
            typingTimerConfig = setTimeout(resultActionConfig, typingInterval);
        };

        const resetTimperData = () => {
            clearTimeout(typingTimerData);
        };

        const resetTimperConfig = () => {
            clearTimeout(typingTimerConfig);
        };

        document.getElementById('data').addEventListener('keyup', startTimerData, false);
        document.getElementById('config').addEventListener('keyup', startTimerConfig, false);

        document.getElementById('data').addEventListener('keydown', resetTimperData, false);
        document.getElementById('config').addEventListener('keydown', resetTimperConfig, false);
    }
    
    public render(): JSX.Element {
        console.log("rendering...");
        return (
            <div>
                <div>
                    <PlaygroundBarSearchDatasets callback={this.setDataset}/>
                </div>
                <div>
                    <div className="input editors">
                        <div className="editor">
                            <label>Geojson</label>
                            <PlaygroundBarGeojson callback={this.downloadGeojson}/>
                            <textarea id="geojson" readOnly></textarea>
                        </div>
                        <div className="editor">
                            <label>Data</label>
                            <PlaygroundBarData callback={this.downloadData}/>
                            <textarea id="data"></textarea>
                        </div>
                        <div className="editor">
                            <label>Config</label>
                            <PlaygroundBarConfig callback={this.downloadConfig}/>
                            <textarea id="config"></textarea>
                        </div>
                    </div>
                    <div className="demo-container">
                        <div className="demo-map">
                            <ReactGeovistoMap
                                id="my-geovisto-map"
                                data={Geovisto.getMapDataManagerFactory().json(this.state.data)}
                                geoData={Geovisto.getGeoDataManager(
                                    this.state.geojson.map((element) =>
                                        Geovisto.getGeoDataFactory().geojson(element.key, element.geo)
                                    )
                                )}
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
                                    GeovistoBubbleLayerTool.createTool({
                                        id: "geovisto-tool-layer-bubble"
                                    }),
                                    GeovistoDotLayerTool.createTool({
                                        id: "geovisto-tool-layer-dot"
                                    }),

                                    GeovistoHeatLayerTool.createTool({
                                        id: "geovisto-tool-layer-heat"
                                    }),

                                    GeovistoSpikeLayerTool.createTool({
                                        id: "geovisto-tool-layer-spike"
                                    }),

                                    GeovistoTimelineTool.createTool({
                                        id: "geovisto-tool-timeline"
                                    }),
                                    GeovistoInfoTool.createTool({
                                        id: "geovisto-tool-info"
                                    }),
                                ])} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

