[geovisto-map](../README.md) / [Exports](../modules.md) / HeatLayerTool

# Class: HeatLayerTool

This class represents Heat layer tool. It works with leaflet.heat plugin
provided for Leaflet

**`Author`**

Vladimir Korencik

**`Author`**

Petr Kaspar

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`HeatLayerTool`**

## Implements

- [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](HeatLayerTool.md#constructor)

### Properties

- [mapForm](HeatLayerTool.md#mapform)
- [maxValue](HeatLayerTool.md#maxvalue)
- [selectionToolAPI](HeatLayerTool.md#selectiontoolapi)

### Methods

- [changeHeatRadius](HeatLayerTool.md#changeheatradius)
- [copy](HeatLayerTool.md#copy)
- [create](HeatLayerTool.md#create)
- [createDefaults](HeatLayerTool.md#createdefaults)
- [createHeatLayers](HeatLayerTool.md#createheatlayers)
- [createLayerItems](HeatLayerTool.md#createlayeritems)
- [createMapForm](HeatLayerTool.md#createmapform)
- [createState](HeatLayerTool.md#createstate)
- [getAPIGetter](HeatLayerTool.md#getapigetter)
- [getDefaults](HeatLayerTool.md#getdefaults)
- [getId](HeatLayerTool.md#getid)
- [getLayerItems](HeatLayerTool.md#getlayeritems)
- [getMap](HeatLayerTool.md#getmap)
- [getMapForm](HeatLayerTool.md#getmapform)
- [getProps](HeatLayerTool.md#getprops)
- [getRadius](HeatLayerTool.md#getradius)
- [getSelectionTool](HeatLayerTool.md#getselectiontool)
- [getState](HeatLayerTool.md#getstate)
- [getType](HeatLayerTool.md#gettype)
- [handleEvent](HeatLayerTool.md#handleevent)
- [hideLayerItems](HeatLayerTool.md#hidelayeritems)
- [initialize](HeatLayerTool.md#initialize)
- [isEnabled](HeatLayerTool.md#isenabled)
- [isSingleton](HeatLayerTool.md#issingleton)
- [prepareHeatmapOptions](HeatLayerTool.md#prepareheatmapoptions)
- [prepareMapData](HeatLayerTool.md#preparemapdata)
- [render](HeatLayerTool.md#render)
- [setEnabled](HeatLayerTool.md#setenabled)
- [setProps](HeatLayerTool.md#setprops)
- [showLayerItems](HeatLayerTool.md#showlayeritems)
- [switchEnabled](HeatLayerTool.md#switchenabled)
- [updateDimension](HeatLayerTool.md#updatedimension)

## Constructors

### constructor

• **new HeatLayerTool**(`props?`): [`HeatLayerTool`](HeatLayerTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops) |

#### Returns

[`HeatLayerTool`](HeatLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L57)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L54)

___

### maxValue

• `Private` **maxValue**: `undefined` \| `number`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L55)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L53)

## Methods

### changeHeatRadius

▸ **changeHeatRadius**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:287](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L287)

___

### copy

▸ **copy**(): [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[copy](../interfaces/IHeatLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L63)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[create](../interfaces/IHeatLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L79)

___

### createHeatLayers

▸ **createHeatLayers**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:260](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L260)

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

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:116](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L116)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L106)

___

### createState

▸ **createState**(): [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>

It creates new defaults of the layer tool.

#### Returns

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L83)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getAPIGetter](../interfaces/IHeatLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getDefaults](../interfaces/IHeatLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L71)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getId](../interfaces/IHeatLayerTool.md#getid)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getLayerItems](../interfaces/IHeatLayerTool.md#getlayeritems)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getMap](../interfaces/IHeatLayerTool.md#getmap)

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

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L99)

___

### getProps

▸ **getProps**(): [`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops)

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getProps](../interfaces/IHeatLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L67)

___

### getRadius

▸ **getRadius**(`zoom`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:312](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L312)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L87)

___

### getState

▸ **getState**(): [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>

It returns the map object state.

#### Returns

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getState](../interfaces/IHeatLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L75)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[getType](../interfaces/IHeatLayerTool.md#gettype)

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

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:350](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L350)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[initialize](../interfaces/IHeatLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L110)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[isEnabled](../interfaces/IHeatLayerTool.md#isenabled)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[isSingleton](../interfaces/IHeatLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### prepareHeatmapOptions

▸ **prepareHeatmapOptions**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:132](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L132)

___

### prepareMapData

▸ **prepareMapData**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:154](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L154)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[render](../interfaces/IHeatLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:236](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L236)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[setEnabled](../interfaces/IHeatLayerTool.md#setenabled)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[switchEnabled](../interfaces/IHeatLayerTool.md#switchenabled)

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

[IHeatLayerTool](../interfaces/IHeatLayerTool.md).[updateDimension](../interfaces/IHeatLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts:327](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerTool.ts#L327)
