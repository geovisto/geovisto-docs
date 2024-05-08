import React, { useState, useRef} from "react";
import {datasets_search, datasets_download} from "../api";



/** Search bar component for downloading datasets from ArcGIS Hub 
* @author Iva Utikalova
**/

const PlaygroundBarSearchDatasets = (props) => {

    const [search, setSearch] = useState({
        options: []
    });
    const [inputText, setInputText] = useState<string>('');
    const [abortController, setAbortController] = useState(null);


    window.onclick = function(event) {
        if (!event.target.matches('.dataset')) {
            if (document.getElementsByClassName("dropdown").length > 0) {
                document.getElementsByClassName("dropdown")[0].classList.add("dropdown-hidden")
            }
        }
      } 

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }
  
    const handleChoose = async (e, label) => {
        if (e != null) {
            document.getElementsByClassName("search-symbol")[0].classList.add("search-symbol-hidden")
            document.getElementsByClassName("search-close")[0].classList.remove("close-hidden")
            setInputText(label);
            setSearch({options: []});
            document.getElementsByClassName("dropdown")[0].classList.add("dropdown-hidden")

            const controller = new AbortController();
            setAbortController(controller);
            
            const response = (await datasets_download(e.target.id, controller));
            if (response != "ABORT") {
                props.callback(response.data, response.geo, label);                
            }
            document.getElementsByClassName("search-symbol")[0].classList.remove("search-symbol-hidden")
            document.getElementsByClassName("search-close")[0].classList.add("close-hidden")
        }      
    }

    const handleSearchSubmit = async (e) => {
        
        e.preventDefault();
        let options = [];
        if (inputText != "" ) {
            const response = (await datasets_search(inputText)).data;
            response.map((option) => {
                const newOption = {
                    label: option.attributes.name,
                    value: option.id
                };
                options.push(newOption);
            });

            if (response.length == 0) {
                alert("Nothing found")
            } else {
                setSearch({options: options});  
                document.getElementsByClassName("dropdown")[0].classList.remove("dropdown-hidden")
            }
        }
                     
    }

    const handleAbort = () => {
        if (abortController) {
            abortController.abort();
            setAbortController(null); // Reset abort controller after aborting
          }
    }

    return (
        <div className="search demo-toolbar">
            <div className="data-container search-container">
                <div className="search-row">
                    <form onSubmit={handleSearchSubmit} className="search-form search-dataset" title="Download dataset from ArcGIS HUB">
                        <input
                            type="text"
                            placeholder="Search and download dataset on ArcGIS HUB..."
                            onChange={handleInputChange}
                            value={inputText} 
                            className="search-input"
                            
                        />

                    </form>
                    <button onClick={handleSearchSubmit} value="Search" className="btn btn-search search-symbol">
                        <i className="fa fa-search"></i>
                    </button>
                    <button onClick={handleAbort} value="Search" className="btn btn-search search-close close-hidden">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="datasets-dropdown">
                    <div className="dropdown dropdown-hidden">
                            {search.options?.map((option) => (
                                <div className="dataset" 
                                    onClick={(e) => handleChoose(e, option.label)}    
                                    key={option.value} 
                                    id={option.value}
                                    
                                >{option.label}</div> 
                            ))}
                    </div>
                </div>

                {/*
                <form onSubmit={handleSearchSubmit} className="search-form search-dataset" title="Download dataset from ArcGIS HUB">
                    <Select 
                        id={"C_ID_select_geojson"}
                        value={choosen}
                        isLoading={isLoading}
                        options={search.options}
                        onInputChange={handleInputChange}
                        placeholder="Search and download dataset on ArcGIS HUB..."
                        onChange={handleChoose}
                        isClearable={true}
                        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                        menuIsOpen={menuIsOpen}
                        onFocus={clearChoosen}
                        onMenuClose={() => setMenuIsOpen(false)}
                        onMenuOpen={() => setMenuIsOpen(true)}
                        className="select"
                    />
                    <input type="submit" value="Submit" className="btn btn-search"/>
                </form>

                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="type something"
                        className="search-bar__input"
                        onChange={e => handleInputChange(e.target.value)} 
                        value={inputText} 
                    />
                    <button type="submit" className="search-bar__btn">Search</button>
                </form>
                <div>
                {search.options.map(user => {
                    return <li key={user.id}>{user.label}</li>
                    })}
                </div>
                                */}
            </div>
        </div>

    );
};

export default PlaygroundBarSearchDatasets;