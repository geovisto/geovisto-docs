**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SpikeLayerToolMapForm

# Class: SpikeLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Vladimir Korencik

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new SpikeLayerToolMapForm()

> **new SpikeLayerToolMapForm**(`tool`): [`SpikeLayerToolMapForm`](SpikeLayerToolMapForm.md)

#### Parameters

• **tool**: [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Returns

[`SpikeLayerToolMapForm`](SpikeLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L49)

## Properties

### btnGroup

> `private` **btnGroup**: `null` \| `HTMLDivElement`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L34)

***

### categoryColor

> `private` **categoryColor**: `HTMLDivElement`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L35)

***

### categoryColorForm?

> `private` `optional` **categoryColorForm**: `ICategoryColorForm`[]

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L47)

***

### categoryColorInputs?

> `private` `optional` **categoryColorInputs**: `ICategoryColorInputs`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L46)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L32)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### aggregation

> **aggregation**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### category

> **category**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### color

> **color**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### latitude

> **latitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### longitude

> **longitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### value

> **value**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L37)

***

### tool

> `private` **tool**: [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L33)

## Methods

### addSelectItem()

> `private` **addSelectItem**(): `void`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L120)

***

### applyFilters()

> `private` **applyFilters**(): `void`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:175](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L175)

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

### getCategoryColorContent()

> `private` **getCategoryColorContent**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:202](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L202)

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

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L87)

***

### getInputAggregation()

> **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:264](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L264)

***

### getInputCategory()

> **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:252](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L252)

***

### getInputCategoryColor()

> **getInputCategoryColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:284](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L284)

***

### getInputCategoryColorOperation()

> **getInputCategoryColorOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:274](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L274)

***

### getInputCategoryColorValue()

> **getInputCategoryColorValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:279](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L279)

***

### getInputColor()

> **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:270](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L270)

***

### getInputLatitude()

> **getInputLatitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:240](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L240)

***

### getInputLongtitude()

> **getInputLongtitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L246)

***

### getInputValue()

> **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:258](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L258)

***

### getMapObject()

> `protected` **getMapObject**(): [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Returns

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

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

### getTool()

> **getTool**(): [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Returns

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L57)

***

### removeSelectItem()

> `private` **removeSelectItem**(`e`): `void`

#### Parameters

• **e**: `MouseEvent`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:161](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L161)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/form/SpikeLayerToolMapForm.ts#L61)
