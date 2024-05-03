**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapToolState

# Class: MapToolState

This class manages state of the tool.
It wraps the state since the tool can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`MapObjectState`](MapObjectState.md)

## Implements

- [`IMapToolState`](../interfaces/IMapToolState.md)

## Constructors

### new MapToolState()

> **new MapToolState**(`tool`): [`MapToolState`](MapToolState.md)

It creates a map object state.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

[`MapToolState`](MapToolState.md)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`constructor`](MapObjectState.md#constructors)

#### Source

[model/internal/tool/MapToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L31)

## Properties

### enabled

> `private` **enabled**: `boolean`

#### Source

[model/internal/tool/MapToolState.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L17)

***

### icon

> `private` **icon**: `string`

#### Source

[model/internal/tool/MapToolState.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L19)

***

### label

> `private` **label**: `string`

#### Source

[model/internal/tool/MapToolState.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L18)

***

### map

> `private` **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

map is set during the tool initialization

#### Source

[model/internal/tool/MapToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L24)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`deserialize`](../interfaces/IMapToolState.md#deserialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`deserialize`](MapObjectState.md#deserialize)

#### Source

[model/internal/tool/MapToolState.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L64)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`getIcon`](../interfaces/IMapToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`getId`](../interfaces/IMapToolState.md#getid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getId`](MapObjectState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`getLabel`](../interfaces/IMapToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`getMap`](../interfaces/IMapToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

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

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`getType`](../interfaces/IMapToolState.md#gettype)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getType`](MapObjectState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

• **defaults**: [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

• **props**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`initialize`](../interfaces/IMapToolState.md#initialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`initialize`](MapObjectState.md#initialize)

#### Source

[model/internal/tool/MapToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L42)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`isEnabled`](../interfaces/IMapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

The method serializes the tool state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`serialize`](../interfaces/IMapToolState.md#serialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`serialize`](MapObjectState.md#serialize)

#### Source

[model/internal/tool/MapToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L76)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`setEnabled`](../interfaces/IMapToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`setIcon`](../interfaces/IMapToolState.md#seticon)

#### Source

[model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L129)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`setId`](../interfaces/IMapToolState.md#setid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`setId`](MapObjectState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

[`IMapToolState`](../interfaces/IMapToolState.md).[`setLabel`](../interfaces/IMapToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setMap()

> `protected` **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`void`

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)
