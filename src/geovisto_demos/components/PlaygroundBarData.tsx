import React, {useState} from "react";
import {files} from "../api";
import Select from "react-select";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_data = "leaflet-combined-map-select-data";
const C_ID_input_data = "leaflet-combined-map-input-data";
const C_ID_input_data_export = "leaflet-combined-map-input-export-data";

const PlaygroundBarData = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        isLoading: false,
        value: undefined
    });

    const handleLoadOptions = async () => {
        let options = [];
        setIsLoading(true);
        const response = (await files()).data
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
        const response = await fetch('https://avi278.github.io/resources/data/' + e.value);
        const data = await response.json();
        props.callback(data);
        setIsLoading(false);
    }

    return (
        <div className="demo-toolbar">
            <div className="data-container">
                <span>Data file: </span>
                <Select
                    id={C_ID_select_data}
                    value={state.value}
                    isLoading={isLoading}
                    options={state.options}
                    onFocus={maybeLoadOptions}
                    onChange={handleChange}
                />

                <div className="choose-file">
                    <span className="checkbox">
                        Custom file:
                    </span>
                    <input className="file"
                        id={C_ID_input_data}
                        type="file"
                        accept=".json"
                        size={3}
                    />
                </div>
                <input id={C_ID_input_data_export} type="submit" value="Export" className="btn btn-default"/>
            </div>
        </div>
    );
};

export default PlaygroundBarData;
