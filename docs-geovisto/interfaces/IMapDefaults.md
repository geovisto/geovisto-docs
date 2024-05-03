**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDefaults

# Interface: IMapDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

## Methods

### getConfig()

> **getConfig**(): [`IMapConfig`](../type-aliases/IMapConfig.md)

It returns default map config.

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Overrides

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getConfig`](IMapObjectDefaults.md#getconfig)

#### Source

[model/types/map/IMapDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L26)

***

### getConfigManager()

> **getConfigManager**(): [`IMapConfigManager`](IMapConfigManager.md)

It returns default map config manager.

#### Returns

[`IMapConfigManager`](IMapConfigManager.md)

#### Source

[model/types/map/IMapDefaults.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L21)

***

### getEventManager()

> **getEventManager**(): [`IMapEventManager`](IMapEventManager.md)

It returns a default map event manager.

#### Returns

[`IMapEventManager`](IMapEventManager.md)

#### Source

[model/types/map/IMapDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L31)

***

### getGeoDataManager()

> **getGeoDataManager**(): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns a default geo data manager.

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Source

[model/types/map/IMapDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L56)

***

### getGlobals()

> **getGlobals**(): [`IMapGlobals`](IMapGlobals.md)

It returns default global state variables.

#### Returns

[`IMapGlobals`](IMapGlobals.md)

#### Source

[model/types/map/IMapDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L61)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getId`](IMapObjectDefaults.md#getid)

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getMapCenter()

> **getMapCenter**(): `object`

It returns default center coordinates in Leaflet map.

#### Returns

`object`

##### lat

> **lat**: `number`

##### lng

> **lng**: `number`

#### Source

[model/types/map/IMapDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L71)

***

### getMapData()

> **getMapData**(): [`IMapDataManager`](IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](IMapDataManager.md)

#### Source

[model/types/map/IMapDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L51)

***

### getMapStructure()

> **getMapStructure**(): `object`

It returns the map structure defined with respect to the leaflet library.

#### Returns

`object`

##### maxBounds

> **maxBounds**: [[`number`, `number`], [`number`, `number`]]

##### maxZoom

> **maxZoom**: `number`

#### Source

[model/types/map/IMapDefaults.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L76)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getProps`](IMapObjectDefaults.md#getprops)

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getTemplates()

> **getTemplates**(): [`IMapTemplates`](IMapTemplates.md)

It returns default map templates.

#### Returns

[`IMapTemplates`](IMapTemplates.md)

#### Source

[model/types/map/IMapDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L36)

***

### getToolTemplates()

> **getToolTemplates**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns a default managers providing templates.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Source

[model/types/map/IMapDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L41)

***

### getTools()

> **getTools**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Source

[model/types/map/IMapDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L46)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getType`](IMapObjectDefaults.md#gettype)

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### getZoom()

> **getZoom**(): `number`

It returns default zoom level.

#### Returns

`number`

#### Source

[model/types/map/IMapDefaults.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapDefaults.ts#L66)
