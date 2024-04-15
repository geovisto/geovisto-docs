[geovisto-map](../README.md) / [Exports](../modules.md) / ChoroplethLayerToolMapLegend

# Class: ChoroplethLayerToolMapLegend

This class provides controls for management of the layer legend.

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapLayerToolLegend`](MapLayerToolLegend.md)\<[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\>

  ↳ **`ChoroplethLayerToolMapLegend`**

## Implements

- [`IMapLegend`](../interfaces/IMapLegend.md)

## Table of contents

### Constructors

- [constructor](ChoroplethLayerToolMapLegend.md#constructor)

### Properties

- [htmlContent](ChoroplethLayerToolMapLegend.md#htmlcontent)

### Methods

- [getContent](ChoroplethLayerToolMapLegend.md#getcontent)
- [getMapObject](ChoroplethLayerToolMapLegend.md#getmapobject)

## Constructors

### constructor

• **new ChoroplethLayerToolMapLegend**(`tool`): [`ChoroplethLayerToolMapLegend`](ChoroplethLayerToolMapLegend.md)

It creates new map Legend with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\> |

#### Returns

[`ChoroplethLayerToolMapLegend`](ChoroplethLayerToolMapLegend.md)

#### Overrides

[MapLayerToolLegend](MapLayerToolLegend.md).[constructor](MapLayerToolLegend.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L24)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLElement`

#### Defined in

[src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L17)

## Methods

### getContent

▸ **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns the legend.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\> |

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[IMapLegend](../interfaces/IMapLegend.md).[getContent](../interfaces/IMapLegend.md#getcontent)

#### Overrides

[MapLayerToolLegend](MapLayerToolLegend.md).[getContent](MapLayerToolLegend.md#getcontent)

#### Defined in

[src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L31)

___

### getMapObject

▸ **getMapObject**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Inherited from

[MapLayerToolLegend](MapLayerToolLegend.md).[getMapObject](MapLayerToolLegend.md#getmapobject)

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L17)
