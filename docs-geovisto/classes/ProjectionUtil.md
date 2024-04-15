[geovisto-map](../README.md) / [Exports](../modules.md) / ProjectionUtil

# Class: ProjectionUtil

This class provides help functions for projections of points used in the Connection tool.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](ProjectionUtil.md#constructor)

### Methods

- [getDataProjectionFunction](ProjectionUtil.md#getdataprojectionfunction)
- [getPathProjectionFunction](ProjectionUtil.md#getpathprojectionfunction)

## Constructors

### constructor

• **new ProjectionUtil**(): [`ProjectionUtil`](ProjectionUtil.md)

#### Returns

[`ProjectionUtil`](ProjectionUtil.md)

## Methods

### getDataProjectionFunction

▸ **getDataProjectionFunction**(`map`, `zoom`): (`node`: [`IConnectionLayerNode`](../modules.md#iconnectionlayernode)) => `void`

It provides the function which projects the given node to the given leaflet map with the given zoom.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |
| `zoom` | `number` |

#### Returns

`fn`

▸ (`node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`IConnectionLayerNode`](../modules.md#iconnectionlayernode) |

##### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/util/ProjectionUtil.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/ProjectionUtil.ts#L24)

___

### getPathProjectionFunction

▸ **getPathProjectionFunction**(`map`, `zoom`): `Line`\<[`number`, `number`]\>

It provides the the d3 line function which also:
(1) unprojects the given point from the given leaflet map with given zoom
(2) projects the point of (1) to the current map state

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |
| `zoom` | `number` |

#### Returns

`Line`\<[`number`, `number`]\>

#### Defined in

[src/tools/layers/connection/model/internal/util/ProjectionUtil.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/ProjectionUtil.ts#L41)
