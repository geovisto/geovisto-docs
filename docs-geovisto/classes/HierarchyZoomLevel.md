**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HierarchyZoomLevel

# Class: HierarchyZoomLevel

Holds information about active objects in one zoom level.

## Author

Vojtěch Malý

## Implements

- [`IHierarchyToolZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md)

## Constructors

### new HierarchyZoomLevel()

> **new HierarchyZoomLevel**(`zoomLevel`): [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Parameters

• **zoomLevel**: `number`

#### Returns

[`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L11)

## Properties

### IDs

> `private` **IDs**: (`string` \| `number`)[] = `[]`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:9](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L9)

***

### zoomLevel

> `private` **zoomLevel**: `number`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:8](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L8)

## Methods

### addID()

> **addID**(`id`): `void`

Adds ID of object in ply.

#### Parameters

• **id**: `string` \| `number`

#### Returns

`void`

#### Implementation of

[`IHierarchyToolZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md).[`addID`](../interfaces/IHierarchyToolZoomLevel.md#addid)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L19)

***

### getStringifiedIds()

> **getStringifiedIds**(): `string`[]

Returns all IDs in string format.

#### Returns

`string`[]

#### Implementation of

[`IHierarchyToolZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md).[`getStringifiedIds`](../interfaces/IHierarchyToolZoomLevel.md#getstringifiedids)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L23)

***

### getZoomLevel()

> **getZoomLevel**(): `number`

Retruns zoom level of this ply.

#### Returns

`number`

#### Implementation of

[`IHierarchyToolZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md).[`getZoomLevel`](../interfaces/IHierarchyToolZoomLevel.md#getzoomlevel)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyZoomLevel.ts#L15)
