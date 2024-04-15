[geovisto-map](../README.md) / [Exports](../modules.md) / MapConfigManager

# Class: MapConfigManager

The class wraps config used by the map and functions to acquire config items.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapConfigManager`](AbstractMapConfigManager.md)

  ↳ **`MapConfigManager`**

## Implements

- [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

## Table of contents

### Constructors

- [constructor](MapConfigManager.md#constructor)

### Methods

- [export](MapConfigManager.md#export)
- [getMapConfig](MapConfigManager.md#getmapconfig)
- [getOriginalConfig](MapConfigManager.md#getoriginalconfig)
- [getToolConfig](MapConfigManager.md#gettoolconfig)
- [getToolsConfigs](MapConfigManager.md#gettoolsconfigs)
- [import](MapConfigManager.md#import)

## Constructors

### constructor

• **new MapConfigManager**(`config`): [`MapConfigManager`](MapConfigManager.md)

It initializes the config wrapper providing a basic API.
It expects a config represented by the implicict Geovisto map structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Record`\<`string`, `unknown`\> |

#### Returns

[`MapConfigManager`](MapConfigManager.md)

#### Overrides

[AbstractMapConfigManager](AbstractMapConfigManager.md).[constructor](AbstractMapConfigManager.md#constructor)

#### Defined in

[src/model/internal/config/basic/MapConfigManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/basic/MapConfigManager.ts#L18)

## Methods

### export

▸ **export**(`mapConfig`): `Record`\<`string`, `unknown`\>

It returns map config of the implicit structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfig` | [`IMapConfig`](../modules.md#imapconfig) |

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[IMapConfigManager](../interfaces/IMapConfigManager.md).[export](../interfaces/IMapConfigManager.md#export)

#### Overrides

[AbstractMapConfigManager](AbstractMapConfigManager.md).[export](AbstractMapConfigManager.md#export)

#### Defined in

[src/model/internal/config/basic/MapConfigManager.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/basic/MapConfigManager.ts#L39)

___

### getMapConfig

▸ **getMapConfig**(): [`IMapConfig`](../modules.md#imapconfig)

It returns the map config

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Implementation of

[IMapConfigManager](../interfaces/IMapConfigManager.md).[getMapConfig](../interfaces/IMapConfigManager.md#getmapconfig)

#### Inherited from

[AbstractMapConfigManager](AbstractMapConfigManager.md).[getMapConfig](AbstractMapConfigManager.md#getmapconfig)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L49)

___

### getOriginalConfig

▸ **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[IMapConfigManager](../interfaces/IMapConfigManager.md).[getOriginalConfig](../interfaces/IMapConfigManager.md#getoriginalconfig)

#### Inherited from

[AbstractMapConfigManager](AbstractMapConfigManager.md).[getOriginalConfig](AbstractMapConfigManager.md#getoriginalconfig)

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

#### Implementation of

[IMapConfigManager](../interfaces/IMapConfigManager.md).[getToolConfig](../interfaces/IMapConfigManager.md#gettoolconfig)

#### Inherited from

[AbstractMapConfigManager](AbstractMapConfigManager.md).[getToolConfig](AbstractMapConfigManager.md#gettoolconfig)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L65)

___

### getToolsConfigs

▸ **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../modules.md#imaptoolconfig)[]

#### Implementation of

[IMapConfigManager](../interfaces/IMapConfigManager.md).[getToolsConfigs](../interfaces/IMapConfigManager.md#gettoolsconfigs)

#### Inherited from

[AbstractMapConfigManager](AbstractMapConfigManager.md).[getToolsConfigs](AbstractMapConfigManager.md#gettoolsconfigs)

#### Defined in

[src/model/internal/config/abstract/AbstractMapConfigManager.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L56)

___

### import

▸ **import**(`config`): [`IMapConfig`](../modules.md#imapconfig)

It converts given config to the internal map config structure.
It keeps the config structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Record`\<`string`, `unknown`\> |

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Overrides

[AbstractMapConfigManager](AbstractMapConfigManager.md).[import](AbstractMapConfigManager.md#import)

#### Defined in

[src/model/internal/config/basic/MapConfigManager.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/basic/MapConfigManager.ts#L28)
