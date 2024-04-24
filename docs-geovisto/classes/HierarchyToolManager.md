**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HierarchyToolManager

# Class: HierarchyToolManager

Manager of hierarchy domains.

## Author

Vojtěch Malý

## Implements

- [`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md)

## Constructors

### new HierarchyToolManager()

> **new HierarchyToolManager**(): [`HierarchyToolManager`](HierarchyToolManager.md)

#### Returns

[`HierarchyToolManager`](HierarchyToolManager.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L13)

## Properties

### hierarchyDomains

> `private` **hierarchyDomains**: [`HierarchyDomain`](HierarchyDomain.md)[]

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L11)

## Methods

### getAggregationStatus()

> **getAggregationStatus**(`name`): `boolean`

Get aggregation flag of certain domain. If true, data set of domain should be agregated from lowest children.

#### Parameters

• **name**: `string`

Name of domain.

#### Returns

`boolean`

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`getAggregationStatus`](../interfaces/IHierarchyToolManager.md#getaggregationstatus)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L142)

***

### getDefinedDomains()

> **getDefinedDomains**(): `string`[]

Return array of domain names defined in manager.

#### Returns

`string`[]

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`getDefinedDomains`](../interfaces/IHierarchyToolManager.md#getdefineddomains)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L123)

***

### getDomainsWithNodes()

> **getDomainsWithNodes**(): `Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Generate map of basic node information.

#### Returns

`Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Map where Map<Domain_name, [] of tuples in which [Node_ID, Parent_ID, Zoom]

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`getDomainsWithNodes`](../interfaces/IHierarchyToolManager.md#getdomainswithnodes)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L17)

***

### getIdsForEveryDefinedDomainByZoomLevel()

> **getIdsForEveryDefinedDomainByZoomLevel**(`zoomLev`): `Map`\<`string`, `string`[]\>

Return array of acitve IDs for each defined domain in manager, by their ply zoom level.

#### Parameters

• **zoomLev**: `number`

Level of zoom

#### Returns

`Map`\<`string`, `string`[]\>

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`getIdsForEveryDefinedDomainByZoomLevel`](../interfaces/IHierarchyToolManager.md#getidsforeverydefineddomainbyzoomlevel)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:131](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L131)

***

### getLevelByLevel()

> **getLevelByLevel**(`domainName`, `level`): `undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Returns zoom level object based on domain name and level of ply.

#### Parameters

• **domainName**: `string`

Name of requested domain

• **level**: `number`

Zoom level

#### Returns

`undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Hiererchy zoomLevel or undefined.

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`getLevelByLevel`](../interfaces/IHierarchyToolManager.md#getlevelbylevel)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L110)

***

### initialize()

> **initialize**(`hierarchies`): `void`

#### Parameters

• **hierarchies**: [`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

#### Returns

`void`

#### Implementation of

[`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md).[`initialize`](../interfaces/IHierarchyToolManager.md#initialize)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L26)
