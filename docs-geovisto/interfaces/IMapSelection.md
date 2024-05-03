**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapSelection

# Interface: IMapSelection

The interface declares API for the selection of map elements.

The selection can affect multiple geographical items identified by some id (e.g., ISO 3166-1 alpha-3 - CZE, SVK, ...).

## Author

Jiri Hynek

## Methods

### addIds()

> **addIds**(`ids`): `string`[]

It takes geographical items and returns the list of new ids
which were added to the list of all ids.

#### Parameters

• **ids**: `string`[]

#### Returns

`string`[]

#### Source

[tools/selection/model/types/selection/IMapSelection.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/selection/IMapSelection.ts#L43)

***

### equals()

> **equals**(`selection`): `boolean`

It compares two selections.

#### Parameters

• **selection**: `null` \| [`IMapSelection`](IMapSelection.md)

#### Returns

`boolean`

#### Source

[tools/selection/model/types/selection/IMapSelection.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/selection/IMapSelection.ts#L35)

***

### getIds()

> **getIds**(): `string`[]

It returns identifiers of geographical items which were selected or affected by this selection.

#### Returns

`string`[]

#### Source

[tools/selection/model/types/selection/IMapSelection.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/selection/IMapSelection.ts#L28)

***

### getSrcIds()

> **getSrcIds**(): `string`[]

It returns identifiers of geographical items which were selected.

#### Returns

`string`[]

#### Source

[tools/selection/model/types/selection/IMapSelection.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/selection/IMapSelection.ts#L23)

***

### getTool()

> **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool of the selected element.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/selection/model/types/selection/IMapSelection.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/types/selection/IMapSelection.ts#L18)
