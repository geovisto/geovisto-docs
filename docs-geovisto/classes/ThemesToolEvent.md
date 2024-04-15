[geovisto-map](../README.md) / [Exports](../modules.md) / ThemesToolEvent

# Class: ThemesToolEvent

This class provides the theme change event.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapTheme`](../interfaces/IMapTheme.md), [`IThemesTool`](../interfaces/IThemesTool.md)\>

  ↳ **`ThemesToolEvent`**

## Implements

- [`IThemesToolEvent`](../interfaces/IThemesToolEvent.md)

## Table of contents

### Constructors

- [constructor](ThemesToolEvent.md#constructor)

### Methods

- [getChangedObject](ThemesToolEvent.md#getchangedobject)
- [getSource](ThemesToolEvent.md#getsource)
- [getType](ThemesToolEvent.md#gettype)
- [TYPE](ThemesToolEvent.md#type)

## Constructors

### constructor

• **new ThemesToolEvent**(`themesTool`, `theme`): [`ThemesToolEvent`](ThemesToolEvent.md)

It initializes event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `themesTool` | [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\> |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

[`ThemesToolEvent`](ThemesToolEvent.md)

#### Overrides

[MapChangeEvent](MapChangeEvent.md).[constructor](MapChangeEvent.md#constructor)

#### Defined in

[src/tools/themes/model/internal/event/ThemesToolEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/event/ThemesToolEvent.ts#L19)

## Methods

### getChangedObject

▸ **getChangedObject**(): [`IMapTheme`](../interfaces/IMapTheme.md)

Return the changed object.

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[IThemesToolEvent](../interfaces/IThemesToolEvent.md).[getChangedObject](../interfaces/IThemesToolEvent.md#getchangedobject)

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getChangedObject](MapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

___

### getSource

▸ **getSource**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

It return source map object of the event.

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

#### Implementation of

[IThemesToolEvent](../interfaces/IThemesToolEvent.md).[getSource](../interfaces/IThemesToolEvent.md#getsource)

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getSource](MapChangeEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[IThemesToolEvent](../interfaces/IThemesToolEvent.md).[getType](../interfaces/IThemesToolEvent.md#gettype)

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getType](MapChangeEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

___

### TYPE

▸ **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Defined in

[src/tools/themes/model/internal/event/ThemesToolEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/event/ThemesToolEvent.ts#L26)
