[geovisto-map](../README.md) / [Exports](../modules.md) / BubbleLayerToolMapForm

# Class: BubbleLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\>

  ↳ **`BubbleLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](BubbleLayerToolMapForm.md#constructor)

### Properties

- [btnGroup](BubbleLayerToolMapForm.md#btngroup)
- [categoryColor](BubbleLayerToolMapForm.md#categorycolor)
- [categoryColorForm](BubbleLayerToolMapForm.md#categorycolorform)
- [categoryColorInputs](BubbleLayerToolMapForm.md#categorycolorinputs)
- [htmlContent](BubbleLayerToolMapForm.md#htmlcontent)
- [inputs](BubbleLayerToolMapForm.md#inputs)
- [tool](BubbleLayerToolMapForm.md#tool)

### Methods

- [addSelectItem](BubbleLayerToolMapForm.md#addselectitem)
- [applyFilters](BubbleLayerToolMapForm.md#applyfilters)
- [getAutocompleteInput](BubbleLayerToolMapForm.md#getautocompleteinput)
- [getCategoryColorContent](BubbleLayerToolMapForm.md#getcategorycolorcontent)
- [getCheckboxInput](BubbleLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](BubbleLayerToolMapForm.md#getcolorinput)
- [getContent](BubbleLayerToolMapForm.md#getcontent)
- [getInputAggregation](BubbleLayerToolMapForm.md#getinputaggregation)
- [getInputBubbleSize](BubbleLayerToolMapForm.md#getinputbubblesize)
- [getInputCategory](BubbleLayerToolMapForm.md#getinputcategory)
- [getInputCategoryColor](BubbleLayerToolMapForm.md#getinputcategorycolor)
- [getInputCategoryColorOperation](BubbleLayerToolMapForm.md#getinputcategorycoloroperation)
- [getInputCategoryColorValue](BubbleLayerToolMapForm.md#getinputcategorycolorvalue)
- [getInputColor](BubbleLayerToolMapForm.md#getinputcolor)
- [getInputLatitude](BubbleLayerToolMapForm.md#getinputlatitude)
- [getInputLongtitude](BubbleLayerToolMapForm.md#getinputlongtitude)
- [getInputValue](BubbleLayerToolMapForm.md#getinputvalue)
- [getMapObject](BubbleLayerToolMapForm.md#getmapobject)
- [getNumberInput](BubbleLayerToolMapForm.md#getnumberinput)
- [getSliderInput](BubbleLayerToolMapForm.md#getsliderinput)
- [getTextInput](BubbleLayerToolMapForm.md#gettextinput)
- [getTool](BubbleLayerToolMapForm.md#gettool)
- [removeSelectItem](BubbleLayerToolMapForm.md#removeselectitem)
- [setInputValues](BubbleLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new BubbleLayerToolMapForm**(`tool`): [`BubbleLayerToolMapForm`](BubbleLayerToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\> |

#### Returns

[`BubbleLayerToolMapForm`](BubbleLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L51)

## Properties

### btnGroup

• `Private` **btnGroup**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L35)

___

### categoryColor

• `Private` **categoryColor**: `HTMLDivElement`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L36)

___

### categoryColorForm

• `Private` `Optional` **categoryColorForm**: `ICategoryColorForm`[]

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L49)

___

### categoryColorInputs

• `Private` `Optional` **categoryColorInputs**: `ICategoryColorInputs`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L48)

___

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L33)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `bubbleSize` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `category` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `color` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `latitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `longitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `value` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L38)

___

### tool

• `Private` **tool**: [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L34)

## Methods

### addSelectItem

▸ **addSelectItem**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:125](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L125)

___

### applyFilters

▸ **applyFilters**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:180](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L180)

___

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

### getCategoryColorContent

▸ **getCategoryColorContent**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L207)

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

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L90)

___

### getInputAggregation

▸ **getInputAggregation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:269](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L269)

___

### getInputBubbleSize

▸ **getInputBubbleSize**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:279](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L279)

___

### getInputCategory

▸ **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:257](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L257)

___

### getInputCategoryColor

▸ **getInputCategoryColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:295](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L295)

___

### getInputCategoryColorOperation

▸ **getInputCategoryColorOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:285](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L285)

___

### getInputCategoryColorValue

▸ **getInputCategoryColorValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:290](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L290)

___

### getInputColor

▸ **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:275](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L275)

___

### getInputLatitude

▸ **getInputLatitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:245](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L245)

___

### getInputLongtitude

▸ **getInputLongtitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:251](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L251)

___

### getInputValue

▸ **getInputValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:263](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L263)

___

### getMapObject

▸ **getMapObject**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

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

### getTool

▸ **getTool**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\>

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L59)

___

### removeSelectItem

▸ **removeSelectItem**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:166](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L166)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.bubbleSize` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/form/BubbleLayerToolMapForm.ts#L63)
