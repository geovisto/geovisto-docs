import React, { useState} from "react";
import {datasets_search, datasets_download} from "../api";
import Select, { components } from "react-select";


const C_ID_select_datasets = "leaflet-combined-map-select-datasets";


const PlaygroundBarSearchDatasets = (props) => {
    var typingTimerData;
    var typingInterval = 1500;

    const startTimerData = () => {
        clearTimeout(typingTimerData);
        typingTimerData = setTimeout(handleSearchSubmit, typingInterval);
    };

    const resetTimperData = () => {
        clearTimeout(typingTimerData);
    };

    const [search, setSearch] = useState({
        options: [],
    });
    const [inputText, setInputText] = useState<string>('')
    const [chosenValue, setChosenValue] = useState();


    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
  
    const handleChoose = async (e) => {
        console.log("choose: " + e.value)
        const response = (await datasets_download(e.value));
        setChosenValue(e.label);
        props.callback(response.data, response.geo, e.label)
    }

    const handleSearchSubmit = async () => {
        let options = [];
        console.log("submit: "+ inputText)
        const response = (await datasets_search(inputText)).data;
        response.map((option) => {
            const newOption = {
                label: option.attributes.name,
                value: option.id
            };
            options.push(newOption);
        });
        setSearch({
            options: options,
        });                       
    }

    const DropdownIndicator = (props: any) => {
        return (
          components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
              <SearchIcon />
            </components.DropdownIndicator>
          )
        )
      }
      
    const SearchIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="38" cy="40" r="20.5" stroke="currentColor" strokeWidth="7" />
        <path
        d="M76.0872 84.4699C78.056 86.4061 81.2217 86.3797 83.158 84.4109C85.0943 82.442 85.0679 79.2763 83.099 77.34L76.0872 84.4699ZM50.4199 59.2273L76.0872 84.4699L83.099 77.34L57.4317 52.0974L50.4199 59.2273Z"
        fill="currentColor"
        />
    </svg>
    )



    return (
        <div className="demo-toolbar">
            <div className="data-container">
                <span>Search dataset: </span>
                {/*

                <form onSubmit={handleSearchSubmit}>
                    <input 
                    type="text" 
                    placeholder="Search..."
                    id={C_ID_select_datasets}
                    value={handleSearchInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <div className="search-result">
                    {searchQuery.options && searchQuery.options?.map((result) => {
                        return <div key={result.value} onClick={() => handleChoose(result.value, result.label)}>{result.label}</div>;
                    })}
                </div>
                    <Select
                        id={C_ID_select_datasets}
                        value={chosenValue}
                        inputValue={inputText}
                        options={search.options}
                        onChange={handleChoose}
                        components={{ IndicatorSeparator: () => null, DropdownIndicator }}
                        onInputChange={handleInputChange}
                        isClearable={true} 
                        isSearchable={true} 
                        placeholder={"Search..."}
                    />
                    <button onClick={handleSearchSubmit}>Search</button>
            </div>
            */}

                <form onSubmit={handleSearchSubmit}>
                    <span className="visually-hidden">Search blog posts</span>
                    <input 
                        type="text" 
                        placeholder="Search..."
                        id={C_ID_select_datasets}
                        onChange={handleInputChange}
                        value={inputText}
                    />
                    <button type="submit">Search</button>
                </form>
                <div className="search-result">
                    {search.options && search.options?.map((result) => {
                        return <div key={result.value} onClick={() => handleChoose(result)}>{result.label}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlaygroundBarSearchDatasets;