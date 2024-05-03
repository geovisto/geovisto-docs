**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapState

# Interface: IMapState\<TProps, TDefaults, TConfig\>

This interface declares the state of the map.
It wraps the state since the map can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

## Type parameters

• **TProps** *extends* [`IMapProps`](../type-aliases/IMapProps.md) = [`IMapProps`](../type-aliases/IMapProps.md)

• **TDefaults** *extends* [`IMapDefaults`](IMapDefaults.md) = [`IMapDefaults`](IMapDefaults.md)

• **TConfig** *extends* [`IMapConfig`](../type-aliases/IMapConfig.md) = [`IMapConfig`](../type-aliases/IMapConfig.md)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`deserialize`](IMapObjectState.md#deserialize)

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### getCurrentData()

> **getCurrentData**(): [`IMapData`](../type-aliases/IMapData.md)

It returns current data (might be filtered).

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Source

[model/types/map/IMapState.ts:103](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L103)

***

### getEventManager()

> **getEventManager**(): [`IMapEventManager`](IMapEventManager.md)

It returns the map event manager.

#### Returns

[`IMapEventManager`](IMapEventManager.md)

#### Source

[model/types/map/IMapState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L49)

***

### getGeoDataManager()

> **getGeoDataManager**(): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns the geo data manager.

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Source

[model/types/map/IMapState.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L127)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`getId`](IMapObjectState.md#getid)

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

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

#### Source

[model/types/map/IMapState.ts:153](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L153)

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

#### Source

[model/types/map/IMapState.ts:169](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L169)

***

### getInitialZoom()

> **getInitialZoom**(): `number`

It returns the initial zoom level.

#### Returns

`number`

#### Source

[model/types/map/IMapState.ts:139](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L139)

***

### getLeafletMap()

> **getLeafletMap**(): `any`

It returns the Leaflet map.

#### Returns

`any`

#### Source

[model/types/map/IMapState.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L37)

***

### getMapConfig()

> **getMapConfig**(): [`IMapConfigManager`](IMapConfigManager.md)

It returns the map config manager.

#### Returns

[`IMapConfigManager`](IMapConfigManager.md)

#### Source

[model/types/map/IMapState.ts:115](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L115)

***

### getMapData()

> **getMapData**(): [`IMapDataManager`](IMapDataManager.md)

It returns the map data manager.

#### Returns

[`IMapDataManager`](IMapDataManager.md)

#### Source

[model/types/map/IMapState.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L90)

***

### getToolTemplates()

> **getToolTemplates**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns the tool manager providing tool templates.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Source

[model/types/map/IMapState.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L66)

***

### getTools()

> **getTools**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns tools manager providing tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Source

[model/types/map/IMapState.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L78)

***

### getToolsAPI()

> **getToolsAPI**(): `Record`\<`string`, () => [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the map tools API.

#### Returns

`Record`\<`string`, () => [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[model/types/map/IMapState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L61)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`getType`](IMapObjectState.md#gettype)

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<`TConfig`\>

#### Returns

`void`

#### Overrides

[`IMapObjectState`](IMapObjectState.md).[`initialize`](IMapObjectState.md#initialize)

#### Source

[model/types/map/IMapState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L32)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`serialize`](IMapObjectState.md#serialize)

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setCurrentData()

> **setCurrentData**(`data`): `void`

It sets current data.

#### Parameters

• **data**: [`IMapData`](../type-aliases/IMapData.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L110)

***

### setEventManager()

> **setEventManager**(`eventManager`): `void`

It returns the map event manager.

#### Parameters

• **eventManager**: [`IMapEventManager`](IMapEventManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L56)

***

### setGeoDataManager()

> **setGeoDataManager**(`geoDataManager`): `void`

It sets a geo data manager.

#### Parameters

• **geoDataManager**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:134](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L134)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`setId`](IMapObjectState.md#setid)

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)

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

#### Source

[model/types/map/IMapState.ts:162](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L162)

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

#### Source

[model/types/map/IMapState.ts:178](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L178)

***

### setInitialZoom()

> **setInitialZoom**(`zoom`): `void`

It sets initial zoom level.

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:146](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L146)

***

### setLeafletMap()

> **setLeafletMap**(`map`): `void`

It sets the Leaflet map.

#### Parameters

• **map**: `Map`

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L44)

***

### setMapConfig()

> **setMapConfig**(`mapConfigManager`): `void`

It sets a map config manager.

#### Parameters

• **mapConfigManager**: [`IMapConfigManager`](IMapConfigManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:122](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L122)

***

### setMapData()

> **setMapData**(`mapData`): `void`

It sets the map data manager.
note: It also updates the current data.

#### Parameters

• **mapData**: [`IMapDataManager`](IMapDataManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L98)

***

### setToolTemplates()

> **setToolTemplates**(`toolTemplates`): `void`

It sets the tool templates providing tool templates.

#### Parameters

• **toolTemplates**: [`IMapToolsManager`](IMapToolsManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:73](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L73)

***

### setTools()

> **setTools**(`tools`): `void`

It sets tools manager providing tools.

#### Parameters

• **tools**: [`IMapToolsManager`](IMapToolsManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMapState.ts:85](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapState.ts#L85)
