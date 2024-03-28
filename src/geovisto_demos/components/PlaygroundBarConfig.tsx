import React, {useState} from "react";
import {files} from "../api";
import Select from "react-select";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_config = "leaflet-combined-map-select-config";
const C_ID_input_config = "leaflet-combined-map-input-config";
const C_ID_input_config_export = "leaflet-combined-map-input-export-config";

const PlaygroundBarConfig = (props) => {
    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        isLoading: false,
        value: undefined
    });

    const handleLoadOptions = async () => {
        let options = [];
        const response = (await files()).config
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
                <span>Config file: </span>

                <Select
                    id={C_ID_select_config}
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
                        id={C_ID_input_config}
                        type="file"
                        accept=".json"
                        size={3}
                    />
                </div>

                <input id={C_ID_input_config_export} type="submit" value="Export" />
            </div>
        </div>
    );
};

export default PlaygroundBarConfig;
