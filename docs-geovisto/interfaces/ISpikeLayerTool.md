**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISpikeLayerTool

# Interface: ISpikeLayerTool\<TProps, TDefaults, TState, TConfig, TInitProps\>

This intreface declares the spike layer.

## Author

Vladimir Korencik

## Extends

- [`ILayerTool`](ILayerTool.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

## Type parameters

• **TProps** *extends* [`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md) = [`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md)

• **TDefaults** *extends* [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md) = [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md)

• **TState** *extends* [`ISpikeLayerToolState`](ISpikeLayerToolState.md) = [`ISpikeLayerToolState`](ISpikeLayerToolState.md)

• **TConfig** *extends* [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md) = [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)

• **TInitProps** *extends* [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\> = [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\>

## Methods

### copy()

> **copy**(): [`ISpikeLayerTool`](ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISpikeLayerTool`](ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Overrides

[`ILayerTool`](ILayerTool.md).[`copy`](ILayerTool.md#copy)

#### Source

[tools/layers/spike/model/types/tool/ISpikeLayerTool.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/types/tool/ISpikeLayerTool.ts#L24)

***

### create()

> **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`create`](ILayerTool.md#create)

#### Source

[model/types/tool/IMapTool.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L47)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)\<[`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool API.

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)\<[`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getAPIGetter`](ILayerTool.md#getapigetter)

#### Source

[model/types/tool/IMapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L32)

***

### getDefaults()

> **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getDefaults`](ILayerTool.md#getdefaults)

#### Source

[model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L27)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getId`](ILayerTool.md#getid)

#### Source

[model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L42)

***

### getLayerItems()

> **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getLayerItems`](ILayerTool.md#getlayeritems)

#### Source

[model/types/layer/ILayerTool.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerTool.ts#L31)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function which returns map which uses this tool.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getMap`](ILayerTool.md#getmap)

#### Source

[model/types/tool/IMapTool.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L42)

***

### getProps()

> **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getProps`](ILayerTool.md#getprops)

#### Source

[model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L22)

***

### getState()

> **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getState`](ILayerTool.md#getstate)

#### Source

[model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L32)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`getType`](ILayerTool.md#gettype)

#### Source

[model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L37)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: `TInitProps`

#### Returns

`this`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`initialize`](ILayerTool.md#initialize)

#### Source

[model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L53)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

#### Returns

`boolean`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`isEnabled`](ILayerTool.md#isenabled)

#### Source

[model/types/tool/IMapTool.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L52)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`isSingleton`](ILayerTool.md#issingleton)

#### Source

[model/types/tool/IMapTool.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L37)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`render`](ILayerTool.md#render)

#### Source

[model/types/layer/ILayerTool.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerTool.ts#L40)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`setEnabled`](ILayerTool.md#setenabled)

#### Source

[model/types/tool/IMapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L60)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches the enabled state (enabled/disabled).

#### Returns

`void`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`switchEnabled`](ILayerTool.md#switchenabled)

#### Source

[model/types/tool/IMapTool.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L65)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDimension`](IMapDimension.md)\<`unknown`\>

• **value**: `string`

• **renderType**: `undefined` \| `number`

#### Returns

`void`

#### Inherited from

[`ILayerTool`](ILayerTool.md).[`updateDimension`](ILayerTool.md#updatedimension)

#### Source

[model/types/layer/ILayerTool.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerTool.ts#L49)
