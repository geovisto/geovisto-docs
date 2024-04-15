[geovisto-map](../README.md) / [Exports](../modules.md) / ThemesToolMapForm

# Class: ThemesToolMapForm

This class represents tab fragment for Themes tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IThemesTool`](../interfaces/IThemesTool.md)\>

  ↳ **`ThemesToolMapForm`**

## Table of contents

### Constructors

- [constructor](ThemesToolMapForm.md#constructor)

### Properties

- [htmlContent](ThemesToolMapForm.md#htmlcontent)

### Methods

- [createContent](ThemesToolMapForm.md#createcontent)
- [getContent](ThemesToolMapForm.md#getcontent)
- [getMapObject](ThemesToolMapForm.md#getmapobject)

## Constructors

### constructor

• **new ThemesToolMapForm**(`tool`): [`ThemesToolMapForm`](ThemesToolMapForm.md)

It creates a sidebar fragment with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\> |

#### Returns

[`ThemesToolMapForm`](ThemesToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/themes/model/internal/form/ThemesToolMapForm.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L25)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/themes/model/internal/form/ThemesToolMapForm.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L18)

## Methods

### createContent

▸ **createContent**(): `HTMLDivElement`

Help function which creates the HTML content.

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/themes/model/internal/form/ThemesToolMapForm.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L42)

___

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns a HTML content of the sidebar fragment which will be placed in a sidebar tab.

#### Returns

`HTMLDivElement`

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/themes/model/internal/form/ThemesToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/form/ThemesToolMapForm.ts#L32)

___

### getMapObject

▸ **getMapObject**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
