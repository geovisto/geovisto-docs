[geovisto-map](../README.md) / [Exports](../modules.md) / MapSelection

# Class: MapSelection

The class provides API for the selection of map elements.
It wraps reference to the source element and list of identifiers of geographic items.

**`Author`**

Jiri Hynek

## Implements

- [`IMapSelection`](../interfaces/IMapSelection.md)

## Table of contents

### Constructors

- [constructor](MapSelection.md#constructor)

### Properties

- [allIds](MapSelection.md#allids)
- [srcIds](MapSelection.md#srcids)
- [tool](MapSelection.md#tool)

### Methods

- [addIds](MapSelection.md#addids)
- [equals](MapSelection.md#equals)
- [getIds](MapSelection.md#getids)
- [getSrcIds](MapSelection.md#getsrcids)
- [getTool](MapSelection.md#gettool)

## Constructors

### constructor

• **new MapSelection**(`tool`, `srcIds`): [`MapSelection`](MapSelection.md)

It creates a map selection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |
| `srcIds` | `string`[] |

#### Returns

[`MapSelection`](MapSelection.md)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L26)

## Properties

### allIds

• `Private` **allIds**: `string`[]

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L18)

___

### srcIds

• `Private` **srcIds**: `string`[]

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L17)

___

### tool

• `Private` **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L16)

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

#### Implementation of

[IMapSelection](../interfaces/IMapSelection.md).[addIds](../interfaces/IMapSelection.md#addids)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L81)

___

### equals

▸ **equals**(`selection`): `boolean`

It compares two map selections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md) |

#### Returns

`boolean`

#### Implementation of

[IMapSelection](../interfaces/IMapSelection.md).[equals](../interfaces/IMapSelection.md#equals)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L58)

___

### getIds

▸ **getIds**(): `string`[]

It returns identifiers of geographical items which were selected or affected by this selection.

#### Returns

`string`[]

#### Implementation of

[IMapSelection](../interfaces/IMapSelection.md).[getIds](../interfaces/IMapSelection.md#getids)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L49)

___

### getSrcIds

▸ **getSrcIds**(): `string`[]

It returns identifiers of geographical items which were selected.

#### Returns

`string`[]

#### Implementation of

[IMapSelection](../interfaces/IMapSelection.md).[getSrcIds](../interfaces/IMapSelection.md#getsrcids)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L42)

___

### getTool

▸ **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool of the selected element.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[IMapSelection](../interfaces/IMapSelection.md).[getTool](../interfaces/IMapSelection.md#gettool)

#### Defined in

[src/tools/selection/model/internal/selection/MapSelection.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L35)
