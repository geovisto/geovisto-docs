**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapConfigManager

# Class: MapConfigManager

The class wraps config used by the map and functions to acquire config items.

## Author

Jiri Hynek

## Extends

- [`AbstractMapConfigManager`](AbstractMapConfigManager.md)

## Implements

- [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

## Constructors

### new MapConfigManager()

> **new MapConfigManager**(`config`): [`MapConfigManager`](MapConfigManager.md)

It initializes the config wrapper providing a basic API.
It expects a config represented by the implicict Geovisto map structure.

#### Parameters

• **config**: `Record`\<`string`, `unknown`\>

#### Returns

[`MapConfigManager`](MapConfigManager.md)

#### Overrides

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`constructor`](AbstractMapConfigManager.md#constructors)

#### Source

[model/internal/config/basic/MapConfigManager.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/basic/MapConfigManager.ts#L18)

## Methods

### export()

> **export**(`mapConfig`): `Record`\<`string`, `unknown`\>

It returns map config of the implicit structure.

#### Parameters

• **mapConfig**: [`IMapConfig`](../type-aliases/IMapConfig.md)

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[`IMapConfigManager`](../interfaces/IMapConfigManager.md).[`export`](../interfaces/IMapConfigManager.md#export)

#### Overrides

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`export`](AbstractMapConfigManager.md#export)

#### Source

[model/internal/config/basic/MapConfigManager.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/basic/MapConfigManager.ts#L39)

***

### getMapConfig()

> **getMapConfig**(): [`IMapConfig`](../type-aliases/IMapConfig.md)

It returns the map config

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Implementation of

[`IMapConfigManager`](../interfaces/IMapConfigManager.md).[`getMapConfig`](../interfaces/IMapConfigManager.md#getmapconfig)

#### Inherited from

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`getMapConfig`](AbstractMapConfigManager.md#getmapconfig)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L49)

***

### getOriginalConfig()

> **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Implementation of

[`IMapConfigManager`](../interfaces/IMapConfigManager.md).[`getOriginalConfig`](../interfaces/IMapConfigManager.md#getoriginalconfig)

#### Inherited from

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`getOriginalConfig`](AbstractMapConfigManager.md#getoriginalconfig)

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

#### Implementation of

[`IMapConfigManager`](../interfaces/IMapConfigManager.md).[`getToolConfig`](../interfaces/IMapConfigManager.md#gettoolconfig)

#### Inherited from

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`getToolConfig`](AbstractMapConfigManager.md#gettoolconfig)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L65)

***

### getToolsConfigs()

> **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

#### Implementation of

[`IMapConfigManager`](../interfaces/IMapConfigManager.md).[`getToolsConfigs`](../interfaces/IMapConfigManager.md#gettoolsconfigs)

#### Inherited from

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`getToolsConfigs`](AbstractMapConfigManager.md#gettoolsconfigs)

#### Source

[model/internal/config/abstract/AbstractMapConfigManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/abstract/AbstractMapConfigManager.ts#L56)

***

### import()

> `protected` **import**(`config`): [`IMapConfig`](../type-aliases/IMapConfig.md)

It converts given config to the internal map config structure.
It keeps the config structure.

#### Parameters

• **config**: `Record`\<`string`, `unknown`\>

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Overrides

[`AbstractMapConfigManager`](AbstractMapConfigManager.md).[`import`](AbstractMapConfigManager.md#import)

#### Source

[model/internal/config/basic/MapConfigManager.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/config/basic/MapConfigManager.ts#L28)
