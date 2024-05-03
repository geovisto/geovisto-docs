**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HierarchyTool

# Class: HierarchyTool

Hierarchy tool provides configuration parsing for hierarchy, sets hierarchy trees for geoDataManager and
later dispatches event in case of zoom/geo data change event.

## Author

Malý Vojtěch

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IHierarchyTool`](../interfaces/IHierarchyTool.md)

## Constructors

### new HierarchyTool()

> **new HierarchyTool**(`props`?): [`HierarchyTool`](HierarchyTool.md)

#### Parameters

• **props?**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Returns

[`HierarchyTool`](HierarchyTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L35)

## Properties

### changeLastZoom

> `private` **changeLastZoom**: `string`[] = `[]`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L32)

***

### changeStruct

> `private` **changeStruct**: `Map`\<`string`, [`boolean`, `number`]\>

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L31)

***

### manager

> `private` **manager**: [`HierarchyToolManager`](HierarchyToolManager.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L28)

***

### mapForm

> `private` **mapForm**: [`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L27)

## Methods

### copy()

> **copy**(): [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`copy`](../interfaces/IHierarchyTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L76)

***

### create()

> **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`create`](../interfaces/IHierarchyTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L81)

***

### createDefaults()

> **createDefaults**(): [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L50)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L54)

***

### createState()

> **createState**(): [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>

It creates new defaults of the tool.

#### Returns

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:72](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L72)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getAPIGetter`](../interfaces/IHierarchyTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getDefaults`](../interfaces/IHierarchyTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L46)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getId`](../interfaces/IHierarchyTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getMap`](../interfaces/IHierarchyTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L39)

***

### getProps()

> **getProps**(): [`IMapToolProps`](../type-aliases/IMapToolProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getProps`](../interfaces/IHierarchyTool.md#getprops)

#### Inherited from

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L39)

***

### getState()

> **getState**(): [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>

It returns the map object state.

#### Returns

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getState`](../interfaces/IHierarchyTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L68)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`getType`](../interfaces/IHierarchyTool.md#gettype)

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L171)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`initialize`](../interfaces/IHierarchyTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L58)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`isEnabled`](../interfaces/IHierarchyTool.md#isenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`isEnabled`](MapTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`isSingleton`](../interfaces/IHierarchyTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`setEnabled`](../interfaces/IHierarchyTool.md#setenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L142)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`IHierarchyTool`](../interfaces/IHierarchyTool.md).[`switchEnabled`](../interfaces/IHierarchyTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateChangeStruct()

> `private` **updateChangeStruct**(`zoom`): `void`

Private method to update data in change structer.

#### Parameters

• **zoom**: `number`

New level of zoom.

#### Returns

`void`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:156](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L156)

***

### zoomChanged()

> `private` **zoomChanged**(): `void`

Method called whenever zoom changes.

#### Returns

`void`

#### Source

[tools/hierarchy/model/internal/tool/HierarchyTool.ts:125](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L125)
