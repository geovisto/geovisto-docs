[geovisto-map](../README.md) / [Exports](../modules.md) / DotLayerToolDefaults

# Class: DotLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`DotLayerToolDefaults`**

## Implements

- [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](DotLayerToolDefaults.md#constructor)

### Properties

- [idString](DotLayerToolDefaults.md#idstring)
- [TYPE](DotLayerToolDefaults.md#type)
- [id](DotLayerToolDefaults.md#id)

### Methods

- [generateId](DotLayerToolDefaults.md#generateid)
- [getCategoryColorDimension](DotLayerToolDefaults.md#getcategorycolordimension)
- [getCategoryColorOperationDimension](DotLayerToolDefaults.md#getcategorycoloroperationdimension)
- [getCategoryColorValueDimension](DotLayerToolDefaults.md#getcategorycolorvaluedimension)
- [getCategoryDimension](DotLayerToolDefaults.md#getcategorydimension)
- [getColorDimension](DotLayerToolDefaults.md#getcolordimension)
- [getConfig](DotLayerToolDefaults.md#getconfig)
- [getDataManager](DotLayerToolDefaults.md#getdatamanager)
- [getDimensions](DotLayerToolDefaults.md#getdimensions)
- [getFiltersManager](DotLayerToolDefaults.md#getfiltersmanager)
- [getGeoDataManager](DotLayerToolDefaults.md#getgeodatamanager)
- [getIcon](DotLayerToolDefaults.md#geticon)
- [getId](DotLayerToolDefaults.md#getid)
- [getLabel](DotLayerToolDefaults.md#getlabel)
- [getLatitudeDimension](DotLayerToolDefaults.md#getlatitudedimension)
- [getLayerName](DotLayerToolDefaults.md#getlayername)
- [getLongitudeDimension](DotLayerToolDefaults.md#getlongitudedimension)
- [getProps](DotLayerToolDefaults.md#getprops)
- [getType](DotLayerToolDefaults.md#gettype)
- [isEnabled](DotLayerToolDefaults.md#isenabled)
- [isSingleton](DotLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new DotLayerToolDefaults**(): [`DotLayerToolDefaults`](DotLayerToolDefaults.md)

#### Returns

[`DotLayerToolDefaults`](DotLayerToolDefaults.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[constructor](LayerToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[idString](LayerToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-dot"`

A unique string of the tool type.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L33)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[id](LayerToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[generateId](LayerToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getCategoryColorDimension

▸ **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getCategoryColorDimension](../interfaces/IDotLayerToolDefaults.md#getcategorycolordimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:124](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L124)

___

### getCategoryColorOperationDimension

▸ **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getCategoryColorOperationDimension](../interfaces/IDotLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L106)

___

### getCategoryColorValueDimension

▸ **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getCategoryColorValueDimension](../interfaces/IDotLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L120)

___

### getCategoryDimension

▸ **getCategoryDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getCategoryDimension](../interfaces/IDotLayerToolDefaults.md#getcategorydimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L90)

___

### getColorDimension

▸ **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L98)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getConfig](../interfaces/IDotLayerToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getDataManager](LayerToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns list of map dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getDimensions](../interfaces/IDotLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L60)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getFiltersManager](../interfaces/IDotLayerToolDefaults.md#getfiltersmanager)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L51)

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

[LayerToolDefaults](LayerToolDefaults.md).[getGeoDataManager](LayerToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getIcon](../interfaces/IDotLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L47)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getId](../interfaces/IDotLayerToolDefaults.md#getid)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getId](LayerToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getLabel](../interfaces/IDotLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L43)

___

### getLatitudeDimension

▸ **getLatitudeDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getLatitudeDimension](../interfaces/IDotLayerToolDefaults.md#getlatitudedimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:72](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L72)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getLayerName](../interfaces/IDotLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L39)

___

### getLongitudeDimension

▸ **getLongitudeDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getLongitudeDimension](../interfaces/IDotLayerToolDefaults.md#getlongitudedimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L80)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getProps](../interfaces/IDotLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[getType](../interfaces/IDotLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L35)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[isEnabled](../interfaces/IDotLayerToolDefaults.md#isenabled)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isEnabled](LayerToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[IDotLayerToolDefaults](../interfaces/IDotLayerToolDefaults.md).[isSingleton](../interfaces/IDotLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
