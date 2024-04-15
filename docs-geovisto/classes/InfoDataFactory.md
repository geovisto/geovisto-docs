[geovisto-map](../README.md) / [Exports](../modules.md) / InfoDataFactory

# Class: InfoDataFactory

This class implements IInfoDataFactory

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Implements

- [`IInfoDataFactory`](../interfaces/IInfoDataFactory.md)

## Table of contents

### Constructors

- [constructor](InfoDataFactory.md#constructor)

### Methods

- [markdown](InfoDataFactory.md#markdown)

## Constructors

### constructor

• **new InfoDataFactory**(): [`InfoDataFactory`](InfoDataFactory.md)

#### Returns

[`InfoDataFactory`](InfoDataFactory.md)

## Methods

### markdown

▸ **markdown**(`name`, `data`): [`IInfoData`](../interfaces/IInfoData.md)

It creates the Markdown info data object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `string` |

#### Returns

[`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

[IInfoDataFactory](../interfaces/IInfoDataFactory.md).[markdown](../interfaces/IInfoDataFactory.md#markdown)

#### Defined in

[src/tools/info/model/internal/infodata/InfoDataFactory.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/InfoDataFactory.ts#L16)
