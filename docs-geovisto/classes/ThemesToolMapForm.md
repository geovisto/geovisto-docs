**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ThemesToolMapForm

# Class: ThemesToolMapForm

This class represents tab fragment for Themes tool.

## Author

Jiri Hynek

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IThemesTool`](../interfaces/IThemesTool.md)\>

## Constructors

### new ThemesToolMapForm()

> **new ThemesToolMapForm**(`tool`): [`ThemesToolMapForm`](ThemesToolMapForm.md)

It creates a sidebar fragment with respect to the given props.

#### Parameters

• **tool**: [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Returns

[`ThemesToolMapForm`](ThemesToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/themes/model/internal/form/ThemesToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L25)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/themes/model/internal/form/ThemesToolMapForm.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L18)

## Methods

### createContent()

> `protected` **createContent**(): `HTMLDivElement`

Help function which creates the HTML content.

#### Returns

`HTMLDivElement`

#### Source

[tools/themes/model/internal/form/ThemesToolMapForm.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L42)

***

### getContent()

> **getContent**(): `HTMLDivElement`

It returns a HTML content of the sidebar fragment which will be placed in a sidebar tab.

#### Returns

`HTMLDivElement`

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[tools/themes/model/internal/form/ThemesToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L32)

***

### getMapObject()

> `protected` **getMapObject**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)
