**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BubbleLayerToolMapForm

# Class: BubbleLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Vladimir Korencik

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new BubbleLayerToolMapForm()

> **new BubbleLayerToolMapForm**(`tool`): [`BubbleLayerToolMapForm`](BubbleLayerToolMapForm.md)

#### Parameters

• **tool**: [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Returns

[`BubbleLayerToolMapForm`](BubbleLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L51)

## Properties

### btnGroup

> `private` **btnGroup**: `null` \| `HTMLDivElement`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L35)

***

### categoryColor

> `private` **categoryColor**: `HTMLDivElement`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L36)

***

### categoryColorForm?

> `private` `optional` **categoryColorForm**: `ICategoryColorForm`[]

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L49)

***

### categoryColorInputs?

> `private` `optional` **categoryColorInputs**: `ICategoryColorInputs`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L48)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L33)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### aggregation

> **aggregation**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### bubbleSize

> **bubbleSize**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

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

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L38)

***

### tool

> `private` **tool**: [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L34)

## Methods

### addSelectItem()

> `private` **addSelectItem**(): `void`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:125](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L125)

***

### applyFilters()

> `private` **applyFilters**(): `void`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:180](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L180)

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

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L207)

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

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L90)

***

### getInputAggregation()

> **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:269](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L269)

***

### getInputBubbleSize()

> **getInputBubbleSize**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:279](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L279)

***

### getInputCategory()

> **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:257](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L257)

***

### getInputCategoryColor()

> **getInputCategoryColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:295](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L295)

***

### getInputCategoryColorOperation()

> **getInputCategoryColorOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:285](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L285)

***

### getInputCategoryColorValue()

> **getInputCategoryColorValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:290](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L290)

***

### getInputColor()

> **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:275](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L275)

***

### getInputLatitude()

> **getInputLatitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:245](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L245)

***

### getInputLongtitude()

> **getInputLongtitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:251](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L251)

***

### getInputValue()

> **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:263](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L263)

***

### getMapObject()

> `protected` **getMapObject**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

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

> **getTool**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L59)

***

### removeSelectItem()

> `private` **removeSelectItem**(`e`): `void`

#### Parameters

• **e**: `MouseEvent`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:166](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L166)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.bubbleSize**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

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

[tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L63)
