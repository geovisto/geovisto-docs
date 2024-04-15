[geovisto-map](../README.md) / [Exports](../modules.md) / LegendTool

# Class: LegendTool

This class provides the legend tool.

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`LegendTool`**

## Implements

- [`ILegendTool`](../interfaces/ILegendTool.md)

## Table of contents

### Constructors

- [constructor](LegendTool.md#constructor)

### Methods

- [clearLegend](LegendTool.md#clearlegend)
- [copy](LegendTool.md#copy)
- [create](LegendTool.md#create)
- [createDefaults](LegendTool.md#createdefaults)
- [createLegend](LegendTool.md#createlegend)
- [createState](LegendTool.md#createstate)
- [getAPIGetter](LegendTool.md#getapigetter)
- [getDefaults](LegendTool.md#getdefaults)
- [getId](LegendTool.md#getid)
- [getMap](LegendTool.md#getmap)
- [getProps](LegendTool.md#getprops)
- [getState](LegendTool.md#getstate)
- [getType](LegendTool.md#gettype)
- [handleEvent](LegendTool.md#handleevent)
- [initialize](LegendTool.md#initialize)
- [isEnabled](LegendTool.md#isenabled)
- [isSingleton](LegendTool.md#issingleton)
- [setEnabled](LegendTool.md#setenabled)
- [setProps](LegendTool.md#setprops)
- [switchEnabled](LegendTool.md#switchenabled)

## Constructors

### constructor

• **new LegendTool**(`props?`): [`LegendTool`](LegendTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapToolProps`](../modules.md#imaptoolprops) |

#### Returns

[`LegendTool`](LegendTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L38)

## Methods

### clearLegend

▸ **clearLegend**(`owner`): `void`

This function clears legend.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:156](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L156)

___

### copy

▸ **copy**(): [`ILegendTool`](../interfaces/ILegendTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>, [`ILegendToolConfig`](../modules.md#ilegendtoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ILegendTool`](../interfaces/ILegendTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>, [`ILegendToolConfig`](../modules.md#ilegendtoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>\>

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[copy](../interfaces/ILegendTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L45)

___

### create

▸ **create**(): `this`

It creates legend.

#### Returns

`this`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[create](../interfaces/ILegendTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L96)

___

### createDefaults

▸ **createDefaults**(): [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L66)

___

### createLegend

▸ **createLegend**(): `void`

It creates a legend tool and its parts (new legend for each layer that implements it).

#### Returns

`void`

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L106)

___

### createState

▸ **createState**(): [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>

It returns default tool state.

#### Returns

[`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L80)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getAPIGetter](../interfaces/ILegendTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

It returns default values of the legend tool.

#### Returns

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getDefaults](../interfaces/ILegendTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L59)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getId](../interfaces/ILegendTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getMap](../interfaces/ILegendTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

It returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getProps](../interfaces/ILegendTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L52)

___

### getState

▸ **getState**(): [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>

It returns the legend tool state.

#### Returns

[`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getState](../interfaces/ILegendTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L73)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[getType](../interfaces/ILegendTool.md#gettype)

#### Inherited from

[MapTool](MapTool.md).[getType](MapTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Overrides

[MapTool](MapTool.md).[handleEvent](MapTool.md#handleevent)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:168](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L168)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[initialize](../interfaces/ILegendTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/legend/model/internal/tool/LegendTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendTool.ts#L89)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[isEnabled](../interfaces/ILegendTool.md#isenabled)

#### Inherited from

[MapTool](MapTool.md).[isEnabled](MapTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[isSingleton](../interfaces/ILegendTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[setEnabled](../interfaces/ILegendTool.md#setenabled)

#### Inherited from

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L142)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Inherited from

[MapTool](MapTool.md).[setProps](MapTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[ILegendTool](../interfaces/ILegendTool.md).[switchEnabled](../interfaces/ILegendTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
