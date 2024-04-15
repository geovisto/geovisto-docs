[geovisto-map](../README.md) / [Exports](../modules.md) / IMapConfigManagerFactory

# Interface: IMapConfigManagerFactory

This interface declares a factory for config managers.

**`Author`**

Jiri Hynek

## Implemented by

- [`MapConfigManagerFactory`](../classes/MapConfigManagerFactory.md)

## Table of contents

### Methods

- [default](IMapConfigManagerFactory.md#default)

## Methods

### default

▸ **default**(`config`): [`IMapConfigManager`](IMapConfigManager.md)

It creates the default config manager function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Record`\<`string`, `unknown`\> |

#### Returns

[`IMapConfigManager`](IMapConfigManager.md)

#### Defined in

[src/model/types/config/IMapConfigManagerFactory.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManagerFactory.ts#L13)
