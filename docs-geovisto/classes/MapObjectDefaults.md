**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapObjectDefaults

# Class: MapObjectDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extended by

- [`GeovistoMapDefaults`](GeovistoMapDefaults.md)
- [`MapToolDefaults`](MapToolDefaults.md)
- [`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)
- [`SidebarTabDefaults`](SidebarTabDefaults.md)

## Implements

- [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)

## Constructors

### new MapObjectDefaults()

> **new MapObjectDefaults**(): [`MapObjectDefaults`](MapObjectDefaults.md)

#### Returns

[`MapObjectDefaults`](MapObjectDefaults.md)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### id

> `static` `protected` **id**: `number`

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)

It returns a default config if no config is given.

#### Returns

[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)

#### Implementation of

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md).[`getConfig`](../interfaces/IMapObjectDefaults.md#getconfig)

#### Source

[model/internal/object/MapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L27)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md).[`getId`](../interfaces/IMapObjectDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md).[`getProps`](../interfaces/IMapObjectDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the tool.

#### Returns

`string`

#### Implementation of

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md).[`getType`](../interfaces/IMapObjectDefaults.md#gettype)

#### Source

[model/internal/object/MapObjectDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L37)
