**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ConnectionLayerToolMapForm

# Class: ConnectionLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Jiri Hynek

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new ConnectionLayerToolMapForm()

> **new ConnectionLayerToolMapForm**(`tool`): [`ConnectionLayerToolMapForm`](ConnectionLayerToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`ConnectionLayerToolMapForm`](ConnectionLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L35)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L21)

***

### inputs?

> `private` `optional` **inputs**: `object`

#### direction

> **direction**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### from

> **from**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### geoData

> **geoData**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### to

> **to**: [`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L23)

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

It returns the sidebar tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L55)

***

### getInputDirection()

> **getInputDirection**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L117)

***

### getInputFrom()

> **getInputFrom**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L99)

***

### getInputGeoData()

> **getInputGeoData**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo data dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L90)

***

### getInputTo()

> **getInputTo**(`dimension`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It returns new input for the geo dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L108)

***

### getMapObject()

> `protected` **getMapObject**(): [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

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

• **dimensions**

• **dimensions.direction**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.from**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.to**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/form/ConnectionLayerToolMapForm.ts#L44)
