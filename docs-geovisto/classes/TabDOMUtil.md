[geovisto-map](../README.md) / [Exports](../modules.md) / TabDOMUtil

# Class: TabDOMUtil

Class wraps help static function which generates DOM nodes.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](TabDOMUtil.md#constructor)

### Methods

- [appendOptions](TabDOMUtil.md#appendoptions)
- [createButton](TabDOMUtil.md#createbutton)
- [createSelect](TabDOMUtil.md#createselect)
- [createSelectDiv](TabDOMUtil.md#createselectdiv)
- [createSidebarHeading](TabDOMUtil.md#createsidebarheading)
- [createTextInput](TabDOMUtil.md#createtextinput)
- [setAttributes](TabDOMUtil.md#setattributes)

## Constructors

### constructor

• **new TabDOMUtil**(): [`TabDOMUtil`](TabDOMUtil.md)

#### Returns

[`TabDOMUtil`](TabDOMUtil.md)

## Methods

### appendOptions

▸ **appendOptions**(`select`, `options`): `void`

Function genearates option nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | `HTMLSelectElement` |
| `options` | `string`[] |

#### Returns

`void`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L54)

___

### createButton

▸ **createButton**(`label`, `action`, `id`): `HTMLButtonElement`

Function generates button node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `action` | ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any` |
| `id` | `string` |

#### Returns

`HTMLButtonElement`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L90)

___

### createSelect

▸ **createSelect**(`id`, `action`, `options`, `className`): `HTMLSelectElement`

Function generates select node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `action` | ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any` |
| `options` | `string`[] |
| `className` | `undefined` \| `string` |

#### Returns

`HTMLSelectElement`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L35)

___

### createSelectDiv

▸ **createSelectDiv**(`label`, `id`, `action`, `options`): `HTMLDivElement`

Function generates select div node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `id` | `string` |
| `action` | ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any` |
| `options` | `string`[] |

#### Returns

`HTMLDivElement`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L16)

___

### createSidebarHeading

▸ **createSidebarHeading**(`label`): `HTMLElement`

Function generates label heading node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`HTMLElement`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L106)

___

### createTextInput

▸ **createTextInput**(`size`, `className`): `HTMLInputElement`

Function generates input text node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `undefined` \| `string` |
| `className` | `undefined` \| `string` |

#### Returns

`HTMLInputElement`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L69)

___

### setAttributes

▸ **setAttributes**(`element`, `keyArray`, `valueArray`): `void`

Sets multiple element attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `keyArray` | `string`[] |
| `valueArray` | `string`[] |

#### Returns

`void`

#### Defined in

[src/model/internal/utils/TabDOMUtil.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/utils/TabDOMUtil.ts#L120)
