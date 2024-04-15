[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerLayerTool

# Class: MarkerLayerTool

This class represents Marker layer tool. It works with geojson polygons representing countries.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`MarkerLayerTool`**

## Implements

- [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IMapLegendControl`](../interfaces/IMapLegendControl.md)

## Table of contents

### Constructors

- [constructor](MarkerLayerTool.md#constructor)

### Properties

- [mapForm](MarkerLayerTool.md#mapform)
- [mapLegend](MarkerLayerTool.md#maplegend)
- [selectionToolAPI](MarkerLayerTool.md#selectiontoolapi)
- [themesToolAPI](MarkerLayerTool.md#themestoolapi)

### Methods

- [copy](MarkerLayerTool.md#copy)
- [create](MarkerLayerTool.md#create)
- [createDefaults](MarkerLayerTool.md#createdefaults)
- [createLayerItems](MarkerLayerTool.md#createlayeritems)
- [createMapForm](MarkerLayerTool.md#createmapform)
- [createMapLegend](MarkerLayerTool.md#createmaplegend)
- [createMarker](MarkerLayerTool.md#createmarker)
- [createMarkers](MarkerLayerTool.md#createmarkers)
- [createState](MarkerLayerTool.md#createstate)
- [deleteLayerItems](MarkerLayerTool.md#deletelayeritems)
- [getAPIGetter](MarkerLayerTool.md#getapigetter)
- [getDefaults](MarkerLayerTool.md#getdefaults)
- [getId](MarkerLayerTool.md#getid)
- [getLayerItems](MarkerLayerTool.md#getlayeritems)
- [getMap](MarkerLayerTool.md#getmap)
- [getMapForm](MarkerLayerTool.md#getmapform)
- [getMapLegend](MarkerLayerTool.md#getmaplegend)
- [getProps](MarkerLayerTool.md#getprops)
- [getSelectionTool](MarkerLayerTool.md#getselectiontool)
- [getState](MarkerLayerTool.md#getstate)
- [getThemesTool](MarkerLayerTool.md#getthemestool)
- [getType](MarkerLayerTool.md#gettype)
- [handleEvent](MarkerLayerTool.md#handleevent)
- [hideLayerItems](MarkerLayerTool.md#hidelayeritems)
- [initialize](MarkerLayerTool.md#initialize)
- [isEnabled](MarkerLayerTool.md#isenabled)
- [isSingleton](MarkerLayerTool.md#issingleton)
- [render](MarkerLayerTool.md#render)
- [setEnabled](MarkerLayerTool.md#setenabled)
- [setProps](MarkerLayerTool.md#setprops)
- [showLayerItems](MarkerLayerTool.md#showlayeritems)
- [switchEnabled](MarkerLayerTool.md#switchenabled)
- [updateCategoryValues](MarkerLayerTool.md#updatecategoryvalues)
- [updateData](MarkerLayerTool.md#updatedata)
- [updateDimension](MarkerLayerTool.md#updatedimension)
- [updateMarkers](MarkerLayerTool.md#updatemarkers)
- [updateTheme](MarkerLayerTool.md#updatetheme)

## Constructors

### constructor

• **new MarkerLayerTool**(`props?`): [`MarkerLayerTool`](MarkerLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops) |

#### Returns

[`MarkerLayerTool`](MarkerLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L96)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L88)

___

### mapLegend

• `Private` **mapLegend**: [`IMapLegend`](../interfaces/IMapLegend.md)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L89)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L86)

___

### themesToolAPI

• `Private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L87)

## Methods

### copy

▸ **copy**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[copy](../interfaces/IMarkerLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L103)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[create](../interfaces/IMarkerLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L124)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:214](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L214)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:191](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L191)

___

### createMapLegend

▸ **createMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It creates new legend control.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:198](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L198)

___

### createMarker

▸ **createMarker**(`pointFeature`, `bucketMap`): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

It creates one marker with respect to the given GeoJSON point feature and data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointFeature` | `Feature`\<`Geometry`, `GeoJsonProperties`\> |
| `bucketMap` | `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:457](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L457)

___

### createMarkers

▸ **createMarkers**(): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

It creates markers using bucket data

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:401](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L401)

___

### createState

▸ **createState**(): [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns default tool state.

#### Returns

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L138)

___

### deleteLayerItems

▸ **deleteLayerItems**(): `void`

It deletes layer items.

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:252](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L252)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getAPIGetter](../interfaces/IMarkerLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getDefaults](../interfaces/IMarkerLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L117)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getId](../interfaces/IMarkerLayerTool.md#getid)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getLayerItems](../interfaces/IMarkerLayerTool.md#getlayeritems)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getMap](../interfaces/IMarkerLayerTool.md#getmap)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L171)

___

### getMapLegend

▸ **getMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It returns a legend with respect to the configuration.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Implementation of

[IMapLegendControl](../interfaces/IMapLegendControl.md).[getMapLegend](../interfaces/IMapLegendControl.md#getmaplegend)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:181](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L181)

___

### getProps

▸ **getProps**(): [`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops)

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getProps](../interfaces/IMarkerLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L110)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L145)

___

### getState

▸ **getState**(): [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the layer tool state.

#### Returns

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getState](../interfaces/IMarkerLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:131](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L131)

___

### getThemesTool

▸ **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L158)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[getType](../interfaces/IMarkerLayerTool.md#gettype)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

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

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:611](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L611)

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

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[initialize](../interfaces/IMarkerLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L207)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[isEnabled](../interfaces/IMarkerLayerTool.md#isenabled)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[isSingleton](../interfaces/IMarkerLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### render

▸ **render**(`type`, `animateOptions?`): `void`

It reloads data and redraw the layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Implementation of

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[render](../interfaces/IMarkerLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:557](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L557)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[setEnabled](../interfaces/IMarkerLayerTool.md#setenabled)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[switchEnabled](../interfaces/IMarkerLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateCategoryValues

▸ **updateCategoryValues**(): `void`

Help function which updates the current category values based on map current data.

This should be called only when animated render is not required.

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:593](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L593)

___

### updateData

▸ **updateData**(): `Map`\<`string`, `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

It prepares data for markers.

#### Returns

`Map`\<`string`, `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:265](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L265)

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

[IMarkerLayerTool](../interfaces/IMarkerLayerTool.md).[updateDimension](../interfaces/IMarkerLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:533](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L533)

___

### updateMarkers

▸ **updateMarkers**(`animateOptions`): `void`

Help method which updates existing markers and applies animation options

#### Parameters

| Name | Type |
| :------ | :------ |
| `animateOptions` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:489](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L489)

___

### updateTheme

▸ **updateTheme**(`theme`): `void`

Help function which updates theme with respect to the Themes Tool API.

TODO: move to adapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:644](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L644)
