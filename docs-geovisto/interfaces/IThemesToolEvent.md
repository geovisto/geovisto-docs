**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IThemesToolEvent

# Interface: IThemesToolEvent

This interface declares the theme change event.

## Author

Jiri Hynek

## Extends

- [`IMapChangeEvent`](IMapChangeEvent.md)

## Methods

### getChangedObject()

> **getChangedObject**(): [`IMapTheme`](IMapTheme.md)

It returns a new theme descritpion of the theme change event.

#### Returns

[`IMapTheme`](IMapTheme.md)

#### Overrides

[`IMapChangeEvent`](IMapChangeEvent.md).[`getChangedObject`](IMapChangeEvent.md#getchangedobject)

#### Source

[tools/themes/model/types/event/IThemesToolEvent.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/event/IThemesToolEvent.ts#L24)

***

### getSource()

> **getSource**(): [`IThemesTool`](IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolState`](IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

Return the themes tool which invoked this event.

#### Returns

[`IThemesTool`](IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolState`](IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Overrides

[`IMapChangeEvent`](IMapChangeEvent.md).[`getSource`](IMapChangeEvent.md#getsource)

#### Source

[tools/themes/model/types/event/IThemesToolEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/types/event/IThemesToolEvent.ts#L19)

***

### getType()

> **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[`IMapChangeEvent`](IMapChangeEvent.md).[`getType`](IMapChangeEvent.md#gettype)

#### Source

[model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEvent.ts#L13)
