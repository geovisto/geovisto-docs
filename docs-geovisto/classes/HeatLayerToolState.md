**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HeatLayerToolState

# Class: HeatLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Vladimir Korencik

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)

## Constructors

### new HeatLayerToolState()

> **new HeatLayerToolState**(`tool`): [`HeatLayerToolState`](HeatLayerToolState.md)

#### Parameters

• **tool**: [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), `object`, `object`\>, [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>\>

#### Returns

[`HeatLayerToolState`](HeatLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L36)

## Properties

### latlngs

> `private` **latlngs**: `any`[]

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L32)

***

### layer?

> `private` `optional` **layer**: `any`

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L29)

***

### layers

> `private` **layers**: `HeatLayer`[]

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L30)

***

### manager

> `private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L34)

***

### options

> `private` **options**: `HeatMapOptions`

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L33)

***

### radiusRules

> `private` **radiusRules**: `IReactiveRadiusRules`[]

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L31)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`deserialize`](../interfaces/IHeatLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L105)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.blur?**: `number`

• **dimensionsConfig.gradient?**: `string`

• **dimensionsConfig.intensity?**: `string`

• **dimensionsConfig.latitude?**: `string`

• **dimensionsConfig.longitude?**: `string`

• **dimensionsConfig.radius?**: `number`

• **dimensionsConfig.reactiveOp?**: `string`

• **dimensionsConfig.reactiveRadius?**: `number`

• **dimensionsConfig.reactiveZoom?**: `number`

• **dimensionsConfig.zoom?**: `string`

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`deserializeDimensions`](../interfaces/IHeatLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:132](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L132)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the layer dimensions property of the tool state.

#### Returns

`object`

##### blur

> **blur**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### currentZoom

> **currentZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### gradient

> **gradient**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

##### intensity

> **intensity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### latitude

> **latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### radius

> **radius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### reactiveOp

> **reactiveOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

##### reactiveRadius

> **reactiveRadius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### reactiveZoom

> **reactiveZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### zoom

> **zoom**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getDimensions`](../interfaces/IHeatLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:229](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L229)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getFiltersManager`](../interfaces/IHeatLayerToolState.md#getfiltersmanager)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:219](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L219)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getIcon`](../interfaces/IHeatLayerToolState.md#geticon)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getId`](../interfaces/IHeatLayerToolState.md#getid)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLabel`](../interfaces/IHeatLayerToolState.md#getlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLabel`](LayerToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLatlngsData()

> **getLatlngsData**(): `any`[]

#### Returns

`any`[]

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLatlngsData`](../interfaces/IHeatLayerToolState.md#getlatlngsdata)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:265](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L265)

***

### getLayer()

> **getLayer**(): `any`

#### Returns

`any`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLayer`](../interfaces/IHeatLayerToolState.md#getlayer)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:237](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L237)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLayerItems`](../interfaces/IHeatLayerToolState.md#getlayeritems)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLayerName`](../interfaces/IHeatLayerToolState.md#getlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerName`](LayerToolState.md#getlayername)

#### Source

[model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L88)

***

### getLayers()

> **getLayers**(): `HeatLayer`[]

#### Returns

`HeatLayer`[]

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getLayers`](../interfaces/IHeatLayerToolState.md#getlayers)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:241](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L241)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getMap`](../interfaces/IHeatLayerToolState.md#getmap)

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

### getOptions()

> **getOptions**(): `HeatMapOptions`

#### Returns

`HeatMapOptions`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getOptions`](../interfaces/IHeatLayerToolState.md#getoptions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:273](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L273)

***

### getReactiveRadiusRules()

> **getReactiveRadiusRules**(): `IReactiveRadiusRules`[]

#### Returns

`IReactiveRadiusRules`[]

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getReactiveRadiusRules`](../interfaces/IHeatLayerToolState.md#getreactiveradiusrules)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L257)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`getType`](../interfaces/IHeatLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

• **props**: [`IHeatLayerToolProps`](../type-aliases/IHeatLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`initialize`](../interfaces/IHeatLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L44)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`isEnabled`](../interfaces/IHeatLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

#### Returns

[`IHeatLayerToolConfig`](../type-aliases/IHeatLayerToolConfig.md)

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`serialize`](../interfaces/IHeatLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:185](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L185)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.blur**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.currentZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.gradient**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

• **dimensions.intensity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.radius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.reactiveOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.reactiveRadius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.reactiveZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.zoom**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setDimensions`](../interfaces/IHeatLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:233](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L233)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setEnabled`](../interfaces/IHeatLayerToolState.md#setenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setFiltersManager()

> **setFiltersManager**(`manager`): `void`

#### Parameters

• **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setFiltersManager`](../interfaces/IHeatLayerToolState.md#setfiltersmanager)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:224](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L224)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setIcon`](../interfaces/IHeatLayerToolState.md#seticon)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setId`](../interfaces/IHeatLayerToolState.md#setid)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLabel`](../interfaces/IHeatLayerToolState.md#setlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLabel`](LayerToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setLatlngsData()

> **setLatlngsData**(`latlngs`): `void`

#### Parameters

• **latlngs**: `any`[]

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLatlngsData`](../interfaces/IHeatLayerToolState.md#setlatlngsdata)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:261](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L261)

***

### setLayer()

> **setLayer**(`layer`): `void`

#### Parameters

• **layer**: `LayerGroup`

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLayer`](../interfaces/IHeatLayerToolState.md#setlayer)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:245](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L245)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLayerItems`](../interfaces/IHeatLayerToolState.md#setlayeritems)

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

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLayerName`](../interfaces/IHeatLayerToolState.md#setlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerName`](LayerToolState.md#setlayername)

#### Source

[model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L97)

***

### setLayers()

> **setLayers**(`layers`): `void`

#### Parameters

• **layers**: `HeatLayer`[]

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setLayers`](../interfaces/IHeatLayerToolState.md#setlayers)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:249](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L249)

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

### setOptions()

> **setOptions**(`options`): `void`

#### Parameters

• **options**: `HeatMapOptions`

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setOptions`](../interfaces/IHeatLayerToolState.md#setoptions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:269](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L269)

***

### setReactiveRadiusRules()

> **setReactiveRadiusRules**(`rules`): `void`

#### Parameters

• **rules**: `IReactiveRadiusRules`[]

#### Returns

`void`

#### Implementation of

[`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md).[`setReactiveRadiusRules`](../interfaces/IHeatLayerToolState.md#setreactiveradiusrules)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:253](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L253)
