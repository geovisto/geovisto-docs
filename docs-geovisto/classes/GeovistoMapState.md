**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeovistoMapState

# Class: GeovistoMapState

This class manages state of the map.
It wraps the state since the map can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`MapObjectState`](MapObjectState.md)

## Implements

- [`IMapState`](../interfaces/IMapState.md)

## Constructors

### new GeovistoMapState()

> **new GeovistoMapState**(`map`): [`GeovistoMapState`](GeovistoMapState.md)

It initializes a map state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`GeovistoMapState`](GeovistoMapState.md)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`constructor`](MapObjectState.md#constructors)

#### Source

[model/internal/map/GeovistoMapState.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L45)

## Properties

### data

> `private` **data**: [`IMapData`](../type-aliases/IMapData.md)

#### Source

[model/internal/map/GeovistoMapState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L32)

***

### eventManager

> `private` **eventManager**: [`IMapEventManager`](../interfaces/IMapEventManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L27)

***

### geoDataManager

> `private` **geoDataManager**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L34)

***

### leafletMap?

> `private` `optional` **leafletMap**: `any`

#### Source

[model/internal/map/GeovistoMapState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L28)

***

### mapCenter

> `private` **mapCenter**: `object`

#### lat

> **lat**: `number`

#### lng

> **lng**: `number`

#### Source

[model/internal/map/GeovistoMapState.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L36)

***

### mapConfig

> `private` **mapConfig**: [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L33)

***

### mapData

> `private` **mapData**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L31)

***

### mapStructure

> `private` **mapStructure**: `object`

#### maxBounds

> **maxBounds**: [[`number`, `number`], [`number`, `number`]]

#### maxZoom

> **maxZoom**: `number`

#### Source

[model/internal/map/GeovistoMapState.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L37)

***

### toolTemplates

> `private` **toolTemplates**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L30)

***

### tools

> `private` **tools**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Source

[model/internal/map/GeovistoMapState.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L29)

***

### toolsAPI

