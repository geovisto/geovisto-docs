[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDataChangeEvent

# Interface: IMapDataChangeEvent

This interface declares abstract map event data change object.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapChangeEvent`](IMapChangeEvent.md)\<[`IMapData`](../modules.md#imapdata)\>

  ↳ **`IMapDataChangeEvent`**

## Implemented by

- [`DataChangeEvent`](../classes/DataChangeEvent.md)

## Table of contents

### Methods

- [getAnimateOptions](IMapDataChangeEvent.md#getanimateoptions)
- [getChangedObject](IMapDataChangeEvent.md#getchangedobject)
- [getSource](IMapDataChangeEvent.md#getsource)
- [getType](IMapDataChangeEvent.md#gettype)

## Methods

### getAnimateOptions

▸ **getAnimateOptions**(): `undefined` \| [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions)

It returns the animate options

#### Returns

`undefined` \| [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions)

#### Defined in

[src/model/types/event/data/IMapDataChangeEvent.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/data/IMapDataChangeEvent.ts#L15)

___

### getChangedObject

▸ **getChangedObject**(): [`IMapData`](../modules.md#imapdata)

Return the changed object.

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Inherited from

[IMapChangeEvent](IMapChangeEvent.md).[getChangedObject](IMapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/types/event/IMapChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapChangeEvent.ts#L14)

___

### getSource

▸ **getSource**(): [`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

Return source object of the event.

#### Returns

[`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[IMapChangeEvent](IMapChangeEvent.md).[getSource](IMapChangeEvent.md#getsource)

#### Defined in

[src/model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L18)

___

### getType

▸ **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[IMapChangeEvent](IMapChangeEvent.md).[getType](IMapChangeEvent.md#gettype)

#### Defined in

[src/model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L13)
