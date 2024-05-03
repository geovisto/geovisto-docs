**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IHierarchyToolManager

# Interface: IHierarchyToolManager

Interface for Hierarchy Tool manager. 
Used only internaly in Hierarchy Tool.

## Author

Vojtěch Malý

## Methods

### getAggregationStatus()

> **getAggregationStatus**(`name`): `boolean`

Get aggregation flag of certain domain. If true, data set of domain should be agregated from lowest children.

#### Parameters

• **name**: `string`

Name of domain.

#### Returns

`boolean`

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L46)

***

### getDefinedDomains()

> **getDefinedDomains**(): `string`[]

Return array of domain names defined in manager.

#### Returns

`string`[]

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L18)

***

### getDomainsWithNodes()

> **getDomainsWithNodes**(): `Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Generate map of basic node information.

#### Returns

`Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Map where Map<Domain_name, [] of tuples in which [Node_ID, Parent_ID, Zoom]

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L24)

***

### getIdsForEveryDefinedDomainByZoomLevel()

> **getIdsForEveryDefinedDomainByZoomLevel**(`zoomLevel`): `Map`\<`string`, `string`[]\>

Return array of acitve IDs for each defined domain in manager, by their ply zoom level.

#### Parameters

• **zoomLevel**: `number`

Level of zoom

#### Returns

`Map`\<`string`, `string`[]\>

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L39)

***

### getLevelByLevel()

> **getLevelByLevel**(`domainName`, `level`): `undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Returns zoom level object based on domain name and level of ply.

#### Parameters

• **domainName**: `string`

Name of requested domain

• **level**: `number`

Zoom level

#### Returns

`undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Hiererchy zoomLevel or undefined.

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L32)

***

### initialize()

> **initialize**(`hierarchies`): `void`

#### Parameters

• **hierarchies**: [`IHierarchyConfig`](../type-aliases/IHierarchyConfig.md)[]

#### Returns

`void`

#### Source

[tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L13)
