import React, { useState} from "react";
import {files, file} from "../api";
import Select from "react-select";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_geojson = "leaflet-combined-map-select-geojson";
const C_ID_input_geojson = "leaflet-combined-map-input-geojson";
const C_ID_input_geojson_export = "leaflet-combined-map-input-export-geojson";

const PlaygroundBarGeojson = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        isLoading: false,
        value: undefined
    });

    function toggle() {
        var container = document.getElementById("geojson-container");    
        var arrow = document.getElementById("geojson-arrow");

        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
            arrow.classList.remove('down');
            arrow.classList.add('up');
        } else {
            container.classList.add('hidden');
            arrow.classList.remove('up');
            arrow.classList.add('down');
        }
    }

    const handleLoadOptions = async () => {
        let options = [];
        setIsLoading(true);
        const response = (await files()).geo
        response.map((option) => {
            const newOption = {
                value: option,
                label: option.split('.')[0]
            };
            options.push(newOption);
        });

        setState({
            optionsLoaded: true,
            options: options,
            isLoading: false,
            value: undefined
        });
        setIsLoading(false);
    };

    const maybeLoadOptions = () => {
        if (!state.optionsLoaded) {
            handleLoadOptions();
        }
    };

    const handleChange = async (e) => {
        setIsLoading(true);
        state.value = e;
        const geojson = (await file('resources/geojson/' + e.value)).data
        props.callback(e.value, geojson);
        setIsLoading(false);
    }

    
    return (
        <div className="demo-toolbar">
            <i id="geojson-arrow" className="arrow down" onClick={toggle} title="Set up geojson"></i>            
            <div id="geojson-container" className="data-container hidden">
                <Select
                    id={C_ID_select_geojson}
                    value={state.value}
                    isLoading={isLoading}
                    options={state.options}
                    onFocus={maybeLoadOptions}
                    onChange={handleChange}
                    className="select"
                />
                <div className="choose-file">
                    <label title="Import your geojson" className="custom-file-upload btn btn-default">
                        <input type="file" 
                            id={C_ID_input_geojson}
                            accept=".json"
                            size={3}
                            className="btn btn-default"
                        />
                        Import
                    </label>
                </div>

                <input id={C_ID_input_geojson_export} title="Export current geojson" type="submit" value="Export" className="btn btn-default btn-export"/>
            </div>
        </div>
    );
};

export default PlaygroundBarGeojson;
