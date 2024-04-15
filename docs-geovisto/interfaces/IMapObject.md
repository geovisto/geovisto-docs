[geovisto-map](../README.md) / [Exports](../modules.md) / IMapObject

# Interface: IMapObject\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares functions for using map object which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMapObjectProps`](../modules.md#imapobjectprops) = [`IMapObjectProps`](../modules.md#imapobjectprops) |
| `TDefaults` | extends [`IMapObjectDefaults`](IMapObjectDefaults.md) = [`IMapObjectDefaults`](IMapObjectDefaults.md) |
| `TState` | extends [`IMapObjectState`](IMapObjectState.md) = [`IMapObjectState`](IMapObjectState.md) |
| `TConfig` | extends [`IMapObjectConfig`](../modules.md#imapobjectconfig) = [`IMapObjectConfig`](../modules.md#imapobjectconfig) |
| `TInitProps` | extends [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<`TConfig`\> = [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<`TConfig`\> |

## Hierarchy

- **`IMapObject`**

  ↳ [`IMap`](IMap.md)

  ↳ [`IMapTool`](IMapTool.md)

  ↳ [`ISidebarFragment`](ISidebarFragment.md)

  ↳ [`ISidebarTab`](ISidebarTab.md)

## Implemented by

- [`MapObject`](../classes/MapObject.md)

## Table of contents

### Methods

- [getDefaults](IMapObject.md#getdefaults)
- [getId](IMapObject.md#getid)
- [getProps](IMapObject.md#getprops)
- [getState](IMapObject.md#getstate)
- [getType](IMapObject.md#gettype)
- [initialize](IMapObject.md#initialize)

## Methods

### getDefaults

▸ **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getProps

▸ **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getState

▸ **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Defined in

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

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
| `initProps` | `TInitProps` |

#### Returns

`this`

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)
