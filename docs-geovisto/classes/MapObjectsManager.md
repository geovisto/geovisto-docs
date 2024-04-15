[geovisto-map](../README.md) / [Exports](../modules.md) / MapObjectsManager

# Class: MapObjectsManager\<T\>

This class provide functions for using map objects which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- **`MapObjectsManager`**

  ↳ [`MapToolsManager`](MapToolsManager.md)

## Implements

- [`IMapObjectsManager`](../interfaces/IMapObjectsManager.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](MapObjectsManager.md#constructor)

### Properties

- [objects](MapObjectsManager.md#objects)

### Methods

- [add](MapObjectsManager.md#add)
- [getAll](MapObjectsManager.md#getall)
- [getById](MapObjectsManager.md#getbyid)
- [getByType](MapObjectsManager.md#getbytype)
- [getIds](MapObjectsManager.md#getids)
- [getTypes](MapObjectsManager.md#gettypes)
- [isEmpty](MapObjectsManager.md#isempty)
- [remove](MapObjectsManager.md#remove)
- [removeById](MapObjectsManager.md#removebyid)
- [size](MapObjectsManager.md#size)

## Constructors

### constructor

• **new MapObjectsManager**\<`T`\>(`objects`): [`MapObjectsManager`](MapObjectsManager.md)\<`T`\>

It initializes a map objects manager.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | `undefined` \| `T`[] |

#### Returns

[`MapObjectsManager`](MapObjectsManager.md)\<`T`\>

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L16)

## Properties

### objects

• `Private` **objects**: `T`[]

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L11)

## Methods

### add

▸ **add**(`object`): `void`

It adds object to the list of objects.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`void`

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[add](../interfaces/IMapObjectsManager.md#add)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L48)

___

### getAll

▸ **getAll**(): `T`[]

The function returns available map objects.

#### Returns

`T`[]

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[getAll](../interfaces/IMapObjectsManager.md#getall)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L23)

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

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[getById](../interfaces/IMapObjectsManager.md#getbyid)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L123)

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

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[getByType](../interfaces/IMapObjectsManager.md#getbytype)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L105)

___

### getIds

▸ **getIds**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[getIds](../interfaces/IMapObjectsManager.md#getids)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L89)

___

### getTypes

▸ **getTypes**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[getTypes](../interfaces/IMapObjectsManager.md#gettypes)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L75)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[isEmpty](../interfaces/IMapObjectsManager.md#isempty)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L37)

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

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[remove](../interfaces/IMapObjectsManager.md#remove)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L57)

___

### removeById

▸ **removeById**(`id`): `void`

It removes object from the list of objects.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[removeById](../interfaces/IMapObjectsManager.md#removebyid)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L68)

___

### size

▸ **size**(): `number`

The function returns number of objects.

#### Returns

`number`

#### Implementation of

[IMapObjectsManager](../interfaces/IMapObjectsManager.md).[size](../interfaces/IMapObjectsManager.md#size)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L30)
