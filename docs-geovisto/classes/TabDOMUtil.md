**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TabDOMUtil

# Class: TabDOMUtil

Class wraps help static function which generates DOM nodes.

## Author

Jiri Hynek

## Constructors

### new TabDOMUtil()

> **new TabDOMUtil**(): [`TabDOMUtil`](TabDOMUtil.md)

#### Returns

[`TabDOMUtil`](TabDOMUtil.md)

## Methods

### appendOptions()

> `static` **appendOptions**(`select`, `options`): `void`

Function genearates option nodes.

#### Parameters

• **select**: `HTMLSelectElement`

• **options**: `string`[]

#### Returns

`void`

#### Source

[model/internal/utils/TabDOMUtil.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L54)

***

### createButton()

> `static` **createButton**(`label`, `action`, `id`): `HTMLButtonElement`

Function generates button node.

#### Parameters

• **label**: `string`

• **action**: `null` \| (`this`, `ev`) => `any`

• **id**: `string`

#### Returns

`HTMLButtonElement`

#### Source

[model/internal/utils/TabDOMUtil.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L90)

***

### createSelect()

> `static` **createSelect**(`id`, `action`, `options`, `className`): `HTMLSelectElement`

Function generates select node.

#### Parameters

• **id**: `string`

• **action**: `null` \| (`this`, `ev`) => `any`

• **options**: `string`[]

• **className**: `undefined` \| `string`

#### Returns

`HTMLSelectElement`

#### Source

[model/internal/utils/TabDOMUtil.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L35)

***

### createSelectDiv()

> `static` **createSelectDiv**(`label`, `id`, `action`, `options`): `HTMLDivElement`

Function generates select div node.

#### Parameters

• **label**: `string`

• **id**: `string`

• **action**: `null` \| (`this`, `ev`) => `any`

• **options**: `string`[]

#### Returns

`HTMLDivElement`

#### Source

[model/internal/utils/TabDOMUtil.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L16)

***

### createSidebarHeading()

> `static` **createSidebarHeading**(`label`): `HTMLElement`

Function generates label heading node.

#### Parameters

• **label**: `string`

#### Returns

`HTMLElement`

#### Source

[model/internal/utils/TabDOMUtil.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L106)

***

### createTextInput()

> `static` **createTextInput**(`size`, `className`): `HTMLInputElement`

Function generates input text node.

#### Parameters

• **size**: `undefined` \| `string`

• **className**: `undefined` \| `string`

#### Returns

`HTMLInputElement`

#### Source

[model/internal/utils/TabDOMUtil.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L69)

***

### setAttributes()

> `static` **setAttributes**(`element`, `keyArray`, `valueArray`): `void`

Sets multiple element attributes.

#### Parameters

• **element**: `HTMLElement`

• **keyArray**: `string`[]

• **valueArray**: `string`[]

#### Returns

`void`

#### Source

[model/internal/utils/TabDOMUtil.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/utils/TabDOMUtil.ts#L120)
