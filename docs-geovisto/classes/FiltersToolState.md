**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FiltersToolState

# Class: FiltersToolState

This class provide functions for using filters.

## Author

Jiri Hynek

## Extends

- [`MapToolState`](MapToolState.md)

## Implements

- [`IFiltersToolState`](../interfaces/IFiltersToolState.md)

## Constructors

### new FiltersToolState()

> **new FiltersToolState**(`tool`): [`FiltersToolState`](FiltersToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Returns

[`FiltersToolState`](FiltersToolState.md)

#### Overrides

[`MapToolState`](MapToolState.md).[`constructor`](MapToolState.md#constructors)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L31)

## Properties

### manager

> `private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L24)

***

### rules

> `private` **rules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L23)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`deserialize`](../interfaces/IFiltersToolState.md#deserialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`deserialize`](MapToolState.md#deserialize)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L54)

***

### getFilterRules()

> **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns the filterRules property of the tool state.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getFilterRules`](../interfaces/IFiltersToolState.md#getfilterrules)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L127)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

It returns filter manager

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getFiltersManager`](../interfaces/IFiltersToolState.md#getfiltersmanager)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L111)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getIcon`](../interfaces/IFiltersToolState.md#geticon)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getId`](../interfaces/IFiltersToolState.md#getid)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getLabel`](../interfaces/IFiltersToolState.md#getlabel)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getMap`](../interfaces/IFiltersToolState.md#getmap)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`getType`](../interfaces/IFiltersToolState.md#gettype)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getType`](MapToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

• **props**: [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`initialize`](../interfaces/IFiltersToolState.md#initialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`initialize`](MapToolState.md#initialize)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L38)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`isEnabled`](../interfaces/IFiltersToolState.md#isenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`isEnabled`](MapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

#### Returns

[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`serialize`](../interfaces/IFiltersToolState.md#serialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`serialize`](MapToolState.md#serialize)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L88)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setEnabled`](../interfaces/IFiltersToolState.md#setenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setEnabled`](MapToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setFilterRules()

> **setFilterRules**(`filterRules`): `void`

It sets the filterRules property of the tool state.

#### Parameters

• **filterRules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setFilterRules`](../interfaces/IFiltersToolState.md#setfilterrules)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L136)

***

### setFiltersManager()

> **setFiltersManager**(`manager`): `void`

It updates filter manager.

#### Parameters

• **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setFiltersManager`](../interfaces/IFiltersToolState.md#setfiltersmanager)

#### Source

[tools/filters/model/internal/tool/FiltersToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolState.ts#L120)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setIcon`](../interfaces/IFiltersToolState.md#seticon)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setId`](../interfaces/IFiltersToolState.md#setid)

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

[`IFiltersToolState`](../interfaces/IFiltersToolState.md).[`setLabel`](../interfaces/IFiltersToolState.md#setlabel)

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
