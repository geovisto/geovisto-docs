**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoJsonData

# Class: GeoJsonData

The interface declares function for management of geographical data.

## Author

Jiri Hynek

## Extends

- [`MapDomain`](MapDomain.md)

## Implements

- [`IGeoData`](../interfaces/IGeoData.md)

## Constructors

### new GeoJsonData()

> **new GeoJsonData**(`name`, `originalData`): [`GeoJsonData`](GeoJsonData.md)

#### Parameters

• **name**: `string`

• **originalData**: `unknown`

#### Returns

[`GeoJsonData`](GeoJsonData.md)

#### Overrides

[`MapDomain`](MapDomain.md).[`constructor`](MapDomain.md#constructors)

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L17)

## Properties

### geoJSON?

> `private` `optional` **geoJSON**: `any`

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L15)

***

### originalData

> `private` **originalData**: `unknown`

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L14)

## Methods

### getFeatures()

> **getFeatures**(`types`): `FeatureCollection`

It returns the array of features of specific type.

#### Parameters

• **types**: `string`[]

#### Returns

`FeatureCollection`

#### Implementation of

[`IGeoData`](../interfaces/IGeoData.md).[`getFeatures`](../interfaces/IGeoData.md#getfeatures)

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L44)

***

### getGeoJSON()

> **getGeoJSON**(): `FeatureCollection`

It returns the original representation of data domain.

#### Returns

`FeatureCollection`

#### Implementation of

[`IGeoData`](../interfaces/IGeoData.md).[`getGeoJSON`](../interfaces/IGeoData.md#getgeojson)

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L32)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IGeoData`](../interfaces/IGeoData.md).[`getName`](../interfaces/IGeoData.md#getname)

#### Inherited from

[`MapDomain`](MapDomain.md).[`getName`](MapDomain.md#getname)

#### Source

[model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L21)

***

### getOriginalGeoData()

> **getOriginalGeoData**(): `unknown`

It returns the original source of geographical data.

#### Returns

`unknown`

#### Implementation of

[`IGeoData`](../interfaces/IGeoData.md).[`getOriginalGeoData`](../interfaces/IGeoData.md#getoriginalgeodata)

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L25)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`MapDomain`](MapDomain.md).[`toString`](MapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)

***

### validateData()

> `protected` **validateData**(`originalData`): `FeatureCollection`

It transforms original data to a feature collection in the GeoJSON format.

#### Parameters

• **originalData**: `unknown`

#### Returns

`FeatureCollection`

GeoJSON feature collection

#### Source

[model/internal/geodata/geojson/GeoJsonData.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/geojson/GeoJsonData.ts#L66)
