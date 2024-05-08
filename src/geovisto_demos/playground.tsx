// React
import React, { Component, useState, useRef, useEffect, useCallback, createContext, StrictMode, useMemo } from "react";

// React-Geovisto
import ReactGeovistoMap from "../react/ReactGeovistoMap";

import {
    Geovisto,
    IMap,
    IMapProps
} from 'geovisto';

import "./playground.css";
import "geovisto/dist/index.css";
import { PlaygroundBarGeo } from "./components";
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
import { GeovistoGeoDownloaderTool } from "geovisto-geo-downloader";
import { GeovistoLegendTool } from "geovisto-legend";
import { GeovistoHierarchyTool } from "geovisto-hierarchy";

import Split from 'react-split';

import ReactJson from '@microlink/react-json-view';

import IReactGeovistoMapProps from "../react/IReactGeovistoMapProps";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_input_data = "leaflet-combined-map-input-data";

const C_ID_input_config = "leaflet-combined-map-input-config";

const C_ID_input_geojson = "leaflet-combined-map-input-geojson";

const C_ID_input_data_export = "leaflet-combined-map-input-export-data";
const C_ID_input_config_export = "leaflet-combined-map-input-export-config";
const C_ID_input_geojson_export = "leaflet-combined-map-input-export-geojson";

const ParentContext = createContext(Object)

