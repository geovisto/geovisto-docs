**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISelectionToolDefaults

# Interface: ISelectionToolDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`IMapToolDefaults`](IMapToolDefaults.md)

## Methods

### getConfig()

> **getConfig**(): [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

It returns default config if no config is given.

#### Returns

[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

#### Overrides

[`IMapToolDefaults`](IMapToolDefaults.md).[`getConfig`](IMapToolDefaults.md#getconfig)

#### Source

[tools/selection/model/types/tool/ISelectionToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/tool/ISelectionToolDefaults.ts#L19)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getIcon`](IMapToolDefaults.md#geticon)

#### Source

[model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L36)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getId`](IMapToolDefaults.md#getid)

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getLabel`](IMapToolDefaults.md#getlabel)

#### Source

[model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L31)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getProps`](IMapToolDefaults.md#getprops)

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getSelection()

> **getSelection**(): `null` \| [`IMapSelection`](IMapSelection.md)

It returns default map selection.

#### Returns

`null` \| [`IMapSelection`](IMapSelection.md)

#### Source

[tools/selection/model/types/tool/ISelectionToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/tool/ISelectionToolDefaults.ts#L24)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getType`](IMapToolDefaults.md#gettype)

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`isEnabled`](IMapToolDefaults.md#isenabled)

#### Source

[model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L26)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`isSingleton`](IMapToolDefaults.md#issingleton)

#### Source

[model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L19)
