**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeovistoMap

# Class: GeovistoMap

Representation of map wrapper which handles map layers, sidebar and other tools

## Author

Jiri Hynek

## Extends

- [`MapObject`](MapObject.md)

## Implements

- [`IMap`](../interfaces/IMap.md)

## Constructors

### new GeovistoMap()

> **new GeovistoMap**(`props`): [`GeovistoMap`](GeovistoMap.md)

Initializes object.

#### Parameters

• **props**: [`IMapProps`](../type-aliases/IMapProps.md)

#### Returns

[`GeovistoMap`](GeovistoMap.md)

#### Overrides

[`MapObject`](MapObject.md).[`constructor`](MapObject.md#constructors)

#### Source

[model/internal/map/GeovistoMap.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L41)

## Methods

### create()

> `protected` **create**(): `null` \| `HTMLElement`

This function creates Geovisto map - it creates map container, leaflet map and tools.

#### Returns

`null` \| `HTMLElement`

#### Source

[model/internal/map/GeovistoMap.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L207)

***

### createDefaults()

> **createDefaults**(): [`IMapDefaults`](../interfaces/IMapDefaults.md)

It creates new defaults of the object.

#### Returns

[`IMapDefaults`](../interfaces/IMapDefaults.md)

#### Overrides

[`MapObject`](MapObject.md).[`createDefaults`](MapObject.md#createdefaults)

#### Source

[model/internal/map/GeovistoMap.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L62)

***

### createMap()

> `protected` **createMap**(): `Map`

Creates the leaflet-based map with respect to the configuration.

#### Returns

`Map`

#### Source

[model/internal/map/GeovistoMap.ts:253](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L253)

***

### createMapContainer()

> `protected` **createMapContainer**(): `null` \| `HTMLElement`

This function creates the map container.

#### Returns

`null` \| `HTMLElement`

#### Source

[model/internal/map/GeovistoMap.ts:225](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L225)

***

### createState()

> **createState**(): [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>

It creates new state if the object.

#### Returns

[`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>

#### Overrides

[`MapObject`](MapObject.md).[`createState`](MapObject.md#createstate)

#### Source

[model/internal/map/GeovistoMap.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L76)

***

### createTools()

> `protected` **createTools**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

This function creates map tools.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Source

[model/internal/map/GeovistoMap.ts:282](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L282)

***

### draw()

> **draw**(`configManager`): `null` \| `HTMLElement`

The function draws a new map.

#### Parameters

• **configManager**: [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Returns

`null` \| `HTMLElement`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`draw`](../interfaces/IMap.md#draw)

#### Source

[model/internal/map/GeovistoMap.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L83)

***

### export()

> **export**(): `Record`\<`string`, `unknown`\>

It exports the serialized representation of the current state of the map.

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`export`](../interfaces/IMap.md#export)

#### Source

[model/internal/map/GeovistoMap.ts:200](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L200)

***

### getContainerClass()

> `protected` **getContainerClass**(): `string`

It returns class of the map container.

#### Returns

`string`

#### Source

[model/internal/map/GeovistoMap.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L246)

***

### getContainerId()

> `protected` **getContainerId**(): `string`

It returns ID of the map container.

#### Returns

`string`

#### Source

[model/internal/map/GeovistoMap.ts:239](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L239)

***

### getDefaults()

> **getDefaults**(): [`IMapDefaults`](../interfaces/IMapDefaults.md)

It returns object defaults as the map defaults.

#### Returns

[`IMapDefaults`](../interfaces/IMapDefaults.md)

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`getDefaults`](../interfaces/IMap.md#getdefaults)

#### Overrides

[`MapObject`](MapObject.md).[`getDefaults`](MapObject.md#getdefaults)

#### Source

[model/internal/map/GeovistoMap.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L55)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`getId`](../interfaces/IMap.md#getid)

#### Inherited from

[`MapObject`](MapObject.md).[`getId`](MapObject.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMapAttribution()

> `protected` **getMapAttribution**(): `string`

It returns the map attribution.

This function can be overriden;

#### Returns

`string`

#### Source

[model/internal/map/GeovistoMap.ts:275](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L275)

***

### getProps()

> **getProps**(): [`IMapProps`](../type-aliases/IMapProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`IMapProps`](../type-aliases/IMapProps.md)

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`getProps`](../interfaces/IMap.md#getprops)

#### Overrides

[`MapObject`](MapObject.md).[`getProps`](MapObject.md#getprops)

#### Source

[model/internal/map/GeovistoMap.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L48)

***

### getState()

> **getState**(): [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>

It returns object state as the map state.

#### Returns

[`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`getState`](../interfaces/IMap.md#getstate)

#### Overrides

[`MapObject`](MapObject.md).[`getState`](MapObject.md#getstate)

#### Source

[model/internal/map/GeovistoMap.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L69)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`getType`](../interfaces/IMap.md#gettype)

#### Inherited from

[`MapObject`](MapObject.md).[`getType`](MapObject.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### initialize()

> **initialize**(`initProps`): `this`

It resets the state to the initial state.

#### Parameters

• **initProps**: [`IMapInitProps`](../type-aliases/IMapInitProps.md)

#### Returns

`this`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`initialize`](../interfaces/IMap.md#initialize)

#### Overrides

[`MapObject`](MapObject.md).[`initialize`](MapObject.md#initialize)

#### Source

[model/internal/map/GeovistoMap.ts:119](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L119)

***

### redraw()

> **redraw**(`configManager`, `props`?): `null` \| `HTMLElement`

This function redraws the current map.

#### Parameters

• **configManager**: [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

• **props?**: [`IMapProps`](../type-aliases/IMapProps.md)

#### Returns

`null` \| `HTMLElement`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`redraw`](../interfaces/IMap.md#redraw)

#### Source

[model/internal/map/GeovistoMap.ts:94](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L94)

***

### registerToolAPI()

> `protected` **registerToolAPI**(`tool`): `null` \| [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)

Help function which register a generic tool API.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`null` \| [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)

#### Source

[model/internal/map/GeovistoMap.ts:184](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L184)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapObject`](MapObject.md).[`setProps`](MapObject.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### updateCurrentData()

> **updateCurrentData**(`data`, `source`, `animateOptions`?): `void`

It updates current data and invokes notifies listeners.

#### Parameters

• **data**: [`IMapData`](../type-aliases/IMapData.md)

• **source**: [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

of the change

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`updateCurrentData`](../interfaces/IMap.md#updatecurrentdata)

#### Source

[model/internal/map/GeovistoMap.ts:331](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L331)

***

### updateData()

> **updateData**(`dataManager`): `void`

It updates data and notifies listeners.

#### Parameters

• **dataManager**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Returns

`void`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`updateData`](../interfaces/IMap.md#updatedata)

#### Source

[model/internal/map/GeovistoMap.ts:297](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L297)

***

### updateGeoData()

> **updateGeoData**(`geoDataManager`): `void`

It updates geo data and notifies listeners.

#### Parameters

• **geoDataManager**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Returns

`void`

#### Implementation of

[`IMap`](../interfaces/IMap.md).[`updateGeoData`](../interfaces/IMap.md#updategeodata)

#### Source

[model/internal/map/GeovistoMap.ts:313](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMap.ts#L313)