const Playground = () => {
    const infodata = require("!!raw-loader!/static/info/test.md");

    const [map_state, setMapState] = useState({
        data: require('/static/data/data-choro.json'),
        config: require('/static/config/config-layer-choro.json'),
        geojson: [{key:"country_polygons", geo: require('/static/geo/country_polygons.json')}]
    });

    const [edit_state, setEditState] = useState({
        data: require('/static/data/data-choro.json'),
        config: require('/static/config/config-layer-choro.json'),
        geojson: require('/static/geo/country_polygons.json')
    });

    useEffect(() => {
        // ------ process files ------ //

        // process path
        const pathSubmitted = function(file: File, type: any) {

            let result;
            const reader = new FileReader();
            if (file) {
                reader.readAsText(file);
            }
            const onLoadAction = function(e: ProgressEvent<FileReader>) {
                try {
                    if(typeof reader.result == "string") {
                        result = JSON.parse(reader.result);
                    }
                } catch(ex) {
                    alert("unable to read file");
                }  
            };

            reader.onload = onLoadAction;
            reader.onloadend = () => {
                if (type == "config") {
                    setConfig(result);
                }        
                if (type == "data") {
                    setData(result);
                }        
                if (type == "geo") {
                    setGeo("Your geo", result);
                }        

            };
        };

        // process data path
        const dataPathSubmitted = (e: Event) => {
            pathSubmitted((e.target as HTMLInputElement).files[0], "data")
        };
        document.getElementById(C_ID_input_data).addEventListener('change', dataPathSubmitted, false);

        // process config path
        const configPathSubmitted = (e: Event) =>{
            pathSubmitted((e.target as HTMLInputElement).files[0], "config");
        };
        document.getElementById(C_ID_input_config).addEventListener('change', configPathSubmitted, false);

        // process geojson path
        const geojsonPathSubmitted = (e: Event) => {
            pathSubmitted((e.target as HTMLInputElement).files[0], "geo");
        };
        document.getElementById(C_ID_input_geojson).addEventListener('change', geojsonPathSubmitted, false);

        // ------ export ------ //

        // export action data
        const exportActionData = (e: MouseEvent) => {
            // expert map data
            const data = JSON.stringify(map_state.data, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
            element.setAttribute('download', "data.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

        };
        document.getElementById(C_ID_input_data_export).addEventListener('click', exportActionData);
                
        // export action config
        const exportActionConfig = (e: MouseEvent) => {
            // expert map configuration
            const config = JSON.stringify(map_state.config, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(config));
            element.setAttribute('download', "config.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

        };
        document.getElementById(C_ID_input_config_export).addEventListener('click', exportActionConfig);

        // export action geojson
        const exportActionGeojson = (e: MouseEvent) => {
            // expert map configuration
            const geojson = JSON.stringify(map_state.geojson, null, 4);

            // download file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(geojson));
            element.setAttribute('download', "config.json");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

        };
        document.getElementById(C_ID_input_geojson_export).addEventListener('click', exportActionGeojson);
        

    }, [])


    const setDataGeo = (data, geo, name) => {
        setData(data)
        setGeo(name, geo)
    }

    const setConfig = (config) => {
        setMapState({...map_state, config: config})
        setEditState({...edit_state, config: config})
    }    

    const setData = (data) => {
        setMapState({...map_state, data: data})
        setEditState({...edit_state, data: data})
    }  

    const setGeo = (name, geo) => {
        name = name.split('.')[0]

        let geos = map_state.geojson;

        if (!geos.find(e => e.key === name))
        {
            geos.push({key:name, geo:geo})
        }
        else
        {
            geos.find(e => e.key === name).geo = geo;
        }

        setMapState({...map_state, geojson: geos});
        setEditState({...edit_state, geojson: geo});
    }

    const updateMapConfig = (e) => {
        setEditState({...edit_state, config: e})
    }

    const getCurrentEdit = () => {
        return edit_state.config
    }

    return (
        <div className="playground__container lightest">
            <div >
                <PlaygroundBarSearchDatasets callback={setDataGeo}/>
            </div>
            <Split direction="vertical" 
                sizes={[35, 65]}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                minSize={[0,10]}
                snapOffset={30}
                dragInterval={1}
                cursor="row-resize"
                className="splitter"
            >
                <div className="input editors">
                    <div key="json-geojson" className="editor">
                        <label>Geo</label>
                        <PlaygroundBarGeo callback={setGeo}/>
                        <ReactJson 
                            src={edit_state.geojson} 
                            theme="monokai" 
                        />
                    </div>
                    <div key="json-data" className="editor">
                        <label>Data</label>
                        <PlaygroundBarData callback={setData}/>
                        <ReactJson 
                            src={edit_state.data} 
                            theme="monokai" 
                            onEdit={src=>setData(src.updated_src)}
                            onDelete={src=>setData(src.updated_src)}
                            onAdd={src=>setData(src.updated_src)}
                        />
                    </div>
                    <div key="json-config" className="editor">
                        <label>Config</label>
                        <PlaygroundBarConfig callback={setConfig}/>
                        <ReactJson 
                            src={edit_state.config} 
                            theme="monokai" 
                            onEdit={src=>setConfig(src.updated_src)}
                            onDelete={src=>setConfig(src.updated_src)}
                            onAdd={src=>setConfig(src.updated_src)}
                        />
                    </div>
                </div>
                <div className="demo-container" id="bottom">
                    <div className="demo-map">
                    <StrictMode>
                        <ReactGeovistoMap
                        
                            callback={updateMapConfig}
                            currentEdit={getCurrentEdit}
                            id="my-geovisto-map"
                            data={useMemo(() => Geovisto.getMapDataManagerFactory().json(map_state.data), [map_state.data])}
                            geoData={useMemo(() => Geovisto.getGeoDataManager(
                                map_state.geojson.map((element) =>
                                    Geovisto.getGeoDataFactory().geojson(element.key, element.geo)
                                )
                            ), [map_state.geojson.length])}
                            config={useMemo(() => Geovisto.getMapConfigManagerFactory().default(map_state.config), [map_state.config])}
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
                                GeovistoGeoDownloaderTool.createTool({
                                    id: "geovisto-tool-geo-downloader"
                                }),
                                GeovistoLegendTool.createTool({
                                    id: "geovisto-tool-legend"
                                }),
                                GeovistoHierarchyTool.createTool({
                                    id: "geovisto-tool-hierarchy"
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
                                    id: "geovisto-tool-info",
                                    manager: GeovistoInfoTool.createInfoManager([
                                        GeovistoInfoTool.getInfoDataFactory().markdown(
                                        "General",
                                        (infodata as any).default
                                        )
                                    ])
                                }),
                            ])} 
                        />
                        </StrictMode>
                    </div>
                </div>
            </Split>
        </div>
    );
}

export  default Playground;

