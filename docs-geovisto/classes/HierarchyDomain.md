[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyDomain

# Class: HierarchyDomain

Holds everything about domais hierarchy

**`Author`**

Vojtěch Malý

## Implements

- [`IHierarchyToolDomain`](../interfaces/IHierarchyToolDomain.md)

## Table of contents

### Constructors

- [constructor](HierarchyDomain.md#constructor)

### Properties

- [aggregationEnabled](HierarchyDomain.md#aggregationenabled)
- [cached](HierarchyDomain.md#cached)
- [levelsMap](HierarchyDomain.md#levelsmap)
- [lowestChildMap](HierarchyDomain.md#lowestchildmap)
- [name](HierarchyDomain.md#name)
- [nodes](HierarchyDomain.md#nodes)
- [parentChild](HierarchyDomain.md#parentchild)
- [parentChildMap](HierarchyDomain.md#parentchildmap)
- [zoomLevels](HierarchyDomain.md#zoomlevels)

### Methods

- [addToLevel](HierarchyDomain.md#addtolevel)
- [getHierarchyMap](HierarchyDomain.md#gethierarchymap)
- [getLevelByZoom](HierarchyDomain.md#getlevelbyzoom)
- [getName](HierarchyDomain.md#getname)
- [getNodes](HierarchyDomain.md#getnodes)
- [getParentChild](HierarchyDomain.md#getparentchild)
- [mapResolveGet](HierarchyDomain.md#mapresolveget)
- [setParentChild](HierarchyDomain.md#setparentchild)
- [setParentChildMap](HierarchyDomain.md#setparentchildmap)
- [setZoomLevels](HierarchyDomain.md#setzoomlevels)

## Constructors

### constructor

• **new HierarchyDomain**(`name`): [`HierarchyDomain`](HierarchyDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`HierarchyDomain`](HierarchyDomain.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L28)

## Properties

### aggregationEnabled

• **aggregationEnabled**: `boolean` = `false`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L24)

___

### cached

• `Private` **cached**: `boolean` = `false`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L22)

___

### levelsMap

• `Private` **levelsMap**: `Map`\<`number`, [`HierarchyZoomLevel`](HierarchyZoomLevel.md)\>

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L13)

___

### lowestChildMap

• **lowestChildMap**: `Map`\<`string`, `string`[]\>

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L20)

___

### name

• `Private` **name**: `string`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L11)

___

### nodes

• **nodes**: [`string`, `string` \| `boolean`, `number`][] = `[]`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L26)

___

### parentChild

• `Private` **parentChild**: [`string`, `string`][] = `[]`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L16)

___

### parentChildMap

• `Private` **parentChildMap**: `Map`\<`string`, `string`[]\>

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L15)

___

### zoomLevels

• `Private` **zoomLevels**: `number`[] = `[]`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L18)

## Methods

### addToLevel

▸ **addToLevel**(`level`, `id`): `void`

Adds new object to certain zoom level

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Zoom level |
| `id` | `string` \| `number` | Id of added object. |

#### Returns

`void`

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[addToLevel](../interfaces/IHierarchyToolDomain.md#addtolevel)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L77)

___

### getHierarchyMap

▸ **getHierarchyMap**(): `Map`\<`string`, `string`[]\>

Returnes lowest child map.

#### Returns

`Map`\<`string`, `string`[]\>

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[getHierarchyMap](../interfaces/IHierarchyToolDomain.md#gethierarchymap)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L93)

___

### getLevelByZoom

▸ **getLevelByZoom**(`zoom`): `undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

Based on zoom level returns object of hierarchyZoomLevel

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`undefined` \| [`HierarchyZoomLevel`](HierarchyZoomLevel.md)

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[getLevelByZoom](../interfaces/IHierarchyToolDomain.md#getlevelbyzoom)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L39)

___

### getName

▸ **getName**(): `string`

Returns name of a domain.

#### Returns

`string`

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[getName](../interfaces/IHierarchyToolDomain.md#getname)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:176](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L176)

___

### getNodes

▸ **getNodes**(): [`string`, `string` \| `boolean`, `number`][]

Return node array where:
[childID, parentID or True if parent, ZoomLevel of change]

#### Returns

[`string`, `string` \| `boolean`, `number`][]

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[getNodes](../interfaces/IHierarchyToolDomain.md#getnodes)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L32)

___

### getParentChild

▸ **getParentChild**(): [`string`, `string`][]

Get parent child array

#### Returns

[`string`, `string`][]

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[getParentChild](../interfaces/IHierarchyToolDomain.md#getparentchild)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:160](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L160)

___

### mapResolveGet

▸ **mapResolveGet**(`toResolve`): `string`[]

Resolve and get all lowest childrens of passed objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toResolve` | `string`[] | Ids of objects to resolve |

#### Returns

`string`[]

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L114)

___

### setParentChild

▸ **setParentChild**(`parentChild`): `void`

Set parentChild array

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentChild` | [`string`, `string`][] |

#### Returns

`void`

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[setParentChild](../interfaces/IHierarchyToolDomain.md#setparentchild)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:144](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L144)

___

### setParentChildMap

▸ **setParentChildMap**(`map`): `void`

Set parentChild Map

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`\<`string`, `string`[]\> |

#### Returns

`void`

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[setParentChildMap](../interfaces/IHierarchyToolDomain.md#setparentchildmap)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:152](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L152)

___

### setZoomLevels

▸ **setZoomLevels**(`zoomLevels`): `void`

Sets level of all defined zoom levels

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomLevels` | `number`[] |

#### Returns

`void`

#### Implementation of

[IHierarchyToolDomain](../interfaces/IHierarchyToolDomain.md).[setZoomLevels](../interfaces/IHierarchyToolDomain.md#setzoomlevels)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts:168](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyDomain.ts#L168)
