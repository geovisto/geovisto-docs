// React
import React, { useEffect, useRef } from "react";

// Geovisto
import { Geovisto, IMap, IMapProps } from "geovisto";
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
 
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            // create new Geovisto map
            mapRef.current = Geovisto.createMap(props);

            // draw map with the current config
            // timeout is set to fix crashing with leaflet
            setTimeout(() => {
                mapRef.current.draw(
                    props.config ??
                        Geovisto.getMapConfigManagerFactory().default({})
                );
            }, 0);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current = undefined;
            }
        };
    }, []);


    return (
        <div
            id={props.id ?? "my-geovisto-map"}
            className="geovisto-map"
            ref={mapContainerRef}
        />
    );
};

export default ReactGeovistoMap;
