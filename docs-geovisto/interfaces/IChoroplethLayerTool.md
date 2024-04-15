[geovisto-map](../README.md) / [Exports](../modules.md) / IChoroplethLayerTool

# Interface: IChoroplethLayerTool\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares the choropleth layer tool.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) = [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) |
| `TDefaults` | extends [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md) = [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md) |
| `TState` | extends [`IChoroplethLayerToolState`](IChoroplethLayerToolState.md) = [`IChoroplethLayerToolState`](IChoroplethLayerToolState.md) |
| `TConfig` | extends [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig) = [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig) |
| `TInitProps` | extends [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> = [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> |

## Hierarchy

- [`ILayerTool`](ILayerTool.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

  ↳ **`IChoroplethLayerTool`**

## Implemented by

- [`ChoroplethLayerTool`](../classes/ChoroplethLayerTool.md)

## Table of contents

### Methods

- [computeColorIntensity](IChoroplethLayerTool.md#computecolorintensity)
- [copy](IChoroplethLayerTool.md#copy)
- [create](IChoroplethLayerTool.md#create)
- [getAPIGetter](IChoroplethLayerTool.md#getapigetter)
- [getDefaults](IChoroplethLayerTool.md#getdefaults)
- [getId](IChoroplethLayerTool.md#getid)
- [getLayerItems](IChoroplethLayerTool.md#getlayeritems)
- [getMap](IChoroplethLayerTool.md#getmap)
- [getProps](IChoroplethLayerTool.md#getprops)
- [getScale](IChoroplethLayerTool.md#getscale)
- [getState](IChoroplethLayerTool.md#getstate)
- [getType](IChoroplethLayerTool.md#gettype)
- [initialize](IChoroplethLayerTool.md#initialize)
- [isEnabled](IChoroplethLayerTool.md#isenabled)
- [isSingleton](IChoroplethLayerTool.md#issingleton)
- [render](IChoroplethLayerTool.md#render)
- [setEnabled](IChoroplethLayerTool.md#setenabled)
- [switchEnabled](IChoroplethLayerTool.md#switchenabled)
- [updateDimension](IChoroplethLayerTool.md#updatedimension)

## Methods

### computeColorIntensity

▸ **computeColorIntensity**(`val`, `scale`): `number`

It returns color intensity for the current scale and given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |
| `scale` | `number`[] |

#### Returns

`number`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts#L36)

___

### copy

▸ **copy**(): [`IChoroplethLayerTool`](IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\> ; `units`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IChoroplethLayerTool`](IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\> ; `units`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Overrides

[ILayerTool](ILayerTool.md).[copy](ILayerTool.md#copy)

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts#L28)

___

### create

▸ **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Inherited from

[ILayerTool](ILayerTool.md).[create](ILayerTool.md#create)

#### Defined in

[src/model/types/tool/IMapTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L47)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool API.

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Inherited from

[ILayerTool](ILayerTool.md).[getAPIGetter](ILayerTool.md#getapigetter)

#### Defined in

[src/model/types/tool/IMapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L32)

___

### getDefaults

▸ **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[ILayerTool](ILayerTool.md).[getDefaults](ILayerTool.md#getdefaults)

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[ILayerTool](ILayerTool.md).[getId](ILayerTool.md#getid)

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Inherited from

[ILayerTool](ILayerTool.md).[getLayerItems](ILayerTool.md#getlayeritems)

#### Defined in

[src/model/types/layer/ILayerTool.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerTool.ts#L31)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function which returns map which uses this tool.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Inherited from

[ILayerTool](ILayerTool.md).[getMap](ILayerTool.md#getmap)

#### Defined in

[src/model/types/tool/IMapTool.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L42)

___

### getProps

▸ **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[ILayerTool](ILayerTool.md).[getProps](ILayerTool.md#getprops)

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getScale

▸ **getScale**(): `undefined` \| `number`[]

Help function which returns a scale which can be used to distinguish value levels in choropleth.

#### Returns

`undefined` \| `number`[]

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerTool.ts#L41)

___

### getState

▸ **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[ILayerTool](ILayerTool.md).[getState](ILayerTool.md#getstate)

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[ILayerTool](ILayerTool.md).[getType](ILayerTool.md#gettype)

#### Defined in

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | `TInitProps` |

#### Returns

`this`

#### Inherited from

[ILayerTool](ILayerTool.md).[initialize](ILayerTool.md#initialize)

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

#### Returns

`boolean`

#### Inherited from

[ILayerTool](ILayerTool.md).[isEnabled](ILayerTool.md#isenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L52)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[ILayerTool](ILayerTool.md).[isSingleton](ILayerTool.md#issingleton)

#### Defined in

[src/model/types/tool/IMapTool.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L37)

___

### render

▸ **render**(`type`, `animateOptions?`): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Inherited from

[ILayerTool](ILayerTool.md).[render](ILayerTool.md#render)

#### Defined in

[src/model/types/layer/ILayerTool.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerTool.ts#L40)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILayerTool](ILayerTool.md).[setEnabled](ILayerTool.md#setenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L60)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches the enabled state (enabled/disabled).

#### Returns

`void`

#### Inherited from

[ILayerTool](ILayerTool.md).[switchEnabled](ILayerTool.md#switchenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L65)

___

### updateDimension

▸ **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDimension`](IMapDimension.md)\<`unknown`\> |
| `value` | `string` |
| `renderType` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

[ILayerTool](ILayerTool.md).[updateDimension](ILayerTool.md#updatedimension)

#### Defined in

[src/model/types/layer/ILayerTool.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerTool.ts#L49)
