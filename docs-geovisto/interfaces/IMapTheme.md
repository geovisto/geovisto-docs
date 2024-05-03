**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapTheme

# Interface: IMapTheme

This interface declares a map theme API.

## Author

Jiri Hynek

## Author

Jakub Kachlik - advanced color model

## Extends

- [`IMapDomain`](IMapDomain.md)

## Methods

### getBackgroundColors()

> **getBackgroundColors**(): `object`

It returns primary, secondary and disabled background colors

#### Returns

`object`

##### disabled

> **disabled**: `string`

##### primary

> **primary**: `string`

##### secondary

> **secondary**: `string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L40)

***

### getBaseMap()

> **getBaseMap**(): [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

It returns the url of the preferred base map.

#### Returns

[`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L18)

***

### getDataColors()

> **getDataColors**(): `object`

It returns 4 primary colors
lineColor – easy visible color with high contrast
triadic1,2,3 - 3 triadic colors scheme (triadic not required but colors contrast recommended)

#### Returns

`object`

##### lineColor

> **lineColor**: `string`

##### triadic1

> **triadic1**: `string`

##### triadic2

> **triadic2**: `string`

##### triadic3

> **triadic3**: `string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L61)

***

### getFont()

> **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L28)

***

### getForegroundColors()

> **getForegroundColors**(): `object`

It returns primary, secondary and disabled foreground colors used for text color

#### Returns

`object`

##### disabled

> **disabled**: `string`

##### primary

> **primary**: `string`

##### secondary

> **secondary**: `string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L34)

***

### getHighlightColor()

> **getHighlightColor**(): `object`

It returns highlight colors for selected, highlighted and deepasized (not selected or highlighted) objects

#### Returns

`object`

##### deempasize

> **deempasize**: `string`

##### highlight

> **highlight**: `string`

##### selected

> **selected**: `string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L47)

***

### getHoverColor()

> **getHoverColor**(): `string`

It returns color used for highlight hovered item

#### Returns

`string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L53)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getTextInputColor()

> **getTextInputColor**(): `object`

It returns text input colors
matchBg,matchFg- colors for match cases autocomplete
notMatchBg, notMatchFg- colors for not matching cases autocomplete
placeholder- color of placeholder
hover- color when hover object

#### Returns

`object`

##### hover

> **hover**: `string`

##### matchBg

> **matchBg**: `string`

##### matchFg

> **matchFg**: `string`

##### notMatchBg

> **notMatchBg**: `string`

##### notMatchFg

> **notMatchFg**: `string`

##### placeholder

> **placeholder**: `string`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L71)

***

### isDark()

> **isDark**(): `boolean`

It returns if the styles preferres inversed dark colors.

#### Returns

`boolean`

#### Source

[tools/themes/model/types/theme/IMapTheme.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/theme/IMapTheme.ts#L23)
