**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ChoroplethLayerTool

# Class: ChoroplethLayerTool

This class represents Choropleth layer tool. It works with geojson polygons representing countries.

## Author

Jiri Hynek

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new ChoroplethLayerTool()

> **new ChoroplethLayerTool**(`props`?): [`ChoroplethLayerTool`](ChoroplethLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md)

#### Returns

[`ChoroplethLayerTool`](ChoroplethLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L89)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L81)

***

### mapLegend

> `private` **mapLegend**: [`IMapLegend`](../interfaces/IMapLegend.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L82)

***

### selectionToolAPI

> `private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L79)

***

### themesToolAPI

> `private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L80)

## Methods

### computeColorClass()

> `protected` **computeColorClass**(`val`, `scale`): `string`

It returns color class for the current scale and given value.

#### Parameters

• **val**: `number`

• **scale**: `number`[]

#### Returns

`string`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:720](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L720)

***

### computeColorIntensity()

> **computeColorIntensity**(`val`, `scale`): `number`

It returns color intensity for the current scale and given value.

#### Parameters

• **val**: `number`

• **scale**: `number`[]

#### Returns

`number`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`computeColorIntensity`](../interfaces/IChoroplethLayerTool.md#computecolorintensity)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:735](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L735)

***

### computeStyleClasses()

> `protected` **computeStyleClasses**(`item`, `scale`): `string`[]

It returns style classes for the current template and given feature.

#### Parameters

• **item**: `Polygon`

• **scale**: `number`[]

#### Returns

`string`[]

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:649](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L649)

***

### copy()

> **copy**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`copy`](../interfaces/IChoroplethLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L96)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`create`](../interfaces/IChoroplethLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L117)

***

### createGeoJSONLayer()

> `protected` **createGeoJSONLayer**(): `GeoJSON`

It creates an instance of the Leaflet GeoJSON layer.

#### Returns

`GeoJSON`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:239](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L239)

***

### createLayerItems()

> `protected` **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L207)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:173](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L173)

***

### createMapLegend()

> `protected` **createMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It creates new legend control.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:181](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L181)

***

### createState()

> `protected` **createState**(): [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>

It returns default tool state.

#### Returns

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:131](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L131)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getAPIGetter`](../interfaces/IChoroplethLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getClickFunction()

> `protected` **getClickFunction**(): (`e`) => `void`

It returns the click property for the GeoJSON layer.

#### Returns

`Function`

> ##### Parameters
>
> • **e**: `LeafletMouseEvent`
>
> ##### Returns
>
> `void`
>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:322](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L322)

***

### getDefaults()

> **getDefaults**(): [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getDefaults`](../interfaces/IChoroplethLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L110)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getId`](../interfaces/IChoroplethLayerTool.md#getid)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getId`](AbstractLayerTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getLayerItems()

> **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getLayerItems`](../interfaces/IChoroplethLayerTool.md#getlayeritems)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getLayerItems`](AbstractLayerTool.md#getlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L163)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getMap`](../interfaces/IChoroplethLayerTool.md#getmap)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getMap`](AbstractLayerTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:164](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L164)

***

### getMapLegend()

> **getMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It returns a legend.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:188](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L188)

***

### getMouseOutFunction()

> `protected` **getMouseOutFunction**(): (`e`) => `void`

It returns the mouseout property for the GeoJSON layer.

#### Returns

`Function`

> ##### Parameters
>
> • **e**: `LeafletMouseEvent`
>
> ##### Returns
>
> `void`
>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:307](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L307)

***

### getMouseOverFunction()

> `protected` **getMouseOverFunction**(): (`e`) => `void`

It returns the mouseover property for the GeoJSON layer.

#### Returns

`Function`

> ##### Parameters
>
> • **e**: `LeafletMouseEvent`
>
> ##### Returns
>
> `void`
>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:264](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L264)

***

### getOnEachFeatureFunction()

> `protected` **getOnEachFeatureFunction**(): (`feature`, `layer`) => `void`

It returns the onEachFeature property for the GeoJSON layer.

#### Returns

`Function`

> ##### Parameters
>
> • **feature**: `Feature`
>
> • **layer**: `Layer`
>
> ##### Returns
>
> `void`
>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:251](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L251)

***

### getProps()

> **getProps**(): [`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md)

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getProps`](../interfaces/IChoroplethLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L103)

***

### getScale()

> **getScale**(): `undefined` \| `number`[]

Help function which returns a scale which can be used to distinguish value levels in choropleth.

#### Returns

`undefined` \| `number`[]

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getScale`](../interfaces/IChoroplethLayerTool.md#getscale)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:588](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L588)

***

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L138)

***

### getState()

> **getState**(): [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>

It returns the layer tool state.

#### Returns

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getState`](../interfaces/IChoroplethLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L124)

***

### getThemesTool()

> `private` **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:151](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L151)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`getType`](../interfaces/IChoroplethLayerTool.md#gettype)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

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

[`AbstractLayerTool`](AbstractLayerTool.md).[`handleEvent`](AbstractLayerTool.md#handleevent)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:532](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L532)

***

### hideLayerItems()

> `protected` **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`hideLayerItems`](AbstractLayerTool.md#hidelayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L147)

***

### hoverItem()

> `protected` **hoverItem**(`item`, `hover`): `void`

It updates style of the given feature using the current template.

#### Parameters

• **item**: `Layer`

• **hover**: `boolean`

#### Returns

`void`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:748](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L748)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`initialize`](../interfaces/IChoroplethLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:200](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L200)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`isEnabled`](../interfaces/IChoroplethLayerTool.md#isenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isEnabled`](AbstractLayerTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`isSingleton`](../interfaces/IChoroplethLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer.

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`render`](../interfaces/IChoroplethLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:480](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L480)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`setEnabled`](../interfaces/IChoroplethLayerTool.md#setenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setEnabled`](AbstractLayerTool.md#setenabled)

#### Source

[model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L102)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setProps`](AbstractLayerTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### showLayerItems()

> `protected` **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`showLayerItems`](AbstractLayerTool.md#showlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L126)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`switchEnabled`](../interfaces/IChoroplethLayerTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateData()

> `protected` **updateData**(): `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

It updates the bucket data so it represents the current data.

#### Returns

`Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:379](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L379)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `redraw`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\>

• **value**: `string`

• **redraw**: `undefined` \| `number`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md).[`updateDimension`](../interfaces/IChoroplethLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:507](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L507)

***

### updateGeoData()

> `protected` **updateGeoData**(): `any`

It updates the polygons of the layer so they represent current geo data.

#### Returns

`any`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:345](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L345)

***

### updateItemStyle()

> `protected` **updateItemStyle**(`item`, `scale`, `animateOptions`?): `void`

It updates style of the given feature using the current template.

#### Parameters

• **item**: `Layer`

• **scale**: `number`[]

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:629](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L629)

***

### updateStyle()

> `protected` **updateStyle**(`animateOptions`?): `void`

It updates style of all layer features using the current template.

#### Parameters

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:575](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L575)

***

### updateTheme()

> `protected` **updateTheme**(`theme`): `void`

Help function which updates theme with respect to the Themes Tool API.

TODO: move to adapter

#### Parameters

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts:566](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerTool.ts#L566)
