**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapToolsManager

# Interface: IMapToolsManager

This interface declares functions for using tools.

## Author

Jiri Hynek

## Extends

- [`IMapObjectsManager`](IMapObjectsManager.md)\<[`IMapTool`](IMapTool.md)\>

## Methods

### add()

> **add**(`object`): `void`

It adds object to the list of objects.

#### Parameters

• **object**: [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`add`](IMapObjectsManager.md#add)

#### Source

[model/types/object/IMapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L30)

***

### copy()

> **copy**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns copy of the tools manager with copies of tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Source

[model/types/tool/IMapToolsManager.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolsManager.ts#L14)

***

### getAll()

> **getAll**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

The function returns available map objects.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`getAll`](IMapObjectsManager.md#getall)

#### Source

[model/types/object/IMapObjectsManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L13)

***

### getById()

> **getById**(`id`): `undefined` \| [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

The function returns map object of given unique identifier.

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`getById`](IMapObjectsManager.md#getbyid)

#### Source

[model/types/object/IMapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L68)

***

### getByType()

> **getByType**(`type`): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

The function returns map objects of given type.

#### Parameters

• **type**: `string`

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`getByType`](IMapObjectsManager.md#getbytype)

#### Source

[model/types/object/IMapObjectsManager.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L61)

***

### getIds()

> **getIds**(): `string`[]

Help function which returns the list of object string identifiers.

#### Returns

`string`[]

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`getIds`](IMapObjectsManager.md#getids)

#### Source

[model/types/object/IMapObjectsManager.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L54)

***

### getTypes()

> **getTypes**(): `string`[]

Help function which returns the list of object string types.

#### Returns

`string`[]

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`getTypes`](IMapObjectsManager.md#gettypes)

#### Source

[model/types/object/IMapObjectsManager.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L49)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`isEmpty`](IMapObjectsManager.md#isempty)

#### Source

[model/types/object/IMapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L23)

***

### remove()

> **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

• **object**: [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`remove`](IMapObjectsManager.md#remove)

#### Source

[model/types/object/IMapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L37)

***

### removeById()

> **removeById**(`id`): `void`

It removes object of the given id from the list of objects.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`removeById`](IMapObjectsManager.md#removebyid)

#### Source

[model/types/object/IMapObjectsManager.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L44)

***

### size()

> **size**(): `number`

The function returns the number of objects.

#### Returns

`number`

#### Inherited from

[`IMapObjectsManager`](IMapObjectsManager.md).[`size`](IMapObjectsManager.md#size)

#### Source

[model/types/object/IMapObjectsManager.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L18)
