// Geovisto
import { IMap, IMapConfigManager, IMapProps, IMapTemplates, IMapGlobals, IMapDataManager, IGeoDataManager, IMapToolsManager } from "geovisto";

/**
 * This type provides the specification of the map props model.
 *
 * @author Jiri Hynek
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
};

export default IReactGeovistoMapProps;
