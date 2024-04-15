[geovisto-map](../README.md) / [Exports](../modules.md) / BubbleLayerTool

# Class: BubbleLayerTool

This class represents Heat layer tool. It works with d3 to create bubble icons and Leaflet MarkerCluster
Icons are created BubbleIcon

**`Author`**

Vladimir Korencik

**`Author`**

Petr Kaspar

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`BubbleLayerTool`**

## Implements

- [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](BubbleLayerTool.md#constructor)

### Properties

- [mapForm](BubbleLayerTool.md#mapform)
- [max](BubbleLayerTool.md#max)
- [selectionToolAPI](BubbleLayerTool.md#selectiontoolapi)

### Methods

- [aggregateValues](BubbleLayerTool.md#aggregatevalues)
- [copy](BubbleLayerTool.md#copy)
- [create](BubbleLayerTool.md#create)
- [createDefaults](BubbleLayerTool.md#createdefaults)
- [createLayerItems](BubbleLayerTool.md#createlayeritems)
- [createMapForm](BubbleLayerTool.md#createmapform)
- [createMarker](BubbleLayerTool.md#createmarker)
- [createMarkers](BubbleLayerTool.md#createmarkers)
- [createPopupMessage](BubbleLayerTool.md#createpopupmessage)
- [createState](BubbleLayerTool.md#createstate)
- [getAPIGetter](BubbleLayerTool.md#getapigetter)
- [getClusterValues](BubbleLayerTool.md#getclustervalues)
- [getDefaults](BubbleLayerTool.md#getdefaults)
- [getId](BubbleLayerTool.md#getid)
- [getLayerItems](BubbleLayerTool.md#getlayeritems)
- [getMap](BubbleLayerTool.md#getmap)
- [getMapForm](BubbleLayerTool.md#getmapform)
- [getProps](BubbleLayerTool.md#getprops)
- [getSelectionTool](BubbleLayerTool.md#getselectiontool)
- [getState](BubbleLayerTool.md#getstate)
- [getType](BubbleLayerTool.md#gettype)
- [handleEvent](BubbleLayerTool.md#handleevent)
- [hideLayerItems](BubbleLayerTool.md#hidelayeritems)
- [initialize](BubbleLayerTool.md#initialize)
- [isEnabled](BubbleLayerTool.md#isenabled)
- [isSingleton](BubbleLayerTool.md#issingleton)
- [prepareMapData](BubbleLayerTool.md#preparemapdata)
- [render](BubbleLayerTool.md#render)
- [setCategoryColor](BubbleLayerTool.md#setcategorycolor)
- [setEnabled](BubbleLayerTool.md#setenabled)
- [setProps](BubbleLayerTool.md#setprops)
- [showLayerItems](BubbleLayerTool.md#showlayeritems)
- [switchEnabled](BubbleLayerTool.md#switchenabled)
- [updateDimension](BubbleLayerTool.md#updatedimension)
- [updateStyle](BubbleLayerTool.md#updatestyle)

## Constructors

### constructor

• **new BubbleLayerTool**(`props?`): [`BubbleLayerTool`](BubbleLayerTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops) |

#### Returns

[`BubbleLayerTool`](BubbleLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L65)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L62)

___

### max

• `Private` **max**: `number`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L63)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L61)

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

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:307](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L307)

___

### copy

▸ **copy**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[copy](../interfaces/IBubbleLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L71)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[create](../interfaces/IBubbleLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L87)

___

### createLayerItems

▸ **createLayerItems**(): `MarkerClusterGroup`[]

It creates layer items.

Override this function.

#### Returns

`MarkerClusterGroup`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L124)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L114)

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

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:397](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L397)

___

### createMarkers

▸ **createMarkers**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:380](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L380)

___

### createPopupMessage

▸ **createPopupMessage**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `IBubbleIconValues` |

#### Returns

`string`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:454](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L454)

___

### createState

▸ **createState**(): [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It creates new defaults of the layer tool.

#### Returns

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L91)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getAPIGetter](../interfaces/IBubbleLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getClusterValues

▸ **getClusterValues**(`childMarkers`): `IBubbleIconValues`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childMarkers` | `Marker`\<`any`\>[] |

#### Returns

`IBubbleIconValues`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:426](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L426)

___

### getDefaults

▸ **getDefaults**(): [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getDefaults](../interfaces/IBubbleLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L79)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getId](../interfaces/IBubbleLayerTool.md#getid)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getLayerItems](../interfaces/IBubbleLayerTool.md#getlayeritems)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getMap](../interfaces/IBubbleLayerTool.md#getmap)

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

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L107)

___

### getProps

▸ **getProps**(): [`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops)

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getProps](../interfaces/IBubbleLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L75)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L95)

___

### getState

▸ **getState**(): [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the map object state.

#### Returns

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getState](../interfaces/IBubbleLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L83)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[getType](../interfaces/IBubbleLayerTool.md#gettype)

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

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:501](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L501)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[initialize](../interfaces/IBubbleLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L118)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[isEnabled](../interfaces/IBubbleLayerTool.md#isenabled)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[isSingleton](../interfaces/IBubbleLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### prepareMapData

▸ **prepareMapData**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:178](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L178)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[render](../interfaces/IBubbleLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:357](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L357)

___

### setCategoryColor

▸ **setCategoryColor**(`dataItem`, `category`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataItem` | `IWorkData` |
| `category` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:287](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L287)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[setEnabled](../interfaces/IBubbleLayerTool.md#setenabled)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[switchEnabled](../interfaces/IBubbleLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

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

[IBubbleLayerTool](../interfaces/IBubbleLayerTool.md).[updateDimension](../interfaces/IBubbleLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:476](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L476)

___

### updateStyle

▸ **updateStyle**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:333](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L333)
