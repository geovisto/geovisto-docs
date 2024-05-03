import React, { useState, useRef} from "react";
import {datasets_search, datasets_download} from "../api";
import Select from "react-select";


const PlaygroundBarSearchDatasets = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState({
        options: [],
    });
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [inputText, setInputText] = useState<string>('');
    const [choosen, setChoosen] = useState<string>('');

    const clearChoosen = (e) => {
        setChoosen('');
    }

    const handleInputChange = (e) => {
        console.log(e);
        setInputText(e);
    }
  
    const handleChoose = async (e) => {
        if (e != null) {
            console.log("choose: " + e.value)
            setChoosen(e);
            setIsLoading(true);
            const response = (await datasets_download(e.value));
            setInputText(e.label);
            props.callback(response.data, response.geo, e.label);
 
            setIsLoading(false);
            setInputText('');
            setSearch({options: []});

        }      
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setMenuIsOpen(true);
        let options = [];
        console.log(e);
        console.log("submit: "+ inputText)
        if (inputText != "" ) {
            setIsLoading(true);
            const response = (await datasets_search(inputText)).data;
            response.map((option) => {
                const newOption = {
                    label: option.attributes.name,
                    value: option.id
                };
                options.push(newOption);
            });
            setIsLoading(false);
            setSearch({
                options: options,
            });  
        }
                     
    }

    return (
        <div className="demo-toolbar">
            <div className="data-container">
                <form onSubmit={handleSearchSubmit} className="search-form" title="Download dataset from ArcGIS HUB">
                <Select 
                    id={"C_ID_select_geojson"}
                    value={choosen}
                    isLoading={isLoading}
                    options={search.options}
                    onInputChange={handleInputChange}
                    placeholder="Search and download dataset on ArcGIS HUB..."
                    onChange={handleChoose}
                    isClearable={true}
                    noOptionsMessage={() => 'No Datasets Found'}
                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                    menuIsOpen={menuIsOpen}
                    onFocus={clearChoosen}
                    onMenuClose={() => setMenuIsOpen(false)}
                    onMenuOpen={() => setMenuIsOpen(true)}
                    className="select"
                />

                </form>
            </div>
        </div>

    );
};

export default PlaygroundBarSearchDatasets;