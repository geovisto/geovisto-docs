[geovisto-map](../README.md) / [Exports](../modules.md) / GeovistoMap

# Class: GeovistoMap

Representation of map wrapper which handles map layers, sidebar and other tools

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObject`](MapObject.md)

  ↳ **`GeovistoMap`**

## Implements

- [`IMap`](../interfaces/IMap.md)

## Table of contents

### Constructors

- [constructor](GeovistoMap.md#constructor)

### Methods

- [create](GeovistoMap.md#create)
- [createDefaults](GeovistoMap.md#createdefaults)
- [createMap](GeovistoMap.md#createmap)
- [createMapContainer](GeovistoMap.md#createmapcontainer)
- [createState](GeovistoMap.md#createstate)
- [createTools](GeovistoMap.md#createtools)
- [draw](GeovistoMap.md#draw)
- [export](GeovistoMap.md#export)
- [getContainerClass](GeovistoMap.md#getcontainerclass)
- [getContainerId](GeovistoMap.md#getcontainerid)
- [getDefaults](GeovistoMap.md#getdefaults)
- [getId](GeovistoMap.md#getid)
- [getMapAttribution](GeovistoMap.md#getmapattribution)
- [getProps](GeovistoMap.md#getprops)
- [getState](GeovistoMap.md#getstate)
- [getType](GeovistoMap.md#gettype)
- [initialize](GeovistoMap.md#initialize)
- [redraw](GeovistoMap.md#redraw)
- [registerToolAPI](GeovistoMap.md#registertoolapi)
- [setProps](GeovistoMap.md#setprops)
- [updateCurrentData](GeovistoMap.md#updatecurrentdata)
- [updateData](GeovistoMap.md#updatedata)
- [updateGeoData](GeovistoMap.md#updategeodata)

## Constructors

### constructor

• **new GeovistoMap**(`props`): [`GeovistoMap`](GeovistoMap.md)

Initializes object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapProps`](../modules.md#imapprops) |

#### Returns

[`GeovistoMap`](GeovistoMap.md)

#### Overrides

[MapObject](MapObject.md).[constructor](MapObject.md#constructor)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L41)

## Methods

### create

▸ **create**(): ``null`` \| `HTMLElement`

This function creates Geovisto map - it creates map container, leaflet map and tools.

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L207)

___

### createDefaults

▸ **createDefaults**(): [`IMapDefaults`](../interfaces/IMapDefaults.md)

It creates new defaults of the object.

#### Returns

[`IMapDefaults`](../interfaces/IMapDefaults.md)

#### Overrides

[MapObject](MapObject.md).[createDefaults](MapObject.md#createdefaults)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L62)

___

### createMap

▸ **createMap**(): `Map`

Creates the leaflet-based map with respect to the configuration.

#### Returns

`Map`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:253](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L253)

___

### createMapContainer

▸ **createMapContainer**(): ``null`` \| `HTMLElement`

This function creates the map container.

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:225](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L225)

___

### createState

