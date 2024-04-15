[geovisto-map](../README.md) / [Exports](../modules.md) / GeovistoMapState

# Class: GeovistoMapState

This class manages state of the map.
It wraps the state since the map can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectState`](MapObjectState.md)

  ↳ **`GeovistoMapState`**

## Implements

- [`IMapState`](../interfaces/IMapState.md)

## Table of contents

### Constructors

- [constructor](GeovistoMapState.md#constructor)

### Properties

- [data](GeovistoMapState.md#data)
- [eventManager](GeovistoMapState.md#eventmanager)
- [geoDataManager](GeovistoMapState.md#geodatamanager)
- [leafletMap](GeovistoMapState.md#leafletmap)
- [mapCenter](GeovistoMapState.md#mapcenter)
- [mapConfig](GeovistoMapState.md#mapconfig)
- [mapData](GeovistoMapState.md#mapdata)
- [mapStructure](GeovistoMapState.md#mapstructure)
- [toolTemplates](GeovistoMapState.md#tooltemplates)
- [tools](GeovistoMapState.md#tools)
- [toolsAPI](GeovistoMapState.md#toolsapi)
- [zoom](GeovistoMapState.md#zoom)

### Methods

- [deserialize](GeovistoMapState.md#deserialize)
- [getCurrentData](GeovistoMapState.md#getcurrentdata)
- [getEventManager](GeovistoMapState.md#geteventmanager)
- [getGeoDataManager](GeovistoMapState.md#getgeodatamanager)
- [getId](GeovistoMapState.md#getid)
- [getInitialMapCenter](GeovistoMapState.md#getinitialmapcenter)
- [getInitialMapStructure](GeovistoMapState.md#getinitialmapstructure)
- [getInitialZoom](GeovistoMapState.md#getinitialzoom)
- [getLeafletMap](GeovistoMapState.md#getleafletmap)
- [getMapConfig](GeovistoMapState.md#getmapconfig)
- [getMapData](GeovistoMapState.md#getmapdata)
- [getMapObject](GeovistoMapState.md#getmapobject)
- [getToolTemplates](GeovistoMapState.md#gettooltemplates)
- [getTools](GeovistoMapState.md#gettools)
- [getToolsAPI](GeovistoMapState.md#gettoolsapi)
- [getType](GeovistoMapState.md#gettype)
- [initialize](GeovistoMapState.md#initialize)
- [serialize](GeovistoMapState.md#serialize)
- [setCurrentData](GeovistoMapState.md#setcurrentdata)
- [setEventManager](GeovistoMapState.md#seteventmanager)
- [setGeoDataManager](GeovistoMapState.md#setgeodatamanager)
- [setId](GeovistoMapState.md#setid)
- [setInitialMapCenter](GeovistoMapState.md#setinitialmapcenter)
- [setInitialMapStructure](GeovistoMapState.md#setinitialmapstructure)
- [setInitialZoom](GeovistoMapState.md#setinitialzoom)
- [setLeafletMap](GeovistoMapState.md#setleafletmap)
- [setMapConfig](GeovistoMapState.md#setmapconfig)
- [setMapData](GeovistoMapState.md#setmapdata)
- [setToolTemplates](GeovistoMapState.md#settooltemplates)
- [setTools](GeovistoMapState.md#settools)

## Constructors

### constructor

• **new GeovistoMapState**(`map`): [`GeovistoMapState`](GeovistoMapState.md)

It initializes a map state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`GeovistoMapState`](GeovistoMapState.md)

#### Overrides

[MapObjectState](MapObjectState.md).[constructor](MapObjectState.md#constructor)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L45)

## Properties

### data

• `Private` **data**: [`IMapData`](../modules.md#imapdata)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L32)

___

### eventManager

• `Private` **eventManager**: [`IMapEventManager`](../interfaces/IMapEventManager.md)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L27)

___

### geoDataManager

• `Private` **geoDataManager**: [`IGeoDataManager`](../modules.md#igeodatamanager)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L34)

___

### leafletMap

• `Private` `Optional` **leafletMap**: `Map`

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L28)

___

### mapCenter

• `Private` **mapCenter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L36)

___

### mapConfig

• `Private` **mapConfig**: [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L33)

___

### mapData

• `Private` **mapData**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L31)

___

### mapStructure

• `Private` **mapStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxBounds` | [[`number`, `number`], [`number`, `number`]] |
| `maxZoom` | `number` |

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L37)

___

### toolTemplates

• `Private` **toolTemplates**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L30)

___

### tools

• `Private` **tools**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L29)

___

### toolsAPI

• `Private` **toolsAPI**: `Record`\<`string`, () => [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L38)

___

### zoom

• `Private` **zoom**: `number`

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L35)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

It takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IMapConfig`](../modules.md#imapconfig) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[deserialize](../interfaces/IMapState.md#deserialize)

#### Overrides

[MapObjectState](MapObjectState.md).[deserialize](MapObjectState.md#deserialize)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L92)

___

### getCurrentData

▸ **getCurrentData**(): [`IMapData`](../modules.md#imapdata)

It returns current data (might be filtered).

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getCurrentData](../interfaces/IMapState.md#getcurrentdata)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:224](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L224)

___

### getEventManager

▸ **getEventManager**(): [`IMapEventManager`](../interfaces/IMapEventManager.md)

It returns the map event manager.

#### Returns

[`IMapEventManager`](../interfaces/IMapEventManager.md)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getEventManager](../interfaces/IMapState.md#geteventmanager)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:134](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L134)

___

### getGeoDataManager

▸ **getGeoDataManager**(): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns the geo data manager.

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getGeoDataManager](../interfaces/IMapState.md#getgeodatamanager)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:256](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L256)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getId](../interfaces/IMapState.md#getid)

#### Inherited from

[MapObjectState](MapObjectState.md).[getId](MapObjectState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getInitialMapCenter](../interfaces/IMapState.md#getinitialmapcenter)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:290](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L290)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getInitialMapStructure](../interfaces/IMapState.md#getinitialmapstructure)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:310](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L310)

___

### getInitialZoom

▸ **getInitialZoom**(): `number`

It returns the initial zoom level.

#### Returns

`number`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getInitialZoom](../interfaces/IMapState.md#getinitialzoom)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:272](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L272)

___

### getLeafletMap

▸ **getLeafletMap**(): `undefined` \| `Map`

It returns the Leaflet map.

#### Returns

`undefined` \| `Map`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getLeafletMap](../interfaces/IMapState.md#getleafletmap)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:157](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L157)

___

### getMapConfig

▸ **getMapConfig**(): [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

It returns the map config manager.

#### Returns

[`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getMapConfig](../interfaces/IMapState.md#getmapconfig)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:240](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L240)

___

### getMapData

▸ **getMapData**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns the map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getMapData](../interfaces/IMapState.md#getmapdata)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:206](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L206)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapObjectState](MapObjectState.md).[getMapObject](MapObjectState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getToolTemplates

▸ **getToolTemplates**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns the tool manager providing tool templates.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getToolTemplates](../interfaces/IMapState.md#gettooltemplates)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:173](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L173)

___

### getTools

▸ **getTools**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns tools manager providing tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getTools](../interfaces/IMapState.md#gettools)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:189](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L189)

___

### getToolsAPI

▸ **getToolsAPI**(): `Record`\<`string`, () => [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the map tools API.

#### Returns

`Record`\<`string`, () => [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getToolsAPI](../interfaces/IMapState.md#gettoolsapi)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:150](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L150)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[getType](../interfaces/IMapState.md#gettype)

#### Inherited from

[MapObjectState](MapObjectState.md).[getType](MapObjectState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IMapDefaults`](../interfaces/IMapDefaults.md) |
| `props` | [`IMapProps`](../modules.md#imapprops) |
| `initProps` | [`IMapInitProps`](../modules.md#imapinitprops) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[initialize](../interfaces/IMapState.md#initialize)

#### Overrides

[MapObjectState](MapObjectState.md).[initialize](MapObjectState.md#initialize)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L59)

___

### serialize

▸ **serialize**(`defaults`): [`IMapConfig`](../modules.md#imapconfig)

It serializes the map state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IMapDefaults`](../interfaces/IMapDefaults.md) |

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Implementation of

[IMapState](../interfaces/IMapState.md).[serialize](../interfaces/IMapState.md#serialize)

#### Overrides

[MapObjectState](MapObjectState.md).[serialize](MapObjectState.md#serialize)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L105)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setCurrentData](../interfaces/IMapState.md#setcurrentdata)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:233](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L233)

___

### setEventManager

▸ **setEventManager**(`eventManager`): `void`

It returns the map event manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventManager` | [`IMapEventManager`](../interfaces/IMapEventManager.md) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setEventManager](../interfaces/IMapState.md#seteventmanager)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L143)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setGeoDataManager](../interfaces/IMapState.md#setgeodatamanager)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:265](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L265)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setId](../interfaces/IMapState.md#setid)

#### Inherited from

[MapObjectState](MapObjectState.md).[setId](MapObjectState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setInitialMapCenter](../interfaces/IMapState.md#setinitialmapcenter)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:301](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L301)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setInitialMapStructure](../interfaces/IMapState.md#setinitialmapstructure)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:321](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L321)

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

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setInitialZoom](../interfaces/IMapState.md#setinitialzoom)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:281](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L281)

___

### setLeafletMap

▸ **setLeafletMap**(`map`): `void`

It returns the Leaflet map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setLeafletMap](../interfaces/IMapState.md#setleafletmap)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:166](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L166)

___

### setMapConfig

▸ **setMapConfig**(`mapConfig`): `void`

It sets the map config manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfig` | [`IMapConfigManager`](../interfaces/IMapConfigManager.md) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setMapConfig](../interfaces/IMapState.md#setmapconfig)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:249](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L249)

___

### setMapData

▸ **setMapData**(`mapData`): `void`

It sets the map data manager.
note: It also updates the current data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapData` | [`IMapDataManager`](../interfaces/IMapDataManager.md) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setMapData](../interfaces/IMapState.md#setmapdata)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:216](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L216)

___

### setToolTemplates

▸ **setToolTemplates**(`toolTemplates`): `void`

It sets tool templates providing tool templates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toolTemplates` | [`IMapToolsManager`](../interfaces/IMapToolsManager.md) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setToolTemplates](../interfaces/IMapState.md#settooltemplates)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:182](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L182)

___

### setTools

▸ **setTools**(`tools`): `void`

It sets tools manager providing tools.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tools` | [`IMapToolsManager`](../interfaces/IMapToolsManager.md) |

#### Returns

`void`

#### Implementation of

[IMapState](../interfaces/IMapState.md).[setTools](../interfaces/IMapState.md#settools)

#### Defined in

[src/model/internal/map/GeovistoMapState.ts:198](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapState.ts#L198)
