[geovisto-map](../README.md) / [Exports](../modules.md) / TimelineToolState

# Class: TimelineToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Krystof Rykala

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`TimelineToolState`**

## Implements

- [`ITimelineToolState`](../interfaces/ITimelineToolState.md)

## Table of contents

### Constructors

- [constructor](TimelineToolState.md#constructor)

### Properties

- [stories](TimelineToolState.md#stories)

### Methods

- [createStory](TimelineToolState.md#createstory)
- [deserialize](TimelineToolState.md#deserialize)
- [deserializeDimensions](TimelineToolState.md#deserializedimensions)
- [getDimensions](TimelineToolState.md#getdimensions)
- [getIcon](TimelineToolState.md#geticon)
- [getId](TimelineToolState.md#getid)
- [getLabel](TimelineToolState.md#getlabel)
- [getLayerItems](TimelineToolState.md#getlayeritems)
- [getLayerName](TimelineToolState.md#getlayername)
- [getMap](TimelineToolState.md#getmap)
- [getMapObject](TimelineToolState.md#getmapobject)
- [getStories](TimelineToolState.md#getstories)
- [getStoryByName](TimelineToolState.md#getstorybyname)
- [getType](TimelineToolState.md#gettype)
- [initialize](TimelineToolState.md#initialize)
- [isEnabled](TimelineToolState.md#isenabled)
- [saveStory](TimelineToolState.md#savestory)
- [serialize](TimelineToolState.md#serialize)
- [setDimensions](TimelineToolState.md#setdimensions)
- [setEnabled](TimelineToolState.md#setenabled)
- [setIcon](TimelineToolState.md#seticon)
- [setId](TimelineToolState.md#setid)
- [setLabel](TimelineToolState.md#setlabel)
- [setLayerItems](TimelineToolState.md#setlayeritems)
- [setLayerName](TimelineToolState.md#setlayername)
- [setMap](TimelineToolState.md#setmap)
- [setStories](TimelineToolState.md#setstories)

## Constructors

### constructor

• **new TimelineToolState**(`tool`): [`TimelineToolState`](TimelineToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\> |

#### Returns

[`TimelineToolState`](TimelineToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L21)

## Properties

### stories

• `Private` **stories**: `TimelineStoryConfig`[] = `[]`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L16)

## Methods

### createStory

▸ **createStory**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[createStory](../interfaces/ITimelineToolState.md#createstory)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:192](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L192)

___

### deserialize

▸ **deserialize**(`config`): `void`

The method takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig) |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[deserialize](../interfaces/ITimelineToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L106)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig) |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[deserializeDimensions](../interfaces/ITimelineToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L60)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the map layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chartAggregationFn` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `chartEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `chartValuePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `granularity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> |
| `realTimeEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `stepTimeLength` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `story` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `storyEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `timePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `transitionDuration` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getDimensions](../interfaces/ITimelineToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L158)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getIcon](../interfaces/ITimelineToolState.md#geticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[getIcon](LayerToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getId](../interfaces/ITimelineToolState.md#getid)

#### Inherited from

[LayerToolState](LayerToolState.md).[getId](LayerToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getLabel](../interfaces/ITimelineToolState.md#getlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLabel](LayerToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getLayerItems](../interfaces/ITimelineToolState.md#getlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerItems](LayerToolState.md#getlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L104)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getLayerName](../interfaces/ITimelineToolState.md#getlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerName](LayerToolState.md#getlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L88)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getMap](../interfaces/ITimelineToolState.md#getmap)

#### Inherited from

[LayerToolState](LayerToolState.md).[getMap](LayerToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[LayerToolState](LayerToolState.md).[getMapObject](LayerToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getStories

▸ **getStories**(): `TimelineStoryConfig`[]

#### Returns

`TimelineStoryConfig`[]

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getStories](../interfaces/ITimelineToolState.md#getstories)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L171)

___

### getStoryByName

▸ **getStoryByName**(`name`): `undefined` \| ``null`` \| `TimelineStoryConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| ``null`` \| `TimelineStoryConfig`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getStoryByName](../interfaces/ITimelineToolState.md#getstorybyname)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:186](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L186)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[getType](../interfaces/ITimelineToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md) |
| `props` | [`ITimelineToolProps`](../modules.md#itimelinetoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\> |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[initialize](../interfaces/ITimelineToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L32)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[isEnabled](../interfaces/ITimelineToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### saveStory

▸ **saveStory**(`story`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `story` | `TimelineStoryConfig` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[saveStory](../interfaces/ITimelineToolState.md#savestory)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:179](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L179)

___

### serialize

▸ **serialize**(`defaults?`): [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is
undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults?` | [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md) |

#### Returns

[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[serialize](../interfaces/ITimelineToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L126)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.chartAggregationFn` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.chartEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.chartValuePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.granularity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> |
| `dimensions.realTimeEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.stepTimeLength` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.story` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.storyEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.timePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.transitionDuration` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setDimensions](../interfaces/ITimelineToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:167](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L167)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setEnabled](../interfaces/ITimelineToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setIcon](../interfaces/ITimelineToolState.md#seticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[setIcon](LayerToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setId](../interfaces/ITimelineToolState.md#setid)

#### Inherited from

[LayerToolState](LayerToolState.md).[setId](LayerToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setLabel](../interfaces/ITimelineToolState.md#setlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLabel](LayerToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setLayerItems

▸ **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerItems` | `Layer`[] |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setLayerItems](../interfaces/ITimelineToolState.md#setlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerItems](LayerToolState.md#setlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L113)

___

### setLayerName

▸ **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerName` | `string` |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setLayerName](../interfaces/ITimelineToolState.md#setlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerName](LayerToolState.md#setlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L97)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[LayerToolState](LayerToolState.md).[setMap](LayerToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)

___

### setStories

▸ **setStories**(`stories`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stories` | `TimelineStoryConfig`[] |

#### Returns

`void`

#### Implementation of

[ITimelineToolState](../interfaces/ITimelineToolState.md).[setStories](../interfaces/ITimelineToolState.md#setstories)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolState.ts:175](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L175)
