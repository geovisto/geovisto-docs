[geovisto-map](../README.md) / [Exports](../modules.md) / SpikeLayerToolDefaults

# Class: SpikeLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`SpikeLayerToolDefaults`**

## Implements

- [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](SpikeLayerToolDefaults.md#constructor)

### Properties

- [idString](SpikeLayerToolDefaults.md#idstring)
- [TYPE](SpikeLayerToolDefaults.md#type)
- [id](SpikeLayerToolDefaults.md#id)

### Methods

- [generateId](SpikeLayerToolDefaults.md#generateid)
- [getAggregationDimension](SpikeLayerToolDefaults.md#getaggregationdimension)
- [getCategoryColorDimension](SpikeLayerToolDefaults.md#getcategorycolordimension)
- [getCategoryColorOperationDimension](SpikeLayerToolDefaults.md#getcategorycoloroperationdimension)
- [getCategoryColorValueDimension](SpikeLayerToolDefaults.md#getcategorycolorvaluedimension)
- [getCategoryDimension](SpikeLayerToolDefaults.md#getcategorydimension)
- [getColorDimension](SpikeLayerToolDefaults.md#getcolordimension)
- [getConfig](SpikeLayerToolDefaults.md#getconfig)
- [getDataManager](SpikeLayerToolDefaults.md#getdatamanager)
- [getDimensions](SpikeLayerToolDefaults.md#getdimensions)
- [getFiltersManager](SpikeLayerToolDefaults.md#getfiltersmanager)
- [getGeoDataManager](SpikeLayerToolDefaults.md#getgeodatamanager)
- [getIcon](SpikeLayerToolDefaults.md#geticon)
- [getId](SpikeLayerToolDefaults.md#getid)
- [getLabel](SpikeLayerToolDefaults.md#getlabel)
- [getLatitudeDimension](SpikeLayerToolDefaults.md#getlatitudedimension)
- [getLayerName](SpikeLayerToolDefaults.md#getlayername)
- [getLongitudeDimension](SpikeLayerToolDefaults.md#getlongitudedimension)
- [getProps](SpikeLayerToolDefaults.md#getprops)
- [getType](SpikeLayerToolDefaults.md#gettype)
- [getValueDimension](SpikeLayerToolDefaults.md#getvaluedimension)
- [isEnabled](SpikeLayerToolDefaults.md#isenabled)
- [isSingleton](SpikeLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new SpikeLayerToolDefaults**(): [`SpikeLayerToolDefaults`](SpikeLayerToolDefaults.md)

#### Returns

[`SpikeLayerToolDefaults`](SpikeLayerToolDefaults.md)

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

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L35)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getAggregationDimension](../interfaces/ISpikeLayerToolDefaults.md#getaggregationdimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L109)

___

### getCategoryColorDimension

▸ **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getCategoryColorDimension](../interfaces/ISpikeLayerToolDefaults.md#getcategorycolordimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:148](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L148)

___

### getCategoryColorOperationDimension

▸ **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getCategoryColorOperationDimension](../interfaces/ISpikeLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L130)

___

### getCategoryColorValueDimension

▸ **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getCategoryColorValueDimension](../interfaces/ISpikeLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:144](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L144)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getCategoryDimension](../interfaces/ISpikeLayerToolDefaults.md#getcategorydimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L93)

___

### getColorDimension

▸ **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getColorDimension](../interfaces/ISpikeLayerToolDefaults.md#getcolordimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L122)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getConfig](../interfaces/ISpikeLayerToolDefaults.md#getconfig)

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
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getDimensions](../interfaces/ISpikeLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L61)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getFiltersManager](../interfaces/ISpikeLayerToolDefaults.md#getfiltersmanager)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L53)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getIcon](../interfaces/ISpikeLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L49)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getId](../interfaces/ISpikeLayerToolDefaults.md#getid)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getLabel](../interfaces/ISpikeLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L45)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getLatitudeDimension](../interfaces/ISpikeLayerToolDefaults.md#getlatitudedimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L75)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getLayerName](../interfaces/ISpikeLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L41)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getLongitudeDimension](../interfaces/ISpikeLayerToolDefaults.md#getlongitudedimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L83)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getProps](../interfaces/ISpikeLayerToolDefaults.md#getprops)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getType](../interfaces/ISpikeLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L37)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[getValueDimension](../interfaces/ISpikeLayerToolDefaults.md#getvaluedimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:101](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L101)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[isEnabled](../interfaces/ISpikeLayerToolDefaults.md#isenabled)

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

[ISpikeLayerToolDefaults](../interfaces/ISpikeLayerToolDefaults.md).[isSingleton](../interfaces/ISpikeLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
