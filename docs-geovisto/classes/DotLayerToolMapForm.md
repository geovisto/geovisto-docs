**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DotLayerToolMapForm

# Class: DotLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Vladimir Korencik

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new DotLayerToolMapForm()

> **new DotLayerToolMapForm**(`tool`): [`DotLayerToolMapForm`](DotLayerToolMapForm.md)

#### Parameters

• **tool**: [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Returns

[`DotLayerToolMapForm`](DotLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L45)

## Properties

### btnGroup

> `private` **btnGroup**: `null` \| `HTMLDivElement`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L33)

***

### categoryColor

> `private` **categoryColor**: `HTMLDivElement`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L31)

***

### categoryColorForm?

> `private` `optional` **categoryColorForm**: `ICategoryColorForm`[]

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L43)

***

### categoryColorInputs?

> `private` `optional` **categoryColorInputs**: `ICategoryColorInputs`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L42)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L30)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### category

> **category**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### color

> **color**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### latitude

> **latitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### longitude

> **longitude**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L35)

***

### tool

> `private` **tool**: [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L32)

## Methods

### addSelectItem()

> `private` **addSelectItem**(): `void`

#### Returns

`void`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L108)

***

### applyFilters()

> `private` **applyFilters**(): `void`

#### Returns

`void`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L163)

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

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:190](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L190)

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

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L79)

***

### getInputCategory()

> **getInputCategory**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:240](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L240)

***

### getInputCategoryColor()

> **getInputCategoryColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:260](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L260)

***

### getInputCategoryColorOperation()

> **getInputCategoryColorOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:250](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L250)

***

### getInputCategoryColorValue()

> **getInputCategoryColorValue**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:255](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L255)

***

### getInputColor()

> **getInputColor**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L246)

***

### getInputLatitude()

> **getInputLatitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:228](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L228)

***

### getInputLongtitude()

> **getInputLongtitude**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:234](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L234)

***

### getMapObject()

> `protected` **getMapObject**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

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

> **getTool**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L53)

***

### removeSelectItem()

> `private` **removeSelectItem**(`e`): `void`

#### Parameters

• **e**: `MouseEvent`

#### Returns

`void`

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:149](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L149)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/form/DotLayerToolMapForm.ts#L57)
