[geovisto-map](../README.md) / [Exports](../modules.md) / IHierarchyToolZoomLevel

# Interface: IHierarchyToolZoomLevel

Interface of one zoom ply.

**`Author`**

Vojtěch Malý

## Implemented by

- [`HierarchyZoomLevel`](../classes/HierarchyZoomLevel.md)

## Table of contents

### Methods

- [addID](IHierarchyToolZoomLevel.md#addid)
- [getStringifiedIds](IHierarchyToolZoomLevel.md#getstringifiedids)
- [getZoomLevel](IHierarchyToolZoomLevel.md#getzoomlevel)

## Methods

### addID

▸ **addID**(`id`): `void`

Adds ID of object in ply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts#L16)

___

### getStringifiedIds

▸ **getStringifiedIds**(): `string`[]

Returns all IDs in string format.

#### Returns

`string`[]

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts#L21)

___

### getZoomLevel

▸ **getZoomLevel**(): `number`

Retruns zoom level of this ply.

#### Returns

`number`

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts:10](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolZoomLevel.ts#L10)
