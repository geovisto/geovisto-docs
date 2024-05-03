**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BasicTheme

# Class: BasicTheme

This class provides basic implementation of a theme.

## Author

Jiri Hynek

## Author

Jakub Kachlik - advanced color model

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapTheme`](../interfaces/IMapTheme.md)

## Constructors

### new BasicTheme()

> **new BasicTheme**(): [`BasicTheme`](BasicTheme.md)

It initializes the theme.

#### Returns

[`BasicTheme`](BasicTheme.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L20)

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

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L74)

***

### getBaseMap()

> **getBaseMap**(): [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getBaseMap`](../interfaces/IMapTheme.md#getbasemap)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L34)

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

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getDataColors`](../interfaces/IMapTheme.md#getdatacolors)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L109)

***

### getFont()

> **getFont**(): `string`

It returns theme font

#### Returns

`string`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getFont`](../interfaces/IMapTheme.md#getfont)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L54)

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

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L62)

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

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L99)

***

### getName()

> **getName**(): `string`

It returns the theme type.

#### Returns

`string`

#### Implementation of

[`IMapTheme`](../interfaces/IMapTheme.md).[`getName`](../interfaces/IMapTheme.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L27)

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

#### Source

[tools/themes/model/internal/theme/basic/BasicTheme.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/BasicTheme.ts#L47)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDomain`](AbstractMapDomain.md).[`toString`](AbstractMapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
