[geovisto-map](../README.md) / [Exports](../modules.md) / DrawingLayerToolMapForm

# Class: DrawingLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Andrej Tlcina

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<`IDrawingLayerTool`\>

  ↳ **`DrawingLayerToolMapForm`**

## Implements

- `DrawingForm`

## Table of contents

### Constructors

- [constructor](DrawingLayerToolMapForm.md#constructor)

### Properties

- [htmlContent](DrawingLayerToolMapForm.md#htmlcontent)
- [state](DrawingLayerToolMapForm.md#state)
- [tool](DrawingLayerToolMapForm.md#tool)

### Methods

- [getAutocompleteInput](DrawingLayerToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](DrawingLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](DrawingLayerToolMapForm.md#getcolorinput)
- [getContent](DrawingLayerToolMapForm.md#getcontent)
- [getMapObject](DrawingLayerToolMapForm.md#getmapobject)
- [getNumberInput](DrawingLayerToolMapForm.md#getnumberinput)
- [getSliderInput](DrawingLayerToolMapForm.md#getsliderinput)
- [getState](DrawingLayerToolMapForm.md#getstate)
- [getTextInput](DrawingLayerToolMapForm.md#gettextinput)
- [getTool](DrawingLayerToolMapForm.md#gettool)
- [redrawTabContent](DrawingLayerToolMapForm.md#redrawtabcontent)
- [setInputValues](DrawingLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new DrawingLayerToolMapForm**(`props`): [`DrawingLayerToolMapForm`](DrawingLayerToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.tool` | `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\> |

#### Returns

[`DrawingLayerToolMapForm`](DrawingLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L34)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L29)

___

### state

• `Private` **state**: `TabState`

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L32)

___

### tool

• `Private` **tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L31)

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

▸ **getContent**(`layerType?`): `HTMLDivElement`

It returns the sidebar tab pane.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layerType` | ``""`` \| `LayerType` | `""` |

#### Returns

`HTMLDivElement`

#### Implementation of

DrawingForm.getContent

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[getContent](MapLayerToolForm.md#getcontent)

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L77)

___

### getMapObject

▸ **getMapObject**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

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

### getState

▸ **getState**(): `TabState`

It creates new state of the tab control.

#### Returns

`TabState`

#### Implementation of

DrawingForm.getState

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L52)

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

▸ **getTool**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

DrawingForm.getTool

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L45)

___

### redrawTabContent

▸ **redrawTabContent**(`layerType`): `void`

removes all elements of a sidebar and calls function to create new content of the sidebar

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | ``""`` \| `LayerType` |

#### Returns

`void`

#### Implementation of

DrawingForm.redrawTabContent

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L59)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | [`ILayerToolDimensions`](../modules.md#ilayertooldimensions) |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L41)
