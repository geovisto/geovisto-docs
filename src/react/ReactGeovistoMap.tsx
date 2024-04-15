// React
import React, { useEffect, useRef } from "react";
import { isEqual } from "lodash"

// Geovisto
import { Geovisto, 
        IMap, 
    } from "geovisto";
import IReactGeovistoMapProps from "./IReactGeovistoMapProps";

// styles
import "./common.css";

/**
 * React component which wraps Geovisto map.
 *
 * @param props The component properties.
 *
 *  @author Jiri Hynek
 *  @author Vladimir Korencik
 */
const ReactGeovistoMap: React.FC<IReactGeovistoMapProps> = (props) => {
    const mapRef = props.ref ?? useRef<IMap>();
    const helpRef = useRef(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);

    var typingTimer;
    var typingInterval = 5000;

    const startTimer = () => {
        console.log("start")
        clearTimeout(typingTimer);
        typingTimer = setTimeout(resultAction, typingInterval);
    };

    const deleteUndefined = (obj) => {
        var t = obj;
        for (var v in t) {
          if (typeof t[v] == "object")
            deleteUndefined(t[v]);
          else if (t[v] == undefined)
            delete t[v];
        }
        return t;
    }

    const resultAction = () => {
        var map_config = mapRef.current.export();         
        var text_config = (document.getElementById('config') as HTMLInputElement)?.value;

        if (text_config) {
            text_config = JSON.parse(text_config);
        }

        map_config = deleteUndefined(map_config); 

        if (!isEqual(text_config, map_config)) {
            (document.getElementById('config') as HTMLInputElement).value = JSON.stringify(map_config, null, 4)
        }
        startTimer();
    }

    useEffect(() => {
        // create new Geovisto map
        mapRef.current = Geovisto.createMap(props);

        if (!helpRef.current) {
            // draw map with the current config
            // timeout is set to fix crashing with leaflet
            setTimeout(() => {
                mapRef.current.draw(
                    props.config ??
                        Geovisto.getMapConfigManagerFactory().default({})
                );
                console.log("draw");
                console.log(props.id);

                // ignoring for base 
                if (props.id == 'my-geovisto-map') {
                    const map_config = mapRef.current.export(); 
                    const map_data = mapRef.current.getState().getCurrentData();
                    (document.getElementById('data') as HTMLInputElement).value = JSON.stringify(map_data, null, 4);
                    (document.getElementById('config') as HTMLInputElement).value = JSON.stringify(map_config, null, 4);
                }
            }, 0);

            helpRef.current = true;

        } else {
            console.log("redraw");
            setTimeout(() => {
                mapRef.current.redraw(
                    props.config ?? Geovisto.getMapConfigManagerFactory().default({}), props);

                // ignoring for base 
                console.log("redraw");
                console.log(props.id);
            }, 0);
        } 

        // ignoring for base 
        if (props.id == 'my-geovisto-map') {
            startTimer();
        } else {
            clearTimeout(typingTimer);
        }

        console.log("mapRef");
        console.log(mapRef.current);

        return () => {
            console.log("cleaning up");
            clearTimeout(typingTimer);
        }
    }, [props]);


    return (
        <div
            id={props.id ?? "my-geovisto-map"}
            className="geovisto-map"
            ref={mapContainerRef}
        />
    );
};

export default ReactGeovistoMap;