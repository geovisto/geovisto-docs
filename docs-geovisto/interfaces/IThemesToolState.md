[geovisto-map](../README.md) / [Exports](../modules.md) / IThemesToolState

# Interface: IThemesToolState\<TProps, TDefaults, TConfig\>

This interface declares functions for using themes.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IThemesToolProps`](../modules.md#ithemestoolprops) = [`IThemesToolProps`](../modules.md#ithemestoolprops) |
| `TDefaults` | extends [`IThemesToolDefaults`](IThemesToolDefaults.md) = [`IThemesToolDefaults`](IThemesToolDefaults.md) |
| `TConfig` | extends [`IThemesToolConfig`](../modules.md#ithemestoolconfig) = [`IThemesToolConfig`](../modules.md#ithemestoolconfig) |

## Hierarchy

- [`IMapToolState`](IMapToolState.md)\<`TProps`, `TDefaults`, `TConfig`\>

  ↳ **`IThemesToolState`**

## Implemented by

- [`ThemesToolState`](../classes/ThemesToolState.md)

## Table of contents

### Methods

- [deserialize](IThemesToolState.md#deserialize)
- [getIcon](IThemesToolState.md#geticon)
- [getId](IThemesToolState.md#getid)
- [getLabel](IThemesToolState.md#getlabel)
- [getMap](IThemesToolState.md#getmap)
- [getTheme](IThemesToolState.md#gettheme)
- [getThemesManager](IThemesToolState.md#getthemesmanager)
- [getType](IThemesToolState.md#gettype)
- [initialize](IThemesToolState.md#initialize)
- [isEnabled](IThemesToolState.md#isenabled)
- [serialize](IThemesToolState.md#serialize)
- [setEnabled](IThemesToolState.md#setenabled)
- [setIcon](IThemesToolState.md#seticon)
- [setId](IThemesToolState.md#setid)
- [setLabel](IThemesToolState.md#setlabel)
- [setTheme](IThemesToolState.md#settheme)
- [setThemesManager](IThemesToolState.md#setthemesmanager)

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

### getTheme

▸ **getTheme**(): [`IMapTheme`](IMapTheme.md)

It returns the theme property of the tool state.

#### Returns

[`IMapTheme`](IMapTheme.md)

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolState.ts#L38)

___

### getThemesManager

▸ **getThemesManager**(): [`IMapThemesManager`](IMapThemesManager.md)

It returns themes manager.

#### Returns

[`IMapThemesManager`](IMapThemesManager.md)

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolState.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolState.ts#L26)

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

___

### setTheme

▸ **setTheme**(`theme`): `void`

It sets the theme property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](IMapTheme.md) |

#### Returns

`void`

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolState.ts#L45)

___

### setThemesManager

▸ **setThemesManager**(`manager`): `void`

It sets themes manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapThemesManager`](IMapThemesManager.md) |

#### Returns

`void`

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolState.ts#L33)
