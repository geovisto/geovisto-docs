[geovisto-map](../README.md) / [Exports](../modules.md) / MapChangeEvent

# Class: MapChangeEvent\<TChangedObject, TSource\>

This class provides generic map change event object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TChangedObject` | `TChangedObject` |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- [`MapEvent`](MapEvent.md)\<`TSource`\>

  ↳ **`MapChangeEvent`**

  ↳↳ [`DataChangeEvent`](DataChangeEvent.md)

  ↳↳ [`DataManagerChangeEvent`](DataManagerChangeEvent.md)

  ↳↳ [`GeoDataChangeEvent`](GeoDataChangeEvent.md)

  ↳↳ [`GeoDataManagerChangeEvent`](GeoDataManagerChangeEvent.md)

  ↳↳ [`LayerToolRenderedEvent`](LayerToolRenderedEvent.md)

  ↳↳ [`ToolEnabledEvent`](ToolEnabledEvent.md)

  ↳↳ [`SelectionToolEvent`](SelectionToolEvent.md)

  ↳↳ [`ThemesToolEvent`](ThemesToolEvent.md)

## Implements

- [`IMapChangeEvent`](../interfaces/IMapChangeEvent.md)

## Table of contents

### Constructors

- [constructor](MapChangeEvent.md#constructor)

### Properties

- [changedObject](MapChangeEvent.md#changedobject)

### Methods

- [getChangedObject](MapChangeEvent.md#getchangedobject)
- [getSource](MapChangeEvent.md#getsource)
- [getType](MapChangeEvent.md#gettype)

## Constructors

### constructor

• **new MapChangeEvent**\<`TChangedObject`, `TSource`\>(`type`, `source`, `changedObject`): [`MapChangeEvent`](MapChangeEvent.md)\<`TChangedObject`, `TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChangedObject` | `TChangedObject` |
| `TSource` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> = [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `source` | `TSource` |
| `changedObject` | `TChangedObject` |

#### Returns

[`MapChangeEvent`](MapChangeEvent.md)\<`TChangedObject`, `TSource`\>

#### Overrides

[MapEvent](MapEvent.md).[constructor](MapEvent.md#constructor)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L17)

## Properties

### changedObject

• `Private` **changedObject**: `TChangedObject`

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L12)

## Methods

### getChangedObject

▸ **getChangedObject**(): `TChangedObject`

Return the changed object.

#### Returns

`TChangedObject`

#### Implementation of

[IMapChangeEvent](../interfaces/IMapChangeEvent.md).[getChangedObject](../interfaces/IMapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

___

### getSource

▸ **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

[IMapChangeEvent](../interfaces/IMapChangeEvent.md).[getSource](../interfaces/IMapChangeEvent.md#getsource)

#### Inherited from

[MapEvent](MapEvent.md).[getSource](MapEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[IMapChangeEvent](../interfaces/IMapChangeEvent.md).[getType](../interfaces/IMapChangeEvent.md#gettype)

#### Inherited from

[MapEvent](MapEvent.md).[getType](MapEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)
