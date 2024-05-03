**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarFragmentState

# Class: SidebarFragmentState

This class manages the state of the sidebar fragment.
It wraps the state since the sidebar fragment can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`MapObjectState`](MapObjectState.md)

## Implements

- [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)

## Constructors

### new SidebarFragmentState()

> **new SidebarFragmentState**(`sidebarFragment`): [`SidebarFragmentState`](SidebarFragmentState.md)

It creates a sidebar fragment state.

#### Parameters

• **sidebarFragment**: [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>

#### Returns

[`SidebarFragmentState`](SidebarFragmentState.md)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`constructor`](MapObjectState.md#constructors)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L34)

## Properties

### content

> `private` **content**: `null` \| `HTMLElement`

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L27)

***

### enabled

> `private` **enabled**: `boolean`

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L21)

***

### sidebarTab

> `private` **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L25)

***

### tool

> `private` **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L23)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`deserialize`](../interfaces/ISidebarFragmentState.md#deserialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`deserialize`](MapObjectState.md#deserialize)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L61)

***

### getContent()

> **getContent**(): `null` \| `HTMLElement`

It returns the content property of the sidebar fragment state.

#### Returns

`null` \| `HTMLElement`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`getContent`](../interfaces/ISidebarFragmentState.md#getcontent)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:131](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L131)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`getId`](../interfaces/ISidebarFragmentState.md#getid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getId`](MapObjectState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getMapObject`](MapObjectState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getSidebarTab()

> **getSidebarTab**(): [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

It returns the sidebar tab property of the sidebar fragment control state.

#### Returns

[`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`getSidebarTab`](../interfaces/ISidebarFragmentState.md#getsidebartab)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:115](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L115)

***

### getTool()

> **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool property of the sidebar tab fragment state.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`getTool`](../interfaces/ISidebarFragmentState.md#gettool)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L83)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`getType`](../interfaces/ISidebarFragmentState.md#gettype)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getType`](MapObjectState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

• **props**: [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

• **initProps**: [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`initialize`](../interfaces/ISidebarFragmentState.md#initialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`initialize`](MapObjectState.md#initialize)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L43)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the sidebar fragment state.

#### Returns

`boolean`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`isEnabled`](../interfaces/ISidebarFragmentState.md#isenabled)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L99)

***

### serialize()

> **serialize**(`defaults`): [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

The method serializes the sidebar tab fragment configuration.
Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

#### Returns

[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`serialize`](../interfaces/ISidebarFragmentState.md#serialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`serialize`](MapObjectState.md#serialize)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L71)

***

### setContent()

> **setContent**(`content`): `void`

It sets the content property of the sidebar tab control state.

#### Parameters

• **content**: `HTMLElement`

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`setContent`](../interfaces/ISidebarFragmentState.md#setcontent)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:140](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L140)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar fragment state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`setEnabled`](../interfaces/ISidebarFragmentState.md#setenabled)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L108)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`setId`](../interfaces/ISidebarFragmentState.md#setid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`setId`](MapObjectState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setSidebarTab()

> **setSidebarTab**(`sidebarTab`): `void`

It sets the sidebar tab property of the sidebar fragment state.

#### Parameters

• **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

`void`

#### Implementation of

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md).[`setSidebarTab`](../interfaces/ISidebarFragmentState.md#setsidebartab)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:124](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L124)

***

### setTool()

> `protected` **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab fragment state.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L92)
