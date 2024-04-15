[geovisto-map](../README.md) / [Exports](../modules.md) / IMapSelection

# Interface: IMapSelection

The interface declares API for the selection of map elements.

The selection can affect multiple geographical items identified by some id (e.g., ISO 3166-1 alpha-3 - CZE, SVK, ...).

**`Author`**

Jiri Hynek

## Implemented by

- [`MapSelection`](../classes/MapSelection.md)

## Table of contents

### Methods

- [addIds](IMapSelection.md#addids)
- [equals](IMapSelection.md#equals)
- [getIds](IMapSelection.md#getids)
- [getSrcIds](IMapSelection.md#getsrcids)
- [getTool](IMapSelection.md#gettool)

## Methods

### addIds

▸ **addIds**(`ids`): `string`[]

It takes geographical items and returns the list of new ids
which were added to the list of all ids.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/tools/selection/model/types/selection/IMapSelection.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/types/selection/IMapSelection.ts#L43)

___

### equals

▸ **equals**(`selection`): `boolean`

It compares two selections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`IMapSelection`](IMapSelection.md) |

#### Returns

`boolean`

#### Defined in

[src/tools/selection/model/types/selection/IMapSelection.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/types/selection/IMapSelection.ts#L35)

___

### getIds

▸ **getIds**(): `string`[]

It returns identifiers of geographical items which were selected or affected by this selection.

#### Returns

`string`[]

#### Defined in

[src/tools/selection/model/types/selection/IMapSelection.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/types/selection/IMapSelection.ts#L28)

___

### getSrcIds

▸ **getSrcIds**(): `string`[]

It returns identifiers of geographical items which were selected.

#### Returns

`string`[]

#### Defined in

[src/tools/selection/model/types/selection/IMapSelection.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/types/selection/IMapSelection.ts#L23)

___

### getTool

▸ **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool of the selected element.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/selection/model/types/selection/IMapSelection.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/types/selection/IMapSelection.ts#L18)
