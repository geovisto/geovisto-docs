[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDataManager

# Class: GeoDataManager

The class provides a basic implemention geographical data manager.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

  ↳ **`GeoDataManager`**

## Implements

- [`IGeoDataManager`](../modules.md#igeodatamanager)
- `IHierarchyManagerInterface`

## Table of contents

### Constructors

- [constructor](GeoDataManager.md#constructor)

### Properties

- [hierarchyEnabledStatus](GeoDataManager.md#hierarchyenabledstatus)
- [treesMap](GeoDataManager.md#treesmap)

### Methods

- [add](GeoDataManager.md#add)
- [enableHierarchy](GeoDataManager.md#enablehierarchy)
- [getActiveByTree](GeoDataManager.md#getactivebytree)
- [getChildsFromTree](GeoDataManager.md#getchildsfromtree)
- [getDefault](GeoDataManager.md#getdefault)
- [getDomain](GeoDataManager.md#getdomain)
- [getDomainNames](GeoDataManager.md#getdomainnames)
- [getDomains](GeoDataManager.md#getdomains)
- [getFeatures](GeoDataManager.md#getfeatures)
- [isEmpty](GeoDataManager.md#isempty)
- [isHierarchyEnabled](GeoDataManager.md#ishierarchyenabled)
- [isHierarchyEnabledForDomain](GeoDataManager.md#ishierarchyenabledfordomain)
- [remove](GeoDataManager.md#remove)
- [removeByName](GeoDataManager.md#removebyname)
- [setTree](GeoDataManager.md#settree)
- [size](GeoDataManager.md#size)
- [startTree](GeoDataManager.md#starttree)
- [treeAggregationFlag](GeoDataManager.md#treeaggregationflag)
- [updateTrees](GeoDataManager.md#updatetrees)

## Constructors

### constructor

• **new GeoDataManager**(`geoDataArray`): [`GeoDataManager`](GeoDataManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`GeoDataManager`](GeoDataManager.md)

#### Overrides

[MapDomainArrayManager](MapDomainArrayManager.md).[constructor](MapDomainArrayManager.md#constructor)

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L16)

## Properties

### hierarchyEnabledStatus

• `Private` **hierarchyEnabledStatus**: `boolean` = `false`

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L22)

___

### treesMap

• `Private` **treesMap**: `Map`\<`string`, `HierarchyTree`\>

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L23)

## Methods

### add

▸ **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | [`IGeoData`](../interfaces/IGeoData.md) |

#### Returns

`void`

#### Implementation of

IGeoDataManager.add

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[add](MapDomainArrayManager.md#add)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

___

### enableHierarchy

▸ **enableHierarchy**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

IHierarchyManagerInterface.enableHierarchy

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L25)

___

### getActiveByTree

▸ **getActiveByTree**(`domainName`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |

#### Returns

`string`[]

#### Implementation of

IHierarchyManagerInterface.getActiveByTree

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L99)

___

### getChildsFromTree

▸ **getChildsFromTree**(`domainName`, `objectID`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |
| `objectID` | `string` |

#### Returns

`string`[]

#### Implementation of

IHierarchyManagerInterface.getChildsFromTree

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L107)

___

### getDefault

▸ **getDefault**(): `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

The function returns the first domain of the array.

#### Returns

`undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

IGeoDataManager.getDefault

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDefault](MapDomainArrayManager.md#getdefault)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

The function returns map domains of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

IGeoDataManager.getDomain

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomain](MapDomainArrayManager.md#getdomain)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

IGeoDataManager.getDomainNames

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomainNames](MapDomainArrayManager.md#getdomainnames)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

___

### getDomains

▸ **getDomains**(): [`IGeoData`](../interfaces/IGeoData.md)[]

The function returns available map domains.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

IGeoDataManager.getDomains

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomains](MapDomainArrayManager.md#getdomains)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

___

### getFeatures

▸ **getFeatures**(`name`, `types`): `undefined` \| `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | `string`[] |

#### Returns

`undefined` \| `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Implementation of

IHierarchyManagerInterface.getFeatures

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L37)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

IGeoDataManager.isEmpty

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[isEmpty](MapDomainArrayManager.md#isempty)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

___

### isHierarchyEnabled

▸ **isHierarchyEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IHierarchyManagerInterface.isHierarchyEnabled

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L29)

___

### isHierarchyEnabledForDomain

▸ **isHierarchyEnabledForDomain**(`domainName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |

#### Returns

`boolean`

#### Implementation of

IHierarchyManagerInterface.isHierarchyEnabledForDomain

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L33)

___

### remove

▸ **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | [`IGeoData`](../interfaces/IGeoData.md) |

#### Returns

`void`

#### Implementation of

IGeoDataManager.remove

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[remove](MapDomainArrayManager.md#remove)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L65)

___

### removeByName

▸ **removeByName**(`id`): `void`

It removes a domain from the list of domains.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

IGeoDataManager.removeByName

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[removeByName](MapDomainArrayManager.md#removebyname)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

___

### setTree

▸ **setTree**(`domainName`, `nodes`, `aggregationEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |
| `nodes` | [`string`, `string` \| `boolean`, `number`][] |
| `aggregationEnabled` | `boolean` |

#### Returns

`void`

#### Implementation of

IHierarchyManagerInterface.setTree

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:72](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L72)

___

### size

▸ **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

IGeoDataManager.size

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[size](MapDomainArrayManager.md#size)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)

___

### startTree

▸ **startTree**(`domainName`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |
| `zoom` | `number` |

#### Returns

`void`

#### Implementation of

IHierarchyManagerInterface.startTree

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L80)

___

### treeAggregationFlag

▸ **treeAggregationFlag**(`domainName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |

#### Returns

`boolean`

#### Implementation of

IHierarchyManagerInterface.treeAggregationFlag

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L92)

___

### updateTrees

▸ **updateTrees**(`zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`void`

#### Implementation of

IHierarchyManagerInterface.updateTrees

#### Defined in

[src/model/internal/geodata/GeoDataManager.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataManager.ts#L86)
