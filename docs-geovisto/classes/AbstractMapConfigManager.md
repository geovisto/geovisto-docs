[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapConfigManager

# Class: AbstractMapConfigManager

The class wraps config used by the map and functions to acquire config items.

**`Author`**

Jiri Hynek

## Hierarchy

- **`AbstractMapConfigManager`**

  ↳ [`MapConfigManager`](MapConfigManager.md)

## Table of contents

### Constructors

- [constructor](AbstractMapConfigManager.md#constructor)

### Properties

- [config](AbstractMapConfigManager.md#config)
- [originalConfig](AbstractMapConfigManager.md#originalconfig)

### Methods

- [export](AbstractMapConfigManager.md#export)
- [getMapConfig](AbstractMapConfigManager.md#getmapconfig)
- [getOriginalConfig](AbstractMapConfigManager.md#getoriginalconfig)
- [getToolConfig](AbstractMapConfigManager.md#gettoolconfig)
- [getToolsConfigs](AbstractMapConfigManager.md#gettoolsconfigs)
- [import](AbstractMapConfigManager.md#import)

## Constructors

### constructor

• **new AbstractMapConfigManager**(`config`): [`AbstractMapConfigManager`](AbstractMapConfigManager.md)

It initializes the config wrapper providing a basic API.
It expects a config represented by the implicict Geovisto map structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Record`\<`string`, `unknown`\> |

#### Returns

[`AbstractMapConfigManager`](AbstractMapConfigManager.md)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L20)

## Properties

### config

• `Private` **config**: [`IMapConfig`](../modules.md#imapconfig)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L12)

___

### originalConfig

• `Private` **originalConfig**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L11)

## Methods

### export

▸ **export**(`mapConfig`): `Record`\<`string`, `unknown`\>

It converts map config to the original structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfig` | [`IMapConfig`](../modules.md#imapconfig) |

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L37)

___

### getMapConfig

▸ **getMapConfig**(): [`IMapConfig`](../modules.md#imapconfig)

It returns the map config

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L49)

___

### getOriginalConfig

▸ **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L42)

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

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L65)

___

### getToolsConfigs

▸ **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L56)

___

### import

▸ **import**(`config`): [`IMapConfig`](../modules.md#imapconfig)

It converts given config to the internal map config structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Record`\<`string`, `unknown`\> |

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L30)
