[geovisto-map](../README.md) / [Exports](../modules.md) / IMapState

# Interface: IMapState\<TProps, TDefaults, TConfig\>

This interface declares the state of the map.
It wraps the state since the map can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMapProps`](../modules.md#imapprops) = [`IMapProps`](../modules.md#imapprops) |
| `TDefaults` | extends [`IMapDefaults`](IMapDefaults.md) = [`IMapDefaults`](IMapDefaults.md) |
| `TConfig` | extends [`IMapConfig`](../modules.md#imapconfig) = [`IMapConfig`](../modules.md#imapconfig) |

## Hierarchy

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

  ↳ **`IMapState`**

## Implemented by

- [`GeovistoMapState`](../classes/GeovistoMapState.md)

## Table of contents

### Methods

- [deserialize](IMapState.md#deserialize)
- [getCurrentData](IMapState.md#getcurrentdata)
- [getEventManager](IMapState.md#geteventmanager)
- [getGeoDataManager](IMapState.md#getgeodatamanager)
- [getId](IMapState.md#getid)
- [getInitialMapCenter](IMapState.md#getinitialmapcenter)
- [getInitialMapStructure](IMapState.md#getinitialmapstructure)
- [getInitialZoom](IMapState.md#getinitialzoom)
- [getLeafletMap](IMapState.md#getleafletmap)
- [getMapConfig](IMapState.md#getmapconfig)
- [getMapData](IMapState.md#getmapdata)
- [getToolTemplates](IMapState.md#gettooltemplates)
- [getTools](IMapState.md#gettools)
- [getToolsAPI](IMapState.md#gettoolsapi)
- [getType](IMapState.md#gettype)
- [initialize](IMapState.md#initialize)
- [serialize](IMapState.md#serialize)
- [setCurrentData](IMapState.md#setcurrentdata)
- [setEventManager](IMapState.md#seteventmanager)
- [setGeoDataManager](IMapState.md#setgeodatamanager)
- [setId](IMapState.md#setid)
- [setInitialMapCenter](IMapState.md#setinitialmapcenter)
- [setInitialMapStructure](IMapState.md#setinitialmapstructure)
- [setInitialZoom](IMapState.md#setinitialzoom)
- [setLeafletMap](IMapState.md#setleafletmap)
- [setMapConfig](IMapState.md#setmapconfig)
- [setMapData](IMapState.md#setmapdata)
- [setToolTemplates](IMapState.md#settooltemplates)
- [setTools](IMapState.md#settools)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`void`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[deserialize](IMapObjectState.md#deserialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L32)

___

### getCurrentData

▸ **getCurrentData**(): [`IMapData`](../modules.md#imapdata)

It returns current data (might be filtered).

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Defined in

[src/model/types/map/IMapState.ts:103](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L103)

___

### getEventManager

▸ **getEventManager**(): [`IMapEventManager`](IMapEventManager.md)

It returns the map event manager.

#### Returns

[`IMapEventManager`](IMapEventManager.md)

#### Defined in

[src/model/types/map/IMapState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L49)

___

### getGeoDataManager

▸ **getGeoDataManager**(): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns the geo data manager.

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Defined in

[src/model/types/map/IMapState.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L127)

___

### getId

▸ **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[getId](IMapObjectState.md#getid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L49)

___

### getInitialMapCenter

▸ **getInitialMapCenter**(): `Object`

It returns the initial map center.

TODO: remove from state (use defaults only)

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[src/model/types/map/IMapState.ts:153](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L153)

___

### getInitialMapStructure

▸ **getInitialMapStructure**(): `Object`

It returns the initial structure.

TODO: remove from state (use defaults only)

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxBounds` | [[`number`, `number`], [`number`, `number`]] |
| `maxZoom` | `number` |

#### Defined in

[src/model/types/map/IMapState.ts:169](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L169)

___

### getInitialZoom

▸ **getInitialZoom**(): `number`

It returns the initial zoom level.

#### Returns

`number`

#### Defined in

[src/model/types/map/IMapState.ts:139](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L139)

___

### getLeafletMap

