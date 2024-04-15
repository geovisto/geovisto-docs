[geovisto-map](../README.md) / [Exports](../modules.md) / MapObject

# Class: MapObject

This class provide functions for using map object which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Hierarchy

- **`MapObject`**

  ↳ [`GeovistoMap`](GeovistoMap.md)

  ↳ [`MapTool`](MapTool.md)

  ↳ [`SidebarFragment`](SidebarFragment.md)

  ↳ [`SidebarTab`](SidebarTab.md)

## Implements

- [`IMapObject`](../interfaces/IMapObject.md)

## Table of contents

### Constructors

- [constructor](MapObject.md#constructor)

### Properties

- [defaults](MapObject.md#defaults)
- [props](MapObject.md#props)
- [state](MapObject.md#state)

### Methods

- [createDefaults](MapObject.md#createdefaults)
- [createState](MapObject.md#createstate)
- [getDefaults](MapObject.md#getdefaults)
- [getId](MapObject.md#getid)
- [getProps](MapObject.md#getprops)
- [getState](MapObject.md#getstate)
- [getType](MapObject.md#gettype)
- [initialize](MapObject.md#initialize)
- [setProps](MapObject.md#setprops)

## Constructors

### constructor

• **new MapObject**(`props?`): [`MapObject`](MapObject.md)

It creates a map object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

[`MapObject`](MapObject.md)

#### Defined in

[src/model/internal/object/MapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L22)

## Properties

### defaults

• `Private` **defaults**: [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>

#### Defined in

[src/model/internal/object/MapObject.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L16)

___

### props

• `Private` **props**: [`IMapObjectProps`](../modules.md#imapobjectprops)

#### Defined in

[src/model/internal/object/MapObject.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L15)

___

### state

• `Private` **state**: [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Defined in

[src/model/internal/object/MapObject.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L17)

## Methods

### createDefaults

▸ **createDefaults**(): [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>

It creates new defaults of the object.

This function can be overriden.

#### Returns

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>

#### Defined in

[src/model/internal/object/MapObject.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L61)

___

### createState

▸ **createState**(): [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It creates new state if the object.

This function can be overriden.

#### Returns

[`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Defined in

[src/model/internal/object/MapObject.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L79)

___

### getDefaults

▸ **getDefaults**(): [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>

It returns default values of the state properties.

#### Returns

[`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[getDefaults](../interfaces/IMapObject.md#getdefaults)

#### Defined in

[src/model/internal/object/MapObject.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L52)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[getId](../interfaces/IMapObject.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns the props given by the programmer.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[getProps](../interfaces/IMapObject.md#getprops)

#### Defined in

[src/model/internal/object/MapObject.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L45)

___

### getState

▸ **getState**(): [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It returns the tool state.

This function should not be overriden.

#### Returns

[`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[getState](../interfaces/IMapObject.md#getstate)

#### Defined in

[src/model/internal/object/MapObject.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L70)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[getType](../interfaces/IMapObject.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapObjectInitProps`](../modules.md#imapobjectinitprops) |

#### Returns

`this`

#### Implementation of

[IMapObject](../interfaces/IMapObject.md).[initialize](../interfaces/IMapObject.md#initialize)

#### Defined in

[src/model/internal/object/MapObject.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L106)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)
