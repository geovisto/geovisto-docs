[geovisto-map](../README.md) / [Exports](../modules.md) / IHierarchyToolState

# Interface: IHierarchyToolState\<TProps, TDefaults, TConfig\>

State interface for Hierarchy Tool

**`Author`**

Vojtěch Malý

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IHierarchyToolProps`](../modules.md#ihierarchytoolprops) = [`IHierarchyToolProps`](../modules.md#ihierarchytoolprops) |
| `TDefaults` | extends [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md) = [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md) |
| `TConfig` | extends [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig) = [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig) |

## Hierarchy

- [`IMapToolState`](IMapToolState.md)\<`TProps`, `TDefaults`, `TConfig`\>

  ↳ **`IHierarchyToolState`**

## Implemented by

- [`HierarchyToolState`](../classes/HierarchyToolState.md)

## Table of contents

### Methods

- [deserialize](IHierarchyToolState.md#deserialize)
- [getHierarchies](IHierarchyToolState.md#gethierarchies)
- [getIcon](IHierarchyToolState.md#geticon)
- [getId](IHierarchyToolState.md#getid)
- [getLabel](IHierarchyToolState.md#getlabel)
- [getMap](IHierarchyToolState.md#getmap)
- [getType](IHierarchyToolState.md#gettype)
- [initialize](IHierarchyToolState.md#initialize)
- [isEnabled](IHierarchyToolState.md#isenabled)
- [serialize](IHierarchyToolState.md#serialize)
- [setEnabled](IHierarchyToolState.md#setenabled)
- [setHierarchies](IHierarchyToolState.md#sethierarchies)
- [setIcon](IHierarchyToolState.md#seticon)
- [setId](IHierarchyToolState.md#setid)
- [setLabel](IHierarchyToolState.md#setlabel)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[deserialize](IMapToolState.md#deserialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L32)

___

### getHierarchies

▸ **getHierarchies**(): [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[]

It returns the list of hierarchy specififactions.

#### Returns

[`IHierarchyConfig`](../modules.md#ihierarchyconfig)[]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolState.ts#L25)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Inherited from

[IMapToolState](IMapToolState.md).[getIcon](IMapToolState.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L61)

___

### getId

▸ **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapToolState](IMapToolState.md).[getId](IMapToolState.md#getid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L49)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Inherited from

[IMapToolState](IMapToolState.md).[getLabel](IMapToolState.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L49)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Inherited from

[IMapToolState](IMapToolState.md).[getMap](IMapToolState.md#getmap)

#### Defined in

[src/model/types/tool/IMapToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L44)

___

### getType

▸ **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapToolState](IMapToolState.md).[getType](IMapToolState.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L44)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `TDefaults` |
| `props` | `TProps` |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[initialize](IMapToolState.md#initialize)

#### Defined in

[src/model/types/tool/IMapToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Inherited from

[IMapToolState](IMapToolState.md).[isEnabled](IMapToolState.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L32)

___

### serialize

▸ **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `TDefaults` |

#### Returns

`TConfig`

#### Inherited from

[IMapToolState](IMapToolState.md).[serialize](IMapToolState.md#serialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L39)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[setEnabled](IMapToolState.md#setenabled)

#### Defined in

[src/model/types/tool/IMapToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L39)

___

### setHierarchies

▸ **setHierarchies**(`hierachies`): `void`

It sets the list of hierarchy specififactions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hierachies` | [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[] |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolState.ts#L32)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[setIcon](IMapToolState.md#seticon)

#### Defined in

[src/model/types/tool/IMapToolState.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L68)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[setId](IMapToolState.md#setid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L57)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Inherited from

[IMapToolState](IMapToolState.md).[setLabel](IMapToolState.md#setlabel)

#### Defined in

[src/model/types/tool/IMapToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L56)
