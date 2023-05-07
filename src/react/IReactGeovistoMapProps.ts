// Geovisto
import { IMap, IMapConfigManager, IMapProps } from "geovisto";

/**
 * This type provides the specification of the map props model.
 *
 * @author Jiri Hynek
 */
type IReactGeovistoMapProps = IMapProps & {
    config?: IMapConfigManager;
    ref?: React.MutableRefObject<IMap>;
};
export default IReactGeovistoMapProps;
