[geovisto-map](../README.md) / [Exports](../modules.md) / BubbleLayerToolDefaults

# Class: BubbleLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`BubbleLayerToolDefaults`**

## Implements

- [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](BubbleLayerToolDefaults.md#constructor)

### Properties

- [idString](BubbleLayerToolDefaults.md#idstring)
- [TYPE](BubbleLayerToolDefaults.md#type)
- [id](BubbleLayerToolDefaults.md#id)

### Methods

- [generateId](BubbleLayerToolDefaults.md#generateid)
- [getAggregationDimension](BubbleLayerToolDefaults.md#getaggregationdimension)
- [getBubbleSizeDimension](BubbleLayerToolDefaults.md#getbubblesizedimension)
- [getCategoryColorDimension](BubbleLayerToolDefaults.md#getcategorycolordimension)
- [getCategoryColorOperationDimension](BubbleLayerToolDefaults.md#getcategorycoloroperationdimension)
- [getCategoryColorValueDimension](BubbleLayerToolDefaults.md#getcategorycolorvaluedimension)
- [getCategoryDimension](BubbleLayerToolDefaults.md#getcategorydimension)
- [getColorDimension](BubbleLayerToolDefaults.md#getcolordimension)
- [getConfig](BubbleLayerToolDefaults.md#getconfig)
- [getDataManager](BubbleLayerToolDefaults.md#getdatamanager)
- [getDimensions](BubbleLayerToolDefaults.md#getdimensions)
- [getFiltersManager](BubbleLayerToolDefaults.md#getfiltersmanager)
- [getGeoDataManager](BubbleLayerToolDefaults.md#getgeodatamanager)
- [getIcon](BubbleLayerToolDefaults.md#geticon)
- [getId](BubbleLayerToolDefaults.md#getid)
- [getLabel](BubbleLayerToolDefaults.md#getlabel)
- [getLatitudeDimension](BubbleLayerToolDefaults.md#getlatitudedimension)
- [getLayerName](BubbleLayerToolDefaults.md#getlayername)
- [getLongitudeDimension](BubbleLayerToolDefaults.md#getlongitudedimension)
- [getProps](BubbleLayerToolDefaults.md#getprops)
- [getType](BubbleLayerToolDefaults.md#gettype)
- [getValueDimension](BubbleLayerToolDefaults.md#getvaluedimension)
- [isEnabled](BubbleLayerToolDefaults.md#isenabled)
- [isSingleton](BubbleLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new BubbleLayerToolDefaults**(): [`BubbleLayerToolDefaults`](BubbleLayerToolDefaults.md)

#### Returns

[`BubbleLayerToolDefaults`](BubbleLayerToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-bubble"`

A unique string of the tool type.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L37)

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

### getAggregationDimension

▸ **getAggregationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getAggregationDimension](../interfaces/IBubbleLayerToolDefaults.md#getaggregationdimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L113)

___

### getBubbleSizeDimension

▸ **getBubbleSizeDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getBubbleSizeDimension](../interfaces/IBubbleLayerToolDefaults.md#getbubblesizedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:134](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L134)

___

### getCategoryColorDimension

▸ **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getCategoryColorDimension](../interfaces/IBubbleLayerToolDefaults.md#getcategorycolordimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L163)

___

### getCategoryColorOperationDimension

▸ **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getCategoryColorOperationDimension](../interfaces/IBubbleLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L145)

___

### getCategoryColorValueDimension

▸ **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getCategoryColorValueDimension](../interfaces/IBubbleLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:159](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L159)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getCategoryDimension](../interfaces/IBubbleLayerToolDefaults.md#getcategorydimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L97)

___

### getColorDimension

▸ **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getColorDimension](../interfaces/IBubbleLayerToolDefaults.md#getcolordimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L126)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getConfig](../interfaces/IBubbleLayerToolDefaults.md#getconfig)

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
| `aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `bubbleSize` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getDimensions](../interfaces/IBubbleLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L64)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getFiltersManager](../interfaces/IBubbleLayerToolDefaults.md#getfiltersmanager)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L55)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getIcon](../interfaces/IBubbleLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L51)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getId](../interfaces/IBubbleLayerToolDefaults.md#getid)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getLabel](../interfaces/IBubbleLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L47)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getLatitudeDimension](../interfaces/IBubbleLayerToolDefaults.md#getlatitudedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L79)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getLayerName](../interfaces/IBubbleLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L43)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getLongitudeDimension](../interfaces/IBubbleLayerToolDefaults.md#getlongitudedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L87)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getProps](../interfaces/IBubbleLayerToolDefaults.md#getprops)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getType](../interfaces/IBubbleLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L39)

___

### getValueDimension

▸ **getValueDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[getValueDimension](../interfaces/IBubbleLayerToolDefaults.md#getvaluedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L105)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[isEnabled](../interfaces/IBubbleLayerToolDefaults.md#isenabled)

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

[IBubbleLayerToolDefaults](../interfaces/IBubbleLayerToolDefaults.md).[isSingleton](../interfaces/IBubbleLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
