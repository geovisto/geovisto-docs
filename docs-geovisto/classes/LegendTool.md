**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LegendTool

# Class: LegendTool

This class provides the legend tool.

## Author

Tomas Koscielniak

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`ILegendTool`](../interfaces/ILegendTool.md)

## Constructors

### new LegendTool()

> **new LegendTool**(`props`?): [`LegendTool`](LegendTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Returns

[`LegendTool`](LegendTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L38)

## Methods

### clearLegend()

> **clearLegend**(`owner`): `void`

This function clears legend.

#### Parameters

• **owner**: `undefined` \| `string`

#### Returns

`void`

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:156](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L156)

***

### copy()

> **copy**(): [`ILegendTool`](../interfaces/ILegendTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>, [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ILegendTool`](../interfaces/ILegendTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>, [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>\>

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`copy`](../interfaces/ILegendTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L45)

***

### create()

> **create**(): `this`

It creates legend.

#### Returns

`this`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`create`](../interfaces/ILegendTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L96)

***

### createDefaults()

> `protected` **createDefaults**(): [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L66)

***

### createLegend()

> `protected` **createLegend**(): `void`

It creates a legend tool and its parts (new legend for each layer that implements it).

#### Returns

`void`

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L106)

***

### createState()

> `protected` **createState**(): [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>

It returns default tool state.

#### Returns

[`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L80)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getAPIGetter`](../interfaces/ILegendTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

It returns default values of the legend tool.

#### Returns

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getDefaults`](../interfaces/ILegendTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L59)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getId`](../interfaces/ILegendTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getMap`](../interfaces/ILegendTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getProps()

> **getProps**(): [`IMapToolProps`](../type-aliases/IMapToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getProps`](../interfaces/ILegendTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L52)

***

### getState()

> **getState**(): [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>

It returns the legend tool state.

#### Returns

[`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getState`](../interfaces/ILegendTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:73](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L73)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`getType`](../interfaces/ILegendTool.md#gettype)

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Overrides

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:168](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L168)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`initialize`](../interfaces/ILegendTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/legend/model/internal/tool/LegendTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendTool.ts#L89)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`isEnabled`](../interfaces/ILegendTool.md#isenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`isEnabled`](MapTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`isSingleton`](../interfaces/ILegendTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`setEnabled`](../interfaces/ILegendTool.md#setenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L142)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`ILegendTool`](../interfaces/ILegendTool.md).[`switchEnabled`](../interfaces/ILegendTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
