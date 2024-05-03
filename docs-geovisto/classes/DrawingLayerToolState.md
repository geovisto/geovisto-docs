**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DrawingLayerToolState

# Class: DrawingLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Andrej Tlcina

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- `IDrawingLayerToolState`

## Constructors

### new DrawingLayerToolState()

> **new DrawingLayerToolState**(`tool`): [`DrawingLayerToolState`](DrawingLayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Returns

[`DrawingLayerToolState`](DrawingLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L55)

## Properties

### createdVertices

> **createdVertices**: `any`[]

#### Implementation of

`IDrawingLayerToolState.createdVertices`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L49)

***

### extraSelected

> **extraSelected**: `any`[]

#### Implementation of

`IDrawingLayerToolState.extraSelected`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L51)

***

### featureGroup

> **featureGroup**: `any`

#### Implementation of

`IDrawingLayerToolState.featureGroup`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L45)

***

### mappedMarkersToVertices

> **mappedMarkersToVertices**: `MappedMarkersToVertices`

#### Implementation of

`IDrawingLayerToolState.mappedMarkersToVertices`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L50)

***

### selectedLayer

> **selectedLayer**: `any`

#### Implementation of

`IDrawingLayerToolState.selectedLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L47)

***

### selecting

> **selecting**: `boolean`

#### Implementation of

`IDrawingLayerToolState.selecting`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L46)

***

### tool

> **tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

`IDrawingLayerToolState.tool`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L48)

## Methods

### addExtraSelected()

> **addExtraSelected**(`layer`): `void`

add passed layer to array and highlights it

#### Parameters

• **layer**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.addExtraSelected`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L109)

***

### addLayer()

> **addLayer**(`layer`): `any`

add layer to featureGroup and it is displayed

#### Parameters

• **layer**: `any`

#### Returns

`any`

#### Implementation of

`IDrawingLayerToolState.addLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:230](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L230)

***

### addMappedVertices()

> `private` **addMappedVertices**(`layer`, `result`): `void`

saving topology information to marker

#### Parameters

• **layer**: `any`

• **result**: `Source`

#### Returns

`void`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:281](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L281)

***

### areSameType()

> `private` **areSameType**(`layer`): `boolean`

checks if selected and passed object are of the same type

#### Parameters

• **layer**: `any`

#### Returns

`boolean`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L96)

***

### clearExtraSelected()

> **clearExtraSelected**(): `void`

clears extraSelected array and sets normal styles to each geo. object

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.clearExtraSelected`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L76)

***

### clearSelectedLayer()

> **clearSelectedLayer**(): `void`

removes selected layer

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.clearSelectedLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:267](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L267)

***

### deserialize()

> **deserialize**(`config`): `void`

deserializes internal JSON representation to map state

#### Parameters

• **config**: `IDrawingLayerToolConfig`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.deserialize`

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:511](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L511)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**: [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md)

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.deserializeDimensions`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[model/internal/layer/LayerToolState.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L67)

***

### deserializeGeoJSON()

> **deserializeGeoJSON**(`geojson`): `void`

deserializes GeoJSON to map state

#### Parameters

• **geojson**: `ExportGeoJSON`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.deserializeGeoJSON`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:366](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L366)

***

### getDimensions()

> **getDimensions**(): [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

It returns the map layer dimensions property of the tool state.

#### Returns

[`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Implementation of

`IDrawingLayerToolState.getDimensions`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[model/internal/layer/LayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L120)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

`IDrawingLayerToolState.getIcon`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getIcon`](LayerToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

`IDrawingLayerToolState.getId`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getId`](LayerToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

`IDrawingLayerToolState.getLabel`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLabel`](LayerToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

`IDrawingLayerToolState.getLayerItems`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerItems`](LayerToolState.md#getlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L104)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

`IDrawingLayerToolState.getLayerName`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerName`](LayerToolState.md#getlayername)

#### Source

[model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L88)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

`IDrawingLayerToolState.getMap`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMap`](LayerToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMapObject`](LayerToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getSelecting()

> **getSelecting**(): `boolean`

getter

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerToolState.getSelecting`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:223](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L223)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

`IDrawingLayerToolState.getType`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initMappedMarkersToVertices()

