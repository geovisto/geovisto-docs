[geovisto-map](../README.md) / [Exports](../modules.md) / IHeatLayerToolDefaults

# Interface: IHeatLayerToolDefaults

This interface provides functions which return the default state values.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳ **`IHeatLayerToolDefaults`**

## Implemented by

- [`HeatLayerToaolDefaults`](../classes/HeatLayerToaolDefaults.md)

## Table of contents

### Methods

- [getBlurDimension](IHeatLayerToolDefaults.md#getblurdimension)
- [getConfig](IHeatLayerToolDefaults.md#getconfig)
- [getCurrentZoomDimension](IHeatLayerToolDefaults.md#getcurrentzoomdimension)
- [getDimensions](IHeatLayerToolDefaults.md#getdimensions)
- [getFiltersManager](IHeatLayerToolDefaults.md#getfiltersmanager)
- [getGradientDimension](IHeatLayerToolDefaults.md#getgradientdimension)
- [getIcon](IHeatLayerToolDefaults.md#geticon)
- [getId](IHeatLayerToolDefaults.md#getid)
- [getIntensityDimension](IHeatLayerToolDefaults.md#getintensitydimension)
- [getLabel](IHeatLayerToolDefaults.md#getlabel)
- [getLatitudeDimension](IHeatLayerToolDefaults.md#getlatitudedimension)
- [getLayerName](IHeatLayerToolDefaults.md#getlayername)
- [getLongitudeDimension](IHeatLayerToolDefaults.md#getlongitudedimension)
- [getProps](IHeatLayerToolDefaults.md#getprops)
- [getRadiusDimension](IHeatLayerToolDefaults.md#getradiusdimension)
- [getReactiveRadiusDimension](IHeatLayerToolDefaults.md#getreactiveradiusdimension)
- [getReactiveRadiusOperationDimension](IHeatLayerToolDefaults.md#getreactiveradiusoperationdimension)
- [getReactiveRadiusZoomDimension](IHeatLayerToolDefaults.md#getreactiveradiuszoomdimension)
- [getType](IHeatLayerToolDefaults.md#gettype)
- [getZoomDimension](IHeatLayerToolDefaults.md#getzoomdimension)
- [isEnabled](IHeatLayerToolDefaults.md#isenabled)
- [isSingleton](IHeatLayerToolDefaults.md#issingleton)

## Methods

### getBlurDimension

▸ **getBlurDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L36)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getConfig](ILayerToolDefaults.md#getconfig)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L14)

___

### getCurrentZoomDimension

▸ **getCurrentZoomDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L40)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns list of map dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `blur` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `currentZoom` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `gradient` | [`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\> |
| `intensity` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `latitude` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `radius` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `reactiveOp` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\> |
| `reactiveRadius` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `reactiveZoom` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `zoom` | [`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Overrides

[ILayerToolDefaults](ILayerToolDefaults.md).[getDimensions](ILayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L24)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](IMapFilterManager.md)

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L22)

___

### getGradientDimension

▸ **getGradientDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L34)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getIcon](ILayerToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getId](ILayerToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getIntensityDimension

▸ **getIntensityDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L30)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLabel](ILayerToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getLatitudeDimension

▸ **getLatitudeDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L26)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLayerName](ILayerToolDefaults.md#getlayername)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L15)

___

### getLongitudeDimension

▸ **getLongitudeDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L28)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getProps](ILayerToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getRadiusDimension

▸ **getRadiusDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L32)

___

### getReactiveRadiusDimension

▸ **getReactiveRadiusDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L46)

___

### getReactiveRadiusOperationDimension

▸ **getReactiveRadiusOperationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L42)

___

### getReactiveRadiusZoomDimension

▸ **getReactiveRadiusZoomDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L44)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getType](ILayerToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### getZoomDimension

▸ **getZoomDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L38)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isEnabled](ILayerToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isSingleton](ILayerToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
