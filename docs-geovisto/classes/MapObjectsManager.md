**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapObjectsManager

# Class: MapObjectsManager\<T\>

This class provide functions for using map objects which can be identified by uniquie string.

## Author

Jiri Hynek

## Extended by

- [`MapToolsManager`](MapToolsManager.md)

## Type parameters

• **T** *extends* [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IMapObjectsManager`](../interfaces/IMapObjectsManager.md)\<`T`\>

## Constructors

### new MapObjectsManager()

> **new MapObjectsManager**\<`T`\>(`objects`): [`MapObjectsManager`](MapObjectsManager.md)\<`T`\>

It initializes a map objects manager.

#### Parameters

• **objects**: `undefined` \| `T`[]

#### Returns

[`MapObjectsManager`](MapObjectsManager.md)\<`T`\>

#### Source

[model/internal/object/MapObjectsManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L16)

## Properties

### objects

> `private` **objects**: `T`[]

#### Source

[model/internal/object/MapObjectsManager.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L11)

## Methods

### add()

> **add**(`object`): `void`

It adds object to the list of objects.

Override this function.

#### Parameters

• **object**: `T`

#### Returns

`void`

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`add`](../interfaces/IMapObjectsManager.md#add)

#### Source

[model/internal/object/MapObjectsManager.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L48)

***

### getAll()

> **getAll**(): `T`[]

The function returns available map objects.

#### Returns

`T`[]

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`getAll`](../interfaces/IMapObjectsManager.md#getall)

#### Source

[model/internal/object/MapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L23)

***

### getById()

> **getById**(`id`): `undefined` \| `T`

The function returns map object of given unique identifier.

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`getById`](../interfaces/IMapObjectsManager.md#getbyid)

#### Source

[model/internal/object/MapObjectsManager.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L123)

***

### getByType()

> **getByType**(`type`): `T`[]

The function returns map objects of given type.

#### Parameters

• **type**: `string`

#### Returns

`T`[]

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`getByType`](../interfaces/IMapObjectsManager.md#getbytype)

#### Source

[model/internal/object/MapObjectsManager.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L105)

***

### getIds()

> **getIds**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`getIds`](../interfaces/IMapObjectsManager.md#getids)

#### Source

[model/internal/object/MapObjectsManager.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L89)

***

### getTypes()

> **getTypes**(): `string`[]

Help function which returns the list of object string labels (object types).

#### Returns

`string`[]

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`getTypes`](../interfaces/IMapObjectsManager.md#gettypes)

#### Source

[model/internal/object/MapObjectsManager.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L75)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`isEmpty`](../interfaces/IMapObjectsManager.md#isempty)

#### Source

[model/internal/object/MapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L37)

***

### remove()

> **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

• **object**: `T`

#### Returns

`void`

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`remove`](../interfaces/IMapObjectsManager.md#remove)

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

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`removeById`](../interfaces/IMapObjectsManager.md#removebyid)

#### Source

[model/internal/object/MapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L68)

***

### size()

> **size**(): `number`

The function returns number of objects.

#### Returns

`number`

#### Implementation of

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md).[`size`](../interfaces/IMapObjectsManager.md#size)

#### Source

[model/internal/object/MapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectsManager.ts#L30)
