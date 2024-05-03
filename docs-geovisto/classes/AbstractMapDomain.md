**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapDomain

# Class: `abstract` AbstractMapDomain

The abstract implementation of map domain which overrides toString function.

## Author

Jiri Hynek

## Extended by

- [`AbstractMapDimension`](AbstractMapDimension.md)
- [`MapDomain`](MapDomain.md)
- [`MapFilterOperation`](MapFilterOperation.md)
- [`EqFilterOperation`](EqFilterOperation.md)
- [`GtEqFilterOperation`](GtEqFilterOperation.md)
- [`GtFilterOperation`](GtFilterOperation.md)
- [`LtEqFilterOperation`](LtEqFilterOperation.md)
- [`LtFilterOperation`](LtFilterOperation.md)
- [`NeqFilterOperation`](NeqFilterOperation.md)
- [`RegFilterOperation`](RegFilterOperation.md)
- [`BasicTheme`](BasicTheme.md)

## Implements

- [`IMapDomain`](../interfaces/IMapDomain.md)

## Constructors

### new AbstractMapDomain()

> **new AbstractMapDomain**(): [`AbstractMapDomain`](AbstractMapDomain.md)

#### Returns

[`AbstractMapDomain`](AbstractMapDomain.md)

## Methods

### getName()

> `abstract` **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IMapDomain`](../interfaces/IMapDomain.md).[`getName`](../interfaces/IMapDomain.md#getname)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L13)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
