**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HierarchyToolState

# Class: HierarchyToolState

State of hierarchy tool

## Author

Vojtěch Malý

## Author

Jiri Hynek

## Extends

- [`MapToolState`](MapToolState.md)

## Implements

- [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)

## Constructors

### new HierarchyToolState()

> **new HierarchyToolState**(`tool`): [`HierarchyToolState`](HierarchyToolState.md)

#### Parameters

• **tool**: [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

#### Returns

[`HierarchyToolState`](HierarchyToolState.md)

#### Overrides

[`MapToolState`](MapToolState.md).[`constructor`](MapToolState.md#constructors)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L24)

## Properties

### hierarchies

> `private` **hierarchies**: [`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L22)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`deserialize`](../interfaces/IHierarchyToolState.md#deserialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`deserialize`](MapToolState.md#deserialize)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L35)

***

### getHierarchies()

> **getHierarchies**(): [`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

It returns the list of hierarchy specififactions.

#### Returns

[`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getHierarchies`](../interfaces/IHierarchyToolState.md#gethierarchies)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L54)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getIcon`](../interfaces/IHierarchyToolState.md#geticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getIcon`](MapToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getId`](../interfaces/IHierarchyToolState.md#getid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getId`](MapToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getLabel`](../interfaces/IHierarchyToolState.md#getlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getLabel`](MapToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getMap`](../interfaces/IHierarchyToolState.md#getmap)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMap`](MapToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMapObject`](MapToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`getType`](../interfaces/IHierarchyToolState.md#gettype)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getType`](MapToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

• **props**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md)\>

#### Returns

`void`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`initialize`](../interfaces/IHierarchyToolState.md#initialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`initialize`](MapToolState.md#initialize)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L28)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`isEnabled`](../interfaces/IHierarchyToolState.md#isenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`isEnabled`](MapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`serialize`](../interfaces/IHierarchyToolState.md#serialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`serialize`](MapToolState.md#serialize)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L43)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`setEnabled`](../interfaces/IHierarchyToolState.md#setenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setEnabled`](MapToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setHierarchies()

> **setHierarchies**(`hierachies`): `void`

It sets the list of hierarchy specififactions.

#### Parameters

• **hierachies**: [`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

#### Returns

`void`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`setHierarchies`](../interfaces/IHierarchyToolState.md#sethierarchies)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolState.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L63)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`setIcon`](../interfaces/IHierarchyToolState.md#seticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setIcon`](MapToolState.md#seticon)

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

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`setId`](../interfaces/IHierarchyToolState.md#setid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setId`](MapToolState.md#setid)

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

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md).[`setLabel`](../interfaces/IHierarchyToolState.md#setlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setLabel`](MapToolState.md#setlabel)

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

#### Inherited from

[`MapToolState`](MapToolState.md).[`setMap`](MapToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)
