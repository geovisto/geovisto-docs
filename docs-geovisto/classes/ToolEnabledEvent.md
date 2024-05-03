**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ToolEnabledEvent

# Class: ToolEnabledEvent\<TSource\>

This class provides the tool enabled event.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<`boolean`, `TSource`\>

## Type parameters

• **TSource** *extends* [`IMapTool`](../interfaces/IMapTool.md) = [`IMapTool`](../interfaces/IMapTool.md)

## Implements

- [`IToolEnabledEvent`](../type-aliases/IToolEnabledEvent.md)

## Constructors

### new ToolEnabledEvent()

> **new ToolEnabledEvent**\<`TSource`\>(`source`, `enabled`): [`ToolEnabledEvent`](ToolEnabledEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

• **enabled**: `boolean`

#### Returns

[`ToolEnabledEvent`](ToolEnabledEvent.md)\<`TSource`\>

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[model/internal/event/tool/ToolEnabledEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/ToolEnabledEvent.ts#L16)

## Methods

### getChangedObject()

> **getChangedObject**(): `boolean`

Return the changed object.

#### Returns

`boolean`

#### Implementation of

`IToolEnabledEvent.getChangedObject`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

`IToolEnabledEvent.getSource`

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

`IToolEnabledEvent.getType`

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

[model/internal/event/tool/ToolEnabledEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/ToolEnabledEvent.ts#L23)
