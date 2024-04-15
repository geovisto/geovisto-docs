[geovisto-map](../README.md) / [Exports](../modules.md) / TimelineToolMapForm

# Class: TimelineToolMapForm

This class provides controls for management of Timeline map form inputs.

**`Author`**

Krystof Rykala

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`ITimelineTool`](../interfaces/ITimelineTool.md)\>

  ↳ **`TimelineToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](TimelineToolMapForm.md#constructor)

### Properties

- [htmlContent](TimelineToolMapForm.md#htmlcontent)
- [inputs](TimelineToolMapForm.md#inputs)
- [submitButton](TimelineToolMapForm.md#submitbutton)

### Methods

- [getAutocompleteInput](TimelineToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](TimelineToolMapForm.md#getcheckboxinput)
- [getColorInput](TimelineToolMapForm.md#getcolorinput)
- [getContent](TimelineToolMapForm.md#getcontent)
- [getInputChartAggregationFn](TimelineToolMapForm.md#getinputchartaggregationfn)
- [getInputChartEnabled](TimelineToolMapForm.md#getinputchartenabled)
- [getInputChartValuePath](TimelineToolMapForm.md#getinputchartvaluepath)
- [getInputGranularity](TimelineToolMapForm.md#getinputgranularity)
- [getInputRealTimeEnabled](TimelineToolMapForm.md#getinputrealtimeenabled)
- [getInputStepTimeLength](TimelineToolMapForm.md#getinputsteptimelength)
- [getInputTimePath](TimelineToolMapForm.md#getinputtimepath)
- [getInputTransitionDuration](TimelineToolMapForm.md#getinputtransitionduration)
- [getMapObject](TimelineToolMapForm.md#getmapobject)
- [getNumberInput](TimelineToolMapForm.md#getnumberinput)
- [getSliderInput](TimelineToolMapForm.md#getsliderinput)
- [getTextInput](TimelineToolMapForm.md#gettextinput)
- [onSubmit](TimelineToolMapForm.md#onsubmit)
- [setInputValues](TimelineToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new TimelineToolMapForm**(`layerTool`): [`TimelineToolMapForm`](TimelineToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerTool` | [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\> |

#### Returns

[`TimelineToolMapForm`](TimelineToolMapForm.md)

#### Inherited from

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/model/internal/form/MapLayerToolForm.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L22)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L12)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chartAggregationFn` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `chartEnabled` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `chartValuePath` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `granularity` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `realTimeEnabled` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `stepTimeLength` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `timePath` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `transitionDuration` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L15)

___

### submitButton

• `Private` **submitButton**: `HTMLButtonElement`

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L13)

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

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[getContent](MapLayerToolForm.md#getcontent)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L53)

___

### getInputChartAggregationFn

▸ **getInputChartAggregationFn**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L143)

___

### getInputChartEnabled

▸ **getInputChartEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:132](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L132)

___

### getInputChartValuePath

▸ **getInputChartValuePath**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:139](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L139)

___

### getInputGranularity

▸ **getInputGranularity**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:128](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L128)

___

### getInputRealTimeEnabled

▸ **getInputRealTimeEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L122)

___

### getInputStepTimeLength

▸ **getInputStepTimeLength**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L113)

___

### getInputTimePath

▸ **getInputTimePath**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L109)

___

### getInputTransitionDuration

▸ **getInputTransitionDuration**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L117)

___

### getMapObject

▸ **getMapObject**(): [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\>

#### Returns

[`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\>

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

### onSubmit

▸ **onSubmit**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L105)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.chartAggregationFn` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.chartEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.chartValuePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.granularity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> |
| `dimensions.realTimeEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.stepTimeLength` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.story` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.storyEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.timePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.transitionDuration` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/timeline/model/internal/form/TimelineToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L31)
