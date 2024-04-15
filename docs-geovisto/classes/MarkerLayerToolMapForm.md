[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerLayerToolMapForm

# Class: MarkerLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\>

  ↳ **`MarkerLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](MarkerLayerToolMapForm.md#constructor)

### Properties

- [htmlContent](MarkerLayerToolMapForm.md#htmlcontent)
- [inputs](MarkerLayerToolMapForm.md#inputs)

### Methods

- [getAutocompleteInput](MarkerLayerToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](MarkerLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](MarkerLayerToolMapForm.md#getcolorinput)
- [getContent](MarkerLayerToolMapForm.md#getcontent)
- [getInputAggregation](MarkerLayerToolMapForm.md#getinputaggregation)
- [getInputCategory](MarkerLayerToolMapForm.md#getinputcategory)
- [getInputGeoData](MarkerLayerToolMapForm.md#getinputgeodata)
- [getInputGeoId](MarkerLayerToolMapForm.md#getinputgeoid)
- [getInputUnits](MarkerLayerToolMapForm.md#getinputunits)
- [getInputUnitsDesc](MarkerLayerToolMapForm.md#getinputunitsdesc)
- [getInputUnitsEnabled](MarkerLayerToolMapForm.md#getinputunitsenabled)
- [getInputValue](MarkerLayerToolMapForm.md#getinputvalue)
- [getMapObject](MarkerLayerToolMapForm.md#getmapobject)
- [getNumberInput](MarkerLayerToolMapForm.md#getnumberinput)
- [getSliderInput](MarkerLayerToolMapForm.md#getsliderinput)
- [getTextInput](MarkerLayerToolMapForm.md#gettextinput)
- [setInputValues](MarkerLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new MarkerLayerToolMapForm**(`tool`): [`MarkerLayerToolMapForm`](MarkerLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\> |

#### Returns

[`MarkerLayerToolMapForm`](MarkerLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L41)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L23)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `category` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `geoData` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `geoId` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `units` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `unitsDesc` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `unitsEnabled` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `value` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L25)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L67)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:137](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L137)

___

### getInputCategory

▸ **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:146](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L146)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L110)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:119](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L119)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:167](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L167)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:176](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L176)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:155](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L155)

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

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:128](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L128)

___

### getMapObject

▸ **getMapObject**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\>

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
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/form/MarkerLayerToolMapForm.ts#L50)