▸ **getLeafletMap**(): `undefined` \| `Map`

It returns the Leaflet map.

#### Returns

`undefined` \| `Map`

#### Defined in

[src/model/types/map/IMapState.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L37)

___

### getMapConfig

▸ **getMapConfig**(): [`IMapConfigManager`](IMapConfigManager.md)

It returns the map config manager.

#### Returns

[`IMapConfigManager`](IMapConfigManager.md)

#### Defined in

[src/model/types/map/IMapState.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L115)

___

### getMapData

▸ **getMapData**(): [`IMapDataManager`](IMapDataManager.md)

It returns the map data manager.

#### Returns

[`IMapDataManager`](IMapDataManager.md)

#### Defined in

[src/model/types/map/IMapState.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L90)

___

### getToolTemplates

▸ **getToolTemplates**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns the tool manager providing tool templates.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Defined in

[src/model/types/map/IMapState.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L66)

___

### getTools

▸ **getTools**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns tools manager providing tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Defined in

[src/model/types/map/IMapState.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L78)

___

### getToolsAPI

▸ **getToolsAPI**(): `Record`\<`string`, () => [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the map tools API.

#### Returns

`Record`\<`string`, () => [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/model/types/map/IMapState.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L61)

___

### getType

▸ **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[getType](IMapObjectState.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L44)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `TDefaults` |
| `props` | `TProps` |
| `initProps` | [`IMapInitProps`](../modules.md#imapinitprops)\<`TConfig`\> |

#### Returns

`void`

#### Overrides

[IMapObjectState](IMapObjectState.md).[initialize](IMapObjectState.md#initialize)

#### Defined in

[src/model/types/map/IMapState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L32)

___

### serialize

▸ **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `TDefaults` |

#### Returns

`TConfig`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[serialize](IMapObjectState.md#serialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L39)

___

### setCurrentData

▸ **setCurrentData**(`data`): `void`

It sets current data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMapData`](../modules.md#imapdata) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L110)

___

### setEventManager

▸ **setEventManager**(`eventManager`): `void`

It returns the map event manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventManager` | [`IMapEventManager`](IMapEventManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L56)

___

### setGeoDataManager

▸ **setGeoDataManager**(`geoDataManager`): `void`

It sets a geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataManager` | [`IGeoDataManager`](../modules.md#igeodatamanager) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:134](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L134)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[setId](IMapObjectState.md#setid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L57)

___

### setInitialMapCenter

▸ **setInitialMapCenter**(`mapCenter`): `void`

It sets initial map center.

TODO: remove from state (use defaults only)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapCenter` | `Object` |
| `mapCenter.lat` | `number` |
| `mapCenter.lng` | `number` |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:162](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L162)

___

### setInitialMapStructure

▸ **setInitialMapStructure**(`mapStructure`): `void`

It sets initial map structure.

TODO: remove from state (use defaults only)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapStructure` | `Object` |
| `mapStructure.maxBounds` | [[`number`, `number`], [`number`, `number`]] |
| `mapStructure.maxZoom` | `number` |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:178](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L178)

___

### setInitialZoom

▸ **setInitialZoom**(`zoom`): `void`

It sets initial zoom level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:146](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L146)

___

### setLeafletMap

▸ **setLeafletMap**(`map`): `void`

It sets the Leaflet map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L44)

___

### setMapConfig

▸ **setMapConfig**(`mapConfigManager`): `void`

It sets a map config manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfigManager` | [`IMapConfigManager`](IMapConfigManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L122)

___

### setMapData

▸ **setMapData**(`mapData`): `void`

It sets the map data manager.
note: It also updates the current data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapData` | [`IMapDataManager`](IMapDataManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L98)

___

### setToolTemplates

▸ **setToolTemplates**(`toolTemplates`): `void`

It sets the tool templates providing tool templates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toolTemplates` | [`IMapToolsManager`](IMapToolsManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L73)

___

### setTools

▸ **setTools**(`tools`): `void`

It sets tools manager providing tools.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tools` | [`IMapToolsManager`](IMapToolsManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMapState.ts:85](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapState.ts#L85)
