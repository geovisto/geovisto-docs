[geovisto-map](../README.md) / [Exports](../modules.md) / IHierarchyToolManager

# Interface: IHierarchyToolManager

Interface for Hierarchy Tool manager. 
Used only internaly in Hierarchy Tool.

**`Author`**

Vojtěch Malý

## Implemented by

- [`HierarchyToolManager`](../classes/HierarchyToolManager.md)

## Table of contents

### Methods

- [getAggregationStatus](IHierarchyToolManager.md#getaggregationstatus)
- [getDefinedDomains](IHierarchyToolManager.md#getdefineddomains)
- [getDomainsWithNodes](IHierarchyToolManager.md#getdomainswithnodes)
- [getIdsForEveryDefinedDomainByZoomLevel](IHierarchyToolManager.md#getidsforeverydefineddomainbyzoomlevel)
- [getLevelByLevel](IHierarchyToolManager.md#getlevelbylevel)
- [initialize](IHierarchyToolManager.md#initialize)

## Methods

### getAggregationStatus

▸ **getAggregationStatus**(`name`): `boolean`

Get aggregation flag of certain domain. If true, data set of domain should be agregated from lowest children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of domain. |

#### Returns

`boolean`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L46)

___

### getDefinedDomains

▸ **getDefinedDomains**(): `string`[]

Return array of domain names defined in manager.

#### Returns

`string`[]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L18)

___

### getDomainsWithNodes

▸ **getDomainsWithNodes**(): `Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Generate map of basic node information.

#### Returns

`Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Map where Map<Domain_name, [] of tuples in which [Node_ID, Parent_ID, Zoom]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L24)

___

### getIdsForEveryDefinedDomainByZoomLevel

▸ **getIdsForEveryDefinedDomainByZoomLevel**(`zoomLevel`): `Map`\<`string`, `string`[]\>

Return array of acitve IDs for each defined domain in manager, by their ply zoom level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoomLevel` | `number` | Level of zoom |

#### Returns

`Map`\<`string`, `string`[]\>

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L39)

___

### getLevelByLevel

▸ **getLevelByLevel**(`domainName`, `level`): `undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Returns zoom level object based on domain name and level of ply.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domainName` | `string` | Name of requested domain |
| `level` | `number` | Zoom level |

#### Returns

`undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Hiererchy zoomLevel or undefined.

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L32)

___

### initialize

▸ **initialize**(`hierarchies`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hierarchies` | [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[] |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolManager.ts#L13)
