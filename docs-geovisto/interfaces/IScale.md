**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IScale

# Interface: IScale

This interface declares functions for using choropleth scale.

## Author

Jiri Hynek

## Extends

- [`IMapDomain`](IMapDomain.md)

## Methods

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getScale()

> **getScale**(`values`, `size`): `number`[]

It returns a scale which can be used for choropleth color levels.

#### Parameters

• **values**: `number`[]

• **size**: `number`

#### Returns

`number`[]

#### Source

[tools/layers/choropleth/model/types/scale/IScale.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/scale/IScale.ts#L18)
