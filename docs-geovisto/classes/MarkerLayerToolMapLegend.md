[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerLayerToolMapLegend

# Class: MarkerLayerToolMapLegend

This class provides controls for management of the layer legend.

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapLayerToolLegend`](MapLayerToolLegend.md)\<[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\>

  ↳ **`MarkerLayerToolMapLegend`**

## Implements

- [`IMapLegend`](../interfaces/IMapLegend.md)

## Table of contents

### Constructors

- [constructor](MarkerLayerToolMapLegend.md#constructor)

### Properties

- [htmlContent](MarkerLayerToolMapLegend.md#htmlcontent)

### Methods

- [getContent](MarkerLayerToolMapLegend.md#getcontent)
- [getMapObject](MarkerLayerToolMapLegend.md#getmapobject)

## Constructors

### constructor

• **new MarkerLayerToolMapLegend**(`tool`): [`MarkerLayerToolMapLegend`](MarkerLayerToolMapLegend.md)

It creates new map Legend with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\> |

#### Returns

[`MarkerLayerToolMapLegend`](MarkerLayerToolMapLegend.md)

#### Overrides

[MapLayerToolLegend](MapLayerToolLegend.md).[constructor](MapLayerToolLegend.md#constructor)

#### Defined in

[src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L23)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLElement`

#### Defined in

[src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L16)

## Methods

### getContent

▸ **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns the legend.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\> |

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[IMapLegend](../interfaces/IMapLegend.md).[getContent](../interfaces/IMapLegend.md#getcontent)

#### Overrides

[MapLayerToolLegend](MapLayerToolLegend.md).[getContent](MapLayerToolLegend.md#getcontent)

#### Defined in

[src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L30)

___

### getMapObject

▸ **getMapObject**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

#### Inherited from

[MapLayerToolLegend](MapLayerToolLegend.md).[getMapObject](MapLayerToolLegend.md#getmapobject)

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L17)
