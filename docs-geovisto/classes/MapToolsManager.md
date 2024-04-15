[geovisto-map](../README.md) / [Exports](../modules.md) / MapToolsManager

# Class: MapToolsManager

This class provide functions for using tools.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectsManager`](MapObjectsManager.md)\<[`IMapTool`](../interfaces/IMapTool.md)\>

  ↳ **`MapToolsManager`**

## Implements

- [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

## Table of contents

### Constructors

- [constructor](MapToolsManager.md#constructor)

### Methods

- [add](MapToolsManager.md#add)
- [copy](MapToolsManager.md#copy)
- [getAll](MapToolsManager.md#getall)
- [getById](MapToolsManager.md#getbyid)
- [getByType](MapToolsManager.md#getbytype)
- [getIds](MapToolsManager.md#getids)
- [getTypes](MapToolsManager.md#gettypes)
- [isEmpty](MapToolsManager.md#isempty)
- [remove](MapToolsManager.md#remove)
- [removeById](MapToolsManager.md#removebyid)
- [size](MapToolsManager.md#size)

## Constructors

### constructor

• **new MapToolsManager**(`tools`): [`MapToolsManager`](MapToolsManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tools` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[] |

#### Returns

[`MapToolsManager`](MapToolsManager.md)

#### Overrides

[MapObjectsManager](MapObjectsManager.md).[constructor](MapObjectsManager.md#constructor)

#### Defined in

[src/model/internal/tool/MapToolsManager.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolsManager.ts#L12)

## Methods

### add

▸ **add**(`object`): `void`

It adds object to the list of objects.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[add](../interfaces/IMapToolsManager.md#add)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[add](MapObjectsManager.md#add)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L48)

___

### copy

▸ **copy**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns copy of the tools manager with copies of tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[copy](../interfaces/IMapToolsManager.md#copy)

#### Defined in

[src/model/internal/tool/MapToolsManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolsManager.ts#L19)

___

### getAll

▸ **getAll**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

The function returns available map objects.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[getAll](../interfaces/IMapToolsManager.md#getall)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[getAll](MapObjectsManager.md#getall)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L23)

___

### getById

▸ **getById**(`id`): `undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

The function returns map object of given unique identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[getById](../interfaces/IMapToolsManager.md#getbyid)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[getById](MapObjectsManager.md#getbyid)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L123)

___

### getByType

▸ **getByType**(`type`): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

The function returns map objects of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>[]

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[getByType](../interfaces/IMapToolsManager.md#getbytype)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[getByType](MapObjectsManager.md#getbytype)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L105)

___

### getIds

▸ **getIds**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[getIds](../interfaces/IMapToolsManager.md#getids)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[getIds](MapObjectsManager.md#getids)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L89)

___

### getTypes

▸ **getTypes**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[getTypes](../interfaces/IMapToolsManager.md#gettypes)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[getTypes](MapObjectsManager.md#gettypes)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L75)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[isEmpty](../interfaces/IMapToolsManager.md#isempty)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[isEmpty](MapObjectsManager.md#isempty)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L37)

___

### remove

▸ **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[remove](../interfaces/IMapToolsManager.md#remove)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[remove](MapObjectsManager.md#remove)

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

[IMapToolsManager](../interfaces/IMapToolsManager.md).[removeById](../interfaces/IMapToolsManager.md#removebyid)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[removeById](MapObjectsManager.md#removebyid)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L68)

___

### size

▸ **size**(): `number`

The function returns number of objects.

#### Returns

`number`

#### Implementation of

[IMapToolsManager](../interfaces/IMapToolsManager.md).[size](../interfaces/IMapToolsManager.md#size)

#### Inherited from

[MapObjectsManager](MapObjectsManager.md).[size](MapObjectsManager.md#size)

#### Defined in

[src/model/internal/object/MapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectsManager.ts#L30)
