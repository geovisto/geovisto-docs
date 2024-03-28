import React, { useState} from "react";
import {files} from "../api";
import Select from "react-select";
/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_geojson = "leaflet-combined-map-select-geojson";
const C_ID_input_geojson = "leaflet-combined-map-input-geojson";
const C_ID_input_geojson_export = "leaflet-combined-map-input-export-geojson";

const PlaygroundBarGeojson = (props) => {

    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        isLoading: false,
        value: undefined
    });

    const handleLoadOptions = async () => {
        let options = [];
        const response = (await files()).geo
        response.map((option) => {
            const newOption = {
                value: option,
                label: option
            };
            options.push(newOption);
        });

        setState({
            optionsLoaded: true,
            options: options,
            isLoading: false,
            value: undefined
        });
    };

    const maybeLoadOptions = () => {
        if (!state.optionsLoaded) {
            state.isLoading = true;
            handleLoadOptions();
        }
    };

    const handleChange = e => {
        state.value = e.value;
        props.callback(e.value);
    }

    
    return (
        <div className="demo-toolbar">
            <div className="data-container">
                <span>Geojson file: </span>

                <Select
                    id={C_ID_select_geojson}
                    value={state.value}
                    isLoading={state.isLoading}
                    options={state.options}
                    onFocus={maybeLoadOptions}
                    onChange={handleChange}
                />
                <div className="choose-file">
                    <span className="checkbox">
                        Custom file:
                    </span>
                    <input className="file"
                        id={C_ID_input_geojson}
                        type="file"
                        accept=".json, .geojson"
                        size={3}
                    />
                </div>

                <input id={C_ID_input_geojson_export} type="submit" value="Export" />
            </div>
        </div>
    );
};

export default PlaygroundBarGeojson;
