[geovisto-map](../README.md) / [Exports](../modules.md) / MapObjectState

# Class: MapObjectState

This class manages state of the tool.
It wraps the state since the tool can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Hierarchy

- **`MapObjectState`**

  ↳ [`GeovistoMapState`](GeovistoMapState.md)

  ↳ [`MapToolState`](MapToolState.md)

  ↳ [`SidebarFragmentState`](SidebarFragmentState.md)

  ↳ [`SidebarTabState`](SidebarTabState.md)

## Implements

- [`IMapObjectState`](../interfaces/IMapObjectState.md)

## Table of contents

### Constructors

- [constructor](MapObjectState.md#constructor)

### Properties

- [id](MapObjectState.md#id)
- [mapObject](MapObjectState.md#mapobject)
- [type](MapObjectState.md#type)

### Methods

- [deserialize](MapObjectState.md#deserialize)
- [getId](MapObjectState.md#getid)
- [getMapObject](MapObjectState.md#getmapobject)
- [getType](MapObjectState.md#gettype)
- [initialize](MapObjectState.md#initialize)
- [serialize](MapObjectState.md#serialize)
- [setId](MapObjectState.md#setid)

## Constructors

### constructor

• **new MapObjectState**(`mapObject`): [`MapObjectState`](MapObjectState.md)

It creates a map object state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapObject` | [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Returns

[`MapObjectState`](MapObjectState.md)

#### Defined in

[src/model/internal/object/MapObjectState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L23)

## Properties

### id

• `Private` **id**: `string`

#### Defined in

[src/model/internal/object/MapObjectState.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L18)

___

### mapObject

• `Private` **mapObject**: [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Defined in

[src/model/internal/object/MapObjectState.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L15)

___

### type

• `Private` **type**: `string`

#### Defined in

[src/model/internal/object/MapObjectState.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L17)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IMapObjectConfig`](../modules.md#imapobjectconfig) |

#### Returns

`void`

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[deserialize](../interfaces/IMapObjectState.md#deserialize)

#### Defined in

[src/model/internal/object/MapObjectState.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L60)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[getId](../interfaces/IMapObjectState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[getType](../interfaces/IMapObjectState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\> |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |
| `initProps` | [`IMapObjectInitProps`](../modules.md#imapobjectinitprops) |

#### Returns

`void`

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[initialize](../interfaces/IMapObjectState.md#initialize)

#### Defined in

[src/model/internal/object/MapObjectState.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L50)

___

### serialize

▸ **serialize**(`defaults`): [`IMapObjectConfig`](../modules.md#imapobjectconfig)

The method serializes the tool state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\> |

#### Returns

[`IMapObjectConfig`](../modules.md#imapobjectconfig)

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[serialize](../interfaces/IMapObjectState.md#serialize)

#### Defined in

[src/model/internal/object/MapObjectState.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L70)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IMapObjectState](../interfaces/IMapObjectState.md).[setId](../interfaces/IMapObjectState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)
