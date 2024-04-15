[geovisto-map](../README.md) / [Exports](../modules.md) / MarkDownData

# Class: MarkDownData

The interface declares function for management of info data.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`MarkDownData`**

## Implements

- [`IInfoData`](../interfaces/IInfoData.md)

## Table of contents

### Constructors

- [constructor](MarkDownData.md#constructor)

### Properties

- [MarkDown](MarkDownData.md#markdown)
- [originalData](MarkDownData.md#originaldata)

### Methods

- [getInfoMD](MarkDownData.md#getinfomd)
- [getName](MarkDownData.md#getname)
- [getOriginalInfoData](MarkDownData.md#getoriginalinfodata)
- [toString](MarkDownData.md#tostring)

## Constructors

### constructor

• **new MarkDownData**(`name`, `originalData`): [`MarkDownData`](MarkDownData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `originalData` | `string` |

#### Returns

[`MarkDownData`](MarkDownData.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/tools/info/model/internal/infodata/markdown/MarkDownData.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L16)

## Properties

### MarkDown

• `Private` `Optional` **MarkDown**: `string`

#### Defined in

[src/tools/info/model/internal/infodata/markdown/MarkDownData.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L14)

___

### originalData

• `Private` **originalData**: `string`

#### Defined in

[src/tools/info/model/internal/infodata/markdown/MarkDownData.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L13)

## Methods

### getInfoMD

▸ **getInfoMD**(): `string`

It returns the original representation of data domain.

#### Returns

`string`

#### Implementation of

[IInfoData](../interfaces/IInfoData.md).[getInfoMD](../interfaces/IInfoData.md#getinfomd)

#### Defined in

[src/tools/info/model/internal/infodata/markdown/MarkDownData.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L31)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IInfoData](../interfaces/IInfoData.md).[getName](../interfaces/IInfoData.md#getname)

#### Inherited from

[MapDomain](MapDomain.md).[getName](MapDomain.md#getname)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L21)

___

### getOriginalInfoData

▸ **getOriginalInfoData**(): `unknown`

It returns the original source of info data.

#### Returns

`unknown`

#### Implementation of

[IInfoData](../interfaces/IInfoData.md).[getOriginalInfoData](../interfaces/IInfoData.md#getoriginalinfodata)

#### Defined in

[src/tools/info/model/internal/infodata/markdown/MarkDownData.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/markdown/MarkDownData.ts#L24)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[MapDomain](MapDomain.md).[toString](MapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
