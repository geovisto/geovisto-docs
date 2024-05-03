**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TilesLayerToolMapForm

# Class: TilesLayerToolMapForm

This class provides functions for management of the layer sidebar tab.

## Author

Jiri Hynek

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new TilesLayerToolMapForm()

> **new TilesLayerToolMapForm**(`tool`): [`TilesLayerToolMapForm`](TilesLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Returns

[`TilesLayerToolMapForm`](TilesLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts#L22)

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

It returns tab pane which will be placed in sidebar tab.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts#L39)

***

### getMapObject()

> `protected` **getMapObject**(): [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Returns

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

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

• **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/form/TilesLayerToolMapForm.ts#L32)
