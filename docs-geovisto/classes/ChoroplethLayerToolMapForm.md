**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ChoroplethLayerToolMapForm

# Class: ChoroplethLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Jiri Hynek

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new ChoroplethLayerToolMapForm()

> **new ChoroplethLayerToolMapForm**(`tool`): [`ChoroplethLayerToolMapForm`](ChoroplethLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

[`ChoroplethLayerToolMapForm`](ChoroplethLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L49)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L25)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### aggregation

> **aggregation**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### color

> **color**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### customColor

> **customColor**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### customMinMax

> **customMinMax**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### geoData

> **geoData**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### geoId

> **geoId**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### maxValue

> **maxValue**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### minValue

> **minValue**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### range

> **range**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### scaling

> **scaling**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### units

> **units**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### unitsDesc

> **unitsDesc**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### unitsEnabled

> **unitsEnabled**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### value

> **value**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L27)

## Methods

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

It returns the sidebar tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L87)

***

### getInputAggregation()

> **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:169](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L169)

***

### getInputColor()

> **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the color dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:219](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L219)

***

### getInputCustomColor()

> **getInputCustomColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the custom color dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:178](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L178)

***

### getInputCustomMinMax()

> **getInputCustomMinMax**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the custom min-max dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L246)

***

### getInputGeoData()

> **getInputGeoData**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo data dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L142)

***

### getInputGeoId()

> **getInputGeoId**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo id dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:151](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L151)

***

### getInputMaxValue()

> **getInputMaxValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the max value dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:268](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L268)

***

### getInputMinValue()

> **getInputMinValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the min value dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:259](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L259)

***

### getInputRange()

> **getInputRange**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the range dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:228](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L228)

***

### getInputScaling()

> **getInputScaling**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the scaling dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:237](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L237)

***

### getInputUnits()

> **getInputUnits**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:201](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L201)

***

### getInputUnitsDesc()

> **getInputUnitsDesc**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units description dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:210](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L210)

***

### getInputUnitsEnabled()

> **getInputUnitsEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the enabling inputs dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:189](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L189)

***

### getInputValue()

> **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:160](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L160)

***

### getMapObject()

> `protected` **getMapObject**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

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

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.customColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.customMinMax**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.maxValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.minValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.range**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

• **dimensions.round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.scaling**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

• **dimensions.units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L58)
