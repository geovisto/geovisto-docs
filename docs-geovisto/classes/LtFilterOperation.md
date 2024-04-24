**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LtFilterOperation

# Class: LtFilterOperation

This class wraps the less than filter operation.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Constructors

### new LtFilterOperation()

> **new LtFilterOperation**(): [`LtFilterOperation`](LtFilterOperation.md)

#### Returns

[`LtFilterOperation`](LtFilterOperation.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/filter/custom/LtFilterOperation.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/LtFilterOperation.ts#L13)

## Methods

### getName()

> **getName**(): `string`

It returns the string label of the filter representing operator.

#### Returns

`string`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`getName`](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[model/internal/filter/custom/LtFilterOperation.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/LtFilterOperation.ts#L20)

***

### match()

> **match**(`value`, `pattern`): `boolean`

It checks if value equals pattern.

#### Parameters

• **value**: `unknown`

• **pattern**: `string`

#### Returns

`boolean`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`match`](../interfaces/IMapFilterOperation.md#match)

#### Source

[model/internal/filter/custom/LtFilterOperation.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/LtFilterOperation.ts#L30)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDomain`](AbstractMapDomain.md).[`toString`](AbstractMapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
