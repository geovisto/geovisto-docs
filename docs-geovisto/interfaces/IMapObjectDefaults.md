**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapObjectDefaults

# Interface: IMapObjectDefaults\<TProps, TConfig\>

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extended by

- [`IMapDefaults`](IMapDefaults.md)
- [`IMapToolDefaults`](IMapToolDefaults.md)
- [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md)
- [`ISidebarTabDefaults`](ISidebarTabDefaults.md)

## Type parameters

• **TProps** *extends* [`IMapObjectProps`](../type-aliases/IMapObjectProps.md) = [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

• **TConfig** *extends* [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md) = [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)

## Methods

### getConfig()

> **getConfig**(): `TConfig`

It returns a default config if no config is given.

#### Returns

`TConfig`

#### Source

[model/types/object/IMapObjectDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L22)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getProps()

> **getProps**(): `TProps`

It returns default props if no props are given.

#### Returns

`TProps`

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)
