[geovisto-map](../README.md) / [Exports](../modules.md) / IThemesToolEvent

# Interface: IThemesToolEvent

This interface declares the theme change event.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapChangeEvent`](IMapChangeEvent.md)

  ↳ **`IThemesToolEvent`**

## Implemented by

- [`ThemesToolEvent`](../classes/ThemesToolEvent.md)

## Table of contents

### Methods

- [getChangedObject](IThemesToolEvent.md#getchangedobject)
- [getSource](IThemesToolEvent.md#getsource)
- [getType](IThemesToolEvent.md#gettype)

## Methods

### getChangedObject

▸ **getChangedObject**(): [`IMapTheme`](IMapTheme.md)

It returns a new theme descritpion of the theme change event.

#### Returns

[`IMapTheme`](IMapTheme.md)

#### Overrides

[IMapChangeEvent](IMapChangeEvent.md).[getChangedObject](IMapChangeEvent.md#getchangedobject)

#### Defined in

[src/tools/themes/model/types/event/IThemesToolEvent.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/event/IThemesToolEvent.ts#L24)

___

### getSource

▸ **getSource**(): [`IThemesTool`](IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolState`](IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

Return the themes tool which invoked this event.

#### Returns

[`IThemesTool`](IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolState`](IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

#### Overrides

[IMapChangeEvent](IMapChangeEvent.md).[getSource](IMapChangeEvent.md#getsource)

#### Defined in

[src/tools/themes/model/types/event/IThemesToolEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/event/IThemesToolEvent.ts#L19)

___

### getType

▸ **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[IMapChangeEvent](IMapChangeEvent.md).[getType](IMapChangeEvent.md#gettype)

#### Defined in

[src/model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L13)
