[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyZoomLevel

# Class: HierarchyZoomLevel

Holds information about active objects in one zoom level.

**`Author`**

Vojtěch Malý

## Implements

- [`IHierarchyToolZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md)

## Table of contents

### Constructors

- [constructor](HierarchyZoomLevel.md#constructor)

### Properties

- [IDs](HierarchyZoomLevel.md#ids)
- [zoomLevel](HierarchyZoomLevel.md#zoomlevel)

### Methods

- [addID](HierarchyZoomLevel.md#addid)
- [getStringifiedIds](HierarchyZoomLevel.md#getstringifiedids)
- [getZoomLevel](HierarchyZoomLevel.md#getzoomlevel)

## Constructors

### constructor

• **new HierarchyZoomLevel**(`zoomLevel`): [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomLevel` | `number` |

#### Returns

[`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L11)

## Properties

### IDs

• `Private` **IDs**: (`string` \| `number`)[] = `[]`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:9](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L9)

___

### zoomLevel

• `Private` **zoomLevel**: `number`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:8](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L8)

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

#### Implementation of

[IHierarchyToolZoomLevel](../interfaces/IHierarchyToolZoomLevel.md).[addID](../interfaces/IHierarchyToolZoomLevel.md#addid)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L19)

___

### getStringifiedIds

▸ **getStringifiedIds**(): `string`[]

Returns all IDs in string format.

#### Returns

`string`[]

#### Implementation of

[IHierarchyToolZoomLevel](../interfaces/IHierarchyToolZoomLevel.md).[getStringifiedIds](../interfaces/IHierarchyToolZoomLevel.md#getstringifiedids)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L23)

___

### getZoomLevel

▸ **getZoomLevel**(): `number`

Retruns zoom level of this ply.

#### Returns

`number`

#### Implementation of

[IHierarchyToolZoomLevel](../interfaces/IHierarchyToolZoomLevel.md).[getZoomLevel](../interfaces/IHierarchyToolZoomLevel.md#getzoomlevel)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L15)
