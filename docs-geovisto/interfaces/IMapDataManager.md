**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDataManager

# Interface: IMapDataManager

The interface declares map data domain manager which and data wrapper.

## Author

Jiri Hynek

## Extends

- [`IMapDomainManager`](IMapDomainManager.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

## Methods

### getDataRecordValues()

> **getDataRecordValues**(`dataDomain`, `dataRecord`): `unknown`[]

It returns values stored of the selected data domain stored in the given data record.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](IMapDataDomain.md)

• **dataRecord**: [`IMapDataRecord`](../type-aliases/IMapDataRecord.md)

#### Returns

`unknown`[]

#### Source

[model/types/data/IMapDataManager.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/data/IMapDataManager.ts#L44)

***

### getDataRecords()

> **getDataRecords**(): [`IMapData`](../type-aliases/IMapData.md)

It returns the preprocessed data as a list of data reconds of the *same* object type.

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Source

[model/types/data/IMapDataManager.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/data/IMapDataManager.ts#L21)

***

### getDataRecordsValues()

> **getDataRecordsValues**(`dataDomain`, `dataRecords`): `unknown`[]

It returns list of all values of the selected data domain stored in the given data records.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](IMapDataDomain.md)

• **dataRecords**: [`IMapData`](../type-aliases/IMapData.md)

#### Returns

`unknown`[]

#### Source

[model/types/data/IMapDataManager.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/data/IMapDataManager.ts#L36)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IMapDataDomain`](IMapDataDomain.md)

The function returns map domains of given name.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IMapDataDomain`](IMapDataDomain.md)

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomain`](IMapDomainManager.md#getdomain)

#### Source

[model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L27)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomainNames`](IMapDomainManager.md#getdomainnames)

#### Source

[model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L20)

***

### getDomains()

> **getDomains**(): `undefined` \| [`IMapDataDomain`](IMapDataDomain.md)[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| [`IMapDataDomain`](IMapDataDomain.md)[]

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomains`](IMapDomainManager.md#getdomains)

#### Source

[model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L13)

***

### getOriginalData()

> **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Source

[model/types/data/IMapDataManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/data/IMapDataManager.ts#L16)

***

### getValues()

> **getValues**(`dataDomain`): `unknown`[]

It returns list of all values of the selected data domain.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](IMapDataDomain.md)

#### Returns

`unknown`[]

#### Source

[model/types/data/IMapDataManager.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/data/IMapDataManager.ts#L28)
