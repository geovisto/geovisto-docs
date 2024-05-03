**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapToolsManager

# Class: MapToolsManager

This class provide functions for using tools.

## Author

Jiri Hynek

## Extends

- [`MapObjectsManager`](MapObjectsManager.md)\<[`IMapTool`](../interfaces/IMapTool.md)\>

## Implements

- [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

## Constructors

### new MapToolsManager()

> **new MapToolsManager**(`tools`): [`MapToolsManager`](MapToolsManager.md)

#### Parameters

• **tools**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Returns

[`MapToolsManager`](MapToolsManager.md)

#### Overrides

[`MapObjectsManager`](MapObjectsManager.md).[`constructor`](MapObjectsManager.md#constructors)

#### Source

[model/internal/tool/MapToolsManager.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolsManager.ts#L12)

## Methods

### add()

> **add**(`object`): `void`

It adds object to the list of objects.

Override this function.

#### Parameters

• **object**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`add`](../interfaces/IMapToolsManager.md#add)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`add`](MapObjectsManager.md#add)

#### Source

[model/internal/object/MapObjectsManager.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L48)

***

### copy()

> **copy**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns copy of the tools manager with copies of tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`copy`](../interfaces/IMapToolsManager.md#copy)

#### Source

[model/internal/tool/MapToolsManager.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolsManager.ts#L19)

***

### getAll()

> **getAll**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

The function returns available map objects.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`getAll`](../interfaces/IMapToolsManager.md#getall)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`getAll`](MapObjectsManager.md#getall)

#### Source

[model/internal/object/MapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L23)

***

### getById()

> **getById**(`id`): `undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

The function returns map object of given unique identifier.

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`getById`](../interfaces/IMapToolsManager.md#getbyid)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`getById`](MapObjectsManager.md#getbyid)

#### Source

[model/internal/object/MapObjectsManager.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L123)

***

### getByType()

> **getByType**(`type`): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

The function returns map objects of given type.

#### Parameters

• **type**: `string`

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>[]

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`getByType`](../interfaces/IMapToolsManager.md#getbytype)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`getByType`](MapObjectsManager.md#getbytype)

#### Source

[model/internal/object/MapObjectsManager.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L105)

***

### getIds()

> **getIds**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`getIds`](../interfaces/IMapToolsManager.md#getids)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`getIds`](MapObjectsManager.md#getids)

#### Source

[model/internal/object/MapObjectsManager.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L89)

***

### getTypes()

> **getTypes**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`getTypes`](../interfaces/IMapToolsManager.md#gettypes)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`getTypes`](MapObjectsManager.md#gettypes)

#### Source

[model/internal/object/MapObjectsManager.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L75)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`isEmpty`](../interfaces/IMapToolsManager.md#isempty)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`isEmpty`](MapObjectsManager.md#isempty)

#### Source

[model/internal/object/MapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L37)

***

### remove()

> **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

• **object**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`remove`](../interfaces/IMapToolsManager.md#remove)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`remove`](MapObjectsManager.md#remove)

#### Source

[model/internal/object/MapObjectsManager.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L57)

***

### removeById()

> **removeById**(`id`): `void`

It removes object from the list of objects.

Override this function.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`removeById`](../interfaces/IMapToolsManager.md#removebyid)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`removeById`](MapObjectsManager.md#removebyid)

#### Source

[model/internal/object/MapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L68)

***

### size()

> **size**(): `number`

The function returns number of objects.

#### Returns

`number`

#### Implementation of

[`IMapToolsManager`](../interfaces/IMapToolsManager.md).[`size`](../interfaces/IMapToolsManager.md#size)

#### Inherited from

[`MapObjectsManager`](MapObjectsManager.md).[`size`](MapObjectsManager.md#size)

#### Source

[model/internal/object/MapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L30)
