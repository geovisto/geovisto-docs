[geovisto-map](../README.md) / [Exports](../modules.md) / FiltersToolState

# Class: FiltersToolState

This class provide functions for using filters.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`FiltersToolState`**

## Implements

- [`IFiltersToolState`](../interfaces/IFiltersToolState.md)

## Table of contents

### Constructors

- [constructor](FiltersToolState.md#constructor)

### Properties

- [manager](FiltersToolState.md#manager)
- [rules](FiltersToolState.md#rules)

### Methods

- [deserialize](FiltersToolState.md#deserialize)
- [getFilterRules](FiltersToolState.md#getfilterrules)
- [getFiltersManager](FiltersToolState.md#getfiltersmanager)
- [getIcon](FiltersToolState.md#geticon)
- [getId](FiltersToolState.md#getid)
- [getLabel](FiltersToolState.md#getlabel)
- [getMap](FiltersToolState.md#getmap)
- [getMapObject](FiltersToolState.md#getmapobject)
- [getType](FiltersToolState.md#gettype)
- [initialize](FiltersToolState.md#initialize)
- [isEnabled](FiltersToolState.md#isenabled)
- [serialize](FiltersToolState.md#serialize)
- [setEnabled](FiltersToolState.md#setenabled)
- [setFilterRules](FiltersToolState.md#setfilterrules)
- [setFiltersManager](FiltersToolState.md#setfiltersmanager)
- [setIcon](FiltersToolState.md#seticon)
- [setId](FiltersToolState.md#setid)
- [setLabel](FiltersToolState.md#setlabel)
- [setMap](FiltersToolState.md#setmap)

## Constructors

### constructor

• **new FiltersToolState**(`tool`): [`FiltersToolState`](FiltersToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\> |

#### Returns

[`FiltersToolState`](FiltersToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L31)

## Properties

### manager

• `Private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L24)

___

### rules

• `Private` **rules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L23)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig) |

#### Returns

`void`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[deserialize](../interfaces/IFiltersToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L54)

___

### getFilterRules

▸ **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns the filterRules property of the tool state.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getFilterRules](../interfaces/IFiltersToolState.md#getfilterrules)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L127)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

It returns filter manager

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getFiltersManager](../interfaces/IFiltersToolState.md#getfiltersmanager)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L111)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getIcon](../interfaces/IFiltersToolState.md#geticon)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getId](../interfaces/IFiltersToolState.md#getid)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getLabel](../interfaces/IFiltersToolState.md#getlabel)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getMap](../interfaces/IFiltersToolState.md#getmap)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[getType](../interfaces/IFiltersToolState.md#gettype)

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md) |
| `props` | [`IFiltersToolProps`](../modules.md#ifilterstoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[initialize](../interfaces/IFiltersToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L38)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[isEnabled](../interfaces/IFiltersToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md) |

#### Returns

[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[serialize](../interfaces/IFiltersToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L88)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setEnabled](../interfaces/IFiltersToolState.md#setenabled)

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setFilterRules

▸ **setFilterRules**(`filterRules`): `void`

It sets the filterRules property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterRules` | [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[] |

#### Returns

`void`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setFilterRules](../interfaces/IFiltersToolState.md#setfilterrules)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L136)

___

### setFiltersManager

▸ **setFiltersManager**(`manager`): `void`

It updates filter manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapFilterManager`](../interfaces/IMapFilterManager.md) |

#### Returns

`void`

#### Implementation of

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setFiltersManager](../interfaces/IFiltersToolState.md#setfiltersmanager)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolState.ts#L120)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setIcon](../interfaces/IFiltersToolState.md#seticon)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setId](../interfaces/IFiltersToolState.md#setid)

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

[IFiltersToolState](../interfaces/IFiltersToolState.md).[setLabel](../interfaces/IFiltersToolState.md#setlabel)

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
