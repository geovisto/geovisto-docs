**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HeatLayerToolMapForm

# Class: HeatLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Vladimir Korencik

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new HeatLayerToolMapForm()

> **new HeatLayerToolMapForm**(`tool`): [`HeatLayerToolMapForm`](HeatLayerToolMapForm.md)

#### Parameters

• **tool**: [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Returns

[`HeatLayerToolMapForm`](HeatLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L56)

## Properties

### btnGroup

> `private` **btnGroup**: `null` \| `HTMLDivElement`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L39)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L36)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### blur

> **blur**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### currentZoom

> **currentZoom**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### gradient

> **gradient**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### intensity

> **intensity**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### latitude

> **latitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### longitude

> **longitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### radius

> **radius**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### zoom

> **zoom**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L41)

***

### reactiveRadius

> `private` **reactiveRadius**: `HTMLDivElement`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L37)

***

### reactiveRadiusForm?

> `private` `optional` **reactiveRadiusForm**: `IReactiveRadiusForm`[]

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L54)

***

### reactiveRadiusInputs?

> `private` `optional` **reactiveRadiusInputs**: `IReactiveRadiusInputs`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L52)

***

### tool

> `private` **tool**: [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L38)

## Methods

### addSelectItem()

> `private` **addSelectItem**(): `void`

#### Returns

`void`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:165](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L165)

***

### applyFilters()

> `private` **applyFilters**(): `void`

#### Returns

`void`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:221](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L221)

***

### getAutocompleteInput()

> `protected` **getAutocompleteInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal autocomplete input for the any map domain dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getAutocompleteInput`](MapLayerToolForm.md#getautocompleteinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L43)

***

### getCheckboxInput()

> `protected` **getCheckboxInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal checkbox input for the any map boolean dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getCheckboxInput`](MapLayerToolForm.md#getcheckboxinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L78)

***

### getColorInput()

> `protected` **getColorInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal color input for the any map string dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getColorInput`](MapLayerToolForm.md#getcolorinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L96)

***

### getContent()

> **getContent**(): `HTMLDivElement`

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L99)

***

### getCurrentZoom()

> **getCurrentZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:311](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L311)

***

### getInputBlur()

> **getInputBlur**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:302](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L302)

***

### getInputGradient()

> **getInputGradient**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:297](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L297)

***

### getInputIntensity()

> **getInputIntensity**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:288](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L288)

***

### getInputLatitude()

> **getInputLatitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:276](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L276)

***

### getInputLongtitude()

> **getInputLongtitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:282](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L282)

***

### getInputRadius()

> **getInputRadius**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:294](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L294)

***

### getInputReactiveRadius()

> **getInputReactiveRadius**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:325](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L325)

***

### getInputReactiveRadiusOperation()

> **getInputReactiveRadiusOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:315](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L315)

***

### getInputReactiveRadiusZoom()

> **getInputReactiveRadiusZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:320](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L320)

***

### getInputZoom()

> **getInputZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:305](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L305)

***

### getMapObject()

> `protected` **getMapObject**(): [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Returns

[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getMapObject`](MapLayerToolForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)

***

### getNumberInput()

> `protected` **getNumberInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal number input for the any map number dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getNumberInput`](MapLayerToolForm.md#getnumberinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:133](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L133)

***

### getReactiveRadiusContent()

> `private` **getReactiveRadiusContent**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:250](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L250)

***

### getSliderInput()

> `protected` **getSliderInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal slider input for the any map range integer dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getSliderInput`](MapLayerToolForm.md#getsliderinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L113)

***

### getTextInput()

> `protected` **getTextInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal text input for the any map domain dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getTextInput`](MapLayerToolForm.md#gettextinput)

#### Source

[model/internal/form/MapLayerToolForm.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L61)

***

### getTool()

> **getTool**(): [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Returns

[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L63)

***

### removeSelectItem()

> `private` **removeSelectItem**(`e`): `void`

#### Parameters

• **e**: `MouseEvent`

#### Returns

`void`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L207)

***

### setCurrentZoom()

> `private` **setCurrentZoom**(`e`?): `void`

#### Parameters

• **e?**: `any`

#### Returns

`void`

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:272](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L272)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.blur**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.currentZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.gradient**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

• **dimensions.intensity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.radius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.reactiveOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.reactiveRadius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.reactiveZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.zoom**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L67)
