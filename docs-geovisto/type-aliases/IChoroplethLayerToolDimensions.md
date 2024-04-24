**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IChoroplethLayerToolDimensions

# Type alias: IChoroplethLayerToolDimensions

> **IChoroplethLayerToolDimensions**: [`ILayerToolDimensions`](ILayerToolDimensions.md) & `object`

This type provides the specification of the choropleth layer tool dimensions model.

## Author

Jiri Hynek

## Type declaration

### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

### color

> **color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`\>

### customColor

> **customColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`\>

### customMinMax

> **customMinMax**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`\>

### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

### geoId

> **geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

### maxValue

> **maxValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### minValue

> **minValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### range

> **range**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

### round

> **round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### scaling

> **scaling**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

### units

> **units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`\>

### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`\>

### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`\>

### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

## Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDimensions.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDimensions.ts#L19)
