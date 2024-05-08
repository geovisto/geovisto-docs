// React
import React, { useImperativeHandle, forwardRef, useEffect, useRef, memo, createContext} from "react";
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


const ReactGeovistoMap: React.FC<IReactGeovistoMapProps> = React.memo((props) => {
    const mapRef = useRef<IMap>();
    const helpRef = useRef(false);

    var typingTimer;
    var drawTimer;
    var redrawTimer;
    var typingInterval = 5000;

    const startTimer = () => {
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

        map_config = deleteUndefined(map_config); 

        if (!isEqual(props.currentEdit(), map_config)) {
            props.callback(map_config);
        }
        startTimer();
    }


    useEffect(() => {
        // create new Geovisto map
        if (!helpRef.current) {
            // draw map with the current config
            // timeout is set to fix crashing with leaflet
            mapRef.current = Geovisto.createMap(props);

            drawTimer = setTimeout(() => {
                mapRef.current.draw(
                    props.config ??
                        Geovisto.getMapConfigManagerFactory().default({})
                );
            }, 0);

            helpRef.current = true;

        } else {

            if (props.id == 'my-geovisto-map') {
                redrawTimer = setTimeout(() => {
                mapRef.current.redraw(
                    props.config ?? Geovisto.getMapConfigManagerFactory().default({}), props);
                }, 0);
            }
        } 

        // ignoring for base 
        if (props.id == 'my-geovisto-map') {
            startTimer();
        } else {
            clearTimeout(typingTimer);
        }

        return () => {
            clearTimeout(typingTimer);
            clearTimeout(drawTimer);
            clearTimeout(redrawTimer);
        }
    }, [props.geoData, props.config, props.data]);


    return (
        <div
            id={props.id ?? "my-geovisto-map"}
            className="geovisto-map"
        />
    );
});

export default ReactGeovistoMap;