> `private` **initMappedMarkersToVertices**(`lType`, `result`, `source`): `void`

called so when we import topology dragging of vertices works

#### Parameters

• **lType**: `""` \| `LayerType`

• **result**: `any`

• **source**: `Source`

#### Returns

`void`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:295](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L295)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

• **props**: [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.initialize`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[model/internal/layer/LayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L35)

***

### isConnectMarker()

> **isConnectMarker**(`marker`): `boolean`

checks if markers is connect marker

#### Parameters

• **marker**: `any`

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerToolState.isConnectMarker`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L126)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerToolState.isEnabled`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### isInExtraSelected()

> `private` **isInExtraSelected**(`layerId`): `number`

checks if layer is in extraSelected objects

#### Parameters

• **layerId**: `string`

#### Returns

`number`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L86)

***

### pushVertice()

> **pushVertice**(`vertice`): `void`

Pushes vertice into created ones

#### Parameters

• **vertice**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.pushVertice`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L143)

***

### removeGivenVertice()

> **removeGivenVertice**(`lId`): `void`

removes vertice based on given leaflet id

#### Parameters

• **lId**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.removeGivenVertice`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:152](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L152)

***

### removeLayer()

> **removeLayer**(`layer`): `void`

removes layer from featureGroup and from map

#### Parameters

• **layer**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.removeLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:239](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L239)

***

### removeMappedVertices()

> `private` **removeMappedVertices**(`idsOfVerticesToRemove`): `MappedMarkersToVertices`

removes vertice which ids were passed

#### Parameters

• **idsOfVerticesToRemove**: `Set`\<`string`\>

#### Returns

`MappedMarkersToVertices`

mappedMarkersToVertices

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L171)

***

### removeMarkersMappedVertices()

> **removeMarkersMappedVertices**(`lId`): `void`

takes in leaflet id and removes vertices mapped to marker

#### Parameters

• **lId**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.removeMarkersMappedVertices`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:195](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L195)

***

### removeSelectedLayer()

> **removeSelectedLayer**(): `void`

removes selected layer

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.removeSelectedLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L246)

***

### selectedLayerIsConnectMarker()

> **selectedLayerIsConnectMarker**(): `boolean`

checks if selected layer is connect marker

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerToolState.selectedLayerIsConnectMarker`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L136)

***

### serialize()

> **serialize**(`defaults`): `IDrawingLayerToolConfig`

serializes map state to internal JSON representation

#### Parameters

• **defaults**: `undefined` \| `IDrawingLayerToolDefaults`

#### Returns

`IDrawingLayerToolConfig`

#### Implementation of

`IDrawingLayerToolState.serialize`

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:431](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L431)

***

### serializeToGeoJSON()

> **serializeToGeoJSON**(): `ExportGeoJSON`

serializes map state to GeoJSON

#### Returns

`ExportGeoJSON`

#### Implementation of

`IDrawingLayerToolState.serializeToGeoJSON`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:331](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L331)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setDimensions`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[model/internal/layer/LayerToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L129)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setEnabled`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setIcon`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setIcon`](LayerToolState.md#seticon)

#### Source

[model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L129)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setId`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setId`](LayerToolState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setLabel`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLabel`](LayerToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setLayerItems`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerItems`](LayerToolState.md#setlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L113)

***

### setLayerName()

> **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

• **layerName**: `string`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setLayerName`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerName`](LayerToolState.md#setlayername)

#### Source

[model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L97)

***

### setMap()

> `protected` **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`void`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setMap`](LayerToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)

***

### setSelectedLayer()

> **setSelectedLayer**(`layer`): `void`

sets selected layer and highlights it

#### Parameters

• **layer**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setSelectedLayer`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L257)

***

### setSelecting()

> **setSelecting**(`is`): `void`

setter

#### Parameters

• **is**: `boolean`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setSelecting`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:216](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L216)

***

### setVerticesToMarker()

> **setVerticesToMarker**(`lId`, `val`): `void`

sets vertices to marker

#### Parameters

• **lId**: `string`

• **val**: `IndexedVertices`

#### Returns

`void`

#### Implementation of

`IDrawingLayerToolState.setVerticesToMarker`

#### Source

[tools/layers/drawing/DrawingLayerToolState.ts:274](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerToolState.ts#L274)
