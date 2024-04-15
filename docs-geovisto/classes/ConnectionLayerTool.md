[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerTool

# Class: ConnectionLayerTool

This class represents Connection layer tool. It uses SVG layer and D3 to draw the lines.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`ConnectionLayerTool`**

## Implements

- [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](ConnectionLayerTool.md#constructor)

### Properties

- [animateDirectionUtil](ConnectionLayerTool.md#animatedirectionutil)
- [connectionsPaths](ConnectionLayerTool.md#connectionspaths)
- [mapForm](ConnectionLayerTool.md#mapform)
- [selectionChangeAdapter](ConnectionLayerTool.md#selectionchangeadapter)
- [themeChangeAdapter](ConnectionLayerTool.md#themechangeadapter)

### Methods

- [bucketHashToGeoIds](ConnectionLayerTool.md#buckethashtogeoids)
- [copy](ConnectionLayerTool.md#copy)
- [create](ConnectionLayerTool.md#create)
- [createDefaults](ConnectionLayerTool.md#createdefaults)
- [createLayerItems](ConnectionLayerTool.md#createlayeritems)
- [createMapForm](ConnectionLayerTool.md#createmapform)
- [createState](ConnectionLayerTool.md#createstate)
- [deleteLayerItems](ConnectionLayerTool.md#deletelayeritems)
- [geoIdsToBucketHash](ConnectionLayerTool.md#geoidstobuckethash)
- [getAPIGetter](ConnectionLayerTool.md#getapigetter)
- [getAnimateDirectionUtil](ConnectionLayerTool.md#getanimatedirectionutil)
- [getDefaults](ConnectionLayerTool.md#getdefaults)
- [getId](ConnectionLayerTool.md#getid)
- [getLayerItems](ConnectionLayerTool.md#getlayeritems)
- [getMap](ConnectionLayerTool.md#getmap)
- [getMapForm](ConnectionLayerTool.md#getmapform)
- [getProps](ConnectionLayerTool.md#getprops)
- [getSelectionChangeAdapter](ConnectionLayerTool.md#getselectionchangeadapter)
- [getState](ConnectionLayerTool.md#getstate)
- [getThemeChangeAdapter](ConnectionLayerTool.md#getthemechangeadapter)
- [getType](ConnectionLayerTool.md#gettype)
- [handleEvent](ConnectionLayerTool.md#handleevent)
- [hideLayerItems](ConnectionLayerTool.md#hidelayeritems)
- [initialize](ConnectionLayerTool.md#initialize)
- [isEnabled](ConnectionLayerTool.md#isenabled)
- [isSingleton](ConnectionLayerTool.md#issingleton)
- [render](ConnectionLayerTool.md#render)
- [renderConnections](ConnectionLayerTool.md#renderconnections)
- [setEnabled](ConnectionLayerTool.md#setenabled)
- [setProps](ConnectionLayerTool.md#setprops)
- [showLayerItems](ConnectionLayerTool.md#showlayeritems)
- [switchEnabled](ConnectionLayerTool.md#switchenabled)
- [updateData](ConnectionLayerTool.md#updatedata)
- [updateDimension](ConnectionLayerTool.md#updatedimension)
- [updateStyle](ConnectionLayerTool.md#updatestyle)

## Constructors

### constructor

• **new ConnectionLayerTool**(`props?`): [`ConnectionLayerTool`](ConnectionLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops) |

#### Returns

[`ConnectionLayerTool`](ConnectionLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L77)

## Properties

### animateDirectionUtil

• `Private` **animateDirectionUtil**: [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L68)

___

### connectionsPaths

• `Private` **connectionsPaths**: `Record`\<`string`, `Selection`\<`BaseType`, `any`, `any`, `any`\>\>

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L70)

___

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L64)

___

### selectionChangeAdapter

• `Private` **selectionChangeAdapter**: [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L66)

___

### themeChangeAdapter

• `Private` **themeChangeAdapter**: [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L67)

## Methods

### bucketHashToGeoIds

▸ **bucketHashToGeoIds**(`bucketHash`): `string`[]

It returns the the geo ids (from, to) used in data bucket hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketHash` | `string` |

#### Returns

`string`[]

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:224](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L224)

___

### copy

▸ **copy**(): [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[copy](../interfaces/IConnectionLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L86)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[create](../interfaces/IConnectionLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L107)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:184](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L184)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:168](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L168)

___

### createState

▸ **createState**(): [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns default tool state.

#### Returns

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:121](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L121)

___

### deleteLayerItems

▸ **deleteLayerItems**(): `void`

It deletes layer items.

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:200](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L200)

___

### geoIdsToBucketHash

▸ **geoIdsToBucketHash**(`from`, `to`): `string`

It returns the hash of (from, to) used in data buckets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:215](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L215)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getAPIGetter](../interfaces/IConnectionLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getAnimateDirectionUtil

▸ **getAnimateDirectionUtil**(): [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

It returns theme change adapter.

#### Returns

[`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:148](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L148)

___

### getDefaults

▸ **getDefaults**(): [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getDefaults](../interfaces/IConnectionLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:100](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L100)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getId](../interfaces/IConnectionLayerTool.md#getid)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getId](AbstractLayerTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getLayerItems](../interfaces/IConnectionLayerTool.md#getlayeritems)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getLayerItems](AbstractLayerTool.md#getlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L163)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getMap](../interfaces/IConnectionLayerTool.md#getmap)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L158)

___

### getProps

▸ **getProps**(): [`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops)

It returns the props given by the programmer.

#### Returns

[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops)

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getProps](../interfaces/IConnectionLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L93)

___

### getSelectionChangeAdapter

▸ **getSelectionChangeAdapter**(): [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

It returns selection change adapter.

#### Returns

[`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:128](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L128)

___

### getState

▸ **getState**(): [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

It returns the layer tool state.

#### Returns

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getState](../interfaces/IConnectionLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L114)

___

### getThemeChangeAdapter

▸ **getThemeChangeAdapter**(): [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

It returns theme change adapter.

#### Returns

[`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L138)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[getType](../interfaces/IConnectionLayerTool.md#gettype)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

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

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:632](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L632)

___

### hideLayerItems

▸ **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[hideLayerItems](AbstractLayerTool.md#hidelayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L147)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[initialize](../interfaces/IConnectionLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:177](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L177)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[isEnabled](../interfaces/IConnectionLayerTool.md#isenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isEnabled](AbstractLayerTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[isSingleton](../interfaces/IConnectionLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### render

▸ **render**(`type`, `animateOptions?`): `void`

It reloads data and redraw the layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[render](../interfaces/IConnectionLayerTool.md#render)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:578](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L578)

___

### renderConnections

▸ **renderConnections**(`animateOptions?`): `void`

This function is called when layer items are rendered.
It uses the D3 force layout simulation to arrange the connections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `animateOptions` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:392](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L392)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[setEnabled](../interfaces/IConnectionLayerTool.md#setenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setEnabled](AbstractLayerTool.md#setenabled)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L102)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setProps](AbstractLayerTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### showLayerItems

▸ **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[showLayerItems](AbstractLayerTool.md#showlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L126)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[switchEnabled](../interfaces/IConnectionLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateData

▸ **updateData**(): `Object`

It prepares data for connections.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connections` | `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |
| `nodes` | `Set`\<`string`\> |

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:231](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L231)

___

### updateDimension

▸ **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\> |
| `value` | `string` |
| `renderType` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[IConnectionLayerTool](../interfaces/IConnectionLayerTool.md).[updateDimension](../interfaces/IConnectionLayerTool.md#updatedimension)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:607](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L607)

___

### updateStyle

▸ **updateStyle**(): `void`

Help method which updates styles

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:566](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L566)
