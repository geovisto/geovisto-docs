**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TimelineToolMapForm

# Class: TimelineToolMapForm

This class provides controls for management of Timeline map form inputs.

## Author

Krystof Rykala

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`ITimelineTool`](../interfaces/ITimelineTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new TimelineToolMapForm()

> **new TimelineToolMapForm**(`layerTool`): [`TimelineToolMapForm`](TimelineToolMapForm.md)

#### Parameters

• **layerTool**: [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

#### Returns

[`TimelineToolMapForm`](TimelineToolMapForm.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[model/internal/form/MapLayerToolForm.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapLayerToolForm.ts#L22)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L12)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### chartAggregationFn

> **chartAggregationFn**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### chartEnabled

> **chartEnabled**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### chartValuePath

> **chartValuePath**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### granularity

> **granularity**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### realTimeEnabled

> **realTimeEnabled**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### stepTimeLength

> **stepTimeLength**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### timePath

> **timePath**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### transitionDuration

> **transitionDuration**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L15)

***

### submitButton

> `private` **submitButton**: `HTMLButtonElement`

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L13)

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

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L53)

***

### getInputChartAggregationFn()

> `private` **getInputChartAggregationFn**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L143)

***

### getInputChartEnabled()

> `private` **getInputChartEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:132](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L132)

***

### getInputChartValuePath()

> `private` **getInputChartValuePath**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:139](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L139)

***

### getInputGranularity()

> `private` **getInputGranularity**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:128](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L128)

***

### getInputRealTimeEnabled()

> `private` **getInputRealTimeEnabled**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:122](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L122)

***

### getInputStepTimeLength()

> `private` **getInputStepTimeLength**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L113)

***

### getInputTimePath()

> `private` **getInputTimePath**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L109)

***

### getInputTransitionDuration()

> `private` **getInputTransitionDuration**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L117)

***

### getMapObject()

> `protected` **getMapObject**(): [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

#### Returns

[`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

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

### onSubmit()

> `private` **onSubmit**(): `void`

#### Returns

`void`

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L105)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.chartAggregationFn**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.chartEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.chartValuePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.granularity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

• **dimensions.realTimeEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.stepTimeLength**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.story**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.storyEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.timePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.transitionDuration**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/timeline/model/internal/form/TimelineToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/form/TimelineToolMapForm.ts#L31)
