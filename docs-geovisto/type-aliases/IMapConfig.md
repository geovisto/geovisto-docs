**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapConfig

# Type alias: IMapConfig

> **IMapConfig**: [`IMapObjectConfig`](IMapObjectConfig.md) & `object`

This type provides specification of map config model.

## Author

Jiri Hynek

## Type declaration

### mapCenter?

> `optional` **mapCenter**: `object`

### mapCenter.lat

> **lat**: `number`

### mapCenter.lng

> **lng**: `number`

### mapStructure?

> `optional` **mapStructure**: `object`

### mapStructure.maxBounds

> **maxBounds**: [[`number`, `number`], [`number`, `number`]]

### mapStructure.maxZoom

> **maxZoom**: `number`

### tools?

> `optional` **tools**: [`IMapToolConfig`](IMapToolConfig.md)[]

### zoom?

> `optional` **zoom**: `number`

## Source

[model/types/map/IMapConfig.ts:9](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/map/IMapConfig.ts#L9)
