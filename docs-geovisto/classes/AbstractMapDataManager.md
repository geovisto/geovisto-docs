**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapDataManager

# Class: `abstract` AbstractMapDataManager

The class wraps data used by the map, its metadata and functions to acquire data items.

## Author

Jiri Hynek

## Extended by

- [`JsonMapDataManager`](JsonMapDataManager.md)

## Implements

- [`IMapDataManager`](../interfaces/IMapDataManager.md)

## Constructors

### new AbstractMapDataManager()

> **new AbstractMapDataManager**(`data`): [`AbstractMapDataManager`](AbstractMapDataManager.md)

It initializes the data wrapper providing a basic API.

#### Parameters

• **data**: `unknown`

#### Returns

[`AbstractMapDataManager`](AbstractMapDataManager.md)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L20)

## Properties

### data

> `private` **data**: `unknown`

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L13)

## Methods

### getDataRecordValues()

> `abstract` **getDataRecordValues**(`dataDomain`, `dataRecord`): `unknown`[]

It returns values stored of the selected data domain stored in the given data record.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **dataRecord**: [`IMapDataRecord`](../type-aliases/IMapDataRecord.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecordValues`](../interfaces/IMapDataManager.md#getdatarecordvalues)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L92)

***

### getDataRecords()

> `abstract` **getDataRecords**(): [`IMapData`](../type-aliases/IMapData.md)

It returns the preprocessed data as a list of data reconds of the *same* object type.

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecords`](../interfaces/IMapDataManager.md#getdatarecords)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L34)

***

### getDataRecordsValues()

> `abstract` **getDataRecordsValues**(`dataDomain`, `data`): `unknown`[]

It returns list of all values of the selected data domain stored in the given data records.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **data**: [`IMapData`](../type-aliases/IMapData.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecordsValues`](../interfaces/IMapDataManager.md#getdatarecordsvalues)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:84](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L84)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the data domain which corresponds to the given string
or creates a new one.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomain`](../interfaces/IMapDataManager.md#getdomain)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L66)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

Help function which returns the list of data domain string name.

#### Returns

`string`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomainNames`](../interfaces/IMapDataManager.md#getdomainnames)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L51)

***

### getDomains()

> `abstract` **getDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

It returns list of data domains.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomains`](../interfaces/IMapDataManager.md#getdomains)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L39)

***

### getOriginalData()

> **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getOriginalData`](../interfaces/IMapDataManager.md#getoriginaldata)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L27)

***

### getValues()

> `abstract` **getValues**(`dataDomain`): `unknown`[]

It returns list of all values of the selected data domain.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getValues`](../interfaces/IMapDataManager.md#getvalues)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L46)
