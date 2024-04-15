[geovisto-map](../README.md) / [Exports](../modules.md) / Light3Theme

# Class: Light3Theme

This class wraps a filter operation.

**`Author`**

Jiri Hynek

**`Author`**

Jakub Kachlik - advanced color model

## Hierarchy

- [`BasicTheme`](BasicTheme.md)

  ↳ **`Light3Theme`**

## Implements

- [`IMapTheme`](../interfaces/IMapTheme.md)

## Table of contents

### Constructors

- [constructor](Light3Theme.md#constructor)

### Methods

- [getBackgroundColors](Light3Theme.md#getbackgroundcolors)
- [getBaseMap](Light3Theme.md#getbasemap)
- [getDataColors](Light3Theme.md#getdatacolors)
- [getFont](Light3Theme.md#getfont)
- [getForegroundColors](Light3Theme.md#getforegroundcolors)
- [getHighlightColor](Light3Theme.md#gethighlightcolor)
- [getHoverColor](Light3Theme.md#gethovercolor)
- [getName](Light3Theme.md#getname)
- [getTextInputColor](Light3Theme.md#gettextinputcolor)
- [isDark](Light3Theme.md#isdark)
- [toString](Light3Theme.md#tostring)

## Constructors

### constructor

• **new Light3Theme**(): [`Light3Theme`](Light3Theme.md)

It initializes the light theme.

#### Returns

[`Light3Theme`](Light3Theme.md)

#### Overrides

[BasicTheme](BasicTheme.md).[constructor](BasicTheme.md#constructor)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L20)

## Methods

### getBackgroundColors

▸ **getBackgroundColors**(): `Object`

It returns primary, secondary and disabled background colors

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `disabled` | `string` |
| `primary` | `string` |
| `secondary` | `string` |

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getBackgroundColors](../interfaces/IMapTheme.md#getbackgroundcolors)

#### Overrides

[BasicTheme](BasicTheme.md).[getBackgroundColors](BasicTheme.md#getbackgroundcolors)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L64)

___

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getBaseMap](../interfaces/IMapTheme.md#getbasemap)

#### Overrides

[BasicTheme](BasicTheme.md).[getBaseMap](BasicTheme.md#getbasemap)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L34)

___

### getDataColors

▸ **getDataColors**(): `Object`

It returns 4 primary colors
monochrom - color used as color scale by changing its intensity
lineColor – easy visible color with high contrast
triadic1,2,3 - 3 triadic colors scheme (triadic not required but colors contrast recommended)

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lineColor` | `string` |
| `triadic1` | `string` |
| `triadic2` | `string` |
| `triadic3` | `string` |

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getDataColors](../interfaces/IMapTheme.md#getdatacolors)

#### Overrides

[BasicTheme](BasicTheme.md).[getDataColors](BasicTheme.md#getdatacolors)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L87)

___

### getFont

▸ **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getFont](../interfaces/IMapTheme.md#getfont)

#### Overrides

[BasicTheme](BasicTheme.md).[getFont](BasicTheme.md#getfont)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L44)

___

### getForegroundColors

▸ **getForegroundColors**(): `Object`

It returns primary, secondary and disabled foreground colors used for text color

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `disabled` | `string` |
| `primary` | `string` |
| `secondary` | `string` |

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getForegroundColors](../interfaces/IMapTheme.md#getforegroundcolors)

#### Overrides

[BasicTheme](BasicTheme.md).[getForegroundColors](BasicTheme.md#getforegroundcolors)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L52)

___

### getHighlightColor

▸ **getHighlightColor**(): `Object`

It returns highlight colors for selected, highlighted and deepasized (not selected or highlighted) objects

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deempasize` | `string` |
| `highlight` | `string` |
| `selected` | `string` |

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getHighlightColor](../interfaces/IMapTheme.md#gethighlightcolor)

#### Inherited from

[BasicTheme](BasicTheme.md).[getHighlightColor](BasicTheme.md#gethighlightcolor)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L87)

___

### getHoverColor

▸ **getHoverColor**(): `string`

It returns color used for highlight hovered item

#### Returns

`string`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getHoverColor](../interfaces/IMapTheme.md#gethovercolor)

#### Overrides

[BasicTheme](BasicTheme.md).[getHoverColor](BasicTheme.md#gethovercolor)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L76)

___

### getName

▸ **getName**(): `string`

It returns the theme type.

#### Returns

`string`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getName](../interfaces/IMapTheme.md#getname)

#### Overrides

[BasicTheme](BasicTheme.md).[getName](BasicTheme.md#getname)

#### Defined in

[src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/custom/light3/Light3Theme.ts#L27)

___

### getTextInputColor

▸ **getTextInputColor**(): `Object`

It returns text input colors
matchBg,matchFg- colors for match cases autocomplete
notMatchBg, notMatchFg- colors for not matching cases autocomplete
placeholder- color of placeholder
hover- color when hover object

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `hover` | `string` |
| `matchBg` | `string` |
| `matchFg` | `string` |
| `notMatchBg` | `string` |
| `notMatchFg` | `string` |
| `placeholder` | `string` |

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getTextInputColor](../interfaces/IMapTheme.md#gettextinputcolor)

#### Inherited from

[BasicTheme](BasicTheme.md).[getTextInputColor](BasicTheme.md#gettextinputcolor)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L126)

___

### isDark

▸ **isDark**(): `boolean`

It returns if the styles preferres inversed dark colors.

#### Returns

`boolean`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[isDark](../interfaces/IMapTheme.md#isdark)

#### Inherited from

[BasicTheme](BasicTheme.md).[isDark](BasicTheme.md#isdark)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L47)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[BasicTheme](BasicTheme.md).[toString](BasicTheme.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
