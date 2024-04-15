[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerToolDefaults

# Class: ConnectionLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`ConnectionLayerToolDefaults`**

## Implements

- [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](ConnectionLayerToolDefaults.md#constructor)

### Properties

- [idString](ConnectionLayerToolDefaults.md#idstring)
- [TYPE](ConnectionLayerToolDefaults.md#type)
- [id](ConnectionLayerToolDefaults.md#id)

### Methods

- [generateId](ConnectionLayerToolDefaults.md#generateid)
- [getConfig](ConnectionLayerToolDefaults.md#getconfig)
- [getDataManager](ConnectionLayerToolDefaults.md#getdatamanager)
- [getDimensions](ConnectionLayerToolDefaults.md#getdimensions)
- [getDirectionDimension](ConnectionLayerToolDefaults.md#getdirectiondimension)
- [getFromDimension](ConnectionLayerToolDefaults.md#getfromdimension)
- [getGeoData](ConnectionLayerToolDefaults.md#getgeodata)
- [getGeoDataDimension](ConnectionLayerToolDefaults.md#getgeodatadimension)
- [getGeoDataManager](ConnectionLayerToolDefaults.md#getgeodatamanager)
- [getIcon](ConnectionLayerToolDefaults.md#geticon)
- [getId](ConnectionLayerToolDefaults.md#getid)
- [getLabel](ConnectionLayerToolDefaults.md#getlabel)
- [getLayerName](ConnectionLayerToolDefaults.md#getlayername)
- [getProjectionZoom](ConnectionLayerToolDefaults.md#getprojectionzoom)
- [getProps](ConnectionLayerToolDefaults.md#getprops)
- [getToDimension](ConnectionLayerToolDefaults.md#gettodimension)
- [getType](ConnectionLayerToolDefaults.md#gettype)
- [isEnabled](ConnectionLayerToolDefaults.md#isenabled)
- [isSingleton](ConnectionLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new ConnectionLayerToolDefaults**(): [`ConnectionLayerToolDefaults`](ConnectionLayerToolDefaults.md)

#### Returns

[`ConnectionLayerToolDefaults`](ConnectionLayerToolDefaults.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[constructor](LayerToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[idString](LayerToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-connection"`

Static tool type constant.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L26)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[id](LayerToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[generateId](LayerToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getConfig](../interfaces/IConnectionLayerToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getDataManager](LayerToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns the map of layer dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `direction` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `from` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `to` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getDimensions](../interfaces/IConnectionLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L59)

___

### getDirectionDimension

▸ **getDirectionDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getDirectionDimension](../interfaces/IConnectionLayerToolDefaults.md#getdirectiondimension)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L104)

___

### getFromDimension

▸ **getFromDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the source geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getFromDimension](../interfaces/IConnectionLayerToolDefaults.md#getfromdimension)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L82)

___

### getGeoData

▸ **getGeoData**(): [`IGeoData`](../interfaces/IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getGeoData](../interfaces/IConnectionLayerToolDefaults.md#getgeodata)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L122)

___

### getGeoDataDimension

▸ **getGeoDataDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

It returns the default geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getGeoDataDimension](../interfaces/IConnectionLayerToolDefaults.md#getgeodatadimension)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L71)

___

### getGeoDataManager

▸ **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns default geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getGeoDataManager](LayerToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getIcon](../interfaces/IConnectionLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L52)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getId](../interfaces/IConnectionLayerToolDefaults.md#getid)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getId](LayerToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getLabel](../interfaces/IConnectionLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L45)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getLayerName](../interfaces/IConnectionLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L38)

___

### getProjectionZoom

▸ **getProjectionZoom**(): `number`

It returns optiomal zoom for D3 projections.

#### Returns

`number`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getProjectionZoom](../interfaces/IConnectionLayerToolDefaults.md#getprojectionzoom)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L115)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getProps](../interfaces/IConnectionLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getToDimension

▸ **getToDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the target geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getToDimension](../interfaces/IConnectionLayerToolDefaults.md#gettodimension)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L93)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[getType](../interfaces/IConnectionLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolDefaults.ts#L31)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[isEnabled](../interfaces/IConnectionLayerToolDefaults.md#isenabled)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isEnabled](LayerToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[IConnectionLayerToolDefaults](../interfaces/IConnectionLayerToolDefaults.md).[isSingleton](../interfaces/IConnectionLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
