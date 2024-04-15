[geovisto-map](../README.md) / [Exports](../modules.md) / LegendToolDefaults

# Class: LegendToolDefaults

This class provide functions which return the default state values.

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`LegendToolDefaults`**

## Implements

- [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

## Table of contents

### Constructors

- [constructor](LegendToolDefaults.md#constructor)

### Properties

- [idString](LegendToolDefaults.md#idstring)
- [TYPE](LegendToolDefaults.md#type)
- [id](LegendToolDefaults.md#id)

### Methods

- [generateId](LegendToolDefaults.md#generateid)
- [getConfig](LegendToolDefaults.md#getconfig)
- [getDataManager](LegendToolDefaults.md#getdatamanager)
- [getGeoDataManager](LegendToolDefaults.md#getgeodatamanager)
- [getIcon](LegendToolDefaults.md#geticon)
- [getId](LegendToolDefaults.md#getid)
- [getLabel](LegendToolDefaults.md#getlabel)
- [getProps](LegendToolDefaults.md#getprops)
- [getType](LegendToolDefaults.md#gettype)
- [isEnabled](LegendToolDefaults.md#isenabled)
- [isSingleton](LegendToolDefaults.md#issingleton)

## Constructors

### constructor

• **new LegendToolDefaults**(): [`LegendToolDefaults`](LegendToolDefaults.md)

#### Returns

[`LegendToolDefaults`](LegendToolDefaults.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[constructor](MapToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[idString](MapToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-legend"`

Static tool type constant.

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L27)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[id](MapToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[generateId](MapToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)

It returns the default config.

#### Returns

[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getConfig](../interfaces/ILegendToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L17)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getDataManager](MapToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getGeoDataManager

▸ **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns default geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getGeoDataManager](MapToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getIcon](../interfaces/ILegendToolDefaults.md#geticon)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getId](../interfaces/ILegendToolDefaults.md#getid)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getId](MapToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getLabel](../interfaces/ILegendToolDefaults.md#getlabel)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L57)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getProps](../interfaces/ILegendToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[getType](../interfaces/ILegendToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L32)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[isEnabled](../interfaces/ILegendToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one legend tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[ILegendToolDefaults](../interfaces/ILegendToolDefaults.md).[isSingleton](../interfaces/ILegendToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L39)
