**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DecimalScale

# Class: DecimalScale

This class provides the decimal scale.

## Author

Jiri Hynek

## Extends

- [`MapDomain`](MapDomain.md)

## Implements

- [`IScale`](../interfaces/IScale.md)

## Constructors

### new DecimalScale()

> **new DecimalScale**(): [`DecimalScale`](DecimalScale.md)

It initializes the scale.

#### Returns

[`DecimalScale`](DecimalScale.md)

#### Overrides

[`MapDomain`](MapDomain.md).[`constructor`](MapDomain.md#constructors)

#### Source

[tools/layers/choropleth/model/internal/scale/DecimalScale.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/scale/DecimalScale.ts#L18)

## Methods

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IScale`](../interfaces/IScale.md).[`getName`](../interfaces/IScale.md#getname)

#### Inherited from

[`MapDomain`](MapDomain.md).[`getName`](MapDomain.md#getname)

#### Source

[model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L21)

***

### getScale()

> **getScale**(`values`, `size`): `number`[]

It returns a scale which can be used for choropleth color levels.

#### Parameters

• **values**: `number`[]

• **size**: `number`

#### Returns

`number`[]

#### Implementation of

[`IScale`](../interfaces/IScale.md).[`getScale`](../interfaces/IScale.md#getscale)

#### Source

[tools/layers/choropleth/model/internal/scale/DecimalScale.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/scale/DecimalScale.ts#L35)

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

### TYPE()

> `static` **TYPE**(): `string`

Type of the scale.

#### Returns

`string`

#### Source

[tools/layers/choropleth/model/internal/scale/DecimalScale.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/scale/DecimalScale.ts#L25)
