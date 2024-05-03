**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ILegendToolState

# Interface: ILegendToolState\<TProps, TDefaults, TConfig\>

This interface declares legend tool model.

## Author

Tomas Koscielniak

## Extends

- [`IMapToolState`](IMapToolState.md)\<`TProps`, `TDefaults`, `TConfig`\>

## Type parameters

• **TProps** *extends* [`ILegendToolProps`](../type-aliases/ILegendToolProps.md) = [`ILegendToolProps`](../type-aliases/ILegendToolProps.md)

• **TDefaults** *extends* [`ILegendToolDefaults`](ILegendToolDefaults.md) = [`ILegendToolDefaults`](ILegendToolDefaults.md)

• **TConfig** *extends* [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md) = [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`deserialize`](IMapToolState.md#deserialize)

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getIcon`](IMapToolState.md#geticon)

#### Source

[model/types/tool/IMapToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L61)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getId`](IMapToolState.md#getid)

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getLabel`](IMapToolState.md#getlabel)

#### Source

[model/types/tool/IMapToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L49)

***

### getLegendConfig()

> **getLegendConfig**(): `undefined` \| [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)[]

It returns the tabs configs.

#### Returns

`undefined` \| [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)[]

#### Source

[tools/legend/model/types/tool/ILegendToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/types/tool/ILegendToolState.ts#L23)

***

### getLegendToolsConfig()

> **getLegendToolsConfig**(): `undefined` \| `string`[]

It returns the tools to create a legend for.

#### Returns

`undefined` \| `string`[]

#### Source

[tools/legend/model/types/tool/ILegendToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/types/tool/ILegendToolState.ts#L28)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getMap`](IMapToolState.md#getmap)

#### Source

[model/types/tool/IMapToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L44)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getType`](IMapToolState.md#gettype)

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\>

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`initialize`](IMapToolState.md#initialize)

#### Source

[model/types/tool/IMapToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`isEnabled`](IMapToolState.md#isenabled)

#### Source

[model/types/tool/IMapToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L32)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`serialize`](IMapToolState.md#serialize)

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setEnabled`](IMapToolState.md#setenabled)

#### Source

[model/types/tool/IMapToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L39)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setIcon`](IMapToolState.md#seticon)

#### Source

[model/types/tool/IMapToolState.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L68)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setId`](IMapToolState.md#setid)

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setLabel`](IMapToolState.md#setlabel)

#### Source

[model/types/tool/IMapToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L56)
