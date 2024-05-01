import React, {useState, useEffect} from "react";
import {files, file} from "../api";
import Select from "react-select";
import Dropdown from 'react-dropdown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_config = "leaflet-combined-map-select-config";
const C_ID_input_config = "leaflet-combined-map-input-config";
const C_ID_input_config_export = "leaflet-combined-map-input-export-config";

const PlaygroundBarConfig = (props) => {  
    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = useState({
        optionsLoaded: false,
        options: [],
        value: undefined,
    });

    function toggle() {
        var container = document.getElementById("config-container");    
        var arrow = document.getElementById("config-arrow");

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
        const response = (await files()).config
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
        state.value = e;
        setIsLoading(true);
        const config = (await file('resources/config/' + e.value)).data
        props.callback(config);
        setIsLoading(false);
    }

    return (
        <div className="demo-toolbar">
            <i id="config-arrow" className="arrow down" onClick={toggle} title="Set up config"></i>            
            <div id="config-container" className="data-container hidden">
                <Select
                    id={C_ID_select_config}
                    value={state.value}
                    isLoading={isLoading}
                    options={state.options}
                    onFocus={maybeLoadOptions}
                    onChange={handleChange}
                    className="select"
                />
                <div className="plagroundbar__buttons">
                    <div className="choose-file">
                        <label title="Import your config" className="custom-file-upload btn btn-default">
                            <input type="file" 
                                id={C_ID_input_config}
                                accept=".json"
                                size={3}
                                className="btn btn-default"
                            />
                            Import
                        </label>
                    </div>

                    <input id={C_ID_input_config_export} title="Export current config" type="submit" value="Export" className="btn btn-default btn-export"/>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundBarConfig;
