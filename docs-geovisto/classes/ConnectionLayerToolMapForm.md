[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerToolMapForm

# Class: ConnectionLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\>

  ↳ **`ConnectionLayerToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](ConnectionLayerToolMapForm.md#constructor)

### Properties

- [htmlContent](ConnectionLayerToolMapForm.md#htmlcontent)
- [inputs](ConnectionLayerToolMapForm.md#inputs)

### Methods

- [getAutocompleteInput](ConnectionLayerToolMapForm.md#getautocompleteinput)
- [getCheckboxInput](ConnectionLayerToolMapForm.md#getcheckboxinput)
- [getColorInput](ConnectionLayerToolMapForm.md#getcolorinput)
- [getContent](ConnectionLayerToolMapForm.md#getcontent)
- [getInputDirection](ConnectionLayerToolMapForm.md#getinputdirection)
- [getInputFrom](ConnectionLayerToolMapForm.md#getinputfrom)
- [getInputGeoData](ConnectionLayerToolMapForm.md#getinputgeodata)
- [getInputTo](ConnectionLayerToolMapForm.md#getinputto)
- [getMapObject](ConnectionLayerToolMapForm.md#getmapobject)
- [getNumberInput](ConnectionLayerToolMapForm.md#getnumberinput)
- [getSliderInput](ConnectionLayerToolMapForm.md#getsliderinput)
- [getTextInput](ConnectionLayerToolMapForm.md#gettextinput)
- [setInputValues](ConnectionLayerToolMapForm.md#setinputvalues)

## Constructors

### constructor

• **new ConnectionLayerToolMapForm**(`tool`): [`ConnectionLayerToolMapForm`](ConnectionLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\> |

#### Returns

[`ConnectionLayerToolMapForm`](ConnectionLayerToolMapForm.md)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[constructor](MapLayerToolForm.md#constructor)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L35)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L21)

___

### inputs

• `Private` `Optional` **inputs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `direction` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `from` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `geoData` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |
| `to` | [`IMapFormInput`](../interfaces/IMapFormInput.md) |

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L23)

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

It returns the sidebar tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[getContent](MapLayerToolForm.md#getcontent)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L55)

___

### getInputDirection

▸ **getInputDirection**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L117)

___

### getInputFrom

▸ **getInputFrom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L99)

___

### getInputGeoData

▸ **getInputGeoData**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo data dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L90)

___

### getInputTo

▸ **getInputTo**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L108)

___

### getMapObject

▸ **getMapObject**(): [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

#### Returns

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

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

### setInputValues

▸ **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.direction` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.from` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.to` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Overrides

[MapLayerToolForm](MapLayerToolForm.md).[setInputValues](MapLayerToolForm.md#setinputvalues)

#### Defined in

[src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L44)
