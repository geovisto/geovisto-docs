[geovisto-map](../README.md) / [Exports](../modules.md) / IInfoDataFactory

# Interface: IInfoDataFactory

This interface declares a factory for info data objects.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Implemented by

- [`InfoDataFactory`](../classes/InfoDataFactory.md)

## Table of contents

### Methods

- [markdown](IInfoDataFactory.md#markdown)

## Methods

### markdown

▸ **markdown**(`name`, `data`): [`IInfoData`](IInfoData.md)

It creates the Markdown info data object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `string` |

#### Returns

[`IInfoData`](IInfoData.md)

#### Defined in

[src/tools/info/model/types/infodata/IInfoDataFactory.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/infodata/IInfoDataFactory.ts#L14)
