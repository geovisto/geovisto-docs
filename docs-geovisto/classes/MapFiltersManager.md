**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapFiltersManager

# Class: MapFiltersManager

This class provide functions for using filters.

## Author

Jiri Hynek

## Extends

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

## Implements

- [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

## Constructors

### new MapFiltersManager()

> **new MapFiltersManager**(`filterOperations`): [`MapFiltersManager`](MapFiltersManager.md)

#### Parameters

• **filterOperations**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)[]

#### Returns

[`MapFiltersManager`](MapFiltersManager.md)

#### Overrides

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`constructor`](MapDomainArrayManager.md#constructors)

#### Source

[model/internal/filter/basic/MapFiltersManager.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFiltersManager.ts#L17)

## Methods

### add()

> **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

• **domains**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Returns

`void`

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`add`](../interfaces/IMapFilterManager.md#add)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`add`](MapDomainArrayManager.md#add)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

***

### createRule()

> **createRule**(`dataDomain`, `opName`, `pattern`): `null` \| [`IMapFilterRule`](../interfaces/IMapFilterRule.md)

The function creates a new filter rule using given operation label.
If operation does not exists it returns null.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **opName**: `string`

• **pattern**: `string`

#### Returns

`null` \| [`IMapFilterRule`](../interfaces/IMapFilterRule.md)

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`createRule`](../interfaces/IMapFilterManager.md#createrule)

#### Source

[model/internal/filter/basic/MapFiltersManager.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFiltersManager.ts#L29)

***

### filterData()

> **filterData**(`dataManager`, `dataRecords`, `filterRules`): [`IMapData`](../type-aliases/IMapData.md)

Takes a list of data and applies the given filter rules.
Returns a new list of the references to filtered data items.

TODO: define data records type

#### Parameters

• **dataManager**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

• **dataRecords**: [`IMapData`](../type-aliases/IMapData.md)

• **filterRules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`filterData`](../interfaces/IMapFilterManager.md#filterdata)

#### Source

[model/internal/filter/basic/MapFiltersManager.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFiltersManager.ts#L47)

***

### getDefault()

> **getDefault**(): `undefined` \| [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

The function returns the first domain of the array.

#### Returns

`undefined` \| [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`getDefault`](../interfaces/IMapFilterManager.md#getdefault)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDefault`](MapDomainArrayManager.md#getdefault)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

The function returns map domains of given type.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`getDomain`](../interfaces/IMapFilterManager.md#getdomain)

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

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`getDomainNames`](../interfaces/IMapFilterManager.md#getdomainnames)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomainNames`](MapDomainArrayManager.md#getdomainnames)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

***

### getDomains()

> **getDomains**(): [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)[]

The function returns available map domains.

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)[]

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`getDomains`](../interfaces/IMapFilterManager.md#getdomains)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomains`](MapDomainArrayManager.md#getdomains)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`isEmpty`](../interfaces/IMapFilterManager.md#isempty)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`isEmpty`](MapDomainArrayManager.md#isempty)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

***

### remove()

> **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domains**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Returns

`void`

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`remove`](../interfaces/IMapFilterManager.md#remove)

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

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`removeByName`](../interfaces/IMapFilterManager.md#removebyname)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`removeByName`](MapDomainArrayManager.md#removebyname)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

***

### size()

> **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

[`IMapFilterManager`](../interfaces/IMapFilterManager.md).[`size`](../interfaces/IMapFilterManager.md#size)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`size`](MapDomainArrayManager.md#size)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
