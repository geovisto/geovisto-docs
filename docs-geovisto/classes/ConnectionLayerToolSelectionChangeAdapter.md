**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ConnectionLayerToolSelectionChangeAdapter

# Class: ConnectionLayerToolSelectionChangeAdapter

This class provides Selection tool change event adapter.

## Author

Jiri Hynek

## Constructors

### new ConnectionLayerToolSelectionChangeAdapter()

> **new ConnectionLayerToolSelectionChangeAdapter**(`tool`): [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Parameters

• **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L32)

## Properties

### selectionToolAPI?

> `private` `optional` **selectionToolAPI**: [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L28)

***

### tool

> `private` **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L30)

## Methods

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L39)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L53)

***

### setSelection()

> **setSelection**(`selection`): `void`

This function updates styles according to the given selection.

#### Parameters

• **selection**: `undefined` \| `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L71)

***

### updateSelection()

> **updateSelection**(): `void`

This function acquires current selection and updates styles according to the given selection.

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L62)
