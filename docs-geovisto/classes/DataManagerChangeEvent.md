[geovisto-map](../README.md) / [Exports](../modules.md) / DataManagerChangeEvent

# Class: DataManagerChangeEvent\<TSource\>

This class provides the data change event object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapDataManager`](../interfaces/IMapDataManager.md), `TSource`\>

  ↳ **`DataManagerChangeEvent`**

## Implements

- [`IMapDataManagerChangeEvent`](../modules.md#imapdatamanagerchangeevent)

## Table of contents

### Constructors

- [constructor](DataManagerChangeEvent.md#constructor)

### Methods

- [getChangedObject](DataManagerChangeEvent.md#getchangedobject)
- [getSource](DataManagerChangeEvent.md#getsource)
- [getType](DataManagerChangeEvent.md#gettype)
- [TYPE](DataManagerChangeEvent.md#type)

## Constructors

### constructor

• **new DataManagerChangeEvent**\<`TSource`\>(`source`, `data`): [`DataManagerChangeEvent`](DataManagerChangeEvent.md)\<`TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `TSource` |
| `data` | [`IMapDataManager`](../interfaces/IMapDataManager.md) |

#### Returns

[`DataManagerChangeEvent`](DataManagerChangeEvent.md)\<`TSource`\>

#### Overrides

[MapChangeEvent](MapChangeEvent.md).[constructor](MapChangeEvent.md#constructor)

#### Defined in

[src/model/internal/event/data/DataManagerChangeEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataManagerChangeEvent.ts#L16)

## Methods

### getChangedObject

▸ **getChangedObject**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

Return the changed object.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

IMapDataManagerChangeEvent.getChangedObject

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getChangedObject](MapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

___

### getSource

▸ **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

IMapDataManagerChangeEvent.getSource

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getSource](MapChangeEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

IMapDataManagerChangeEvent.getType

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getType](MapChangeEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

___

### TYPE

▸ **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Defined in

[src/model/internal/event/data/DataManagerChangeEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataManagerChangeEvent.ts#L23)
