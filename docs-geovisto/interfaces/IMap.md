**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMap

# Interface: IMap\<TProps, TDefaults, TState, TConfig, TInitProps\>

Declaration of map wrapper which handles map inputs (data, props, config), map tools and other map objects.

## Author

Jiri Hynek

## Extends

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

## Type parameters

• **TProps** *extends* [`IMapProps`](../type-aliases/IMapProps.md) = [`IMapProps`](../type-aliases/IMapProps.md)

• **TDefaults** *extends* [`IMapDefaults`](IMapDefaults.md) = [`IMapDefaults`](IMapDefaults.md)

• **TState** *extends* [`IMapState`](IMapState.md) = [`IMapState`](IMapState.md)

• **TConfig** *extends* [`IMapConfig`](../type-aliases/IMapConfig.md) = [`IMapConfig`](../type-aliases/IMapConfig.md)

• **TInitProps** *extends* [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<`TConfig`\> = [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<`TConfig`\>

## Methods

### draw()

> **draw**(`mapConfig`): `null` \| `HTMLElement`

The function draws a new map.

#### Parameters

• **mapConfig**: [`IMapConfigManager`](IMapConfigManager.md)

#### Returns

`null` \| `HTMLElement`

#### Source

[model/types/map/IMap.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L28)

***

### export()

> **export**(): `Record`\<`string`, `unknown`\>

It exports the serialized representation of the current state of the map.

#### Returns

`Record`\<`string`, `unknown`\>

#### Source

[model/types/map/IMap.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L38)

***

### getDefaults()

> **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getDefaults`](IMapObject.md#getdefaults)

#### Source

[model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L27)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getId`](IMapObject.md#getid)

#### Source

[model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L42)

***

### getProps()

> **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getProps`](IMapObject.md#getprops)

#### Source

[model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L22)

***

### getState()

> **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getState`](IMapObject.md#getstate)

#### Source

[model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L32)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getType`](IMapObject.md#gettype)

#### Source

[model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L37)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: `TInitProps`

#### Returns

`this`

#### Inherited from

[`IMapObject`](IMapObject.md).[`initialize`](IMapObject.md#initialize)

#### Source

[model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L53)

***

### redraw()

> **redraw**(`mapConfig`, `props`?): `null` \| `HTMLElement`

This function redraws the current map.

#### Parameters

• **mapConfig**: [`IMapConfigManager`](IMapConfigManager.md)

• **props?**: [`IMapProps`](../type-aliases/IMapProps.md)

#### Returns

`null` \| `HTMLElement`

#### Source

[model/types/map/IMap.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L33)

***

### updateCurrentData()

> **updateCurrentData**(`data`, `source`, `animateOptions`?): `void`

It updates current data and notifies listeners.

#### Parameters

• **data**: [`IMapData`](../type-aliases/IMapData.md)

• **source**: [`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

of the change

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[model/types/map/IMap.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L61)

***

### updateData()

> **updateData**(`dataManager`): `void`

It updates data and notifies listeners.

#### Parameters

• **dataManager**: [`IMapDataManager`](IMapDataManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMap.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L45)

***

### updateGeoData()

> **updateGeoData**(`geoDataManager`): `void`

It updates geo data and notifies listeners.

#### Parameters

• **geoDataManager**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Returns

`void`

#### Source

[model/types/map/IMap.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMap.ts#L52)
