[geovisto-map](../README.md) / [Exports](../modules.md) / IMapToolsManager

# Interface: IMapToolsManager

This interface declares functions for using tools.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapObjectsManager`](IMapObjectsManager.md)\<[`IMapTool`](IMapTool.md)\>

  ↳ **`IMapToolsManager`**

## Implemented by

- [`MapToolsManager`](../classes/MapToolsManager.md)

## Table of contents

### Methods

- [add](IMapToolsManager.md#add)
- [copy](IMapToolsManager.md#copy)
- [getAll](IMapToolsManager.md#getall)
- [getById](IMapToolsManager.md#getbyid)
- [getByType](IMapToolsManager.md#getbytype)
- [getIds](IMapToolsManager.md#getids)
- [getTypes](IMapToolsManager.md#gettypes)
- [isEmpty](IMapToolsManager.md#isempty)
- [remove](IMapToolsManager.md#remove)
- [removeById](IMapToolsManager.md#removebyid)
- [size](IMapToolsManager.md#size)

## Methods

### add

▸ **add**(`object`): `void`

It adds object to the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[add](IMapObjectsManager.md#add)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L30)

___

### copy

▸ **copy**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns copy of the tools manager with copies of tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Defined in

[src/model/types/tool/IMapToolsManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolsManager.ts#L14)

___

### getAll

▸ **getAll**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

The function returns available map objects.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[getAll](IMapObjectsManager.md#getall)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L13)

___

### getById

▸ **getById**(`id`): `undefined` \| [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

The function returns map object of given unique identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[getById](IMapObjectsManager.md#getbyid)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L68)

___

### getByType

▸ **getByType**(`type`): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

The function returns map objects of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[getByType](IMapObjectsManager.md#getbytype)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L61)

___

### getIds

▸ **getIds**(): `string`[]

Help function which returns the list of object string identifiers.

#### Returns

`string`[]

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[getIds](IMapObjectsManager.md#getids)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L54)

___

### getTypes

▸ **getTypes**(): `string`[]

Help function which returns the list of object string types.

#### Returns

`string`[]

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[getTypes](IMapObjectsManager.md#gettypes)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L49)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[isEmpty](IMapObjectsManager.md#isempty)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L23)

___

### remove

▸ **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[remove](IMapObjectsManager.md#remove)

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

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[removeById](IMapObjectsManager.md#removebyid)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L44)

___

### size

▸ **size**(): `number`

The function returns the number of objects.

#### Returns

`number`

#### Inherited from

[IMapObjectsManager](IMapObjectsManager.md).[size](IMapObjectsManager.md#size)

#### Defined in

[src/model/types/object/IMapObjectsManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectsManager.ts#L18)
