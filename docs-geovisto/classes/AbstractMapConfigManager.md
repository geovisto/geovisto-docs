**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapConfigManager

# Class: `abstract` AbstractMapConfigManager

The class wraps config used by the map and functions to acquire config items.

## Author

Jiri Hynek

## Extended by

- [`MapConfigManager`](MapConfigManager.md)

## Constructors

### new AbstractMapConfigManager()

> **new AbstractMapConfigManager**(`config`): [`AbstractMapConfigManager`](AbstractMapConfigManager.md)

It initializes the config wrapper providing a basic API.
It expects a config represented by the implicict Geovisto map structure.

#### Parameters

• **config**: `Record`\<`string`, `unknown`\>

#### Returns

[`AbstractMapConfigManager`](AbstractMapConfigManager.md)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L20)

## Properties

### config

> `private` **config**: [`IMapConfig`](../type-aliases/IMapConfig.md)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L12)

***

### originalConfig

> `private` **originalConfig**: `Record`\<`string`, `unknown`\>

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L11)

## Methods

### export()

> `abstract` **export**(`mapConfig`): `Record`\<`string`, `unknown`\>

It converts map config to the original structure.

#### Parameters

• **mapConfig**: [`IMapConfig`](../type-aliases/IMapConfig.md)

#### Returns

`Record`\<`string`, `unknown`\>

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L37)

***

### getMapConfig()

> **getMapConfig**(): [`IMapConfig`](../type-aliases/IMapConfig.md)

It returns the map config

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L49)

***

### getOriginalConfig()

> **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L42)

***

### getToolConfig()

> **getToolConfig**(`toolId`): `undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns the config record for the tool identified by the given tool identifier.

#### Parameters

• **toolId**: `string`

#### Returns

`undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L65)

***

### getToolsConfigs()

> **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L56)

***

### import()

> `protected` `abstract` **import**(`config`): [`IMapConfig`](../type-aliases/IMapConfig.md)

It converts given config to the internal map config structure.

#### Parameters

• **config**: `Record`\<`string`, `unknown`\>

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L30)
