[geovisto-map](../README.md) / [Exports](../modules.md) / GeoJsonData

# Class: GeoJsonData

The interface declares function for management of geographical data.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`GeoJsonData`**

## Implements

- [`IGeoData`](../interfaces/IGeoData.md)

## Table of contents

### Constructors

- [constructor](GeoJsonData.md#constructor)

### Properties

- [geoJSON](GeoJsonData.md#geojson)
- [originalData](GeoJsonData.md#originaldata)

### Methods

- [getFeatures](GeoJsonData.md#getfeatures)
- [getGeoJSON](GeoJsonData.md#getgeojson)
- [getName](GeoJsonData.md#getname)
- [getOriginalGeoData](GeoJsonData.md#getoriginalgeodata)
- [toString](GeoJsonData.md#tostring)
- [validateData](GeoJsonData.md#validatedata)

## Constructors

### constructor

• **new GeoJsonData**(`name`, `originalData`): [`GeoJsonData`](GeoJsonData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `originalData` | `unknown` |

#### Returns

[`GeoJsonData`](GeoJsonData.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L17)

## Properties

### geoJSON

• `Private` `Optional` **geoJSON**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L15)

___

### originalData

• `Private` **originalData**: `unknown`

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L14)

## Methods

### getFeatures

▸ **getFeatures**(`types`): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the array of features of specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | `string`[] |

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Implementation of

[IGeoData](../interfaces/IGeoData.md).[getFeatures](../interfaces/IGeoData.md#getfeatures)

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L44)

___

### getGeoJSON

▸ **getGeoJSON**(): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the original representation of data domain.

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Implementation of

[IGeoData](../interfaces/IGeoData.md).[getGeoJSON](../interfaces/IGeoData.md#getgeojson)

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L32)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IGeoData](../interfaces/IGeoData.md).[getName](../interfaces/IGeoData.md#getname)

#### Inherited from

[MapDomain](MapDomain.md).[getName](MapDomain.md#getname)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L21)

___

### getOriginalGeoData

▸ **getOriginalGeoData**(): `unknown`

It returns the original source of geographical data.

#### Returns

`unknown`

#### Implementation of

[IGeoData](../interfaces/IGeoData.md).[getOriginalGeoData](../interfaces/IGeoData.md#getoriginalgeodata)

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L25)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[MapDomain](MapDomain.md).[toString](MapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)

___

### validateData

▸ **validateData**(`originalData`): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It transforms original data to a feature collection in the GeoJSON format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalData` | `unknown` |

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

GeoJSON feature collection

#### Defined in

[src/model/internal/geodata/geojson/GeoJsonData.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/geojson/GeoJsonData.ts#L66)
