[geovisto-map](../README.md) / [Exports](../modules.md) / HeatLayerToolMapForm

# Class: HeatLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\>

  ↳ **`HeatLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](HeatLayerToolMapForm.md#constructor)

### Properties

- [btnGroup](HeatLayerToolMapForm.md#btngroup)
- [htmlContent](HeatLayerToolMapForm.md#htmlcontent)
- [inputs](HeatLayerToolMapForm.md#inputs)
- [reactiveRadius](HeatLayerToolMapForm.md#reactiveradius)
- [reactiveRadiusForm](HeatLayerToolMapForm.md#reactiveradiusform)
- [reactiveRadiusInputs](HeatLayerToolMapForm.md#reactiveradiusinputs)
- [tool](HeatLayerToolMapForm.md#tool)

### Methods

- [addSelectItem](HeatLayerToolMapForm.md#addselectitem)
- [applyFilters](HeatLayerToolMapForm.md#applyfilters)
- [getAutocompleteInput](HeatLayerToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](HeatLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](HeatLayerToolMapForm.md#getcolorinput)
- [getContent](HeatLayerToolMapForm.md#getcontent)
- [getCurrentZoom](HeatLayerToolMapForm.md#getcurrentzoom)
- [getInputBlur](HeatLayerToolMapForm.md#getinputblur)
- [getInputGradient](HeatLayerToolMapForm.md#getinputgradient)
- [getInputIntensity](HeatLayerToolMapForm.md#getinputintensity)
- [getInputLatitude](HeatLayerToolMapForm.md#getinputlatitude)
- [getInputLongtitude](HeatLayerToolMapForm.md#getinputlongtitude)
- [getInputRadius](HeatLayerToolMapForm.md#getinputradius)
- [getInputReactiveRadius](HeatLayerToolMapForm.md#getinputreactiveradius)
- [getInputReactiveRadiusOperation](HeatLayerToolMapForm.md#getinputreactiveradiusoperation)
- [getInputReactiveRadiusZoom](HeatLayerToolMapForm.md#getinputreactiveradiuszoom)
- [getInputZoom](HeatLayerToolMapForm.md#getinputzoom)
- [getMapObject](HeatLayerToolMapForm.md#getmapobject)
- [getNumberInput](HeatLayerToolMapForm.md#getnumberinput)
- [getReactiveRadiusContent](HeatLayerToolMapForm.md#getreactiveradiuscontent)
- [getSliderInput](HeatLayerToolMapForm.md#getsliderinput)
- [getTextInput](HeatLayerToolMapForm.md#gettextinput)
- [getTool](HeatLayerToolMapForm.md#gettool)
- [removeSelectItem](HeatLayerToolMapForm.md#removeselectitem)
- [setCurrentZoom](HeatLayerToolMapForm.md#setcurrentzoom)
- [setInputValues](HeatLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new HeatLayerToolMapForm**(`tool`): [`HeatLayerToolMapForm`](HeatLayerToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\> |

#### Returns

[`HeatLayerToolMapForm`](HeatLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L56)

## Properties

### btnGroup

• `Private` **btnGroup**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L39)

___

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L36)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blur` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `currentZoom` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `gradient` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `intensity` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `latitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `longitude` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `radius` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `zoom` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L41)

___

### reactiveRadius

• `Private` **reactiveRadius**: `HTMLDivElement`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L37)

___

### reactiveRadiusForm

• `Private` `Optional` **reactiveRadiusForm**: `IReactiveRadiusForm`[]

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L54)

___

### reactiveRadiusInputs

• `Private` `Optional` **reactiveRadiusInputs**: `IReactiveRadiusInputs`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L52)

___

### tool

• `Private` **tool**: [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L38)

## Methods

### addSelectItem

▸ **addSelectItem**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:165](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L165)

___

### applyFilters

▸ **applyFilters**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:221](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L221)

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

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L99)

___

### getCurrentZoom

▸ **getCurrentZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:311](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L311)

___

### getInputBlur

▸ **getInputBlur**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:302](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L302)

___

### getInputGradient

▸ **getInputGradient**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:297](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L297)

___

### getInputIntensity

▸ **getInputIntensity**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:288](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L288)

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

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:276](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L276)

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

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:282](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L282)

___

### getInputRadius

▸ **getInputRadius**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:294](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L294)

___

### getInputReactiveRadius

▸ **getInputReactiveRadius**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:325](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L325)

___

### getInputReactiveRadiusOperation

▸ **getInputReactiveRadiusOperation**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:315](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L315)

___

### getInputReactiveRadiusZoom

▸ **getInputReactiveRadiusZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:320](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L320)

___

### getInputZoom

▸ **getInputZoom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:305](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L305)

___

### getMapObject

▸ **getMapObject**(): [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

#### Returns

[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

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

### getReactiveRadiusContent

▸ **getReactiveRadiusContent**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:250](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L250)

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

▸ **getTool**(): [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

#### Returns

[`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L63)

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

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L207)

___

### setCurrentZoom

▸ **setCurrentZoom**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `LeafletEvent` |

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:272](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L272)

___

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.blur` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.currentZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.gradient` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> |
| `dimensions.intensity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.radius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.reactiveOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.reactiveRadius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.reactiveZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.zoom` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/form/HeatLayerToolMapForm.ts#L67)
