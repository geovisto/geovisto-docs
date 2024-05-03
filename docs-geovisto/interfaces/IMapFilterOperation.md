**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapFilterOperation

# Interface: IMapFilterOperation

This interface declares a filter operation.

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

### match()

> **match**(`value`, `pattern`): `boolean`

It performs the filter operation which compare a value with a pattern.

#### Parameters

• **value**: `unknown`

• **pattern**: `unknown`

#### Returns

`boolean`

#### Source

[model/types/filter/IMapFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterOperation.ts#L16)
