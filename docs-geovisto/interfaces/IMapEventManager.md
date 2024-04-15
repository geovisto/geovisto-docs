[geovisto-map](../README.md) / [Exports](../modules.md) / IMapEventManager

# Interface: IMapEventManager

This interface declares functions for management and handling events and event listeners.

**`Author`**

Jiri Hynek

## Table of contents

### Methods

- [addEventListener](IMapEventManager.md#addeventlistener)
- [removeEventListener](IMapEventManager.md#removeeventlistener)
- [scheduleEvent](IMapEventManager.md#scheduleevent)

## Methods

### addEventListener

▸ **addEventListener**(`listener`): `void`

It adds an event listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`IMapEventListener`](IMapEventListener.md) |

#### Returns

`void`

#### Defined in

[src/model/types/event/IMapEventManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEventManager.ts#L23)

___

### removeEventListener

▸ **removeEventListener**(`listener`): `void`

It removes an event listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`IMapEventListener`](IMapEventListener.md) |

#### Returns

`void`

#### Defined in

[src/model/types/event/IMapEventManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEventManager.ts#L30)

___

### scheduleEvent

▸ **scheduleEvent**(`event`, `beforeCallBack`, `afterCallBack`): `void`

It schdules an event in the end of the event queue and dispatch the event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](IMapEvent.md)\<[`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |
| `beforeCallBack` | `undefined` \| () => `void` |
| `afterCallBack` | `undefined` \| () => `void` |

#### Returns

`void`

#### Defined in

[src/model/types/event/IMapEventManager.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEventManager.ts#L16)
