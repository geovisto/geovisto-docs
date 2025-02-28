import React, {useState} from "react";
import {files, file} from "../api";
import Select from "react-select";

const C_ID_select_data = "leaflet-combined-map-select-data";
const C_ID_input_data = "leaflet-combined-map-input-data";
const C_ID_input_data_export = "leaflet-combined-map-input-export-data";

/** Bar component for data editor control 
* @author Iva Utikalova
**/

const PlaygroundBarData = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        isLoading: false,
        value: undefined
    });

    function toggle() {
        var container = document.getElementById("data-container");    
        var arrow = document.getElementById("data-arrow");

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
        const data = (await file('resources/data/' + e.value)).data
        props.callback(data);
        setIsLoading(false);
    }

    return (
        <div className="demo-toolbar">
            <i id="data-arrow" className="arrow down" onClick={toggle} title="Set up data"></i>            
            <div id="data-container" className="data-container hidden">
                <Select
                    id={C_ID_select_data}
                    value={state.value}
                    isLoading={isLoading}
                    options={state.options}
                    onFocus={maybeLoadOptions}
                    onChange={handleChange}
                    className="select"
                />

                <div className="choose-file">
                    <label title="Import your data" className="custom-file-upload btn">
                        <input type="file" 
                            id={C_ID_input_data}
                            accept=".json"
                            size={3}
                            className="btn"
                        />
                        Import
                    </label>
                </div>

                <input id={C_ID_input_data_export} title="Export current data" type="submit" value="Export" className="btn btn-export"/>
            </div>
        </div>
    );
};

export default PlaygroundBarData;
