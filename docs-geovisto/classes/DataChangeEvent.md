[geovisto-map](../README.md) / [Exports](../modules.md) / DataChangeEvent

# Class: DataChangeEvent\<TSource\>

This class provides the data change event object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapData`](../modules.md#imapdata), `TSource`\>

  ↳ **`DataChangeEvent`**

## Implements

- [`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md)

## Table of contents

### Constructors

- [constructor](DataChangeEvent.md#constructor)

### Properties

- [animateOptions](DataChangeEvent.md#animateoptions)

### Methods

- [getAnimateOptions](DataChangeEvent.md#getanimateoptions)
- [getChangedObject](DataChangeEvent.md#getchangedobject)
- [getSource](DataChangeEvent.md#getsource)
- [getType](DataChangeEvent.md#gettype)
- [TYPE](DataChangeEvent.md#type)

## Constructors

### constructor

• **new DataChangeEvent**\<`TSource`\>(`source`, `data`, `animateOptions?`): [`DataChangeEvent`](DataChangeEvent.md)\<`TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> = [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `TSource` |
| `data` | [`IMapData`](../modules.md#imapdata) |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

[`DataChangeEvent`](DataChangeEvent.md)\<`TSource`\>

#### Overrides

[MapChangeEvent](MapChangeEvent.md).[constructor](MapChangeEvent.md#constructor)

#### Defined in

[src/model/internal/event/data/DataChangeEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L19)

## Properties

### animateOptions

• `Private` `Optional` **animateOptions**: [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions)

#### Defined in

[src/model/internal/event/data/DataChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L14)

## Methods

### getAnimateOptions

▸ **getAnimateOptions**(): `undefined` \| [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions)

It returns the animate options

#### Returns

`undefined` \| [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions)

#### Implementation of

[IMapDataChangeEvent](../interfaces/IMapDataChangeEvent.md).[getAnimateOptions](../interfaces/IMapDataChangeEvent.md#getanimateoptions)

#### Defined in

[src/model/internal/event/data/DataChangeEvent.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L34)

___

### getChangedObject

▸ **getChangedObject**(): [`IMapData`](../modules.md#imapdata)

Return the changed object.

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Implementation of

[IMapDataChangeEvent](../interfaces/IMapDataChangeEvent.md).[getChangedObject](../interfaces/IMapDataChangeEvent.md#getchangedobject)

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

[IMapDataChangeEvent](../interfaces/IMapDataChangeEvent.md).[getSource](../interfaces/IMapDataChangeEvent.md#getsource)

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

[IMapDataChangeEvent](../interfaces/IMapDataChangeEvent.md).[getType](../interfaces/IMapDataChangeEvent.md#gettype)

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

[src/model/internal/event/data/DataChangeEvent.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L27)
