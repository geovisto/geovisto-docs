[geovisto-map](../README.md) / [Exports](../modules.md) / ChoroplethLayerTool

# Class: ChoroplethLayerTool

This class represents Choropleth layer tool. It works with geojson polygons representing countries.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`ChoroplethLayerTool`**

## Implements

- [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](ChoroplethLayerTool.md#constructor)

### Properties

- [mapForm](ChoroplethLayerTool.md#mapform)
- [mapLegend](ChoroplethLayerTool.md#maplegend)
- [selectionToolAPI](ChoroplethLayerTool.md#selectiontoolapi)
- [themesToolAPI](ChoroplethLayerTool.md#themestoolapi)

### Methods

- [computeColorClass](ChoroplethLayerTool.md#computecolorclass)
- [computeColorIntensity](ChoroplethLayerTool.md#computecolorintensity)
- [computeStyleClasses](ChoroplethLayerTool.md#computestyleclasses)
- [copy](ChoroplethLayerTool.md#copy)
- [create](ChoroplethLayerTool.md#create)
- [createDefaults](ChoroplethLayerTool.md#createdefaults)
- [createGeoJSONLayer](ChoroplethLayerTool.md#creategeojsonlayer)
- [createLayerItems](ChoroplethLayerTool.md#createlayeritems)
- [createMapForm](ChoroplethLayerTool.md#createmapform)
- [createMapLegend](ChoroplethLayerTool.md#createmaplegend)
- [createState](ChoroplethLayerTool.md#createstate)
- [getAPIGetter](ChoroplethLayerTool.md#getapigetter)
- [getClickFunction](ChoroplethLayerTool.md#getclickfunction)
- [getDefaults](ChoroplethLayerTool.md#getdefaults)
- [getId](ChoroplethLayerTool.md#getid)
- [getLayerItems](ChoroplethLayerTool.md#getlayeritems)
- [getMap](ChoroplethLayerTool.md#getmap)
- [getMapForm](ChoroplethLayerTool.md#getmapform)
- [getMapLegend](ChoroplethLayerTool.md#getmaplegend)
- [getMouseOutFunction](ChoroplethLayerTool.md#getmouseoutfunction)
- [getMouseOverFunction](ChoroplethLayerTool.md#getmouseoverfunction)
- [getOnEachFeatureFunction](ChoroplethLayerTool.md#getoneachfeaturefunction)
- [getProps](ChoroplethLayerTool.md#getprops)
- [getScale](ChoroplethLayerTool.md#getscale)
- [getSelectionTool](ChoroplethLayerTool.md#getselectiontool)
- [getState](ChoroplethLayerTool.md#getstate)
- [getThemesTool](ChoroplethLayerTool.md#getthemestool)
- [getType](ChoroplethLayerTool.md#gettype)
- [handleEvent](ChoroplethLayerTool.md#handleevent)
- [hideLayerItems](ChoroplethLayerTool.md#hidelayeritems)
- [hoverItem](ChoroplethLayerTool.md#hoveritem)
- [initialize](ChoroplethLayerTool.md#initialize)
- [isEnabled](ChoroplethLayerTool.md#isenabled)
- [isSingleton](ChoroplethLayerTool.md#issingleton)
- [render](ChoroplethLayerTool.md#render)
- [setEnabled](ChoroplethLayerTool.md#setenabled)
- [setProps](ChoroplethLayerTool.md#setprops)
- [showLayerItems](ChoroplethLayerTool.md#showlayeritems)
- [switchEnabled](ChoroplethLayerTool.md#switchenabled)
- [updateData](ChoroplethLayerTool.md#updatedata)
- [updateDimension](ChoroplethLayerTool.md#updatedimension)
- [updateGeoData](ChoroplethLayerTool.md#updategeodata)
- [updateItemStyle](ChoroplethLayerTool.md#updateitemstyle)
- [updateStyle](ChoroplethLayerTool.md#updatestyle)
- [updateTheme](ChoroplethLayerTool.md#updatetheme)

## Constructors

### constructor

• **new ChoroplethLayerTool**(`props?`): [`ChoroplethLayerTool`](ChoroplethLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) |

#### Returns

[`ChoroplethLayerTool`](ChoroplethLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L89)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L81)

___

### mapLegend

• `Private` **mapLegend**: [`IMapLegend`](../interfaces/IMapLegend.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L82)

___

### selectionToolAPI

• `Private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L79)

___

### themesToolAPI

• `Private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L80)

## Methods

### computeColorClass

▸ **computeColorClass**(`val`, `scale`): `string`

It returns color class for the current scale and given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |
| `scale` | `number`[] |

#### Returns

`string`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:720](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L720)

___

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

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[computeColorIntensity](../interfaces/IChoroplethLayerTool.md#computecolorintensity)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:735](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L735)

___

### computeStyleClasses

▸ **computeStyleClasses**(`item`, `scale`): `string`[]

It returns style classes for the current template and given feature.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Polygon`\<`any`\> |
| `scale` | `number`[] |

#### Returns

`string`[]

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:649](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L649)

___

### copy

▸ **copy**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[copy](../interfaces/IChoroplethLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L96)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[create](../interfaces/IChoroplethLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L117)

___

### createGeoJSONLayer

▸ **createGeoJSONLayer**(): `GeoJSON`\<`any`, `Geometry`\>

It creates an instance of the Leaflet GeoJSON layer.

#### Returns

`GeoJSON`\<`any`, `Geometry`\>

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:239](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L239)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L207)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:173](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L173)

___

### createMapLegend

▸ **createMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It creates new legend control.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:181](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L181)

___

### createState

▸ **createState**(): [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns default tool state.

#### Returns

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:131](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L131)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getAPIGetter](../interfaces/IChoroplethLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getClickFunction

▸ **getClickFunction**(): (`e`: `LeafletMouseEvent`) => `void`

It returns the click property for the GeoJSON layer.

#### Returns

`fn`

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `LeafletMouseEvent` |

##### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:322](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L322)

___

### getDefaults

▸ **getDefaults**(): [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getDefaults](../interfaces/IChoroplethLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L110)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getId](../interfaces/IChoroplethLayerTool.md#getid)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getLayerItems](../interfaces/IChoroplethLayerTool.md#getlayeritems)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getMap](../interfaces/IChoroplethLayerTool.md#getmap)

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

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:164](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L164)

___

### getMapLegend

▸ **getMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It returns a legend.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:188](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L188)

___

### getMouseOutFunction

▸ **getMouseOutFunction**(): (`e`: `LeafletMouseEvent`) => `void`

It returns the mouseout property for the GeoJSON layer.

#### Returns

`fn`

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `LeafletMouseEvent` |

##### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:307](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L307)

___

### getMouseOverFunction

▸ **getMouseOverFunction**(): (`e`: `LeafletMouseEvent`) => `void`

It returns the mouseover property for the GeoJSON layer.

#### Returns

`fn`

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `LeafletMouseEvent` |

##### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:264](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L264)

___

### getOnEachFeatureFunction

▸ **getOnEachFeatureFunction**(): (`feature`: `Feature`\<`Geometry`, `GeoJsonProperties`\>, `layer`: `Layer`) => `void`

It returns the onEachFeature property for the GeoJSON layer.

#### Returns

`fn`

▸ (`feature`, `layer`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Feature`\<`Geometry`, `GeoJsonProperties`\> |
| `layer` | `Layer` |

##### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:251](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L251)

___

### getProps

▸ **getProps**(): [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops)

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getProps](../interfaces/IChoroplethLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L103)

___

### getScale

▸ **getScale**(): `undefined` \| `number`[]

Help function which returns a scale which can be used to distinguish value levels in choropleth.

#### Returns

`undefined` \| `number`[]

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getScale](../interfaces/IChoroplethLayerTool.md#getscale)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:588](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L588)

___

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L138)

___

### getState

▸ **getState**(): [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the layer tool state.

#### Returns

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getState](../interfaces/IChoroplethLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L124)

___

### getThemesTool

▸ **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:151](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L151)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[getType](../interfaces/IChoroplethLayerTool.md#gettype)

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

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:532](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L532)

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

### hoverItem

▸ **hoverItem**(`item`, `hover`): `void`

It updates style of the given feature using the current template.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Layer` |
| `hover` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:748](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L748)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[initialize](../interfaces/IChoroplethLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:200](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L200)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[isEnabled](../interfaces/IChoroplethLayerTool.md#isenabled)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[isSingleton](../interfaces/IChoroplethLayerTool.md#issingleton)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[render](../interfaces/IChoroplethLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:480](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L480)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[setEnabled](../interfaces/IChoroplethLayerTool.md#setenabled)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[switchEnabled](../interfaces/IChoroplethLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateData

▸ **updateData**(): `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

It updates the bucket data so it represents the current data.

#### Returns

`Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:379](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L379)

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

[IChoroplethLayerTool](../interfaces/IChoroplethLayerTool.md).[updateDimension](../interfaces/IChoroplethLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:507](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L507)

___

### updateGeoData

▸ **updateGeoData**(): `undefined` \| `GeoJSON`\<`any`, `Geometry`\>

It updates the polygons of the layer so they represent current geo data.

#### Returns

`undefined` \| `GeoJSON`\<`any`, `Geometry`\>

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:345](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L345)

___

### updateItemStyle

▸ **updateItemStyle**(`item`, `scale`, `animateOptions?`): `void`

It updates style of the given feature using the current template.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Layer` |
| `scale` | `number`[] |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:629](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L629)

___

### updateStyle

▸ **updateStyle**(`animateOptions?`): `void`

It updates style of all layer features using the current template.

#### Parameters

| Name | Type |
| :------ | :------ |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:575](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L575)

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

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:566](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L566)
