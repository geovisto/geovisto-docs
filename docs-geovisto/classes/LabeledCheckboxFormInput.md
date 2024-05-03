**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledCheckboxFormInput

# Class: LabeledCheckboxFormInput

This class represents basic checkbox sidebar input.

## Author

Krystof Rykala

## Author

Jiri Hynek - conversion to TypeScript

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Constructors

### new LabeledCheckboxFormInput()

> **new LabeledCheckboxFormInput**(`props`): [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)

#### Parameters

• **props**: [`ILabeledCheckboxFormInputProps`](../interfaces/ILabeledCheckboxFormInputProps.md)

#### Returns

[`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L24)

## Properties

### div?

> `private` `optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L17)

***

### input?

> `private` `optional` **input**: `HTMLInputElement`

Basic input is used.

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L22)

## Methods

### create()

> **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L42)

***

### createCheckbox()

> `protected` **createCheckbox**(): `HTMLInputElement`

A help method which creates the checkbox HTML element.

#### Returns

`HTMLInputElement`

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L71)

***

### createLabel()

> `protected` **createLabel**(): `HTMLDivElement`

A help method which creates the label HTML element.

#### Returns

`HTMLDivElement`

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L60)

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

> **getValue**(): `boolean`

It returns the value of the input element.

#### Returns

`boolean`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:84](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L84)

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

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L102)

***

### setValue()

> **setValue**(`checked`): `void`

It sets value of the input element.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L93)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Source

[model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L35)
