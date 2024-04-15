[geovisto-map](../README.md) / [Exports](../modules.md) / HeatLayerToolState

# Class: HeatLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`HeatLayerToolState`**

## Implements

- [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)

## Table of contents

### Constructors

- [constructor](HeatLayerToolState.md#constructor)

### Properties

- [latlngs](HeatLayerToolState.md#latlngs)
- [layer](HeatLayerToolState.md#layer)
- [layers](HeatLayerToolState.md#layers)
- [manager](HeatLayerToolState.md#manager)
- [options](HeatLayerToolState.md#options)
- [radiusRules](HeatLayerToolState.md#radiusrules)

### Methods

- [deserialize](HeatLayerToolState.md#deserialize)
- [deserializeDimensions](HeatLayerToolState.md#deserializedimensions)
- [getDimensions](HeatLayerToolState.md#getdimensions)
- [getFiltersManager](HeatLayerToolState.md#getfiltersmanager)
- [getIcon](HeatLayerToolState.md#geticon)
- [getId](HeatLayerToolState.md#getid)
- [getLabel](HeatLayerToolState.md#getlabel)
- [getLatlngsData](HeatLayerToolState.md#getlatlngsdata)
- [getLayer](HeatLayerToolState.md#getlayer)
- [getLayerItems](HeatLayerToolState.md#getlayeritems)
- [getLayerName](HeatLayerToolState.md#getlayername)
- [getLayers](HeatLayerToolState.md#getlayers)
- [getMap](HeatLayerToolState.md#getmap)
- [getMapObject](HeatLayerToolState.md#getmapobject)
- [getOptions](HeatLayerToolState.md#getoptions)
- [getReactiveRadiusRules](HeatLayerToolState.md#getreactiveradiusrules)
- [getType](HeatLayerToolState.md#gettype)
- [initialize](HeatLayerToolState.md#initialize)
- [isEnabled](HeatLayerToolState.md#isenabled)
- [serialize](HeatLayerToolState.md#serialize)
- [setDimensions](HeatLayerToolState.md#setdimensions)
- [setEnabled](HeatLayerToolState.md#setenabled)
- [setFiltersManager](HeatLayerToolState.md#setfiltersmanager)
- [setIcon](HeatLayerToolState.md#seticon)
- [setId](HeatLayerToolState.md#setid)
- [setLabel](HeatLayerToolState.md#setlabel)
- [setLatlngsData](HeatLayerToolState.md#setlatlngsdata)
- [setLayer](HeatLayerToolState.md#setlayer)
- [setLayerItems](HeatLayerToolState.md#setlayeritems)
- [setLayerName](HeatLayerToolState.md#setlayername)
- [setLayers](HeatLayerToolState.md#setlayers)
- [setMap](HeatLayerToolState.md#setmap)
- [setOptions](HeatLayerToolState.md#setoptions)
- [setReactiveRadiusRules](HeatLayerToolState.md#setreactiveradiusrules)

## Constructors

### constructor

• **new HeatLayerToolState**(`tool`): [`HeatLayerToolState`](HeatLayerToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IHeatLayerTool`](../interfaces/IHeatLayerTool.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolState`](../interfaces/IHeatLayerToolState.md)\<[`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops), [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md), [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), \{ `blur?`: `number` ; `gradient?`: `string` ; `intensity?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `radius?`: `number` ; `reactiveOp?`: `string` ; `reactiveRadius?`: `number` ; `reactiveZoom?`: `number` ; `zoom?`: `string`  }, \{ `blur`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `currentZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `gradient`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> ; `intensity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `radius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `reactiveRadius`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `reactiveZoom`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `zoom`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>  }\>, [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\>\> |

#### Returns

[`HeatLayerToolState`](HeatLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L36)

## Properties

### latlngs

• `Private` **latlngs**: (`LatLng` \| `HeatLatLngTuple`)[]

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L32)

___

### layer

• `Private` `Optional` **layer**: `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L29)

___

### layers

• `Private` **layers**: `HeatLayer`[]

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L30)

___

### manager

• `Private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L34)

___

### options

• `Private` **options**: `HeatMapOptions`

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L33)

___

### radiusRules

• `Private` **radiusRules**: `IReactiveRadiusRules`[]

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L31)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[deserialize](../interfaces/IHeatLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L105)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.blur?` | `number` |
| `dimensionsConfig.gradient?` | `string` |
| `dimensionsConfig.intensity?` | `string` |
| `dimensionsConfig.latitude?` | `string` |
| `dimensionsConfig.longitude?` | `string` |
| `dimensionsConfig.radius?` | `number` |
| `dimensionsConfig.reactiveOp?` | `string` |
| `dimensionsConfig.reactiveRadius?` | `number` |
| `dimensionsConfig.reactiveZoom?` | `number` |
| `dimensionsConfig.zoom?` | `string` |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[deserializeDimensions](../interfaces/IHeatLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:132](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L132)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `blur` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `currentZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `gradient` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> |
| `intensity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `radius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `reactiveOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `reactiveRadius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `reactiveZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `zoom` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getDimensions](../interfaces/IHeatLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:229](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L229)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getFiltersManager](../interfaces/IHeatLayerToolState.md#getfiltersmanager)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:219](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L219)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getIcon](../interfaces/IHeatLayerToolState.md#geticon)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getId](../interfaces/IHeatLayerToolState.md#getid)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLabel](../interfaces/IHeatLayerToolState.md#getlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLabel](LayerToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLatlngsData

▸ **getLatlngsData**(): (`LatLng` \| `HeatLatLngTuple`)[]

#### Returns

(`LatLng` \| `HeatLatLngTuple`)[]

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLatlngsData](../interfaces/IHeatLayerToolState.md#getlatlngsdata)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:265](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L265)

___

### getLayer

▸ **getLayer**(): `undefined` \| `LayerGroup`\<`any`\>

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLayer](../interfaces/IHeatLayerToolState.md#getlayer)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:237](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L237)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLayerItems](../interfaces/IHeatLayerToolState.md#getlayeritems)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLayerName](../interfaces/IHeatLayerToolState.md#getlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerName](LayerToolState.md#getlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L88)

___

### getLayers

▸ **getLayers**(): `HeatLayer`[]

#### Returns

`HeatLayer`[]

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getLayers](../interfaces/IHeatLayerToolState.md#getlayers)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:241](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L241)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getMap](../interfaces/IHeatLayerToolState.md#getmap)

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

### getOptions

▸ **getOptions**(): `HeatMapOptions`

#### Returns

`HeatMapOptions`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getOptions](../interfaces/IHeatLayerToolState.md#getoptions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:273](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L273)

___

### getReactiveRadiusRules

▸ **getReactiveRadiusRules**(): `IReactiveRadiusRules`[]

#### Returns

`IReactiveRadiusRules`[]

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getReactiveRadiusRules](../interfaces/IHeatLayerToolState.md#getreactiveradiusrules)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L257)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[getType](../interfaces/IHeatLayerToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md) |
| `props` | [`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[initialize](../interfaces/IHeatLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L44)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[isEnabled](../interfaces/IHeatLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md) |

#### Returns

[`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig)

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[serialize](../interfaces/IHeatLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:185](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L185)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.blur` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.currentZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.gradient` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> |
| `dimensions.intensity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.radius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.reactiveOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.reactiveRadius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.reactiveZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.zoom` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setDimensions](../interfaces/IHeatLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:233](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L233)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setEnabled](../interfaces/IHeatLayerToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setFiltersManager

▸ **setFiltersManager**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapFilterManager`](../interfaces/IMapFilterManager.md) |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setFiltersManager](../interfaces/IHeatLayerToolState.md#setfiltersmanager)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:224](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L224)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setIcon](../interfaces/IHeatLayerToolState.md#seticon)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setId](../interfaces/IHeatLayerToolState.md#setid)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLabel](../interfaces/IHeatLayerToolState.md#setlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLabel](LayerToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setLatlngsData

▸ **setLatlngsData**(`latlngs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlngs` | (`LatLng` \| `HeatLatLngTuple`)[] |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLatlngsData](../interfaces/IHeatLayerToolState.md#setlatlngsdata)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:261](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L261)

___

### setLayer

▸ **setLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerGroup`\<`any`\> |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLayer](../interfaces/IHeatLayerToolState.md#setlayer)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:245](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L245)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLayerItems](../interfaces/IHeatLayerToolState.md#setlayeritems)

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

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLayerName](../interfaces/IHeatLayerToolState.md#setlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerName](LayerToolState.md#setlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L97)

___

### setLayers

▸ **setLayers**(`layers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | `HeatLayer`[] |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setLayers](../interfaces/IHeatLayerToolState.md#setlayers)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:249](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L249)

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

### setOptions

▸ **setOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `HeatMapOptions` |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setOptions](../interfaces/IHeatLayerToolState.md#setoptions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:269](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L269)

___

### setReactiveRadiusRules

▸ **setReactiveRadiusRules**(`rules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rules` | `IReactiveRadiusRules`[] |

#### Returns

`void`

#### Implementation of

[IHeatLayerToolState](../interfaces/IHeatLayerToolState.md).[setReactiveRadiusRules](../interfaces/IHeatLayerToolState.md#setreactiveradiusrules)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts:253](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolState.ts#L253)
