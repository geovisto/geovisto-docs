[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyToolState

# Class: HierarchyToolState

State of hierarchy tool

**`Author`**

Vojtěch Malý

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`HierarchyToolState`**

## Implements

- [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)

## Table of contents

### Constructors

- [constructor](HierarchyToolState.md#constructor)

### Properties

- [hierarchies](HierarchyToolState.md#hierarchies)

### Methods

- [deserialize](HierarchyToolState.md#deserialize)
- [getHierarchies](HierarchyToolState.md#gethierarchies)
- [getIcon](HierarchyToolState.md#geticon)
- [getId](HierarchyToolState.md#getid)
- [getLabel](HierarchyToolState.md#getlabel)
- [getMap](HierarchyToolState.md#getmap)
- [getMapObject](HierarchyToolState.md#getmapobject)
- [getType](HierarchyToolState.md#gettype)
- [initialize](HierarchyToolState.md#initialize)
- [isEnabled](HierarchyToolState.md#isenabled)
- [serialize](HierarchyToolState.md#serialize)
- [setEnabled](HierarchyToolState.md#setenabled)
- [setHierarchies](HierarchyToolState.md#sethierarchies)
- [setIcon](HierarchyToolState.md#seticon)
- [setId](HierarchyToolState.md#setid)
- [setLabel](HierarchyToolState.md#setlabel)
- [setMap](HierarchyToolState.md#setmap)

## Constructors

### constructor

• **new HierarchyToolState**(`tool`): [`HierarchyToolState`](HierarchyToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\> |

#### Returns

[`HierarchyToolState`](HierarchyToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L24)

## Properties

### hierarchies

• `Private` **hierarchies**: [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[]

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L22)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig) |

#### Returns

`void`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[deserialize](../interfaces/IHierarchyToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L35)

___

### getHierarchies

▸ **getHierarchies**(): [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[]

It returns the list of hierarchy specififactions.

#### Returns

[`IHierarchyConfig`](../modules.md#ihierarchyconfig)[]

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getHierarchies](../interfaces/IHierarchyToolState.md#gethierarchies)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L54)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getIcon](../interfaces/IHierarchyToolState.md#geticon)

#### Inherited from

[MapToolState](MapToolState.md).[getIcon](MapToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getId](../interfaces/IHierarchyToolState.md#getid)

#### Inherited from

[MapToolState](MapToolState.md).[getId](MapToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getLabel](../interfaces/IHierarchyToolState.md#getlabel)

#### Inherited from

[MapToolState](MapToolState.md).[getLabel](MapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getMap](../interfaces/IHierarchyToolState.md#getmap)

#### Inherited from

[MapToolState](MapToolState.md).[getMap](MapToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapToolState](MapToolState.md).[getMapObject](MapToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[getType](../interfaces/IHierarchyToolState.md#gettype)

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md) |
| `props` | [`IMapToolProps`](../modules.md#imaptoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolProps`](../modules.md#imaptoolprops)\> |

#### Returns

`void`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[initialize](../interfaces/IHierarchyToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L28)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[isEnabled](../interfaces/IHierarchyToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IMapToolConfig`](../modules.md#imaptoolconfig)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md) |

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[serialize](../interfaces/IHierarchyToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L43)

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

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[setEnabled](../interfaces/IHierarchyToolState.md#setenabled)

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

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

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[setHierarchies](../interfaces/IHierarchyToolState.md#sethierarchies)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolState.ts#L63)

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

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[setIcon](../interfaces/IHierarchyToolState.md#seticon)

#### Inherited from

[MapToolState](MapToolState.md).[setIcon](MapToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

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

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[setId](../interfaces/IHierarchyToolState.md#setid)

#### Inherited from

[MapToolState](MapToolState.md).[setId](MapToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

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

#### Implementation of

[IHierarchyToolState](../interfaces/IHierarchyToolState.md).[setLabel](../interfaces/IHierarchyToolState.md#setlabel)

#### Inherited from

[MapToolState](MapToolState.md).[setLabel](MapToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[MapToolState](MapToolState.md).[setMap](MapToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)