▸ **createState**(): [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>

It creates new state if the object.

#### Returns

[`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>

#### Overrides

[MapObject](MapObject.md).[createState](MapObject.md#createstate)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L76)

___

### createTools

▸ **createTools**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

This function creates map tools.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

#### Defined in

[src/model/internal/map/GeovistoMap.ts:282](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L282)

___

### draw

▸ **draw**(`configManager`): ``null`` \| `HTMLElement`

The function draws a new map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configManager` | [`IMapConfigManager`](../interfaces/IMapConfigManager.md) |

#### Returns

``null`` \| `HTMLElement`

#### Implementation of

[IMap](../interfaces/IMap.md).[draw](../interfaces/IMap.md#draw)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L83)

___

### export

▸ **export**(): `Record`\<`string`, `unknown`\>

It exports the serialized representation of the current state of the map.

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[IMap](../interfaces/IMap.md).[export](../interfaces/IMap.md#export)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:200](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L200)

___

### getContainerClass

▸ **getContainerClass**(): `string`

It returns class of the map container.

#### Returns

`string`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:246](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L246)

___

### getContainerId

▸ **getContainerId**(): `string`

It returns ID of the map container.

#### Returns

`string`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:239](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L239)

___

### getDefaults

▸ **getDefaults**(): [`IMapDefaults`](../interfaces/IMapDefaults.md)

It returns object defaults as the map defaults.

#### Returns

[`IMapDefaults`](../interfaces/IMapDefaults.md)

#### Implementation of

[IMap](../interfaces/IMap.md).[getDefaults](../interfaces/IMap.md#getdefaults)

#### Overrides

[MapObject](MapObject.md).[getDefaults](MapObject.md#getdefaults)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L55)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IMap](../interfaces/IMap.md).[getId](../interfaces/IMap.md#getid)

#### Inherited from

[MapObject](MapObject.md).[getId](MapObject.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getMapAttribution

▸ **getMapAttribution**(): `string`

It returns the map attribution.

This function can be overriden;

#### Returns

`string`

#### Defined in

[src/model/internal/map/GeovistoMap.ts:275](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L275)

___

### getProps

▸ **getProps**(): [`IMapProps`](../modules.md#imapprops)

Help function which returns the props given by the programmer.

#### Returns

[`IMapProps`](../modules.md#imapprops)

#### Implementation of

[IMap](../interfaces/IMap.md).[getProps](../interfaces/IMap.md#getprops)

#### Overrides

[MapObject](MapObject.md).[getProps](MapObject.md#getprops)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L48)

___

### getState

▸ **getState**(): [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>

It returns object state as the map state.

#### Returns

[`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>

#### Implementation of

[IMap](../interfaces/IMap.md).[getState](../interfaces/IMap.md#getstate)

#### Overrides

[MapObject](MapObject.md).[getState](MapObject.md#getstate)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L69)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IMap](../interfaces/IMap.md).[getType](../interfaces/IMap.md#gettype)

#### Inherited from

[MapObject](MapObject.md).[getType](MapObject.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### initialize

▸ **initialize**(`initProps`): `this`

It resets the state to the initial state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapInitProps`](../modules.md#imapinitprops) |

#### Returns

`this`

#### Implementation of

[IMap](../interfaces/IMap.md).[initialize](../interfaces/IMap.md#initialize)

#### Overrides

[MapObject](MapObject.md).[initialize](MapObject.md#initialize)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:119](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L119)

___

### redraw

▸ **redraw**(`configManager`, `props?`): ``null`` \| `HTMLElement`

This function redraws the current map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configManager` | [`IMapConfigManager`](../interfaces/IMapConfigManager.md) |
| `props?` | [`IMapProps`](../modules.md#imapprops) |

#### Returns

``null`` \| `HTMLElement`

#### Implementation of

[IMap](../interfaces/IMap.md).[redraw](../interfaces/IMap.md#redraw)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:94](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L94)

___

### registerToolAPI

▸ **registerToolAPI**(`tool`): ``null`` \| [`IMapToolAPI`](../modules.md#imaptoolapi)

Help function which register a generic tool API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

``null`` \| [`IMapToolAPI`](../modules.md#imaptoolapi)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:184](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L184)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Inherited from

[MapObject](MapObject.md).[setProps](MapObject.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### updateCurrentData

▸ **updateCurrentData**(`data`, `source`, `animateOptions?`): `void`

It updates current data and invokes notifies listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IMapData`](../modules.md#imapdata) |  |
| `source` | [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> | of the change |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |  |

#### Returns

`void`

#### Implementation of

[IMap](../interfaces/IMap.md).[updateCurrentData](../interfaces/IMap.md#updatecurrentdata)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:331](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L331)

___

### updateData

▸ **updateData**(`dataManager`): `void`

It updates data and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataManager` | [`IMapDataManager`](../interfaces/IMapDataManager.md) |

#### Returns

`void`

#### Implementation of

[IMap](../interfaces/IMap.md).[updateData](../interfaces/IMap.md#updatedata)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:297](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L297)

___

### updateGeoData

▸ **updateGeoData**(`geoDataManager`): `void`

It updates geo data and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataManager` | [`IGeoDataManager`](../modules.md#igeodatamanager) |

#### Returns

`void`

#### Implementation of

[IMap](../interfaces/IMap.md).[updateGeoData](../interfaces/IMap.md#updategeodata)

#### Defined in

[src/model/internal/map/GeovistoMap.ts:313](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMap.ts#L313)
