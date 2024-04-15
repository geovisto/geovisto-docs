[geovisto-map](../README.md) / [Exports](../modules.md) / D3PathForceSimulator

# Class: D3PathForceSimulator

This class represents the force layout simulator powered by the d3-force library.
It takes the nodes and connections and prepares the list paths
which can be bent by the D3 force simulation.

A former idea to split the lines into line segments and use the D3 force simulation can be found
in the prototype writen by S. Engle (https://gist.github.com/ericfischer/dafc36a3d212da4619dde2d392553c7a)
demonstarting force‐directed edge bundling for graph visualization (by Danny Holten and Jarke J. van Wijk).
Further ideas were found in the D3 docs and examples.

Our approach implements a very simple segmentation of the connections
which works with the constant maximal length of segments.
This causes that short connections won't be segmented,
which improves the performance of the simulation.
The preferred maximal length of the line segments can be adjusted using props.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](D3PathForceSimulator.md#constructor)

### Properties

- [forceProps](D3PathForceSimulator.md#forceprops)
- [links](D3PathForceSimulator.md#links)
- [paths](D3PathForceSimulator.md#paths)
- [pathsMap](D3PathForceSimulator.md#pathsmap)
- [points](D3PathForceSimulator.md#points)
- [props](D3PathForceSimulator.md#props)
- [segmentLength](D3PathForceSimulator.md#segmentlength)

### Methods

- [createDefaultForceProps](D3PathForceSimulator.md#createdefaultforceprops)
- [createIdPath](D3PathForceSimulator.md#createidpath)
- [createLinks](D3PathForceSimulator.md#createlinks)
- [createPath](D3PathForceSimulator.md#createpath)
- [createPaths](D3PathForceSimulator.md#createpaths)
- [createPathsMap](D3PathForceSimulator.md#createpathsmap)
- [createPoints](D3PathForceSimulator.md#createpoints)
- [getDefaultSegmentLength](D3PathForceSimulator.md#getdefaultsegmentlength)
- [getForceProps](D3PathForceSimulator.md#getforceprops)
- [getLinks](D3PathForceSimulator.md#getlinks)
- [getPaths](D3PathForceSimulator.md#getpaths)
- [getPathsMap](D3PathForceSimulator.md#getpathsmap)
- [getPoints](D3PathForceSimulator.md#getpoints)
- [getSimulation](D3PathForceSimulator.md#getsimulation)
- [run](D3PathForceSimulator.md#run)

## Constructors

### constructor

• **new D3PathForceSimulator**(`props`): [`D3PathForceSimulator`](D3PathForceSimulator.md)

It initializes the object by setting the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.connections` | [`IConnectionLayerConnection`](../modules.md#iconnectionlayerconnection)[] |
| `props.nodes` | [`IConnectionLayerNode`](../modules.md#iconnectionlayernode)[] |
| `props.segmentLength` | `undefined` \| `number` |

#### Returns

[`D3PathForceSimulator`](D3PathForceSimulator.md)

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L69)

## Properties

### forceProps

• `Private` `Optional` **forceProps**: `SimulationProps`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L59)

___

### links

• `Private` **links**: `SimulationLinkDatum`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)\>[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L64)

___

### paths

• `Private` **paths**: [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L61)

___

### pathsMap

• `Private` **pathsMap**: `Record`\<`string`, [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]\>

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L62)

___

### points

• `Private` **points**: [`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L63)

___

### props

• `Private` **props**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `connections` | [`IConnectionLayerConnection`](../modules.md#iconnectionlayerconnection)[] |
| `nodes` | [`IConnectionLayerNode`](../modules.md#iconnectionlayernode)[] |
| `segmentLength?` | `number` |

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L53)

___

### segmentLength

• `Private` **segmentLength**: `number`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L60)

## Methods

### createDefaultForceProps

▸ **createDefaultForceProps**(): `SimulationProps`

It returns the default D3 force simulation props.

#### Returns

`SimulationProps`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:260](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L260)

___

### createIdPath

▸ **createIdPath**(`connection`): `Object`

Help function which cretes a struture composed of id of connection and path.

This function is used for animated rendering of paths.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IConnectionLayerConnection`](../modules.md#iconnectionlayerconnection) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `path` | [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath) |

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:154](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L154)

___

### createLinks

▸ **createLinks**(): `SimulationLinkDatum`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)\>[]

It creates the links for D3 force layout simulator.

#### Returns

`SimulationLinkDatum`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)\>[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:330](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L330)

___

### createPath

▸ **createPath**(`connection`): [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)

Help function which takes a connection and split the connection into segments.
The number of segments is based on the preferred maximal length of segment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IConnectionLayerConnection`](../modules.md#iconnectionlayerconnection) |

#### Returns

[`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:167](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L167)

___

### createPaths

▸ **createPaths**(): [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]

It creates paths (split connections into segments).

#### Returns

[`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:135](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L135)

___

### createPathsMap

▸ **createPathsMap**(): `Record`\<`string`, [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]\>

It creates a structure composed of records (id of connection, list of paths).

id of connections is a string value "from-to".

This function is used for animated rendering of paths.

#### Returns

`Record`\<`string`, [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]\>

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L120)

___

### createPoints

▸ **createPoints**(): [`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)[]

It prepares the points for D3 force layout simulator.

#### Returns

[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:289](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L289)

___

### getDefaultSegmentLength

▸ **getDefaultSegmentLength**(): `number`

It returns default size of the segment

#### Returns

`number`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L79)

___

### getForceProps

▸ **getForceProps**(): `SimulationProps`

It returns the D3 force simulation props.

#### Returns

`SimulationProps`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:250](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L250)

___

### getLinks

▸ **getLinks**(): `SimulationLinkDatum`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)\>[]

It returns the links for D3 force layout simulator.

#### Returns

`SimulationLinkDatum`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)\>[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:320](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L320)

___

### getPaths

▸ **getPaths**(): [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]

It returns the paths.

#### Returns

[`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L106)

___

### getPathsMap

▸ **getPathsMap**(): `Record`\<`string`, [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]\>

It returns a structure composed of records (id of connection, list of paths).

id of connections is a string value "from-to".

This function is used for animated rendering of paths.

#### Returns

`Record`\<`string`, [`IConnectionLayerPath`](../modules.md#iconnectionlayerpath)[]\>

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L90)

___

### getPoints

▸ **getPoints**(): [`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)[]

It returns the nodes for D3 force layout simulator.

#### Returns

[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint)[]

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:279](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L279)

___

### getSimulation

▸ **getSimulation**(): `Simulation`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint), `undefined`\>

It returns the definition of D3 force simulation.

#### Returns

`Simulation`\<[`IConnectionLayerPoint`](../modules.md#iconnectionlayerpoint), `undefined`\>

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:228](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L228)

___

### run

▸ **run**(`onTickAction`, `onEndAction`): `void`

It creates creates and runs the D3 force layout simulation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onTickAction` | () => `void` |
| `onEndAction` | () => `void` |

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:215](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L215)
