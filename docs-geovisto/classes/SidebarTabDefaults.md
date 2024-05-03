**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarTabDefaults

# Class: SidebarTabDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapObjectDefaults`](MapObjectDefaults.md)

## Implements

- [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

## Constructors

### new SidebarTabDefaults()

> **new SidebarTabDefaults**(): [`SidebarTabDefaults`](SidebarTabDefaults.md)

#### Returns

[`SidebarTabDefaults`](SidebarTabDefaults.md)

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

> **getConfig**(): [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

It returns the default config.

#### Returns

[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getConfig`](../interfaces/ISidebarTabDefaults.md#getconfig)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getConfig`](MapObjectDefaults.md#getconfig)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L18)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the sidebar tab.

#### Returns

`string`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getIcon`](../interfaces/ISidebarTabDefaults.md#geticon)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L49)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getId`](../interfaces/ISidebarTabDefaults.md#getid)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getId`](MapObjectDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getName()

> **getName**(): `string`

It returns name of the sidebar tab.

#### Returns

`string`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getName`](../interfaces/ISidebarTabDefaults.md#getname)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L42)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getProps`](../interfaces/ISidebarTabDefaults.md#getprops)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getProps`](MapObjectDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the sidebar tab.

#### Returns

`string`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`getType`](../interfaces/ISidebarTabDefaults.md#gettype)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getType`](MapObjectDefaults.md#gettype)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L28)

***

### hasCheckButton()

> **hasCheckButton**(): `boolean`

It returns a logical value whether the sidebar tab contains a check button used to enable/disable the tool.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`hasCheckButton`](../interfaces/ISidebarTabDefaults.md#hascheckbutton)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L56)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the default value whether the sidebar tab is enabled.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md).[`isEnabled`](../interfaces/ISidebarTabDefaults.md#isenabled)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L35)
