[geovisto-map](../README.md) / [Exports](../modules.md) / ChoroplethLayerToolMapForm

# Class: ChoroplethLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\>

  ↳ **`ChoroplethLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](ChoroplethLayerToolMapForm.md#constructor)

### Properties

- [htmlContent](ChoroplethLayerToolMapForm.md#htmlcontent)
- [inputs](ChoroplethLayerToolMapForm.md#inputs)

### Methods

- [getAutocompleteInput](ChoroplethLayerToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](ChoroplethLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](ChoroplethLayerToolMapForm.md#getcolorinput)
- [getContent](ChoroplethLayerToolMapForm.md#getcontent)
- [getInputAggregation](ChoroplethLayerToolMapForm.md#getinputaggregation)
- [getInputColor](ChoroplethLayerToolMapForm.md#getinputcolor)
- [getInputCustomColor](ChoroplethLayerToolMapForm.md#getinputcustomcolor)
- [getInputCustomMinMax](ChoroplethLayerToolMapForm.md#getinputcustomminmax)
- [getInputGeoData](ChoroplethLayerToolMapForm.md#getinputgeodata)
- [getInputGeoId](ChoroplethLayerToolMapForm.md#getinputgeoid)
- [getInputMaxValue](ChoroplethLayerToolMapForm.md#getinputmaxvalue)
- [getInputMinValue](ChoroplethLayerToolMapForm.md#getinputminvalue)
- [getInputRange](ChoroplethLayerToolMapForm.md#getinputrange)
- [getInputScaling](ChoroplethLayerToolMapForm.md#getinputscaling)
- [getInputUnits](ChoroplethLayerToolMapForm.md#getinputunits)
- [getInputUnitsDesc](ChoroplethLayerToolMapForm.md#getinputunitsdesc)
- [getInputUnitsEnabled](ChoroplethLayerToolMapForm.md#getinputunitsenabled)
- [getInputValue](ChoroplethLayerToolMapForm.md#getinputvalue)
- [getMapObject](ChoroplethLayerToolMapForm.md#getmapobject)
- [getNumberInput](ChoroplethLayerToolMapForm.md#getnumberinput)
- [getSliderInput](ChoroplethLayerToolMapForm.md#getsliderinput)
- [getTextInput](ChoroplethLayerToolMapForm.md#gettextinput)
- [setInputValues](ChoroplethLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new ChoroplethLayerToolMapForm**(`tool`): [`ChoroplethLayerToolMapForm`](ChoroplethLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\> |

#### Returns

[`ChoroplethLayerToolMapForm`](ChoroplethLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L49)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L25)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `color` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `customColor` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `customMinMax` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `geoData` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `geoId` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `maxValue` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `minValue` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `range` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `scaling` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `units` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `unitsDesc` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `unitsEnabled` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `value` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L27)

## Methods

### getAutocompleteInput

▸ **getAutocompleteInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal autocomplete input for the any map domain dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getAutocompleteInput](MapLayerToolForm.md#getautocompleteinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L43)

___

### getCheckboxInput

▸ **getCheckboxInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal checkbox input for the any map boolean dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getCheckboxInput](MapLayerToolForm.md#getcheckboxinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L78)

___

### getColorInput

▸ **getColorInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal color input for the any map string dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getColorInput](MapLayerToolForm.md#getcolorinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L96)

___

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns the sidebar tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[getContent](MapLayerToolForm.md#getcontent)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L87)

___

### getInputAggregation

▸ **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:169](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L169)

___

### getInputColor

▸ **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the color dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:219](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L219)

___

### getInputCustomColor

▸ **getInputCustomColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the custom color dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:178](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L178)

___

### getInputCustomMinMax

▸ **getInputCustomMinMax**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the custom min-max dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L246)

___

### getInputGeoData

▸ **getInputGeoData**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo data dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L142)

___

### getInputGeoId

▸ **getInputGeoId**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo id dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:151](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L151)

___

### getInputMaxValue

▸ **getInputMaxValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the max value dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:268](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L268)

___

### getInputMinValue

▸ **getInputMinValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the min value dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:259](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L259)

___

### getInputRange

▸ **getInputRange**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the range dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:228](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L228)

___

### getInputScaling

▸ **getInputScaling**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the scaling dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:237](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L237)

___

### getInputUnits

▸ **getInputUnits**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:201](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L201)

___

### getInputUnitsDesc

▸ **getInputUnitsDesc**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the units description dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:210](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L210)

___

### getInputUnitsEnabled

▸ **getInputUnitsEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the enabling inputs dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:189](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L189)

___

### getInputValue

▸ **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:160](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L160)

___

### getMapObject

▸ **getMapObject**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\>

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getMapObject](MapLayerToolForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)

___

### getNumberInput

▸ **getNumberInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal number input for the any map number dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getNumberInput](MapLayerToolForm.md#getnumberinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:133](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L133)

___

### getSliderInput

▸ **getSliderInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal slider input for the any map range integer dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getSliderInput](MapLayerToolForm.md#getsliderinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L113)

___

### getTextInput

▸ **getTextInput**(`dimension`, `formAction?`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal text input for the any map domain dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `formAction?` | (`ev`: `Event`) => `void` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[getTextInput](MapLayerToolForm.md#gettextinput)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L61)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.customColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.customMinMax` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.maxValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.minValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.range` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `dimensions.round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.scaling` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> |
| `dimensions.units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/form/ChoroplethLayerToolMapForm.ts#L58)
