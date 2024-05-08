// Geovisto
import { IMap, IMapConfigManager, IMapProps, IMapTemplates, IMapGlobals, IMapDataManager, IGeoDataManager, IMapToolsManager } from "geovisto";

/**
 * This type provides the specification of the map props model.
 *
 * @author Jiri Hynek
 * @author Iva Utikalova
 */
interface IReactGeovistoMapProps { 
    id?: string;
    templates?: IMapTemplates;
    globals?: IMapGlobals;
    data?: IMapDataManager;
    geoData?: IGeoDataManager;
    tools?: IMapToolsManager;
    config?: IMapConfigManager;
    ref?: React.RefObject<any>;
    getEdit?: any;
    callback?: any;
    currentEdit?: any;
};

export default IReactGeovistoMapProps;
