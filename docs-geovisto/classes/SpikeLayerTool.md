[geovisto-map](../README.md) / [Exports](../modules.md) / SpikeLayerTool

# Class: SpikeLayerTool

This class represents Heat layer tool. It works with d3 to create spike icons
Icons are created SpikeIcon

**`Author`**

Vladimir Korencik

**`Author`**

Petr Kaspar

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`SpikeLayerTool`**

## Implements

- [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](SpikeLayerTool.md#constructor)

### Properties

- [mapForm](SpikeLayerTool.md#mapform)
- [max](SpikeLayerTool.md#max)
- [selectionToolAPI](SpikeLayerTool.md#selectiontoolapi)

### Methods

- [aggregateValues](SpikeLayerTool.md#aggregatevalues)
- [calculateHeight](SpikeLayerTool.md#calculateheight)
- [copy](SpikeLayerTool.md#copy)
- [create](SpikeLayerTool.md#create)
- [createDefaults](SpikeLayerTool.md#createdefaults)
- [createLayerItems](SpikeLayerTool.md#createlayeritems)
- [createMapForm](SpikeLayerTool.md#createmapform)
- [createMarker](SpikeLayerTool.md#createmarker)
- [createMarkers](SpikeLayerTool.md#createmarkers)
- [createState](SpikeLayerTool.md#createstate)
- [getAPIGetter](SpikeLayerTool.md#getapigetter)
- [getDefaults](SpikeLayerTool.md#getdefaults)
- [getId](SpikeLayerTool.md#getid)
- [getLayerItems](SpikeLayerTool.md#getlayeritems)
- [getMap](SpikeLayerTool.md#getmap)
- [getMapForm](SpikeLayerTool.md#getmapform)
- [getProps](SpikeLayerTool.md#getprops)
- [getSelectionTool](SpikeLayerTool.md#getselectiontool)
- [getState](SpikeLayerTool.md#getstate)
- [getType](SpikeLayerTool.md#gettype)
- [handleEvent](SpikeLayerTool.md#handleevent)
- [hideLayerItems](SpikeLayerTool.md#hidelayeritems)
- [initialize](SpikeLayerTool.md#initialize)
- [isEnabled](SpikeLayerTool.md#isenabled)
- [isSingleton](SpikeLayerTool.md#issingleton)
- [render](SpikeLayerTool.md#render)
- [setCategoryColor](SpikeLayerTool.md#setcategorycolor)
- [setEnabled](SpikeLayerTool.md#setenabled)
- [setProps](SpikeLayerTool.md#setprops)
- [showLayerItems](SpikeLayerTool.md#showlayeritems)
- [switchEnabled](SpikeLayerTool.md#switchenabled)
- [updateData](SpikeLayerTool.md#updatedata)
- [updateDimension](SpikeLayerTool.md#updatedimension)

## Constructors

### constructor

• **new SpikeLayerTool**(`props?`): [`SpikeLayerTool`](SpikeLayerTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops) |

#### Returns

[`SpikeLayerTool`](SpikeLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L61)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L58)

___

### max

• `Private` **max**: `number`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L59)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L57)

## Methods

### aggregateValues

▸ **aggregateValues**(`dataItem`, `aggregationDimension`, `foundValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataItem` | `IWorkData` |
| `aggregationDimension` | [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md) |
| `foundValue` | `number` |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:253](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L253)

___

### calculateHeight

▸ **calculateHeight**(`height`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`number`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:322](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L322)

___

### copy

▸ **copy**(): [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)\>\>

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[copy](../interfaces/ISpikeLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L67)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[create](../interfaces/ISpikeLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L83)

___

### createLayerItems

▸ **createLayerItems**(): `LayerGroup`\<`any`\>[]

It creates layer items.

Override this function.

#### Returns

`LayerGroup`\<`any`\>[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L118)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L110)

___

### createMarker

▸ **createMarker**(`data`): `undefined` \| `Marker`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `IWorkData` |

#### Returns

`undefined` \| `Marker`\<`any`\>

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:296](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L296)

___

### createMarkers

▸ **createMarkers**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:278](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L278)

___

### createState

▸ **createState**(): [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It creates new defaults of the layer tool.

#### Returns

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L87)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getAPIGetter](../interfaces/ISpikeLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getDefaults](../interfaces/ISpikeLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L75)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getId](../interfaces/ISpikeLayerTool.md#getid)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getId](AbstractLayerTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getLayerItems](../interfaces/ISpikeLayerTool.md#getlayeritems)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getLayerItems](AbstractLayerTool.md#getlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L163)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getMap](../interfaces/ISpikeLayerTool.md#getmap)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L103)

___

### getProps

▸ **getProps**(): [`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops)

It returns the props given by the programmer.

#### Returns

[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops)

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getProps](../interfaces/ISpikeLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L71)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L91)

___

### getState

▸ **getState**(): [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the map object state.

#### Returns

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getState](../interfaces/ISpikeLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L79)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[getType](../interfaces/ISpikeLayerTool.md#gettype)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:373](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L373)

___

### hideLayerItems

▸ **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[hideLayerItems](AbstractLayerTool.md#hidelayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L147)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[initialize](../interfaces/ISpikeLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L114)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[isEnabled](../interfaces/ISpikeLayerTool.md#isenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isEnabled](AbstractLayerTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[isSingleton](../interfaces/ISpikeLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### render

▸ **render**(`type`): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

`void`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[render](../interfaces/ISpikeLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:328](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L328)

___

### setCategoryColor

▸ **setCategoryColor**(`dataItem`, `category`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataItem` | `IWorkData` |
| `category` | `string` |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:240](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L240)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[setEnabled](../interfaces/ISpikeLayerTool.md#setenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setEnabled](AbstractLayerTool.md#setenabled)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L102)

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

[AbstractLayerTool](AbstractLayerTool.md).[setProps](AbstractLayerTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### showLayerItems

▸ **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[showLayerItems](AbstractLayerTool.md#showlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L126)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[switchEnabled](../interfaces/ISpikeLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateData

▸ **updateData**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:133](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L133)

___

### updateDimension

▸ **updateDimension**(`dimension`, `value`, `redraw`): `void`

It updates the dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\> |
| `value` | `string` |
| `redraw` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[ISpikeLayerTool](../interfaces/ISpikeLayerTool.md).[updateDimension](../interfaces/ISpikeLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:348](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L348)
