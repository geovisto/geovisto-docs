**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / RegFilterOperation

# Class: RegFilterOperation

This class wraps the regex filter operation.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Constructors

### new RegFilterOperation()

> **new RegFilterOperation**(): [`RegFilterOperation`](RegFilterOperation.md)

It creates the regular expression filter operation.

#### Returns

[`RegFilterOperation`](RegFilterOperation.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/filter/custom/RegFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/RegFilterOperation.ts#L16)

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

[model/internal/filter/custom/RegFilterOperation.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/RegFilterOperation.ts#L23)

***

### match()

> **match**(`value`, `pattern`): `boolean`

It checks if a value match a regular expression pattern.

#### Parameters

• **value**: `unknown`

• **pattern**: `string`

#### Returns

`boolean`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`match`](../interfaces/IMapFilterOperation.md#match)

#### Source

[model/internal/filter/custom/RegFilterOperation.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/custom/RegFilterOperation.ts#L33)

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
