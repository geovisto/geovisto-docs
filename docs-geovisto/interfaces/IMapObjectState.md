[geovisto-map](../README.md) / [Exports](../modules.md) / IMapObjectState

# Interface: IMapObjectState\<TProps, TDefaults, TConfig, TInitProps\>

This interface declares the state of a map object.
It wraps the state since the map object can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMapObjectProps`](../modules.md#imapobjectprops) = [`IMapObjectProps`](../modules.md#imapobjectprops) |
| `TDefaults` | extends [`IMapObjectDefaults`](IMapObjectDefaults.md) = [`IMapObjectDefaults`](IMapObjectDefaults.md) |
| `TConfig` | extends [`IMapObjectConfig`](../modules.md#imapobjectconfig) = [`IMapObjectConfig`](../modules.md#imapobjectconfig) |
| `TInitProps` | extends [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<`TConfig`\> = [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<`TConfig`\> |

## Hierarchy

- **`IMapObjectState`**

  ↳ [`IMapState`](IMapState.md)

  ↳ [`IMapToolState`](IMapToolState.md)

  ↳ [`ISidebarFragmentState`](ISidebarFragmentState.md)

  ↳ [`ISidebarTabState`](ISidebarTabState.md)

## Implemented by

- [`MapObjectState`](../classes/MapObjectState.md)

## Table of contents

### Methods

- [deserialize](IMapObjectState.md#deserialize)
- [getId](IMapObjectState.md#getid)
- [getType](IMapObjectState.md#gettype)
- [initialize](IMapObjectState.md#initialize)
- [serialize](IMapObjectState.md#serialize)
- [setId](IMapObjectState.md#setid)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L32)

___

### getId

▸ **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L49)

___

### getType

▸ **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L44)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `TDefaults` |
| `props` | `TProps` |
| `initProps` | `TInitProps` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L25)

___

### serialize

▸ **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `TDefaults` |

#### Returns

`TConfig`

#### Defined in

[src/model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L39)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L57)
