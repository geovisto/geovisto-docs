**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / EqFilterOperation

# Class: EqFilterOperation

This class wraps the equals filter operation.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Constructors

### new EqFilterOperation()

> **new EqFilterOperation**(): [`EqFilterOperation`](EqFilterOperation.md)

It creates the equals filter operation.

#### Returns

[`EqFilterOperation`](EqFilterOperation.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/filter/custom/EqFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/EqFilterOperation.ts#L16)

## Methods

### getName()

> **getName**(): `string`

It returns the string label of the filter representing the operator.

#### Returns

`string`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`getName`](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[model/internal/filter/custom/EqFilterOperation.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/EqFilterOperation.ts#L23)

***

### match()

> **match**(`value`, `pattern`): `boolean`

It checks if a value equals to a pattern.

#### Parameters

• **value**: `unknown`

• **pattern**: `string`

#### Returns

`boolean`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`match`](../interfaces/IMapFilterOperation.md#match)

#### Source

[model/internal/filter/custom/EqFilterOperation.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/EqFilterOperation.ts#L33)

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
