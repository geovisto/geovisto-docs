**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / JsonMapDataManager

# Class: JsonMapDataManager

A data wrapper which provides a basic flattening of JSON data structure.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDataManager`](AbstractMapDataManager.md)

## Implements

- [`IMapDataManager`](../interfaces/IMapDataManager.md)

## Constructors

### new JsonMapDataManager()

> **new JsonMapDataManager**(`data`): [`JsonMapDataManager`](JsonMapDataManager.md)

It creates JSON data manager

#### Parameters

• **data**: `unknown`

#### Returns

[`JsonMapDataManager`](JsonMapDataManager.md)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`constructor`](AbstractMapDataManager.md#constructors)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L34)

## Properties

### dataDomains?

> `private` `optional` **dataDomains**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

The list is initialized when required.

#### Source

[model/internal/data/json/JsonMapDataManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L27)

***

### dataRecords?

> `private` `optional` **dataRecords**: [`IMapData`](../type-aliases/IMapData.md)

The list is initialized when required.

#### Source

[model/internal/data/json/JsonMapDataManager.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L22)

## Methods

### createDataDomains()

> `protected` **createDataDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

Help function which analyzes data and creates its metedata description.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Source

[model/internal/data/json/JsonMapDataManager.ts:140](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L140)

***

### createDataRecords()

> `protected` **createDataRecords**(`data`): [`IMapData`](../type-aliases/IMapData.md)

Help function which converts data to the flat structure.

#### Parameters

• **data**: `unknown`

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:202](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L202)

***

### getDataRecordValues()

> **getDataRecordValues**(`dataDomain`, `dataRecord`): `unknown`[]

It returns values stored of the selected data domain stored in the given data record.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **dataRecord**: [`IMapDataRecord`](../type-aliases/IMapDataRecord.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecordValues`](../interfaces/IMapDataManager.md#getdatarecordvalues)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDataRecordValues`](AbstractMapDataManager.md#getdatarecordvalues)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L127)

***

### getDataRecords()

> **getDataRecords**(): [`IMapData`](../type-aliases/IMapData.md)

It returns preprocessed flattened data.

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecords`](../interfaces/IMapDataManager.md#getdatarecords)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDataRecords`](AbstractMapDataManager.md#getdatarecords)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L48)

***

### getDataRecordsValues()

> **getDataRecordsValues**(`dataDomain`, `dataRecords`): `unknown`[]

It returns list of all values of the selected data domain
for the given subset of data.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **dataRecords**: [`IMapData`](../type-aliases/IMapData.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDataRecordsValues`](../interfaces/IMapDataManager.md#getdatarecordsvalues)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDataRecordsValues`](AbstractMapDataManager.md#getdatarecordsvalues)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L102)

***

### getDomain()

> **getDomain**(`name`): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the data domain which corresponds to the given string.

If data domain does not exists it creates a new one (to avoid undefined return value)

#### Parameters

• **name**: `string`

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomain`](../interfaces/IMapDataManager.md#getdomain)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDomain`](AbstractMapDataManager.md#getdomain)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L81)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

Help function which returns the list of data domain string name.

#### Returns

`string`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomainNames`](../interfaces/IMapDataManager.md#getdomainnames)

#### Inherited from

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDomainNames`](AbstractMapDataManager.md#getdomainnames)

#### Source

[model/internal/data/abstract/AbstractMapDataManager.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataManager.ts#L51)

***

### getDomains()

> **getDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

It returns list of data domains (IMapDataDomain) representing data dimensions e. g.:
[
  [ 'value' ],
  [ 'source', 'ip' ],
  [ 'source', 'country' ],
  [ 'target', 'ip' ],
  [ 'target', 'country' ]
]

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getDomains`](../interfaces/IMapDataManager.md#getdomains)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getDomains`](AbstractMapDataManager.md#getdomains)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L66)

***

### getOriginalData()

> **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getOriginalData`](../interfaces/IMapDataManager.md#getoriginaldata)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getOriginalData`](AbstractMapDataManager.md#getoriginaldata)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L41)

***

### getValues()

> **getValues**(`dataDomain`): `unknown`[]

It returns list of all values of the selected data domain.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Returns

`unknown`[]

#### Implementation of

[`IMapDataManager`](../interfaces/IMapDataManager.md).[`getValues`](../interfaces/IMapDataManager.md#getvalues)

#### Overrides

[`AbstractMapDataManager`](AbstractMapDataManager.md).[`getValues`](AbstractMapDataManager.md#getvalues)

#### Source

[model/internal/data/json/JsonMapDataManager.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L91)

***

### processDataDomainDescription()

> `protected` **processDataDomainDescription**(`result`, `actRecord`, `domainDescription`, `i`): `void`

Static help function represents a step of recursive data processing searching data items.

#### Parameters

• **result**: `unknown`[]

• **actRecord**: [`IMapDataRecordItem`](../type-aliases/IMapDataRecordItem.md)

• **domainDescription**: `string`[]

• **i**: `number`

#### Returns

`void`

#### Source

[model/internal/data/json/JsonMapDataManager.ts:287](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataManager.ts#L287)
