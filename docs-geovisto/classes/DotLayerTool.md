[geovisto-map](../README.md) / [Exports](../modules.md) / DotLayerTool

# Class: DotLayerTool

This class represents Heat layer tool. It works with leaflet CircleMarker
to create dots

**`Author`**

Vladimir Korencik

**`Author`**

Petr Kaspar

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`DotLayerTool`**

## Implements

- [`IDotLayerTool`](../interfaces/IDotLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](DotLayerTool.md#constructor)

### Properties

- [mapForm](DotLayerTool.md#mapform)
- [radius](DotLayerTool.md#radius)
- [selectionToolAPI](DotLayerTool.md#selectiontoolapi)

### Methods

- [calculateRadius](DotLayerTool.md#calculateradius)
- [copy](DotLayerTool.md#copy)
- [create](DotLayerTool.md#create)
- [createDefaults](DotLayerTool.md#createdefaults)
- [createDot](DotLayerTool.md#createdot)
- [createLayerItems](DotLayerTool.md#createlayeritems)
- [createMapForm](DotLayerTool.md#createmapform)
- [createMarkers](DotLayerTool.md#createmarkers)
- [createState](DotLayerTool.md#createstate)
- [getAPIGetter](DotLayerTool.md#getapigetter)
- [getDefaults](DotLayerTool.md#getdefaults)
- [getId](DotLayerTool.md#getid)
- [getLayerItems](DotLayerTool.md#getlayeritems)
- [getMap](DotLayerTool.md#getmap)
- [getMapForm](DotLayerTool.md#getmapform)
- [getProps](DotLayerTool.md#getprops)
- [getSelectionTool](DotLayerTool.md#getselectiontool)
- [getState](DotLayerTool.md#getstate)
- [getType](DotLayerTool.md#gettype)
- [handleEvent](DotLayerTool.md#handleevent)
- [hideLayerItems](DotLayerTool.md#hidelayeritems)
- [initialize](DotLayerTool.md#initialize)
- [isEnabled](DotLayerTool.md#isenabled)
- [isSingleton](DotLayerTool.md#issingleton)
- [prepareMapData](DotLayerTool.md#preparemapdata)
- [render](DotLayerTool.md#render)
- [setEnabled](DotLayerTool.md#setenabled)
- [setProps](DotLayerTool.md#setprops)
- [showLayerItems](DotLayerTool.md#showlayeritems)
- [switchEnabled](DotLayerTool.md#switchenabled)
- [updateDimension](DotLayerTool.md#updatedimension)

## Constructors

### constructor

• **new DotLayerTool**(`props?`): [`DotLayerTool`](DotLayerTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IDotLayerToolProps`](../modules.md#idotlayertoolprops) |

#### Returns

[`DotLayerTool`](DotLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L57)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L53)

___

### radius

• `Private` **radius**: `number`

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L55)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L52)

## Methods

### calculateRadius

▸ **calculateRadius**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:272](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L272)

___

### copy

▸ **copy**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[copy](../interfaces/IDotLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L63)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[create](../interfaces/IDotLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L79)

___

### createDot

▸ **createDot**(`data`, `renderer`): `undefined` \| `CircleMarker`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `IWorkData` |
| `renderer` | `Canvas` |

#### Returns

`undefined` \| `CircleMarker`\<`any`\>

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L207)

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

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L114)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L106)

___

### createMarkers

▸ **createMarkers**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:297](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L297)

___

### createState

▸ **createState**(): [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It creates new defaults of the layer tool.

#### Returns

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L83)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getAPIGetter](../interfaces/IDotLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getDefaults](../interfaces/IDotLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L71)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getId](../interfaces/IDotLayerTool.md#getid)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getLayerItems](../interfaces/IDotLayerTool.md#getlayeritems)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getMap](../interfaces/IDotLayerTool.md#getmap)

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

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L99)

___

### getProps

▸ **getProps**(): [`IDotLayerToolProps`](../modules.md#idotlayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IDotLayerToolProps`](../modules.md#idotlayertoolprops)

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getProps](../interfaces/IDotLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L67)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L87)

___

### getState

▸ **getState**(): [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the map object state.

#### Returns

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getState](../interfaces/IDotLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L75)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[getType](../interfaces/IDotLayerTool.md#gettype)

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

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:318](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L318)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[initialize](../interfaces/IDotLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L110)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IDotLayerTool](../interfaces/IDotLayerTool.md).[isEnabled](../interfaces/IDotLayerTool.md#isenabled)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[isSingleton](../interfaces/IDotLayerTool.md#issingleton)

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

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L130)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[render](../interfaces/IDotLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:227](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L227)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[setEnabled](../interfaces/IDotLayerTool.md#setenabled)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[switchEnabled](../interfaces/IDotLayerTool.md#switchenabled)

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

[IDotLayerTool](../interfaces/IDotLayerTool.md).[updateDimension](../interfaces/IDotLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerTool.ts:249](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L249)
