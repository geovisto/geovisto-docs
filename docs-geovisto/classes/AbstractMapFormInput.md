**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapFormInput

# Class: `abstract` AbstractMapFormInput

This class represents an abstract form input.

## Author

Jiri Hynek

## Extended by

- [`SelectFormInput`](SelectFormInput.md)
- [`TextFormInput`](TextFormInput.md)
- [`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)
- [`FilterSelectFormInput`](FilterSelectFormInput.md)
- [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)
- [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)
- [`LabeledColorFormInput`](LabeledColorFormInput.md)
- [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new AbstractMapFormInput()

> **new AbstractMapFormInput**(`props`): [`AbstractMapFormInput`](AbstractMapFormInput.md)

#### Parameters

• **props**: [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Returns

[`AbstractMapFormInput`](AbstractMapFormInput.md)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L16)

## Properties

### props

> `private` **props**: [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

Input props passed to constructor.

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L14)

## Methods

### create()

> `abstract` **create**(): `HTMLElement`

It creates the input element.

#### Returns

`HTMLElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L30)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> `abstract` **getValue**(): `unknown`

It returns value of the input element.

#### Returns

`unknown`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`getValue`](../interfaces/IMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L35)

***

### setDisabled()

> `abstract` **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setDisabled`](../interfaces/IMapFormInput.md#setdisabled)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L49)

***

### setValue()

> `abstract` **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

• **value**: `unknown`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setValue`](../interfaces/IMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L42)
