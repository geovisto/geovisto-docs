**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDataFactory

# Class: GeoDataFactory

This interface declares a factory for geographical data objects.

## Author

Jiri Hynek

## Implements

- [`IGeoDataFactory`](../interfaces/IGeoDataFactory.md)

## Constructors

### new GeoDataFactory()

> **new GeoDataFactory**(): [`GeoDataFactory`](GeoDataFactory.md)

#### Returns

[`GeoDataFactory`](GeoDataFactory.md)

## Methods

### geojson()

> **geojson**(`name`, `data`): [`IGeoData`](../interfaces/IGeoData.md)

It creates the GeoJSON geographical data object.

#### Parameters

• **name**: `string`

• **data**: `unknown`

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)

#### Implementation of

[`IGeoDataFactory`](../interfaces/IGeoDataFactory.md).[`geojson`](../interfaces/IGeoDataFactory.md#geojson)

#### Source

[model/internal/geodata/GeoDataFactory.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/geodata/GeoDataFactory.ts#L15)
