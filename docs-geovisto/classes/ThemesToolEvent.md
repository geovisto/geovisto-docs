**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ThemesToolEvent

# Class: ThemesToolEvent

This class provides the theme change event.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapTheme`](../interfaces/IMapTheme.md), [`IThemesTool`](../interfaces/IThemesTool.md)\>

## Implements

- [`IThemesToolEvent`](../interfaces/IThemesToolEvent.md)

## Constructors

### new ThemesToolEvent()

> **new ThemesToolEvent**(`themesTool`, `theme`): [`ThemesToolEvent`](ThemesToolEvent.md)

It initializes event.

#### Parameters

• **themesTool**: [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

[`ThemesToolEvent`](ThemesToolEvent.md)

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[tools/themes/model/internal/event/ThemesToolEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/event/ThemesToolEvent.ts#L19)

## Methods

### getChangedObject()

> **getChangedObject**(): [`IMapTheme`](../interfaces/IMapTheme.md)

Return the changed object.

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[`IThemesToolEvent`](../interfaces/IThemesToolEvent.md).[`getChangedObject`](../interfaces/IThemesToolEvent.md#getchangedobject)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

It return source map object of the event.

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Implementation of

[`IThemesToolEvent`](../interfaces/IThemesToolEvent.md).[`getSource`](../interfaces/IThemesToolEvent.md#getsource)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getSource`](MapChangeEvent.md#getsource)

#### Source

[model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[`IThemesToolEvent`](../interfaces/IThemesToolEvent.md).[`getType`](../interfaces/IThemesToolEvent.md#gettype)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getType`](MapChangeEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> `static` **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[tools/themes/model/internal/event/ThemesToolEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/event/ThemesToolEvent.ts#L26)
