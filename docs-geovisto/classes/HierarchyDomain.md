**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HierarchyDomain

# Class: HierarchyDomain

Holds everything about domais hierarchy

## Author

Vojtěch Malý

## Implements

- [`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md)

## Constructors

### new HierarchyDomain()

> **new HierarchyDomain**(`name`): [`HierarchyDomain`](HierarchyDomain.md)

#### Parameters

• **name**: `string`

#### Returns

[`HierarchyDomain`](HierarchyDomain.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L28)

## Properties

### aggregationEnabled

> **aggregationEnabled**: `boolean` = `false`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L24)

***

### cached

> `private` **cached**: `boolean` = `false`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L22)

***

### levelsMap

> `private` **levelsMap**: `Map`\<`number`, [`HierarchyZoomLevel`](HierarchyZoomLevel.md)\>

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L13)

***

### lowestChildMap

> **lowestChildMap**: `Map`\<`string`, `string`[]\>

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L20)

***

### name

> `private` **name**: `string`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L11)

***

### nodes

> **nodes**: [`string`, `string` \| `boolean`, `number`][] = `[]`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L26)

***

### parentChild

> `private` **parentChild**: [`string`, `string`][] = `[]`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L16)

***

### parentChildMap

> `private` **parentChildMap**: `Map`\<`string`, `string`[]\>

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L15)

***

### zoomLevels

> `private` **zoomLevels**: `number`[] = `[]`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L18)

## Methods

### addToLevel()

> **addToLevel**(`level`, `id`): `void`

Adds new object to certain zoom level

#### Parameters

• **level**: `number`

Zoom level

• **id**: `string` \| `number`

Id of added object.

#### Returns

`void`

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`addToLevel`](../interfaces/IHierarchyToolDomain.md#addtolevel)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L77)

***

### getHierarchyMap()

> **getHierarchyMap**(): `Map`\<`string`, `string`[]\>

Returnes lowest child map.

#### Returns

`Map`\<`string`, `string`[]\>

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`getHierarchyMap`](../interfaces/IHierarchyToolDomain.md#gethierarchymap)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L93)

***

### getLevelByZoom()

> **getLevelByZoom**(`zoom`): `undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Based on zoom level returns object of hierarchyZoomLevel

#### Parameters

• **zoom**: `number`

#### Returns

`undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`getLevelByZoom`](../interfaces/IHierarchyToolDomain.md#getlevelbyzoom)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L39)

***

### getName()

> **getName**(): `string`

Returns name of a domain.

#### Returns

`string`

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`getName`](../interfaces/IHierarchyToolDomain.md#getname)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:176](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L176)

***

### getNodes()

> **getNodes**(): [`string`, `string` \| `boolean`, `number`][]

Return node array where:
[childID, parentID or True if parent, ZoomLevel of change]

#### Returns

[`string`, `string` \| `boolean`, `number`][]

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`getNodes`](../interfaces/IHierarchyToolDomain.md#getnodes)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L32)

***

### getParentChild()

> **getParentChild**(): [`string`, `string`][]

Get parent child array

#### Returns

[`string`, `string`][]

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`getParentChild`](../interfaces/IHierarchyToolDomain.md#getparentchild)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:160](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L160)

***

### mapResolveGet()

> `private` **mapResolveGet**(`toResolve`): `string`[]

Resolve and get all lowest childrens of passed objects.

#### Parameters

• **toResolve**: `string`[]

Ids of objects to resolve

#### Returns

`string`[]

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L114)

***

### setParentChild()

> **setParentChild**(`parentChild`): `void`

Set parentChild array

#### Parameters

• **parentChild**: [`string`, `string`][]

#### Returns

`void`

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`setParentChild`](../interfaces/IHierarchyToolDomain.md#setparentchild)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:144](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L144)

***

### setParentChildMap()

> **setParentChildMap**(`map`): `void`

Set parentChild Map

#### Parameters

• **map**: `Map`\<`string`, `string`[]\>

#### Returns

`void`

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`setParentChildMap`](../interfaces/IHierarchyToolDomain.md#setparentchildmap)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:152](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L152)

***

### setZoomLevels()

> **setZoomLevels**(`zoomLevels`): `void`

Sets level of all defined zoom levels

#### Parameters

• **zoomLevels**: `number`[]

#### Returns

`void`

#### Implementation of

[`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md).[`setZoomLevels`](../interfaces/IHierarchyToolDomain.md#setzoomlevels)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyDomain.ts:168](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L168)
