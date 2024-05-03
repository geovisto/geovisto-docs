**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerIcon

# Class: MarkerIcon

This class represents custom div icon which is used to mark center of countries.
It overrides L.DivIcon.

## Author

Jiri Hynek

## Extends

- `unknown`\<[`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)\>

## Implements

- [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)\>

## Constructors

### new MarkerIcon()

> **new MarkerIcon**(`options`): [`MarkerIcon`](MarkerIcon.md)

#### Parameters

• **options**: `any`

#### Returns

[`MarkerIcon`](MarkerIcon.md)

#### Overrides

`Icon<IMarkerIconOptions>.constructor`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L61)

## Properties

### sizeBasic

> `private` **sizeBasic**: `number` = `32`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L54)

***

### sizeDonut

> `private` **sizeDonut**: `number` = `48`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L56)

***

### sizeGroup

> `private` **sizeGroup**: `number` = `36`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L55)

***

### svgGroup?

> `private` `optional` **svgGroup**: `any`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L59)

***

### svgLabel?

> `private` `optional` **svgLabel**: `any`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L58)

## Methods

### arc()

> `protected` **arc**(`size`): `Arc`\<`unknown`, `PieArcDatum`\<`number` \| `object`\>\>

##### Parameters

• **size**: `number`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`Arc`\<`unknown`, `PieArcDatum`\<`number` \| `object`\>\>

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L111)

***

### createIcon()

> **createIcon**(`oldIcon`?): `HTMLElement`

It creates the icon. The method overrides the super method of Icon.

#### Parameters

• **oldIcon?**: `HTMLElement`

#### Returns

`HTMLElement`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L130)

***

### formatValue()

> `protected` **formatValue**(`value`, `level`): `string`

#### Parameters

• **value**: `number`

• **level**: `number`

#### Returns

`string`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L74)

***

### getColor()

> `protected` **getColor**(`level`): `string`

#### Parameters

• **level**: `number`

#### Returns

`string`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L90)

***

### getLevel()

> `protected` **getLevel**(`value`): `number`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L98)

***

### getPieSubvalues()

> `protected` **getPieSubvalues**(): `PieArcDatum`\<`number` \| `object`\>[]

#### Returns

`PieArcDatum`\<`number` \| `object`\>[]

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L118)

***

### getSize()

> `protected` **getSize**(): `number`

#### Returns

`number`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L107)

***

### round()

> `protected` **round**(`value`, `align`): `number`

#### Parameters

• **value**: `number`

• **align**: `number`

#### Returns

`number`

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:70](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L70)

***

### updateData()

> **updateData**(`values`, `animateOptions`): `void`

It updates the data of the marker icon.

#### Parameters

• **values**: [`IMarkerIconValueOptions`](../type-aliases/IMarkerIconValueOptions.md)

• **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`IMarkerIcon`](../interfaces/IMarkerIcon.md).[`updateData`](../interfaces/IMarkerIcon.md#updatedata)

#### Source

[tools/layers/marker/model/internal/marker/MarkerIcon.ts:215](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L215)
