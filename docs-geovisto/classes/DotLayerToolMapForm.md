[geovisto-map](../README.md) / [Exports](../modules.md) / DotLayerToolMapForm

# Class: DotLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\>

  ↳ **`DotLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](DotLayerToolMapForm.md#constructor)

### Properties

- [btnGroup](DotLayerToolMapForm.md#btngroup)
- [categoryColor](DotLayerToolMapForm.md#categorycolor)
- [categoryColorForm](DotLayerToolMapForm.md#categorycolorform)
- [categoryColorInputs](DotLayerToolMapForm.md#categorycolorinputs)
- [htmlContent](DotLayerToolMapForm.md#htmlcontent)
- [inputs](DotLayerToolMapForm.md#inputs)
- [tool](DotLayerToolMapForm.md#tool)

### Methods

- [addSelectItem](DotLayerToolMapForm.md#addselectitem)
- [applyFilters](DotLayerToolMapForm.md#applyfilters)
- [getAutocompleteInput](DotLayerToolMapForm.md#getautocompleteinput)
- [getCategoryColorContent](DotLayerToolMapForm.md#getcategorycolorcontent)
- [getCheckboxInput](DotLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](DotLayerToolMapForm.md#getcolorinput)
- [getContent](DotLayerToolMapForm.md#getcontent)
- [getInputCategory](DotLayerToolMapForm.md#getinputcategory)
- [getInputCategoryColor](DotLayerToolMapForm.md#getinputcategorycolor)
- [getInputCategoryColorOperation](DotLayerToolMapForm.md#getinputcategorycoloroperation)
- [getInputCategoryColorValue](DotLayerToolMapForm.md#getinputcategorycolorvalue)
- [getInputColor](DotLayerToolMapForm.md#getinputcolor)
- [getInputLatitude](DotLayerToolMapForm.md#getinputlatitude)
- [getInputLongtitude](DotLayerToolMapForm.md#getinputlongtitude)
- [getMapObject](DotLayerToolMapForm.md#getmapobject)
- [getNumberInput](DotLayerToolMapForm.md#getnumberinput)
- [getSliderInput](DotLayerToolMapForm.md#getsliderinput)
- [getTextInput](DotLayerToolMapForm.md#gettextinput)
- [getTool](DotLayerToolMapForm.md#gettool)
- [removeSelectItem](DotLayerToolMapForm.md#removeselectitem)
- [setInputValues](DotLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new DotLayerToolMapForm**(`tool`): [`DotLayerToolMapForm`](DotLayerToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\> |

#### Returns

[`DotLayerToolMapForm`](DotLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L45)

## Properties

### btnGroup

• `Private` **btnGroup**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L33)

___

### categoryColor

• `Private` **categoryColor**: `HTMLDivElement`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L31)

___

### categoryColorForm

• `Private` `Optional` **categoryColorForm**: `ICategoryColorForm`[]

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L43)

___

### categoryColorInputs

• `Private` `Optional` **categoryColorInputs**: `ICategoryColorInputs`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L42)

___

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L30)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `color` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `latitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `longitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L35)

___

### tool

• `Private` **tool**: [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L32)

## Methods

### addSelectItem

▸ **addSelectItem**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L108)

___

### applyFilters

▸ **applyFilters**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L163)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:190](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L190)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L79)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:240](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L240)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:260](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L260)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:250](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L250)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:255](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L255)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L246)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:228](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L228)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:234](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L234)

___

### getMapObject

▸ **getMapObject**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

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

▸ **getTool**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L53)

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

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:149](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L149)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L57)
