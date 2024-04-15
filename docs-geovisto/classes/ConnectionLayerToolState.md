[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerToolState

# Class: ConnectionLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`ConnectionLayerToolState`**

## Implements

- [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)

## Table of contents

### Constructors

- [constructor](ConnectionLayerToolState.md#constructor)

### Properties

- [bucketData](ConnectionLayerToolState.md#bucketdata)
- [svgLayer](ConnectionLayerToolState.md#svglayer)

### Methods

- [deserialize](ConnectionLayerToolState.md#deserialize)
- [deserializeDimensions](ConnectionLayerToolState.md#deserializedimensions)
- [getBucketData](ConnectionLayerToolState.md#getbucketdata)
- [getDimensions](ConnectionLayerToolState.md#getdimensions)
- [getIcon](ConnectionLayerToolState.md#geticon)
- [getId](ConnectionLayerToolState.md#getid)
- [getLabel](ConnectionLayerToolState.md#getlabel)
- [getLayerItems](ConnectionLayerToolState.md#getlayeritems)
- [getLayerName](ConnectionLayerToolState.md#getlayername)
- [getMap](ConnectionLayerToolState.md#getmap)
- [getMapObject](ConnectionLayerToolState.md#getmapobject)
- [getSVGLayer](ConnectionLayerToolState.md#getsvglayer)
- [getType](ConnectionLayerToolState.md#gettype)
- [initialize](ConnectionLayerToolState.md#initialize)
- [isEnabled](ConnectionLayerToolState.md#isenabled)
- [serialize](ConnectionLayerToolState.md#serialize)
- [setBucketData](ConnectionLayerToolState.md#setbucketdata)
- [setDimensions](ConnectionLayerToolState.md#setdimensions)
- [setEnabled](ConnectionLayerToolState.md#setenabled)
- [setIcon](ConnectionLayerToolState.md#seticon)
- [setId](ConnectionLayerToolState.md#setid)
- [setLabel](ConnectionLayerToolState.md#setlabel)
- [setLayerItems](ConnectionLayerToolState.md#setlayeritems)
- [setLayerName](ConnectionLayerToolState.md#setlayername)
- [setMap](ConnectionLayerToolState.md#setmap)
- [setSVGLayer](ConnectionLayerToolState.md#setsvglayer)

## Constructors

### constructor

• **new ConnectionLayerToolState**(`tool`): [`ConnectionLayerToolState`](ConnectionLayerToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\> |

#### Returns

[`ConnectionLayerToolState`](ConnectionLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L28)

## Properties

### bucketData

• `Private` **bucketData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `connections` | `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |
| `nodes` | `Set`\<`string`\> |

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L23)

___

### svgLayer

• `Private` `Optional` **svgLayer**: `SVG`

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L22)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[deserialize](../interfaces/IConnectionLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L70)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.direction?` | `boolean` |
| `dimensionsConfig.from?` | `string` |
| `dimensionsConfig.geoData?` | `string` |
| `dimensionsConfig.to?` | `string` |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[deserializeDimensions](../interfaces/IConnectionLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L80)

___

### getBucketData

▸ **getBucketData**(): `Object`

It returns work data for the force layout algorithm.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connections` | `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |
| `nodes` | `Set`\<`string`\> |

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getBucketData](../interfaces/IConnectionLayerToolState.md#getbucketdata)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L143)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the map layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `direction` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `from` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `to` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getDimensions](../interfaces/IConnectionLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L111)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getIcon](../interfaces/IConnectionLayerToolState.md#geticon)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getId](../interfaces/IConnectionLayerToolState.md#getid)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getLabel](../interfaces/IConnectionLayerToolState.md#getlabel)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getLayerItems](../interfaces/IConnectionLayerToolState.md#getlayeritems)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getLayerName](../interfaces/IConnectionLayerToolState.md#getlayername)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getMap](../interfaces/IConnectionLayerToolState.md#getmap)

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

### getSVGLayer

▸ **getSVGLayer**(): `undefined` \| `SVG`

It returns a Leaflet SVG layer.

#### Returns

`undefined` \| `SVG`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getSVGLayer](../interfaces/IConnectionLayerToolState.md#getsvglayer)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L127)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[getType](../interfaces/IConnectionLayerToolState.md#gettype)

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
| `defaults` | [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md) |
| `props` | [`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[initialize](../interfaces/IConnectionLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L39)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[isEnabled](../interfaces/IConnectionLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md) |

#### Returns

[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[serialize](../interfaces/IConnectionLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L93)

___

### setBucketData

▸ **setBucketData**(`bucketData`): `void`

It sets the work data for the force layout algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketData` | `Object` |
| `bucketData.connections` | `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |
| `bucketData.nodes` | `Set`\<`string`\> |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setBucketData](../interfaces/IConnectionLayerToolState.md#setbucketdata)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:152](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L152)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.direction` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.from` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.to` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setDimensions](../interfaces/IConnectionLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L120)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setEnabled](../interfaces/IConnectionLayerToolState.md#setenabled)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setIcon](../interfaces/IConnectionLayerToolState.md#seticon)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setId](../interfaces/IConnectionLayerToolState.md#setid)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setLabel](../interfaces/IConnectionLayerToolState.md#setlabel)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setLayerItems](../interfaces/IConnectionLayerToolState.md#setlayeritems)

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

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setLayerName](../interfaces/IConnectionLayerToolState.md#setlayername)

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

### setSVGLayer

▸ **setSVGLayer**(`svgLayer`): `void`

It sets a Leaflet SVG layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `svgLayer` | `SVG` |

#### Returns

`void`

#### Implementation of

[IConnectionLayerToolState](../interfaces/IConnectionLayerToolState.md).[setSVGLayer](../interfaces/IConnectionLayerToolState.md#setsvglayer)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L136)