> `private` **toolsAPI**: `Record`\<`string`, () => [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[model/internal/map/GeovistoMapState.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L38)

***

### zoom

> `private` **zoom**: `number`

#### Source

[model/internal/map/GeovistoMapState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L35)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

It takes config and deserializes the values.

#### Parameters

• **config**: [`IMapConfig`](../type-aliases/IMapConfig.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`deserialize`](../interfaces/IMapState.md#deserialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`deserialize`](MapObjectState.md#deserialize)

#### Source

[model/internal/map/GeovistoMapState.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L92)

***

### getCurrentData()

> **getCurrentData**(): [`IMapData`](../type-aliases/IMapData.md)

It returns current data (might be filtered).

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getCurrentData`](../interfaces/IMapState.md#getcurrentdata)

#### Source

[model/internal/map/GeovistoMapState.ts:224](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L224)

***

### getEventManager()

> **getEventManager**(): [`IMapEventManager`](../interfaces/IMapEventManager.md)

It returns the map event manager.

#### Returns

[`IMapEventManager`](../interfaces/IMapEventManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getEventManager`](../interfaces/IMapState.md#geteventmanager)

#### Source

[model/internal/map/GeovistoMapState.ts:134](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L134)

***

### getGeoDataManager()

> **getGeoDataManager**(): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns the geo data manager.

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getGeoDataManager`](../interfaces/IMapState.md#getgeodatamanager)

#### Source

[model/internal/map/GeovistoMapState.ts:256](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L256)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getId`](../interfaces/IMapState.md#getid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getId`](MapObjectState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getInitialMapCenter()

> **getInitialMapCenter**(): `object`

It returns the initial map center.

TODO: remove from state (use defaults only)

#### Returns

`object`

##### lat

> **lat**: `number`

##### lng

> **lng**: `number`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getInitialMapCenter`](../interfaces/IMapState.md#getinitialmapcenter)

#### Source

[model/internal/map/GeovistoMapState.ts:290](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L290)

***

### getInitialMapStructure()

> **getInitialMapStructure**(): `object`

It returns the initial structure.

TODO: remove from state (use defaults only)

#### Returns

`object`

##### maxBounds

> **maxBounds**: [[`number`, `number`], [`number`, `number`]]

##### maxZoom

> **maxZoom**: `number`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getInitialMapStructure`](../interfaces/IMapState.md#getinitialmapstructure)

#### Source

[model/internal/map/GeovistoMapState.ts:310](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L310)

***

### getInitialZoom()

> **getInitialZoom**(): `number`

It returns the initial zoom level.

#### Returns

`number`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getInitialZoom`](../interfaces/IMapState.md#getinitialzoom)

#### Source

[model/internal/map/GeovistoMapState.ts:272](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L272)

***

### getLeafletMap()

> **getLeafletMap**(): `any`

It returns the Leaflet map.

#### Returns

`any`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getLeafletMap`](../interfaces/IMapState.md#getleafletmap)

#### Source

[model/internal/map/GeovistoMapState.ts:157](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L157)

***

### getMapConfig()

> **getMapConfig**(): [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

It returns the map config manager.

#### Returns

[`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getMapConfig`](../interfaces/IMapState.md#getmapconfig)

#### Source

[model/internal/map/GeovistoMapState.ts:240](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L240)

***

### getMapData()

> **getMapData**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns the map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getMapData`](../interfaces/IMapState.md#getmapdata)

#### Source

[model/internal/map/GeovistoMapState.ts:206](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L206)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getMapObject`](MapObjectState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getToolTemplates()

> **getToolTemplates**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns the tool manager providing tool templates.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getToolTemplates`](../interfaces/IMapState.md#gettooltemplates)

#### Source

[model/internal/map/GeovistoMapState.ts:173](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L173)

***

### getTools()

> **getTools**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns tools manager providing tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getTools`](../interfaces/IMapState.md#gettools)

#### Source

[model/internal/map/GeovistoMapState.ts:189](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L189)

***

### getToolsAPI()

> **getToolsAPI**(): `Record`\<`string`, () => [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the map tools API.

#### Returns

`Record`\<`string`, () => [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getToolsAPI`](../interfaces/IMapState.md#gettoolsapi)

#### Source

[model/internal/map/GeovistoMapState.ts:150](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L150)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`getType`](../interfaces/IMapState.md#gettype)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getType`](MapObjectState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

• **defaults**: [`IMapDefaults`](../interfaces/IMapDefaults.md)

• **props**: [`IMapProps`](../type-aliases/IMapProps.md)

• **initProps**: [`IMapInitProps`](../type-aliases/IMapInitProps.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`initialize`](../interfaces/IMapState.md#initialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`initialize`](MapObjectState.md#initialize)

#### Source

[model/internal/map/GeovistoMapState.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L59)

***

### serialize()

> **serialize**(`defaults`): [`IMapConfig`](../type-aliases/IMapConfig.md)

It serializes the map state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IMapDefaults`](../interfaces/IMapDefaults.md)

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`serialize`](../interfaces/IMapState.md#serialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`serialize`](MapObjectState.md#serialize)

#### Source

[model/internal/map/GeovistoMapState.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L105)

***

### setCurrentData()

> **setCurrentData**(`data`): `void`

It sets current data.

#### Parameters

• **data**: [`IMapData`](../type-aliases/IMapData.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setCurrentData`](../interfaces/IMapState.md#setcurrentdata)

#### Source

[model/internal/map/GeovistoMapState.ts:233](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L233)

***

### setEventManager()

> **setEventManager**(`eventManager`): `void`

It returns the map event manager.

#### Parameters

• **eventManager**: [`IMapEventManager`](../interfaces/IMapEventManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setEventManager`](../interfaces/IMapState.md#seteventmanager)

#### Source

[model/internal/map/GeovistoMapState.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L143)

***

### setGeoDataManager()

> **setGeoDataManager**(`geoDataManager`): `void`

It sets a geo data manager.

#### Parameters

• **geoDataManager**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setGeoDataManager`](../interfaces/IMapState.md#setgeodatamanager)

#### Source

[model/internal/map/GeovistoMapState.ts:265](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L265)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setId`](../interfaces/IMapState.md#setid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`setId`](MapObjectState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setInitialMapCenter()

> **setInitialMapCenter**(`mapCenter`): `void`

It sets initial map center.

TODO: remove from state (use defaults only)

#### Parameters

• **mapCenter**

• **mapCenter.lat**: `number`

• **mapCenter.lng**: `number`

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setInitialMapCenter`](../interfaces/IMapState.md#setinitialmapcenter)

#### Source

[model/internal/map/GeovistoMapState.ts:301](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L301)

***

### setInitialMapStructure()

> **setInitialMapStructure**(`mapStructure`): `void`

It sets initial map structure.

TODO: remove from state (use defaults only)

#### Parameters

• **mapStructure**

• **mapStructure.maxBounds**: [[`number`, `number`], [`number`, `number`]]

• **mapStructure.maxZoom**: `number`

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setInitialMapStructure`](../interfaces/IMapState.md#setinitialmapstructure)

#### Source

[model/internal/map/GeovistoMapState.ts:321](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L321)

***

### setInitialZoom()

> **setInitialZoom**(`zoom`): `void`

It sets initial zoom level.

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setInitialZoom`](../interfaces/IMapState.md#setinitialzoom)

#### Source

[model/internal/map/GeovistoMapState.ts:281](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L281)

***

### setLeafletMap()

> **setLeafletMap**(`map`): `void`

It returns the Leaflet map.

#### Parameters

• **map**: `Map`

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setLeafletMap`](../interfaces/IMapState.md#setleafletmap)

#### Source

[model/internal/map/GeovistoMapState.ts:166](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L166)

***

### setMapConfig()

> **setMapConfig**(`mapConfig`): `void`

It sets the map config manager.

#### Parameters

• **mapConfig**: [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setMapConfig`](../interfaces/IMapState.md#setmapconfig)

#### Source

[model/internal/map/GeovistoMapState.ts:249](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L249)

***

### setMapData()

> **setMapData**(`mapData`): `void`

It sets the map data manager.
note: It also updates the current data.

#### Parameters

• **mapData**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setMapData`](../interfaces/IMapState.md#setmapdata)

#### Source

[model/internal/map/GeovistoMapState.ts:216](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L216)

***

### setToolTemplates()

> **setToolTemplates**(`toolTemplates`): `void`

It sets tool templates providing tool templates.

#### Parameters

• **toolTemplates**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setToolTemplates`](../interfaces/IMapState.md#settooltemplates)

#### Source

[model/internal/map/GeovistoMapState.ts:182](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L182)

***

### setTools()

> **setTools**(`tools`): `void`

It sets tools manager providing tools.

#### Parameters

• **tools**: [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Returns

`void`

#### Implementation of

[`IMapState`](../interfaces/IMapState.md).[`setTools`](../interfaces/IMapState.md#settools)

#### Source

[model/internal/map/GeovistoMapState.ts:198](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapState.ts#L198)
