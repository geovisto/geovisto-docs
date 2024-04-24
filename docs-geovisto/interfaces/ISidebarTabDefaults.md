**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarTabDefaults

# Interface: ISidebarTabDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

## Methods

### getConfig()

> **getConfig**(): [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

It returns the default config.

#### Returns

[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

#### Overrides

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getConfig`](IMapObjectDefaults.md#getconfig)

#### Source

[tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L18)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the sidebar tab.

#### Returns

`string`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L33)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getId`](IMapObjectDefaults.md#getid)

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getName()

> **getName**(): `string`

It returns name of the sidebar tab.

#### Returns

`string`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L28)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getProps`](IMapObjectDefaults.md#getprops)

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getType`](IMapObjectDefaults.md#gettype)

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### hasCheckButton()

> **hasCheckButton**(): `boolean`

It returns a logical value whether the sidebar tab contains a check button used to enable/disable the tool.

#### Returns

`boolean`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L38)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns whether the default value the sidebar tab is enabled.

#### Returns

`boolean`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L23)
