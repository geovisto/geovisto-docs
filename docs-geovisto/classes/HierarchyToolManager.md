[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyToolManager

# Class: HierarchyToolManager

Manager of hierarchy domains.

**`Author`**

Vojtěch Malý

## Implements

- [`IHierarchyToolManager`](../interfaces/IHierarchyToolManager.md)

## Table of contents

### Constructors

- [constructor](HierarchyToolManager.md#constructor)

### Properties

- [hierarchyDomains](HierarchyToolManager.md#hierarchydomains)

### Methods

- [getAggregationStatus](HierarchyToolManager.md#getaggregationstatus)
- [getDefinedDomains](HierarchyToolManager.md#getdefineddomains)
- [getDomainsWithNodes](HierarchyToolManager.md#getdomainswithnodes)
- [getIdsForEveryDefinedDomainByZoomLevel](HierarchyToolManager.md#getidsforeverydefineddomainbyzoomlevel)
- [getLevelByLevel](HierarchyToolManager.md#getlevelbylevel)
- [initialize](HierarchyToolManager.md#initialize)

## Constructors

### constructor

• **new HierarchyToolManager**(): [`HierarchyToolManager`](HierarchyToolManager.md)

#### Returns

[`HierarchyToolManager`](HierarchyToolManager.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L13)

## Properties

### hierarchyDomains

• `Private` **hierarchyDomains**: [`HierarchyDomain`](HierarchyDomain.md)[]

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L11)

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

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[getAggregationStatus](../interfaces/IHierarchyToolManager.md#getaggregationstatus)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L142)

___

### getDefinedDomains

▸ **getDefinedDomains**(): `string`[]

Return array of domain names defined in manager.

#### Returns

`string`[]

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[getDefinedDomains](../interfaces/IHierarchyToolManager.md#getdefineddomains)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L123)

___

### getDomainsWithNodes

▸ **getDomainsWithNodes**(): `Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Generate map of basic node information.

#### Returns

`Map`\<`string`, [`string`, `string` \| `boolean`, `number`][]\>

Map where Map<Domain_name, [] of tuples in which [Node_ID, Parent_ID, Zoom]

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[getDomainsWithNodes](../interfaces/IHierarchyToolManager.md#getdomainswithnodes)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L17)

___

### getIdsForEveryDefinedDomainByZoomLevel

▸ **getIdsForEveryDefinedDomainByZoomLevel**(`zoomLev`): `Map`\<`string`, `string`[]\>

Return array of acitve IDs for each defined domain in manager, by their ply zoom level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoomLev` | `number` | Level of zoom |

#### Returns

`Map`\<`string`, `string`[]\>

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[getIdsForEveryDefinedDomainByZoomLevel](../interfaces/IHierarchyToolManager.md#getidsforeverydefineddomainbyzoomlevel)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:131](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L131)

___

### getLevelByLevel

▸ **getLevelByLevel**(`domainName`, `level`): `undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Returns zoom level object based on domain name and level of ply.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domainName` | `string` | Name of requested domain |
| `level` | `number` | Zoom level |

#### Returns

`undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Hiererchy zoomLevel or undefined.

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[getLevelByLevel](../interfaces/IHierarchyToolManager.md#getlevelbylevel)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L110)

___

### initialize

▸ **initialize**(`hierarchies`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hierarchies` | [`IHierarchyConfig`](../modules.md#ihierarchyconfig)[] |

#### Returns

`void`

#### Implementation of

[IHierarchyToolManager](../interfaces/IHierarchyToolManager.md).[initialize](../interfaces/IHierarchyToolManager.md#initialize)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolManager.ts#L26)
