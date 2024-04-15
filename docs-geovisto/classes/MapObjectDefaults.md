[geovisto-map](../README.md) / [Exports](../modules.md) / MapObjectDefaults

# Class: MapObjectDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- **`MapObjectDefaults`**

  ↳ [`GeovistoMapDefaults`](GeovistoMapDefaults.md)

  ↳ [`MapToolDefaults`](MapToolDefaults.md)

  ↳ [`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)

  ↳ [`SidebarTabDefaults`](SidebarTabDefaults.md)

## Implements

- [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)

## Table of contents

### Constructors

- [constructor](MapObjectDefaults.md#constructor)

### Properties

- [idString](MapObjectDefaults.md#idstring)
- [id](MapObjectDefaults.md#id)

### Methods

- [generateId](MapObjectDefaults.md#generateid)
- [getConfig](MapObjectDefaults.md#getconfig)
- [getId](MapObjectDefaults.md#getid)
- [getProps](MapObjectDefaults.md#getprops)
- [getType](MapObjectDefaults.md#gettype)

## Constructors

### constructor

• **new MapObjectDefaults**(): [`MapObjectDefaults`](MapObjectDefaults.md)

#### Returns

[`MapObjectDefaults`](MapObjectDefaults.md)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`IMapObjectConfig`](../modules.md#imapobjectconfig)

It returns a default config if no config is given.

#### Returns

[`IMapObjectConfig`](../modules.md#imapobjectconfig)

#### Implementation of

[IMapObjectDefaults](../interfaces/IMapObjectDefaults.md).[getConfig](../interfaces/IMapObjectDefaults.md#getconfig)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L27)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IMapObjectDefaults](../interfaces/IMapObjectDefaults.md).[getId](../interfaces/IMapObjectDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IMapObjectDefaults](../interfaces/IMapObjectDefaults.md).[getProps](../interfaces/IMapObjectDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool.

#### Returns

`string`

#### Implementation of

[IMapObjectDefaults](../interfaces/IMapObjectDefaults.md).[getType](../interfaces/IMapObjectDefaults.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L37)
