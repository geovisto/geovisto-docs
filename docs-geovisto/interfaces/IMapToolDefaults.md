**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapToolDefaults

# Interface: IMapToolDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

## Methods

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Overrides

[`IMapObjectDefaults`](IMapObjectDefaults.md).[`getConfig`](IMapObjectDefaults.md#getconfig)

#### Source

[model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L14)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Source

[model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L36)

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

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Source

[model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L31)

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

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Source

[model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L26)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Source

[model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L19)
