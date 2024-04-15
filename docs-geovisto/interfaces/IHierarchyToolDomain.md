[geovisto-map](../README.md) / [Exports](../modules.md) / IHierarchyToolDomain

# Interface: IHierarchyToolDomain

Interface for one domain hierarchy definiton. 
Used by HierarchyToolManager.

**`Author`**

Vojtěch Malý

## Implemented by

- [`HierarchyDomain`](../classes/HierarchyDomain.md)

## Table of contents

### Methods

- [addToLevel](IHierarchyToolDomain.md#addtolevel)
- [getHierarchyMap](IHierarchyToolDomain.md#gethierarchymap)
- [getLevelByZoom](IHierarchyToolDomain.md#getlevelbyzoom)
- [getName](IHierarchyToolDomain.md#getname)
- [getNodes](IHierarchyToolDomain.md#getnodes)
- [getParentChild](IHierarchyToolDomain.md#getparentchild)
- [setParentChild](IHierarchyToolDomain.md#setparentchild)
- [setParentChildMap](IHierarchyToolDomain.md#setparentchildmap)
- [setZoomLevels](IHierarchyToolDomain.md#setzoomlevels)

## Methods

### addToLevel

▸ **addToLevel**(`zoom`, `id`): `void`

Add ID to hierarchy ply based on zoom level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L27)

___

### getHierarchyMap

▸ **getHierarchyMap**(): `Map`\<`string`, `string`[]\>

Returns hierarchy Map.

#### Returns

`Map`\<`string`, `string`[]\>

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L32)

___

### getLevelByZoom

▸ **getLevelByZoom**(`zoom`): `undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Returns zoom ply based on requested zoom level number.
Undefined if that zoom level doesn't exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L20)

___

### getName

▸ **getName**(): `string`

Get name of Domain.

#### Returns

`string`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L53)

___

### getNodes

▸ **getNodes**(): [`string`, `string` \| `boolean`, `number`][]

Return node array where:
[childID, parentID or True if parent, ZoomLevel of change]

#### Returns

[`string`, `string` \| `boolean`, `number`][]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L13)

___

### getParentChild

▸ **getParentChild**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L46)

___

### setParentChild

▸ **setParentChild**(`parentChild`): `void`

Sets new parent child arrry of domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentChild` | [`string`, `string`][] |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L38)

___

### setParentChildMap

▸ **setParentChildMap**(`map`): `void`

Sets new parent child map of domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`\<`string`, `string`[]\> |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L44)

___

### setZoomLevels

▸ **setZoomLevels**(`zoomLevels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomLevels` | `number`[] |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L48)
