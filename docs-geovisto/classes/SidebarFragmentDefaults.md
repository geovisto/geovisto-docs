**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarFragmentDefaults

# Class: SidebarFragmentDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapObjectDefaults`](MapObjectDefaults.md)

## Implements

- [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

## Constructors

### new SidebarFragmentDefaults()

> **new SidebarFragmentDefaults**(): [`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)

#### Returns

[`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`constructor`](MapObjectDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`idString`](MapObjectDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`id`](MapObjectDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`generateId`](MapObjectDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

It returns the default config.

#### Returns

[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

#### Implementation of

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md).[`getConfig`](../interfaces/ISidebarFragmentDefaults.md#getconfig)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getConfig`](MapObjectDefaults.md#getconfig)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L18)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md).[`getId`](../interfaces/ISidebarFragmentDefaults.md#getid)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getId`](MapObjectDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md).[`getProps`](../interfaces/ISidebarFragmentDefaults.md#getprops)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getProps`](MapObjectDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the sidebar fragment.

#### Returns

`string`

#### Implementation of

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md).[`getType`](../interfaces/ISidebarFragmentDefaults.md#gettype)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getType`](MapObjectDefaults.md#gettype)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L28)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns a logical value whether the sidebar fragment is enabled.

#### Returns

`boolean`

#### Implementation of

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md).[`isEnabled`](../interfaces/ISidebarFragmentDefaults.md#isenabled)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L35)
