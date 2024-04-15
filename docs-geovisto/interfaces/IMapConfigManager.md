[geovisto-map](../README.md) / [Exports](../modules.md) / IMapConfigManager

# Interface: IMapConfigManager

The interface declares config used by the map and functions to acquire config items.

**`Author`**

Jiri Hynek

## Implemented by

- [`MapConfigManager`](../classes/MapConfigManager.md)

## Table of contents

### Methods

- [export](IMapConfigManager.md#export)
- [getMapConfig](IMapConfigManager.md#getmapconfig)
- [getOriginalConfig](IMapConfigManager.md#getoriginalconfig)
- [getToolConfig](IMapConfigManager.md#gettoolconfig)
- [getToolsConfigs](IMapConfigManager.md#gettoolsconfigs)

## Methods

### export

▸ **export**(`mapConfing`): `Record`\<`string`, `unknown`\>

It provides possibility to transform given config to the original structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfing` | [`IMapConfig`](../modules.md#imapconfig) |

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[src/model/types/config/IMapConfigManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L38)

___

### getMapConfig

▸ **getMapConfig**(): [`IMapConfig`](../modules.md#imapconfig)

It returns the map config.

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Defined in

[src/model/types/config/IMapConfigManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L19)

___

### getOriginalConfig

▸ **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[src/model/types/config/IMapConfigManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L14)

___

### getToolConfig

▸ **getToolConfig**(`toolId`): `undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns the config record for the tool identified by the given tool identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toolId` | `string` |

#### Returns

`undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Defined in

[src/model/types/config/IMapConfigManager.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L31)

___

### getToolsConfigs

▸ **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

#### Defined in

[src/model/types/config/IMapConfigManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L24)
