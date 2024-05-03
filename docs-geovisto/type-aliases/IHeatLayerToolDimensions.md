**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IHeatLayerToolDimensions

# Type alias: IHeatLayerToolDimensions

> **IHeatLayerToolDimensions**: [`ILayerToolDimensions`](ILayerToolDimensions.md) & `object`

This type provides the specification of the heat layer tool dimensions model.

## Author

Vladimir Korencik

## Type declaration

### blur

> **blur**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### currentZoom

> **currentZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### gradient

> **gradient**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

### intensity

> **intensity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

### latitude

> **latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

### longitude

> **longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

### radius

> **radius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### reactiveOp

> **reactiveOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

### reactiveRadius

> **reactiveRadius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### reactiveZoom

> **reactiveZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`\>

### zoom

> **zoom**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

## Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDimensions.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDimensions.ts#L18)
