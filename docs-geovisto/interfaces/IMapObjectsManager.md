[geovisto-map](../README.md) / [Exports](../modules.md) / IMapObjectsManager

# Interface: IMapObjectsManager\<T\>

This interface declares functions for using map objects which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](IMapObject.md) |

## Hierarchy

- **`IMapObjectsManager`**

  ↳ [`IMapToolsManager`](IMapToolsManager.md)

## Implemented by

- [`MapObjectsManager`](../classes/MapObjectsManager.md)

## Table of contents

### Methods

- [add](IMapObjectsManager.md#add)
- [getAll](IMapObjectsManager.md#getall)
- [getById](IMapObjectsManager.md#getbyid)
- [getByType](IMapObjectsManager.md#getbytype)
- [getIds](IMapObjectsManager.md#getids)
- [getTypes](IMapObjectsManager.md#gettypes)
- [isEmpty](IMapObjectsManager.md#isempty)
- [remove](IMapObjectsManager.md#remove)
- [removeById](IMapObjectsManager.md#removebyid)
- [size](IMapObjectsManager.md#size)

## Methods

### add

▸ **add**(`object`): `void`

It adds object to the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L30)

___

### getAll

▸ **getAll**(): `T`[]

The function returns available map objects.

#### Returns

`T`[]

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L13)

___

### getById

▸ **getById**(`id`): `undefined` \| `T`

The function returns map object of given unique identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L68)

___

### getByType

▸ **getByType**(`type`): `T`[]

The function returns map objects of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`T`[]

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L61)

___

### getIds

▸ **getIds**(): `string`[]

Help function which returns the list of object string identifiers.

#### Returns

`string`[]

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L54)

___

### getTypes

▸ **getTypes**(): `string`[]

Help function which returns the list of object string types.

#### Returns

`string`[]

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L49)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L23)

___

### remove

▸ **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L37)

___

### removeById

▸ **removeById**(`id`): `void`

It removes object of the given id from the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L44)

___

### size

▸ **size**(): `number`

The function returns the number of objects.

#### Returns

`number`

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L18)
