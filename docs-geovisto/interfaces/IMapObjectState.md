**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapObjectState

# Interface: IMapObjectState\<TProps, TDefaults, TConfig, TInitProps\>

This interface declares the state of a map object.
It wraps the state since the map object can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extended by

- [`IMapState`](IMapState.md)
- [`IMapToolState`](IMapToolState.md)
- [`ISidebarFragmentState`](ISidebarFragmentState.md)
- [`ISidebarTabState`](ISidebarTabState.md)

## Type parameters

• **TProps** *extends* [`IMapObjectProps`](../type-aliases/IMapObjectProps.md) = [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

• **TDefaults** *extends* [`IMapObjectDefaults`](IMapObjectDefaults.md) = [`IMapObjectDefaults`](IMapObjectDefaults.md)

• **TConfig** *extends* [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md) = [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)

• **TInitProps** *extends* [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<`TConfig`\> = [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<`TConfig`\>

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: `TInitProps`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L25)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)
