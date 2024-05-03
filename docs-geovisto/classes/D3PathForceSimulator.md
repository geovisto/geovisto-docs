**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / D3PathForceSimulator

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

## Author

Jiri Hynek

## Constructors

### new D3PathForceSimulator()

> **new D3PathForceSimulator**(`props`): [`D3PathForceSimulator`](D3PathForceSimulator.md)

It initializes the object by setting the props.

#### Parameters

• **props**

• **props.connections**: [`IConnectionLayerConnection`](../type-aliases/IConnectionLayerConnection.md)[]

• **props.nodes**: `any`[]

• **props.segmentLength**: `undefined` \| `number`

#### Returns

[`D3PathForceSimulator`](D3PathForceSimulator.md)

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L69)

## Properties

### forceProps?

> `private` `optional` **forceProps**: `SimulationProps`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L59)

***

### links

> `private` **links**: `SimulationLinkDatum`\<`any`\>[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L64)

***

### paths

> `private` **paths**: [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L61)

***

### pathsMap

> `private` **pathsMap**: `Record`\<`string`, [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]\>

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L62)

***

### points

> `private` **points**: `any`[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L63)

***

### props

> `private` **props**: `object`

#### connections

> **connections**: [`IConnectionLayerConnection`](../type-aliases/IConnectionLayerConnection.md)[]

#### nodes

> **nodes**: `any`[]

#### segmentLength?

> `optional` **segmentLength**: `number`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L53)

***

### segmentLength

> `private` **segmentLength**: `number`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L60)

## Methods

### createDefaultForceProps()

> `protected` **createDefaultForceProps**(): `SimulationProps`

It returns the default D3 force simulation props.

#### Returns

`SimulationProps`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:260](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L260)

***

### createIdPath()

> `protected` **createIdPath**(`connection`): `object`

Help function which cretes a struture composed of id of connection and path.

This function is used for animated rendering of paths.

#### Parameters

• **connection**: [`IConnectionLayerConnection`](../type-aliases/IConnectionLayerConnection.md)

#### Returns

`object`

##### id

> **id**: `string`

##### path

> **path**: [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:154](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L154)

***

### createLinks()

> `protected` **createLinks**(): `SimulationLinkDatum`\<`any`\>[]

It creates the links for D3 force layout simulator.

#### Returns

`SimulationLinkDatum`\<`any`\>[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:330](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L330)

***

### createPath()

> `protected` **createPath**(`connection`): [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)

Help function which takes a connection and split the connection into segments.
The number of segments is based on the preferred maximal length of segment.

#### Parameters

• **connection**: [`IConnectionLayerConnection`](../type-aliases/IConnectionLayerConnection.md)

#### Returns

[`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:167](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L167)

***

### createPaths()

> `protected` **createPaths**(): [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]

It creates paths (split connections into segments).

#### Returns

[`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:135](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L135)

***

### createPathsMap()

> `protected` **createPathsMap**(): `Record`\<`string`, [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]\>

It creates a structure composed of records (id of connection, list of paths).

id of connections is a string value "from-to".

This function is used for animated rendering of paths.

#### Returns

`Record`\<`string`, [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]\>

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L120)

***

### createPoints()

> `protected` **createPoints**(): `any`[]

It prepares the points for D3 force layout simulator.

#### Returns

`any`[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:289](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L289)

***

### getDefaultSegmentLength()

> `protected` **getDefaultSegmentLength**(): `number`

It returns default size of the segment

#### Returns

`number`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L79)

***

### getForceProps()

> `protected` **getForceProps**(): `SimulationProps`

It returns the D3 force simulation props.

#### Returns

`SimulationProps`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:250](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L250)

***

### getLinks()

> `protected` **getLinks**(): `SimulationLinkDatum`\<`any`\>[]

It returns the links for D3 force layout simulator.

#### Returns

`SimulationLinkDatum`\<`any`\>[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:320](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L320)

***

### getPaths()

> **getPaths**(): [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]

It returns the paths.

#### Returns

[`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L106)

***

### getPathsMap()

> **getPathsMap**(): `Record`\<`string`, [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]\>

It returns a structure composed of records (id of connection, list of paths).

id of connections is a string value "from-to".

This function is used for animated rendering of paths.

#### Returns

`Record`\<`string`, [`IConnectionLayerPath`](../type-aliases/IConnectionLayerPath.md)[]\>

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L90)

***

### getPoints()

> `protected` **getPoints**(): `any`[]

It returns the nodes for D3 force layout simulator.

#### Returns

`any`[]

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:279](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L279)

***

### getSimulation()

> `protected` **getSimulation**(): `Simulation`\<`any`, `undefined`\>

It returns the definition of D3 force simulation.

#### Returns

`Simulation`\<`any`, `undefined`\>

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:228](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L228)

***

### run()

> **run**(`onTickAction`, `onEndAction`): `void`

It creates creates and runs the D3 force layout simulation.

#### Parameters

• **onTickAction**

• **onEndAction**

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/util/D3PathForceSimulator.ts:215](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/util/D3PathForceSimulator.ts#L215)
