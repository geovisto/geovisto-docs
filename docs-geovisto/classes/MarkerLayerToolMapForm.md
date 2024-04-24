**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerLayerToolMapForm

# Class: MarkerLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Jiri Hynek

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new MarkerLayerToolMapForm()

> **new MarkerLayerToolMapForm**(`tool`): [`MarkerLayerToolMapForm`](MarkerLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

[`MarkerLayerToolMapForm`](MarkerLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L41)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L23)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### aggregation

> **aggregation**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### category

> **category**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### geoData

> **geoData**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### geoId

> **geoId**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### units

> **units**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### unitsDesc

> **unitsDesc**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### unitsEnabled

> **unitsEnabled**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### value

> **value**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L25)

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

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L67)

***

### getInputAggregation()

> **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:137](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L137)

***

### getInputCategory()

> **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:146](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L146)

***

### getInputGeoData()

> **getInputGeoData**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo data dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L110)

***

### getInputGeoId()

> **getInputGeoId**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo id dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:119](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L119)

***

### getInputUnits()

> **getInputUnits**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:167](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L167)

***

### getInputUnitsDesc()

> **getInputUnitsDesc**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units description dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:176](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L176)

***

### getInputUnitsEnabled()

> **getInputUnitsEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the enabling inputs dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:155](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L155)

***

### getInputValue()

> **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:128](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L128)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

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

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L50)
