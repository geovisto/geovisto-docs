[geovisto-map](../README.md) / [Exports](../modules.md) / IGeoDataFactory

# Interface: IGeoDataFactory

This interface declares a factory for geographical data objects.

**`Author`**

Jiri Hynek

## Implemented by

- [`GeoDataFactory`](../classes/GeoDataFactory.md)

## Table of contents

### Methods

- [geojson](IGeoDataFactory.md#geojson)

## Methods

### geojson

▸ **geojson**(`name`, `data`): [`IGeoData`](IGeoData.md)

It creates the GeoJSON geographical data object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `unknown` |

#### Returns

[`IGeoData`](IGeoData.md)

#### Defined in

[src/model/types/geodata/IGeoDataFactory.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoDataFactory.ts#L13)
