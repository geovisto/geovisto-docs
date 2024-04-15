[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerToolSelectionChangeAdapter

# Class: ConnectionLayerToolSelectionChangeAdapter

This class provides Selection tool change event adapter.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](ConnectionLayerToolSelectionChangeAdapter.md#constructor)

### Properties

- [selectionToolAPI](ConnectionLayerToolSelectionChangeAdapter.md#selectiontoolapi)
- [tool](ConnectionLayerToolSelectionChangeAdapter.md#tool)

### Methods

- [getSelectionTool](ConnectionLayerToolSelectionChangeAdapter.md#getselectiontool)
- [handleEvent](ConnectionLayerToolSelectionChangeAdapter.md#handleevent)
- [setSelection](ConnectionLayerToolSelectionChangeAdapter.md#setselection)
- [updateSelection](ConnectionLayerToolSelectionChangeAdapter.md#updateselection)

## Constructors

### constructor

• **new ConnectionLayerToolSelectionChangeAdapter**(`tool`): [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\> |

#### Returns

[`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L32)

## Properties

### selectionToolAPI

• `Private` `Optional` **selectionToolAPI**: [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L28)

___

### tool

• `Private` **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L30)

## Methods

### getSelectionTool

▸ **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L39)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L53)

___

### setSelection

▸ **setSelection**(`selection`): `void`

This function updates styles according to the given selection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | `undefined` \| ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md) |

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L71)

___

### updateSelection

▸ **updateSelection**(): `void`

This function acquires current selection and updates styles according to the given selection.

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/SelectionChangeAdapter.ts#L62)
