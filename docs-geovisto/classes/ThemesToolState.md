[geovisto-map](../README.md) / [Exports](../modules.md) / ThemesToolState

# Class: ThemesToolState

This class provide functions for using themes.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`ThemesToolState`**

## Implements

- [`IThemesToolState`](../interfaces/IThemesToolState.md)

## Table of contents

### Constructors

- [constructor](ThemesToolState.md#constructor)

### Properties

- [manager](ThemesToolState.md#manager)
- [theme](ThemesToolState.md#theme)

### Methods

- [deserialize](ThemesToolState.md#deserialize)
- [getIcon](ThemesToolState.md#geticon)
- [getId](ThemesToolState.md#getid)
- [getLabel](ThemesToolState.md#getlabel)
- [getMap](ThemesToolState.md#getmap)
- [getMapObject](ThemesToolState.md#getmapobject)
- [getTheme](ThemesToolState.md#gettheme)
- [getThemesManager](ThemesToolState.md#getthemesmanager)
- [getType](ThemesToolState.md#gettype)
- [initialize](ThemesToolState.md#initialize)
- [isEnabled](ThemesToolState.md#isenabled)
- [serialize](ThemesToolState.md#serialize)
- [setEnabled](ThemesToolState.md#setenabled)
- [setIcon](ThemesToolState.md#seticon)
- [setId](ThemesToolState.md#setid)
- [setLabel](ThemesToolState.md#setlabel)
- [setMap](ThemesToolState.md#setmap)
- [setTheme](ThemesToolState.md#settheme)
- [setThemesManager](ThemesToolState.md#setthemesmanager)

## Constructors

### constructor

• **new ThemesToolState**(`tool`): [`ThemesToolState`](ThemesToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\> |

#### Returns

[`ThemesToolState`](ThemesToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L28)

## Properties

### manager

• `Private` **manager**: [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L22)

___

### theme

• `Private` **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L23)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IThemesToolConfig`](../modules.md#ithemestoolconfig) |

#### Returns

`void`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[deserialize](../interfaces/IThemesToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L55)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[getIcon](../interfaces/IThemesToolState.md#geticon)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[getId](../interfaces/IThemesToolState.md#getid)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[getLabel](../interfaces/IThemesToolState.md#getlabel)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[getMap](../interfaces/IThemesToolState.md#getmap)

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

### getTheme

▸ **getTheme**(): [`IMapTheme`](../interfaces/IMapTheme.md)

It returns the theme property of the tool state.

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[getTheme](../interfaces/IThemesToolState.md#gettheme)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L106)

___

### getThemesManager

▸ **getThemesManager**(): [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

It returns themes manager.

#### Returns

[`IMapThemesManager`](../interfaces/IMapThemesManager.md)

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[getThemesManager](../interfaces/IThemesToolState.md#getthemesmanager)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L90)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[getType](../interfaces/IThemesToolState.md#gettype)

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
| `defaults` | [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md) |
| `props` | [`IThemesToolProps`](../modules.md#ithemestoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[initialize](../interfaces/IThemesToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L39)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[isEnabled](../interfaces/IThemesToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IThemesToolConfig`](../modules.md#ithemestoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md) |

#### Returns

[`IThemesToolConfig`](../modules.md#ithemestoolconfig)

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[serialize](../interfaces/IThemesToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L76)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[setEnabled](../interfaces/IThemesToolState.md#setenabled)

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[setIcon](../interfaces/IThemesToolState.md#seticon)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[setId](../interfaces/IThemesToolState.md#setid)

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

[IThemesToolState](../interfaces/IThemesToolState.md).[setLabel](../interfaces/IThemesToolState.md#setlabel)

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

___

### setTheme

▸ **setTheme**(`theme`): `void`

It sets the theme property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

`void`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[setTheme](../interfaces/IThemesToolState.md#settheme)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L115)

___

### setThemesManager

▸ **setThemesManager**(`manager`): `void`

It sets themes manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapThemesManager`](../interfaces/IMapThemesManager.md) |

#### Returns

`void`

#### Implementation of

[IThemesToolState](../interfaces/IThemesToolState.md).[setThemesManager](../interfaces/IThemesToolState.md#setthemesmanager)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolState.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolState.ts#L99)
