**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDataManager

# Class: GeoDataManager

The class provides a basic implemention geographical data manager.

## Author

Jiri Hynek

## Extends

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

## Implements

- [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)
- `IHierarchyManagerInterface`

## Constructors

### new GeoDataManager()

> **new GeoDataManager**(`geoDataArray`): [`GeoDataManager`](GeoDataManager.md)

#### Parameters

• **geoDataArray**: [`IGeoData`](../interfaces/IGeoData.md)[]

#### Returns

[`GeoDataManager`](GeoDataManager.md)

#### Overrides

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`constructor`](MapDomainArrayManager.md#constructors)

#### Source

[model/internal/geodata/GeoDataManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L16)

## Properties

### hierarchyEnabledStatus

> `private` **hierarchyEnabledStatus**: `boolean` = `false`

#### Source

[model/internal/geodata/GeoDataManager.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L22)

***

### treesMap

> `private` **treesMap**: `Map`\<`string`, `HierarchyTree`\>

#### Source

[model/internal/geodata/GeoDataManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L23)

## Methods

### add()

> **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

• **domains**: [`IGeoData`](../interfaces/IGeoData.md)

#### Returns

`void`

#### Implementation of

`IGeoDataManager.add`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`add`](MapDomainArrayManager.md#add)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

***

### enableHierarchy()

> **enableHierarchy**(`enabled`): `void`

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

`IHierarchyManagerInterface.enableHierarchy`

#### Source

[model/internal/geodata/GeoDataManager.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L25)

***

### getActiveByTree()

> **getActiveByTree**(`domainName`): `string`[]

#### Parameters

• **domainName**: `string`

#### Returns

`string`[]

#### Implementation of

`IHierarchyManagerInterface.getActiveByTree`

#### Source

[model/internal/geodata/GeoDataManager.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L99)

***

### getChildsFromTree()

> **getChildsFromTree**(`domainName`, `objectID`): `string`[]

#### Parameters

• **domainName**: `string`

• **objectID**: `string`

#### Returns

`string`[]

#### Implementation of

`IHierarchyManagerInterface.getChildsFromTree`

#### Source

[model/internal/geodata/GeoDataManager.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L107)

***

### getDefault()

> **getDefault**(): `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

The function returns the first domain of the array.

#### Returns

`undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

`IGeoDataManager.getDefault`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDefault`](MapDomainArrayManager.md#getdefault)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

The function returns map domains of given type.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

`IGeoDataManager.getDomain`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomain`](MapDomainArrayManager.md#getdomain)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

`IGeoDataManager.getDomainNames`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomainNames`](MapDomainArrayManager.md#getdomainnames)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

***

### getDomains()

> **getDomains**(): [`IGeoData`](../interfaces/IGeoData.md)[]

The function returns available map domains.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

`IGeoDataManager.getDomains`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomains`](MapDomainArrayManager.md#getdomains)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

***

### getFeatures()

> **getFeatures**(`name`, `types`): `any`

#### Parameters

• **name**: `string`

• **types**: `string`[]

#### Returns

`any`

#### Implementation of

`IHierarchyManagerInterface.getFeatures`

#### Source

[model/internal/geodata/GeoDataManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L37)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

`IGeoDataManager.isEmpty`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`isEmpty`](MapDomainArrayManager.md#isempty)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

***

### isHierarchyEnabled()

> **isHierarchyEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

`IHierarchyManagerInterface.isHierarchyEnabled`

#### Source

[model/internal/geodata/GeoDataManager.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L29)

***

### isHierarchyEnabledForDomain()

> **isHierarchyEnabledForDomain**(`domainName`): `boolean`

#### Parameters

• **domainName**: `string`

#### Returns

`boolean`

#### Implementation of

`IHierarchyManagerInterface.isHierarchyEnabledForDomain`

#### Source

[model/internal/geodata/GeoDataManager.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L33)

***

### remove()

> **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domains**: [`IGeoData`](../interfaces/IGeoData.md)

#### Returns

`void`

#### Implementation of

`IGeoDataManager.remove`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`remove`](MapDomainArrayManager.md#remove)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L65)

***

### removeByName()

> **removeByName**(`id`): `void`

It removes a domain from the list of domains.

Override this function.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

`IGeoDataManager.removeByName`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`removeByName`](MapDomainArrayManager.md#removebyname)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

***

### setTree()

> **setTree**(`domainName`, `nodes`, `aggregationEnabled`): `void`

#### Parameters

• **domainName**: `string`

• **nodes**: [`string`, `string` \| `boolean`, `number`][]

• **aggregationEnabled**: `boolean`

#### Returns

`void`

#### Implementation of

`IHierarchyManagerInterface.setTree`

#### Source

[model/internal/geodata/GeoDataManager.ts:72](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L72)

***

### size()

> **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

`IGeoDataManager.size`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`size`](MapDomainArrayManager.md#size)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)

***

### startTree()

> **startTree**(`domainName`, `zoom`): `void`

#### Parameters

• **domainName**: `string`

• **zoom**: `number`

#### Returns

`void`

#### Implementation of

`IHierarchyManagerInterface.startTree`

#### Source

[model/internal/geodata/GeoDataManager.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L80)

***

### treeAggregationFlag()

> **treeAggregationFlag**(`domainName`): `boolean`

#### Parameters

• **domainName**: `string`

#### Returns

`boolean`

#### Implementation of

`IHierarchyManagerInterface.treeAggregationFlag`

#### Source

[model/internal/geodata/GeoDataManager.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L92)

***

### updateTrees()

> **updateTrees**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Implementation of

`IHierarchyManagerInterface.updateTrees`

#### Source

[model/internal/geodata/GeoDataManager.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataManager.ts#L86)
