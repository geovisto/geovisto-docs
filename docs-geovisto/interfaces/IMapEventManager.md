**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapEventManager

# Interface: IMapEventManager

This interface declares functions for management and handling events and event listeners.

## Author

Jiri Hynek

## Methods

### addEventListener()

> **addEventListener**(`listener`): `void`

It adds an event listener.

#### Parameters

• **listener**: [`IMapEventListener`](IMapEventListener.md)

#### Returns

`void`

#### Source

[model/types/event/IMapEventManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEventManager.ts#L23)

***

### removeEventListener()

> **removeEventListener**(`listener`): `void`

It removes an event listener.

#### Parameters

• **listener**: [`IMapEventListener`](IMapEventListener.md)

#### Returns

`void`

#### Source

[model/types/event/IMapEventManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEventManager.ts#L30)

***

### scheduleEvent()

> **scheduleEvent**(`event`, `beforeCallBack`, `afterCallBack`): `void`

It schdules an event in the end of the event queue and dispatch the event.

#### Parameters

• **event**: [`IMapEvent`](IMapEvent.md)\<[`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

• **beforeCallBack**: `undefined` \| () => `void`

• **afterCallBack**: `undefined` \| () => `void`

#### Returns

`void`

#### Source

[model/types/event/IMapEventManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEventManager.ts#L16)
