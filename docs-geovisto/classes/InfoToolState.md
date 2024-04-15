[geovisto-map](../README.md) / [Exports](../modules.md) / InfoToolState

# Class: InfoToolState

This class provide functions for using filters.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`InfoToolState`**

## Implements

- [`IInfoToolState`](../interfaces/IInfoToolState.md)

## Table of contents

### Constructors

- [constructor](InfoToolState.md#constructor)

### Properties

- [data](InfoToolState.md#data)
- [defaultFile](InfoToolState.md#defaultfile)
- [manager](InfoToolState.md#manager)
- [md\_data](InfoToolState.md#md_data)

### Methods

- [deserialize](InfoToolState.md#deserialize)
- [getContent](InfoToolState.md#getcontent)
- [getDefaultFile](InfoToolState.md#getdefaultfile)
- [getIcon](InfoToolState.md#geticon)
- [getId](InfoToolState.md#getid)
- [getInfoDataManager](InfoToolState.md#getinfodatamanager)
- [getLabel](InfoToolState.md#getlabel)
- [getMap](InfoToolState.md#getmap)
- [getMapObject](InfoToolState.md#getmapobject)
- [getMarkdown](InfoToolState.md#getmarkdown)
- [getType](InfoToolState.md#gettype)
- [initialize](InfoToolState.md#initialize)
- [isEnabled](InfoToolState.md#isenabled)
- [serialize](InfoToolState.md#serialize)
- [setEnabled](InfoToolState.md#setenabled)
- [setIcon](InfoToolState.md#seticon)
- [setId](InfoToolState.md#setid)
- [setInfoDataManager](InfoToolState.md#setinfodatamanager)
- [setLabel](InfoToolState.md#setlabel)
- [setMap](InfoToolState.md#setmap)
- [setMarkdown](InfoToolState.md#setmarkdown)

## Constructors

### constructor

• **new InfoToolState**(`tool`): [`InfoToolState`](InfoToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\> |

#### Returns

[`InfoToolState`](InfoToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L33)

## Properties

### data

• `Private` **data**: ``null`` \| `string`

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L23)

___

### defaultFile

• `Private` **defaultFile**: `string`

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L26)

___

### manager

• `Private` `Optional` **manager**: [`IInfoDataManager`](../modules.md#iinfodatamanager)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L24)

___

### md\_data

• `Private` `Optional` **md\_data**: [`IInfoData`](../interfaces/IInfoData.md)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L25)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The method takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IInfoToolConfig`](../modules.md#iinfotoolconfig) |

#### Returns

`void`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[deserialize](../interfaces/IInfoToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L62)

___

### getContent

▸ **getContent**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getContent](../interfaces/IInfoToolState.md#getcontent)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L78)

___

### getDefaultFile

▸ **getDefaultFile**(): `string`

It returns the default file property of the tool state.

#### Returns

`string`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getDefaultFile](../interfaces/IInfoToolState.md#getdefaultfile)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L92)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getIcon](../interfaces/IInfoToolState.md#geticon)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[getId](../interfaces/IInfoToolState.md#getid)

#### Inherited from

[MapToolState](MapToolState.md).[getId](MapToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getInfoDataManager

▸ **getInfoDataManager**(): `undefined` \| [`IInfoDataManager`](../modules.md#iinfodatamanager)

It returns markdown manager.

#### Returns

`undefined` \| [`IInfoDataManager`](../modules.md#iinfodatamanager)

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getInfoDataManager](../interfaces/IInfoToolState.md#getinfodatamanager)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L117)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getLabel](../interfaces/IInfoToolState.md#getlabel)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[getMap](../interfaces/IInfoToolState.md#getmap)

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

### getMarkdown

▸ **getMarkdown**(): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

It returns the markdown property of the tool state.

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getMarkdown](../interfaces/IInfoToolState.md#getmarkdown)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:85](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L85)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[getType](../interfaces/IInfoToolState.md#gettype)

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
| `defaults` | [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md) |
| `props` | [`IInfoToolProps`](../modules.md#iinfotoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[initialize](../interfaces/IInfoToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L46)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[isEnabled](../interfaces/IInfoToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IInfoToolConfig`](../modules.md#iinfotoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md) |

#### Returns

[`IInfoToolConfig`](../modules.md#iinfotoolconfig)

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[serialize](../interfaces/IInfoToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:72](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L72)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[setEnabled](../interfaces/IInfoToolState.md#setenabled)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[setIcon](../interfaces/IInfoToolState.md#seticon)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[setId](../interfaces/IInfoToolState.md#setid)

#### Inherited from

[MapToolState](MapToolState.md).[setId](MapToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setInfoDataManager

▸ **setInfoDataManager**(`manager`): `void`

It sets markdown manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IInfoDataManager`](../modules.md#iinfodatamanager) |

#### Returns

`void`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[setInfoDataManager](../interfaces/IInfoToolState.md#setinfodatamanager)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L110)

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

[IInfoToolState](../interfaces/IInfoToolState.md).[setLabel](../interfaces/IInfoToolState.md#setlabel)

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

### setMarkdown

▸ **setMarkdown**(`md`): `void`

It sets the markdown property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `md` | [`IInfoData`](../interfaces/IInfoData.md) |

#### Returns

`void`

#### Implementation of

[IInfoToolState](../interfaces/IInfoToolState.md).[setMarkdown](../interfaces/IInfoToolState.md#setmarkdown)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolState.ts#L101)
