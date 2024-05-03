**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISelectionToolAPI

# Type alias: ISelectionToolAPI

> **ISelectionToolAPI**: [`IMapToolAPI`](IMapToolAPI.md) & `object`

API for Selection Tool.

## Author

Jiri Hynek

## Type declaration

### createSelection()

> **createSelection**: (`source`, `ids`) => [`IMapSelection`](../interfaces/IMapSelection.md)

#### Parameters

• **source**: [`IMapTool`](../interfaces/IMapTool.md)

• **ids**: `string`[]

#### Returns

[`IMapSelection`](../interfaces/IMapSelection.md)

### getChangeEventType()

> **getChangeEventType**: () => `string`

#### Returns

`string`

### getSelection()

> **getSelection**: () => [`IMapSelection`](../interfaces/IMapSelection.md) \| `null`

#### Returns

[`IMapSelection`](../interfaces/IMapSelection.md) \| `null`

### setSelection()

> **setSelection**: (`selection`) => `void`

#### Parameters

• **selection**: [`IMapSelection`](../interfaces/IMapSelection.md) \| `null`

#### Returns

`void`

## Source

[tools/selection/model/types/tool/ISelectionToolAPI.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/tool/ISelectionToolAPI.ts#L23)
