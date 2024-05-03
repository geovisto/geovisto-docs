**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarTabState

# Class: SidebarTabState

This class manages the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`MapObjectState`](MapObjectState.md)

## Implements

- [`ISidebarTabState`](../interfaces/ISidebarTabState.md)

## Constructors

### new SidebarTabState()

> **new SidebarTabState**(`sidebarTab`): [`SidebarTabState`](SidebarTabState.md)

It creates a sidebar tab state.

#### Parameters

• **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

[`SidebarTabState`](SidebarTabState.md)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`constructor`](MapObjectState.md#constructors)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L45)

## Properties

### checkButton

> `private` **checkButton**: `boolean`

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L32)

***

### content

> `private` **content**: `null` \| `HTMLElement`

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L38)

***

### enabled

> `private` **enabled**: `boolean`

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L26)

***

### fragments?

> `private` `optional` **fragments**: [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L36)

***

### icon

> `private` **icon**: `string`

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L30)

***

### name

> `private` **name**: `string`

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L28)

***

### sidebar

> `private` **sidebar**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L34)

***

### tool

> `private` **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L24)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The function takes config and deserializes the values.

#### Parameters

• **config**: [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`deserialize`](../interfaces/ISidebarTabState.md#deserialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`deserialize`](MapObjectState.md#deserialize)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L76)

***

### getContent()

> **getContent**(): `null` \| `HTMLElement`

It returns the HTML content property of the sidebar tab state.

#### Returns

`null` \| `HTMLElement`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getContent`](../interfaces/ISidebarTabState.md#getcontent)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:214](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L214)

***

### getFragments()

> **getFragments**(): `undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getFragments`](../interfaces/ISidebarTabState.md#getfragments)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:230](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L230)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the sidebar tab state.

#### Returns

`string`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getIcon`](../interfaces/ISidebarTabState.md#geticon)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:166](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L166)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getId`](../interfaces/ISidebarTabState.md#getid)

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

### getName()

> **getName**(): `string`

It returns the name property of the sidebar tab state.

#### Returns

`string`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getName`](../interfaces/ISidebarTabState.md#getname)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:150](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L150)

***

### getSidebarTool()

> **getSidebarTool**(): [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

It returns the sidebar property of the sidebar tab state.

#### Returns

[`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getSidebarTool`](../interfaces/ISidebarTabState.md#getsidebartool)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:198](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L198)

***

### getTool()

> **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool property of the sidebar tab state.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getTool`](../interfaces/ISidebarTabState.md#gettool)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L118)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`getType`](../interfaces/ISidebarTabState.md#gettype)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`getType`](MapObjectState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### hasCheckButton()

> **hasCheckButton**(): `boolean`

It returns the checkButton property of the sidebar tab state.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`hasCheckButton`](../interfaces/ISidebarTabState.md#hascheckbutton)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:182](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L182)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

• **props**: [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

• **initProps**: [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`initialize`](../interfaces/ISidebarTabState.md#initialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`initialize`](MapObjectState.md#initialize)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L54)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the sidebar tab state.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`isEnabled`](../interfaces/ISidebarTabState.md#isenabled)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:134](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L134)

***

### serialize()

> **serialize**(`defaults`): [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

The method serializes the sidebar tab control configuration.
Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

#### Returns

[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`serialize`](../interfaces/ISidebarTabState.md#serialize)

#### Overrides

[`MapObjectState`](MapObjectState.md).[`serialize`](MapObjectState.md#serialize)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L89)

***

### setCheckButton()

> **setCheckButton**(`checkButton`): `void`

It sets the checkButton property of the sidebar tab state.

#### Parameters

• **checkButton**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setCheckButton`](../interfaces/ISidebarTabState.md#setcheckbutton)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:191](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L191)

***

### setContent()

> **setContent**(`content`): `void`

It sets the HTML content property of the sidebar tab state.

#### Parameters

• **content**: `HTMLElement`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setContent`](../interfaces/ISidebarTabState.md#setcontent)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:223](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L223)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar tab state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setEnabled`](../interfaces/ISidebarTabState.md#setenabled)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L143)

***

### setFragments()

> **setFragments**(`fragments`): `void`

It sets the fragments property of the sidebar tab state.

#### Parameters

• **fragments**: [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setFragments`](../interfaces/ISidebarTabState.md#setfragments)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:239](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L239)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the sidebar tab state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setIcon`](../interfaces/ISidebarTabState.md#seticon)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:175](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L175)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setId`](../interfaces/ISidebarTabState.md#setid)

#### Inherited from

[`MapObjectState`](MapObjectState.md).[`setId`](MapObjectState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setName()

> **setName**(`name`): `void`

It sets the name property of the sidebar tab state.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setName`](../interfaces/ISidebarTabState.md#setname)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:159](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L159)

***

### setSidebarTool()

> **setSidebarTool**(`sidebar`): `void`

It sets the sidebar property of the sidebar tab state.

#### Parameters

• **sidebar**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setSidebarTool`](../interfaces/ISidebarTabState.md#setsidebartool)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L207)

***

### setTool()

> **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab state.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Implementation of

[`ISidebarTabState`](../interfaces/ISidebarTabState.md).[`setTool`](../interfaces/ISidebarTabState.md#settool)

#### Source

[tools/sidebar/model/internal/tab/SidebarTabState.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L127)
