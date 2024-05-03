**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / Light2Theme

# Class: Light2Theme

This class defines a custom theme.

## Author

Jiri Hynek

## Author

Jakub Kachlik - advanced color model

## Extends

- [`BasicTheme`](BasicTheme.md)

## Implements

- [`IMapTheme`](../interfaces/IMapTheme.md)

## Constructors

### new Light2Theme()

> **new Light2Theme**(): [`Light2Theme`](Light2Theme.md)

It initializes the light theme.

#### Returns

[`Light2Theme`](Light2Theme.md)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`constructor`](BasicTheme.md#constructors)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L20)

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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getBackgroundColors`](../interfaces/IMapTheme.md#getbackgroundcolors)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getBackgroundColors`](BasicTheme.md#getbackgroundcolors)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L64)

***

### getBaseMap()

> **getBaseMap**(): [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getBaseMap`](../interfaces/IMapTheme.md#getbasemap)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getBaseMap`](BasicTheme.md#getbasemap)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L34)

***

### getDataColors()

> **getDataColors**(): `object`

It returns 4 primary colors
monochrom - color used as color scale by changing its intensity
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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getDataColors`](../interfaces/IMapTheme.md#getdatacolors)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getDataColors`](BasicTheme.md#getdatacolors)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L87)

***

### getFont()

> **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getFont`](../interfaces/IMapTheme.md#getfont)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getFont`](BasicTheme.md#getfont)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L44)

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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getForegroundColors`](../interfaces/IMapTheme.md#getforegroundcolors)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getForegroundColors`](BasicTheme.md#getforegroundcolors)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L52)

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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getHighlightColor`](../interfaces/IMapTheme.md#gethighlightcolor)

#### Inherited from

[`BasicTheme`](BasicTheme.md).[`getHighlightColor`](BasicTheme.md#gethighlightcolor)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L87)

***

### getHoverColor()

> **getHoverColor**(): `string`

It returns color used for highlight hovered item

#### Returns

`string`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getHoverColor`](../interfaces/IMapTheme.md#gethovercolor)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getHoverColor`](BasicTheme.md#gethovercolor)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L76)

***

### getName()

> **getName**(): `string`

It returns the theme type.

#### Returns

`string`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getName`](../interfaces/IMapTheme.md#getname)

#### Overrides

[`BasicTheme`](BasicTheme.md).[`getName`](BasicTheme.md#getname)

#### Source

[tools/themes/model/internal/theme/custom/light2/Light2Theme.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/custom/light2/Light2Theme.ts#L27)

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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getTextInputColor`](../interfaces/IMapTheme.md#gettextinputcolor)

#### Inherited from

[`BasicTheme`](BasicTheme.md).[`getTextInputColor`](BasicTheme.md#gettextinputcolor)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L126)

***

### isDark()

> **isDark**(): `boolean`

It returns if the styles preferres inversed dark colors.

#### Returns

`boolean`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`isDark`](../interfaces/IMapTheme.md#isdark)

#### Inherited from

[`BasicTheme`](BasicTheme.md).[`isDark`](BasicTheme.md#isdark)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L47)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`BasicTheme`](BasicTheme.md).[`toString`](BasicTheme.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
