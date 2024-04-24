**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledSliderFormInput

# Class: LabeledSliderFormInput

This class represents basic text sidebar input.

## Author

Jakub Kachlik

## Author

Jiri Hynek - conversion to TypeScript

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Constructors

### new LabeledSliderFormInput()

> **new LabeledSliderFormInput**(`props`): [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Parameters

• **props**: [`ILabeledSliderFormInputProps`](../interfaces/ILabeledSliderFormInputProps.md)

#### Returns

[`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L33)

## Properties

### div?

> `private` `optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L26)

***

### input?

> `private` `optional` **input**: `HTMLInputElement`

Basic input is used.

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L31)

## Methods

### create()

> **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L51)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getProps`](AbstractMapFormInput.md#getprops)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> **getValue**(): `string`

It returns value of the input element.

#### Returns

`string`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L99)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L117)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L108)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Source

[model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L44)
