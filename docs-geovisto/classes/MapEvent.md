[geovisto-map](../README.md) / [Exports](../modules.md) / MapEvent

# Class: MapEvent\<TSource\>

This class provides generic map event object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- **`MapEvent`**

  ↳ [`MapChangeEvent`](MapChangeEvent.md)

  ↳ [`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)

## Implements

- [`IMapEvent`](../interfaces/IMapEvent.md)

## Table of contents

### Constructors

- [constructor](MapEvent.md#constructor)

### Properties

- [source](MapEvent.md#source)
- [type](MapEvent.md#type)

### Methods

- [getSource](MapEvent.md#getsource)
- [getType](MapEvent.md#gettype)

## Constructors

### constructor

• **new MapEvent**\<`TSource`\>(`type`, `source`): [`MapEvent`](MapEvent.md)\<`TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> = [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `source` | `TSource` |

#### Returns

[`MapEvent`](MapEvent.md)\<`TSource`\>

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L17)

## Properties

### source

• `Private` **source**: `TSource`

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L12)

___

### type

• `Private` **type**: `string`

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L11)

## Methods

### getSource

▸ **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

[IMapEvent](../interfaces/IMapEvent.md).[getSource](../interfaces/IMapEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[IMapEvent](../interfaces/IMapEvent.md).[getType](../interfaces/IMapEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)
