// React
import React, { useEffect, useRef } from "react";

// Geovisto
import { Geovisto, 
        IMap, 
        LayerToolRenderType, 
        IMapEventListener, 
        GeoDataManagerChangeEvent, 
        GeoDataChangeEvent, 
        DataManagerChangeEvent, 
        DataChangeEvent,
        ToolEnabledEvent,
        LayerToolRenderedEvent,
        LayerToolDimensionChangeEvent 
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

    //listener for events in map
    const listener: IMapEventListener = {
        handleEvent(event) {
            console.log("handler");
            //console.log(event);
            console.log(event.getType());
            switch (event.getType()) {
                case GeoDataManagerChangeEvent.TYPE():
                    console.log(GeoDataManagerChangeEvent.TYPE());
                    break;
                case GeoDataChangeEvent.TYPE():
                    console.log(GeoDataChangeEvent.TYPE());
                    break;
                case DataManagerChangeEvent.TYPE():
                    console.log(DataManagerChangeEvent.TYPE());
                    break;
                case DataChangeEvent.TYPE():
                    console.log(DataChangeEvent.TYPE());
                    break;
                case ToolEnabledEvent.TYPE():
                    console.log(ToolEnabledEvent.TYPE());
                    break;
                case LayerToolRenderedEvent.TYPE():
                    console.log(LayerToolRenderedEvent.TYPE());
                    break;
                case LayerToolDimensionChangeEvent.TYPE():
                    console.log(LayerToolDimensionChangeEvent.TYPE());
                    break;
            
                //case this.getSelectionTool()?.getChangeEventType():
                    //console.log(this.getSelectionTool()?.getChangeEventType());
                    //this.render(LayerToolRenderType.STYLE);
                    //break;
                //case this.getThemesTool()?.getChangeEventType():
                    //console.log(this.getThemesTool()?.getChangeEventType());
                    //mapRef.current.getState().
                    //this.updateTheme((<IThemesToolEvent> event).getChangedObject());
                    //this.render(LayerToolRenderType.STYLE);
                    //break;
        
                default:
                    break;
            }
            
            //getting config
            const config = mapRef.current.export(); 
            console.log(config);
            (document.getElementById('config') as HTMLInputElement).value = JSON.stringify(config, null, 4);
        }   
    };

    
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // create new Geovisto map
        mapRef.current = Geovisto.createMap(props);

        if (!helpRef.current) {

            // adding listener
            //mapRef.current.getState().getEventManager().addEventListener(listener);

            // draw map with the current config
            // timeout is set to fix crashing with leaflet
            setTimeout(() => {
                mapRef.current.draw(
                    props.config ??
                        Geovisto.getMapConfigManagerFactory().default({})
                );
            }, 0);

            helpRef.current = true;

        } else {
            console.log("redraw");
            setTimeout(() => {
                mapRef.current.redraw(
                    props.config ?? Geovisto.getMapConfigManagerFactory().default({}), props);
            }, 0);
        } 
        console.log("mapRef");
        console.log(mapRef.current);
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