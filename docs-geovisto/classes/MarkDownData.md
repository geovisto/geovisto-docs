**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkDownData

# Class: MarkDownData

The interface declares function for management of info data.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`MapDomain`](MapDomain.md)

## Implements

- [`IInfoData`](../interfaces/IInfoData.md)

## Constructors

### new MarkDownData()

> **new MarkDownData**(`name`, `originalData`): [`MarkDownData`](MarkDownData.md)

#### Parameters

• **name**: `string`

• **originalData**: `string`

#### Returns

[`MarkDownData`](MarkDownData.md)

#### Overrides

[`MapDomain`](MapDomain.md).[`constructor`](MapDomain.md#constructors)

#### Source

[tools/info/model/internal/infodata/markdown/MarkDownData.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L16)

## Properties

### MarkDown?

> `private` `optional` **MarkDown**: `string`

#### Source

[tools/info/model/internal/infodata/markdown/MarkDownData.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L14)

***

### originalData

> `private` **originalData**: `string`

#### Source

[tools/info/model/internal/infodata/markdown/MarkDownData.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L13)

## Methods

### getInfoMD()

> **getInfoMD**(): `string`

It returns the original representation of data domain.

#### Returns

`string`

#### Implementation of

[`IInfoData`](../interfaces/IInfoData.md).[`getInfoMD`](../interfaces/IInfoData.md#getinfomd)

#### Source

[tools/info/model/internal/infodata/markdown/MarkDownData.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L31)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IInfoData`](../interfaces/IInfoData.md).[`getName`](../interfaces/IInfoData.md#getname)

#### Inherited from

[`MapDomain`](MapDomain.md).[`getName`](MapDomain.md#getname)

#### Source

[model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L21)

***

### getOriginalInfoData()

> **getOriginalInfoData**(): `unknown`

It returns the original source of info data.

#### Returns

`unknown`

#### Implementation of

[`IInfoData`](../interfaces/IInfoData.md).[`getOriginalInfoData`](../interfaces/IInfoData.md#getoriginalinfodata)

#### Source

[tools/info/model/internal/infodata/markdown/MarkDownData.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L24)

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
