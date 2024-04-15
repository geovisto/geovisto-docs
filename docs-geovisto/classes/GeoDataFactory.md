[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDataFactory

# Class: GeoDataFactory

This interface declares a factory for geographical data objects.

**`Author`**

Jiri Hynek

## Implements

- [`IGeoDataFactory`](../interfaces/IGeoDataFactory.md)

## Table of contents

### Constructors

- [constructor](GeoDataFactory.md#constructor)

### Methods

- [geojson](GeoDataFactory.md#geojson)

## Constructors

### constructor

• **new GeoDataFactory**(): [`GeoDataFactory`](GeoDataFactory.md)

#### Returns

[`GeoDataFactory`](GeoDataFactory.md)

## Methods

### geojson

▸ **geojson**(`name`, `data`): [`IGeoData`](../interfaces/IGeoData.md)

It creates the GeoJSON geographical data object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `unknown` |

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

[IGeoDataFactory](../interfaces/IGeoDataFactory.md).[geojson](../interfaces/IGeoDataFactory.md#geojson)

#### Defined in

[src/model/internal/geodata/GeoDataFactory.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/geodata/GeoDataFactory.ts#L15)
