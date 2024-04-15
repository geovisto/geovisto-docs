[geovisto-map](../README.md) / [Exports](../modules.md) / DrawingLayerToolState

# Class: DrawingLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Andrej Tlcina

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`DrawingLayerToolState`**

## Implements

- `IDrawingLayerToolState`

## Table of contents

### Constructors

- [constructor](DrawingLayerToolState.md#constructor)

### Properties

- [createdVertices](DrawingLayerToolState.md#createdvertices)
- [extraSelected](DrawingLayerToolState.md#extraselected)
- [featureGroup](DrawingLayerToolState.md#featuregroup)
- [mappedMarkersToVertices](DrawingLayerToolState.md#mappedmarkerstovertices)
- [selectedLayer](DrawingLayerToolState.md#selectedlayer)
- [selecting](DrawingLayerToolState.md#selecting)
- [tool](DrawingLayerToolState.md#tool)

### Methods

- [addExtraSelected](DrawingLayerToolState.md#addextraselected)
- [addLayer](DrawingLayerToolState.md#addlayer)
- [addMappedVertices](DrawingLayerToolState.md#addmappedvertices)
- [areSameType](DrawingLayerToolState.md#aresametype)
- [clearExtraSelected](DrawingLayerToolState.md#clearextraselected)
- [clearSelectedLayer](DrawingLayerToolState.md#clearselectedlayer)
- [deserialize](DrawingLayerToolState.md#deserialize)
- [deserializeDimensions](DrawingLayerToolState.md#deserializedimensions)
- [deserializeGeoJSON](DrawingLayerToolState.md#deserializegeojson)
- [getDimensions](DrawingLayerToolState.md#getdimensions)
- [getIcon](DrawingLayerToolState.md#geticon)
- [getId](DrawingLayerToolState.md#getid)
- [getLabel](DrawingLayerToolState.md#getlabel)
- [getLayerItems](DrawingLayerToolState.md#getlayeritems)
- [getLayerName](DrawingLayerToolState.md#getlayername)
- [getMap](DrawingLayerToolState.md#getmap)
- [getMapObject](DrawingLayerToolState.md#getmapobject)
- [getSelecting](DrawingLayerToolState.md#getselecting)
- [getType](DrawingLayerToolState.md#gettype)
- [initMappedMarkersToVertices](DrawingLayerToolState.md#initmappedmarkerstovertices)
- [initialize](DrawingLayerToolState.md#initialize)
- [isConnectMarker](DrawingLayerToolState.md#isconnectmarker)
- [isEnabled](DrawingLayerToolState.md#isenabled)
- [isInExtraSelected](DrawingLayerToolState.md#isinextraselected)
- [pushVertice](DrawingLayerToolState.md#pushvertice)
- [removeGivenVertice](DrawingLayerToolState.md#removegivenvertice)
- [removeLayer](DrawingLayerToolState.md#removelayer)
- [removeMappedVertices](DrawingLayerToolState.md#removemappedvertices)
- [removeMarkersMappedVertices](DrawingLayerToolState.md#removemarkersmappedvertices)
- [removeSelectedLayer](DrawingLayerToolState.md#removeselectedlayer)
- [selectedLayerIsConnectMarker](DrawingLayerToolState.md#selectedlayerisconnectmarker)
- [serialize](DrawingLayerToolState.md#serialize)
- [serializeToGeoJSON](DrawingLayerToolState.md#serializetogeojson)
- [setDimensions](DrawingLayerToolState.md#setdimensions)
- [setEnabled](DrawingLayerToolState.md#setenabled)
- [setIcon](DrawingLayerToolState.md#seticon)
- [setId](DrawingLayerToolState.md#setid)
- [setLabel](DrawingLayerToolState.md#setlabel)
- [setLayerItems](DrawingLayerToolState.md#setlayeritems)
- [setLayerName](DrawingLayerToolState.md#setlayername)
- [setMap](DrawingLayerToolState.md#setmap)
- [setSelectedLayer](DrawingLayerToolState.md#setselectedlayer)
- [setSelecting](DrawingLayerToolState.md#setselecting)
- [setVerticesToMarker](DrawingLayerToolState.md#setverticestomarker)

## Constructors

### constructor

• **new DrawingLayerToolState**(`tool`): [`DrawingLayerToolState`](DrawingLayerToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\> |

#### Returns

[`DrawingLayerToolState`](DrawingLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L55)

## Properties

### createdVertices

• **createdVertices**: `DrawnObject`[]

#### Implementation of

IDrawingLayerToolState.createdVertices

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L49)

___

### extraSelected

• **extraSelected**: `DrawnObject`[]

#### Implementation of

IDrawingLayerToolState.extraSelected

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L51)

___

### featureGroup

• **featureGroup**: `DrawnGroup`

#### Implementation of

IDrawingLayerToolState.featureGroup

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L45)

___

### mappedMarkersToVertices

• **mappedMarkersToVertices**: `MappedMarkersToVertices`

#### Implementation of

IDrawingLayerToolState.mappedMarkersToVertices

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L50)

___

### selectedLayer

• **selectedLayer**: ``null`` \| `DrawnObject`

#### Implementation of

IDrawingLayerToolState.selectedLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L47)

___

### selecting

• **selecting**: `boolean`

#### Implementation of

IDrawingLayerToolState.selecting

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L46)

___

### tool

• **tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

IDrawingLayerToolState.tool

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L48)

## Methods

### addExtraSelected

▸ **addExtraSelected**(`layer`): `void`

add passed layer to array and highlights it

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.addExtraSelected

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L109)

___

### addLayer

▸ **addLayer**(`layer`): `DrawnObject`

add layer to featureGroup and it is displayed

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`DrawnObject`

#### Implementation of

IDrawingLayerToolState.addLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:230](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L230)

___

### addMappedVertices

▸ **addMappedVertices**(`layer`, `result`): `void`

saving topology information to marker

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |
| `result` | `Source` |

#### Returns

`void`

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:281](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L281)

___

### areSameType

▸ **areSameType**(`layer`): `boolean`

checks if selected and passed object are of the same type

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`boolean`

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L96)

___

### clearExtraSelected

▸ **clearExtraSelected**(): `void`

clears extraSelected array and sets normal styles to each geo. object

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.clearExtraSelected

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L76)

___

### clearSelectedLayer

▸ **clearSelectedLayer**(): `void`

removes selected layer

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.clearSelectedLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:267](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L267)

___

### deserialize

▸ **deserialize**(`config`): `void`

deserializes internal JSON representation to map state

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IDrawingLayerToolConfig` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.deserialize

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:511](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L511)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig) |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.deserializeDimensions

#### Inherited from

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L67)

___

### deserializeGeoJSON

▸ **deserializeGeoJSON**(`geojson`): `void`

deserializes GeoJSON to map state

#### Parameters

| Name | Type |
| :------ | :------ |
| `geojson` | `ExportGeoJSON` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.deserializeGeoJSON

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:366](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L366)

___

### getDimensions

▸ **getDimensions**(): [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

It returns the map layer dimensions property of the tool state.

#### Returns

[`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

#### Implementation of

IDrawingLayerToolState.getDimensions

#### Inherited from

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L120)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

IDrawingLayerToolState.getIcon

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

IDrawingLayerToolState.getId

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

IDrawingLayerToolState.getLabel

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

IDrawingLayerToolState.getLayerItems

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

IDrawingLayerToolState.getLayerName

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

IDrawingLayerToolState.getMap

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

### getSelecting

▸ **getSelecting**(): `boolean`

getter

#### Returns

`boolean`

#### Implementation of

IDrawingLayerToolState.getSelecting

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:223](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L223)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

IDrawingLayerToolState.getType

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initMappedMarkersToVertices

▸ **initMappedMarkersToVertices**(`lType`, `result`, `source`): `void`

called so when we import topology dragging of vertices works

#### Parameters

| Name | Type |
| :------ | :------ |
| `lType` | ``""`` \| `LayerType` |
| `result` | `DrawnObject` |
| `source` | `Source` |

#### Returns

`void`

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:295](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L295)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md) |
| `props` | [`ILayerToolProps`](../modules.md#ilayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops) |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.initialize

#### Inherited from

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L35)

___

### isConnectMarker

▸ **isConnectMarker**(`marker`): `boolean`

checks if markers is connect marker

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | ``null`` \| `DrawnObject` |

#### Returns

`boolean`

#### Implementation of

IDrawingLayerToolState.isConnectMarker

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L126)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

IDrawingLayerToolState.isEnabled

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### isInExtraSelected

▸ **isInExtraSelected**(`layerId`): `number`

checks if layer is in extraSelected objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerId` | `string` |

#### Returns

`number`

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L86)

___

### pushVertice

▸ **pushVertice**(`vertice`): `void`

Pushes vertice into created ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertice` | `DrawnObject` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.pushVertice

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L143)

___

### removeGivenVertice

▸ **removeGivenVertice**(`lId`): `void`

removes vertice based on given leaflet id

#### Parameters

| Name | Type |
| :------ | :------ |
| `lId` | `string` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.removeGivenVertice

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:152](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L152)

___

### removeLayer

▸ **removeLayer**(`layer`): `void`

removes layer from featureGroup and from map

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.removeLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:239](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L239)

___

### removeMappedVertices

▸ **removeMappedVertices**(`idsOfVerticesToRemove`): `MappedMarkersToVertices`

removes vertice which ids were passed

#### Parameters

| Name | Type |
| :------ | :------ |
| `idsOfVerticesToRemove` | `Set`\<`string`\> |

#### Returns

`MappedMarkersToVertices`

mappedMarkersToVertices

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L171)

___

### removeMarkersMappedVertices

▸ **removeMarkersMappedVertices**(`lId`): `void`

takes in leaflet id and removes vertices mapped to marker

#### Parameters

| Name | Type |
| :------ | :------ |
| `lId` | `string` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.removeMarkersMappedVertices

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:195](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L195)

___

### removeSelectedLayer

▸ **removeSelectedLayer**(): `void`

removes selected layer

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.removeSelectedLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:246](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L246)

___

### selectedLayerIsConnectMarker

▸ **selectedLayerIsConnectMarker**(): `boolean`

checks if selected layer is connect marker

#### Returns

`boolean`

#### Implementation of

IDrawingLayerToolState.selectedLayerIsConnectMarker

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L136)

___

### serialize

▸ **serialize**(`defaults`): `IDrawingLayerToolConfig`

serializes map state to internal JSON representation

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `IDrawingLayerToolDefaults` |

#### Returns

`IDrawingLayerToolConfig`

#### Implementation of

IDrawingLayerToolState.serialize

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:431](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L431)

___

### serializeToGeoJSON

▸ **serializeToGeoJSON**(): `ExportGeoJSON`

serializes map state to GeoJSON

#### Returns

`ExportGeoJSON`

#### Implementation of

IDrawingLayerToolState.serializeToGeoJSON

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:331](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L331)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | [`ILayerToolDimensions`](../modules.md#ilayertooldimensions) |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.setDimensions

#### Inherited from

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L129)

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

IDrawingLayerToolState.setEnabled

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

IDrawingLayerToolState.setIcon

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

IDrawingLayerToolState.setId

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

IDrawingLayerToolState.setLabel

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

IDrawingLayerToolState.setLayerItems

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

IDrawingLayerToolState.setLayerName

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

### setSelectedLayer

▸ **setSelectedLayer**(`layer`): `void`

sets selected layer and highlights it

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.setSelectedLayer

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L257)

___

### setSelecting

▸ **setSelecting**(`is`): `void`

setter

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | `boolean` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.setSelecting

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:216](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L216)

___

### setVerticesToMarker

▸ **setVerticesToMarker**(`lId`, `val`): `void`

sets vertices to marker

#### Parameters

| Name | Type |
| :------ | :------ |
| `lId` | `string` |
| `val` | `IndexedVertices` |

#### Returns

`void`

#### Implementation of

IDrawingLayerToolState.setVerticesToMarker

#### Defined in

[src/tools/layers/drawing/DrawingLayerToolState.ts:274](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerToolState.ts#L274)
