**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / InfoDataManager

# Class: InfoDataManager

The class provides a basic implemention info data manager.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IInfoData`](../interfaces/IInfoData.md)\>

## Implements

- [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

## Constructors

### new InfoDataManager()

> **new InfoDataManager**(`infoDataArray`): [`InfoDataManager`](InfoDataManager.md)

#### Parameters

• **infoDataArray**: [`IInfoData`](../interfaces/IInfoData.md)[]

#### Returns

[`InfoDataManager`](InfoDataManager.md)

#### Overrides

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`constructor`](MapDomainArrayManager.md#constructors)

#### Source

[tools/info/model/internal/infodata/InfoDataManager.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/InfoDataManager.ts#L17)

## Methods

### add()

> **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

• **domains**: [`IInfoData`](../interfaces/IInfoData.md)

#### Returns

`void`

#### Implementation of

`IInfoDataManager.add`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`add`](MapDomainArrayManager.md#add)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

***

### getDefault()

> **getDefault**(): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

The function returns the first domain of the array.

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

`IInfoDataManager.getDefault`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDefault`](MapDomainArrayManager.md#getdefault)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

The function returns map domains of given type.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

`IInfoDataManager.getDomain`

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

`IInfoDataManager.getDomainNames`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomainNames`](MapDomainArrayManager.md#getdomainnames)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

***

### getDomains()

> **getDomains**(): [`IInfoData`](../interfaces/IInfoData.md)[]

The function returns available map domains.

#### Returns

[`IInfoData`](../interfaces/IInfoData.md)[]

#### Implementation of

`IInfoDataManager.getDomains`

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

`IInfoDataManager.isEmpty`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`isEmpty`](MapDomainArrayManager.md#isempty)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

***

### remove()

> **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domains**: [`IInfoData`](../interfaces/IInfoData.md)

#### Returns

`void`

#### Implementation of

`IInfoDataManager.remove`

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

`IInfoDataManager.removeByName`

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

`IInfoDataManager.size`

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`size`](MapDomainArrayManager.md#size)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
