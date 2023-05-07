import React from "react";

/* example of screen component with grid layout and card wrapper usage */

const C_ID_select_data = "leaflet-combined-map-select-data";
const C_ID_check_data = "leaflet-combined-map-check-data";
const C_ID_input_data = "leaflet-combined-map-input-data";
const C_ID_check_config = "leaflet-combined-map-check-config";
const C_ID_input_config = "leaflet-combined-map-input-config";
const C_ID_input_import = "leaflet-combined-map-input-import";
const C_ID_input_export = "leaflet-combined-map-input-export";

const PlaygroundBar = () => {
    return (
        <div className="demo-toolbar">
            <div className="data-container">
                <span>Data file: </span>
                <select id={C_ID_select_data}>
                    <option value="timeData.json">timeData.json</option>
                    <option value="demo1.json">demo1.json</option>
                    <option value="demo2.json">demo2.json</option>
                    <option value="covidCzechDistricts.json">
                        covid czech districts
                    </option>
                    <option value="covidCzechDistrictsCumulative.json">
                        covid czech districts (cumulative)
                    </option>
                    <option value="ovidCzechDistrictsCategoric.json">
                        covid czech districts (categoric)
                    </option>
                    <option disabled></option>
                </select>

                <span>
                    <input id={C_ID_check_data} type="checkbox" />
                    Custom file:
                </span>
                <input
                    id={C_ID_input_data}
                    type="file"
                    accept=".json"
                    size={3}
                />
            </div>
            <div className="config-container">
                <input id={C_ID_check_config} type="checkbox" />
                <span> Configuration file: </span>
                <input
                    id={C_ID_input_config}
                    type="file"
                    accept=".json"
                    size={3}
                />

                <input id={C_ID_input_import} type="submit" value="Import" />
                <input id={C_ID_input_export} type="submit" value="Export" />
            </div>
        </div>
    );
};

export default PlaygroundBar;
