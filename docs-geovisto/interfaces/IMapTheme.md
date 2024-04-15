[geovisto-map](../README.md) / [Exports](../modules.md) / IMapTheme

# Interface: IMapTheme

This interface declares a map theme API.

**`Author`**

Jiri Hynek

**`Author`**

Jakub Kachlik - advanced color model

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IMapTheme`**

## Implemented by

- [`BasicTheme`](../classes/BasicTheme.md)
- [`Dark1Theme`](../classes/Dark1Theme.md)
- [`Dark2Theme`](../classes/Dark2Theme.md)
- [`Dark3Theme`](../classes/Dark3Theme.md)
- [`Light1Theme`](../classes/Light1Theme.md)
- [`Light2Theme`](../classes/Light2Theme.md)
- [`Light3Theme`](../classes/Light3Theme.md)

## Table of contents

### Methods

- [getBackgroundColors](IMapTheme.md#getbackgroundcolors)
- [getBaseMap](IMapTheme.md#getbasemap)
- [getDataColors](IMapTheme.md#getdatacolors)
- [getFont](IMapTheme.md#getfont)
- [getForegroundColors](IMapTheme.md#getforegroundcolors)
- [getHighlightColor](IMapTheme.md#gethighlightcolor)
- [getHoverColor](IMapTheme.md#gethovercolor)
- [getName](IMapTheme.md#getname)
- [getTextInputColor](IMapTheme.md#gettextinputcolor)
- [isDark](IMapTheme.md#isdark)

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

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L40)

___

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns the url of the preferred base map.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L18)

___

### getDataColors

▸ **getDataColors**(): `Object`

It returns 4 primary colors
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

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L61)

___

### getFont

▸ **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L28)

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

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L34)

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

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L47)

___

### getHoverColor

▸ **getHoverColor**(): `string`

It returns color used for highlight hovered item

#### Returns

`string`

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L53)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

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

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L71)

___

### isDark

▸ **isDark**(): `boolean`

It returns if the styles preferres inversed dark colors.

#### Returns

`boolean`

#### Defined in

[src/tools/themes/model/types/theme/IMapTheme.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapTheme.ts#L23)
