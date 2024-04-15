[geovisto-map](../README.md) / [Exports](../modules.md) / IGeoData

# Interface: IGeoData

The interface declares functions for management of geographical data.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IGeoData`**

## Implemented by

- [`GeoJsonData`](../classes/GeoJsonData.md)

## Table of contents

### Methods

- [getFeatures](IGeoData.md#getfeatures)
- [getGeoJSON](IGeoData.md#getgeojson)
- [getName](IGeoData.md#getname)
- [getOriginalGeoData](IGeoData.md#getoriginalgeodata)

## Methods

### getFeatures

▸ **getFeatures**(`type`): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the array of features of specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string`[] |

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Defined in

[src/model/types/geodata/IGeoData.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L29)

___

### getGeoJSON

▸ **getGeoJSON**(): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the original representation of data domain.

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Defined in

[src/model/types/geodata/IGeoData.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L22)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

___

### getOriginalGeoData

▸ **getOriginalGeoData**(): `unknown`

It returns the original source of geographical data.

#### Returns

`unknown`

#### Defined in

[src/model/types/geodata/IGeoData.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L17)
