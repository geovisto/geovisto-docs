**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ProjectionUtil

# Class: ProjectionUtil

This class provides help functions for projections of points used in the Connection tool.

## Author

Jiri Hynek

## Constructors

### new ProjectionUtil()

> **new ProjectionUtil**(): [`ProjectionUtil`](ProjectionUtil.md)

#### Returns

[`ProjectionUtil`](ProjectionUtil.md)

## Methods

### getDataProjectionFunction()

> `static` **getDataProjectionFunction**(`map`, `zoom`): (`node`) => `void`

It provides the function which projects the given node to the given leaflet map with the given zoom.

#### Parameters

• **map**: `Map`

• **zoom**: `number`

#### Returns

`Function`

> ##### Parameters
>
> • **node**: `any`
>
> ##### Returns
>
> `void`
>

#### Source

[tools/layers/connection/model/internal/util/ProjectionUtil.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/ProjectionUtil.ts#L24)

***

### getPathProjectionFunction()

> `static` **getPathProjectionFunction**(`map`, `zoom`): `Line`\<[`number`, `number`]\>

It provides the the d3 line function which also:
(1) unprojects the given point from the given leaflet map with given zoom
(2) projects the point of (1) to the current map state

#### Parameters

• **map**: `Map`

• **zoom**: `number`

#### Returns

`Line`\<[`number`, `number`]\>

#### Source

[tools/layers/connection/model/internal/util/ProjectionUtil.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/ProjectionUtil.ts#L41)
