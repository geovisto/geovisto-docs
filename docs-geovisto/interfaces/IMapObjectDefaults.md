[geovisto-map](../README.md) / [Exports](../modules.md) / IMapObjectDefaults

# Interface: IMapObjectDefaults\<TProps, TConfig\>

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMapObjectProps`](../modules.md#imapobjectprops) = [`IMapObjectProps`](../modules.md#imapobjectprops) |
| `TConfig` | extends [`IMapObjectConfig`](../modules.md#imapobjectconfig) = [`IMapObjectConfig`](../modules.md#imapobjectconfig) |

## Hierarchy

- **`IMapObjectDefaults`**

  ↳ [`IMapDefaults`](IMapDefaults.md)

  ↳ [`IMapToolDefaults`](IMapToolDefaults.md)

  ↳ [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md)

  ↳ [`ISidebarTabDefaults`](ISidebarTabDefaults.md)

## Implemented by

- [`MapObjectDefaults`](../classes/MapObjectDefaults.md)

## Table of contents

### Methods

- [getConfig](IMapObjectDefaults.md#getconfig)
- [getId](IMapObjectDefaults.md#getid)
- [getProps](IMapObjectDefaults.md#getprops)
- [getType](IMapObjectDefaults.md#gettype)

## Methods

### getConfig

▸ **getConfig**(): `TConfig`

It returns a default config if no config is given.

#### Returns

`TConfig`

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L22)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getProps

▸ **getProps**(): `TProps`

It returns default props if no props are given.

#### Returns

`TProps`

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)
