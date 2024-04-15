[geovisto-map](../README.md) / [Exports](../modules.md) / BasicTheme

# Class: BasicTheme

This class provides basic implementation of a theme.

**`Author`**

Jiri Hynek

**`Author`**

Jakub Kachlik - advanced color model

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`BasicTheme`**

  ↳↳ [`Dark1Theme`](Dark1Theme.md)

  ↳↳ [`Dark2Theme`](Dark2Theme.md)

  ↳↳ [`Dark3Theme`](Dark3Theme.md)

  ↳↳ [`Light1Theme`](Light1Theme.md)

  ↳↳ [`Light2Theme`](Light2Theme.md)

  ↳↳ [`Light3Theme`](Light3Theme.md)

## Implements

- [`IMapTheme`](../interfaces/IMapTheme.md)

## Table of contents

### Constructors

- [constructor](BasicTheme.md#constructor)

### Methods

- [getBackgroundColors](BasicTheme.md#getbackgroundcolors)
- [getBaseMap](BasicTheme.md#getbasemap)
- [getDataColors](BasicTheme.md#getdatacolors)
- [getFont](BasicTheme.md#getfont)
- [getForegroundColors](BasicTheme.md#getforegroundcolors)
- [getHighlightColor](BasicTheme.md#gethighlightcolor)
- [getHoverColor](BasicTheme.md#gethovercolor)
- [getName](BasicTheme.md#getname)
- [getTextInputColor](BasicTheme.md#gettextinputcolor)
- [isDark](BasicTheme.md#isdark)
- [toString](BasicTheme.md#tostring)

## Constructors

### constructor

• **new BasicTheme**(): [`BasicTheme`](BasicTheme.md)

It initializes the theme.

#### Returns

[`BasicTheme`](BasicTheme.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L20)

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

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L74)

___

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getBaseMap](../interfaces/IMapTheme.md#getbasemap)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L34)

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

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getDataColors](../interfaces/IMapTheme.md#getdatacolors)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L109)

___

### getFont

▸ **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getFont](../interfaces/IMapTheme.md#getfont)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L54)

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

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L62)

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

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L99)

___

### getName

▸ **getName**(): `string`

It returns the theme type.

#### Returns

`string`

#### Implementation of

[IMapTheme](../interfaces/IMapTheme.md).[getName](../interfaces/IMapTheme.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L27)

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

#### Defined in

[src/tools/themes/model/internal/theme/basic/BasicTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L47)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[AbstractMapDomain](AbstractMapDomain.md).[toString](AbstractMapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
