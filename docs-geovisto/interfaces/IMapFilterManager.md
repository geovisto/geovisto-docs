**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapFilterManager

# Interface: IMapFilterManager

This interface declares functions for using filters.

## Author

Jiri Hynek

## Extends

- [`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

## Methods

### add()

> **add**(`domain`): `void`

It adds a domain to the list of domains.

#### Parameters

• **domain**: [`IMapFilterOperation`](IMapFilterOperation.md)

#### Returns

`void`

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`add`](IMapDomainArrayManager.md#add)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L31)

***

### createRule()

> **createRule**(`dataDomain`, `opName`, `pattern`): `null` \| [`IMapFilterRule`](IMapFilterRule.md)

The function creates a new filter rule using given operation label.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](IMapDataDomain.md)

• **opName**: `string`

• **pattern**: `string`

#### Returns

`null` \| [`IMapFilterRule`](IMapFilterRule.md)

#### Source

[model/types/filter/IMapFilterManager.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterManager.ts#L22)

***

### filterData()

> **filterData**(`dataManager`, `dataRecords`, `filterRules`): [`IMapData`](../type-aliases/IMapData.md)

Takes a list of data and applies the given filter rules.
Returns a new list of the references to filtered data items.

TODO: define data records type

#### Parameters

• **dataManager**: [`IMapDataManager`](IMapDataManager.md)

• **dataRecords**: [`IMapData`](../type-aliases/IMapData.md)

• **filterRules**: [`IMapFilterRule`](IMapFilterRule.md)[]

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Source

[model/types/filter/IMapFilterManager.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterManager.ts#L34)

***

### getDefault()

> **getDefault**(): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

The function returns the default map domain.

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`getDefault`](IMapDomainArrayManager.md#getdefault)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L14)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

The function returns map domains of given name.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`getDomain`](IMapDomainArrayManager.md#getdomain)

#### Source

[model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L27)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`getDomainNames`](IMapDomainArrayManager.md#getdomainnames)

#### Source

[model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L20)

***

### getDomains()

> **getDomains**(): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)[]

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`getDomains`](IMapDomainArrayManager.md#getdomains)

#### Source

[model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L13)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`isEmpty`](IMapDomainArrayManager.md#isempty)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L24)

***

### remove()

> **remove**(`domain`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domain**: [`IMapFilterOperation`](IMapFilterOperation.md)

#### Returns

`void`

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`remove`](IMapDomainArrayManager.md#remove)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L38)

***

### removeByName()

> **removeByName**(`name`): `void`

It removes domain of the given name from the list of domains.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`removeByName`](IMapDomainArrayManager.md#removebyname)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L45)

***

### size()

> **size**(): `number`

The function returns the number of domains.

#### Returns

`number`

#### Inherited from

[`IMapDomainArrayManager`](IMapDomainArrayManager.md).[`size`](IMapDomainArrayManager.md#size)

#### Source

[model/types/domain/IMapDomainArrayManager.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L19)
