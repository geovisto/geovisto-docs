**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IHeatLayerToolDefaults

# Interface: IHeatLayerToolDefaults

This interface provides functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

## Methods

### getBlurDimension()

> **getBlurDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L36)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getConfig`](ILayerToolDefaults.md#getconfig)

#### Source

[model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L14)

***

### getCurrentZoomDimension()

> **getCurrentZoomDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L40)

***

### getDimensions()

> **getDimensions**(`map`?): `object`

It returns list of map dimensions.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### blur

> **blur**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### currentZoom

> **currentZoom**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### gradient

> **gradient**: [`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\>

##### intensity

> **intensity**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### latitude

> **latitude**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### radius

> **radius**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### reactiveOp

> **reactiveOp**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

##### reactiveRadius

> **reactiveRadius**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### reactiveZoom

> **reactiveZoom**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### zoom

> **zoom**: [`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\>

#### Overrides

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getDimensions`](ILayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L24)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](IMapFilterManager.md)

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L22)

***

### getGradientDimension()

> **getGradientDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`IGradient`\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L34)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getIcon`](ILayerToolDefaults.md#geticon)

#### Source

[model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L36)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getId`](ILayerToolDefaults.md#getid)

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getIntensityDimension()

> **getIntensityDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L30)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getLabel`](ILayerToolDefaults.md#getlabel)

#### Source

[model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L31)

***

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L26)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getLayerName`](ILayerToolDefaults.md#getlayername)

#### Source

[model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolDefaults.ts#L15)

***

### getLongitudeDimension()

> **getLongitudeDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L28)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getProps`](ILayerToolDefaults.md#getprops)

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getRadiusDimension()

> **getRadiusDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L32)

***

### getReactiveRadiusDimension()

> **getReactiveRadiusDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L46)

***

### getReactiveRadiusOperationDimension()

> **getReactiveRadiusOperationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L42)

***

### getReactiveRadiusZoomDimension()

> **getReactiveRadiusZoomDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L44)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getType`](ILayerToolDefaults.md#gettype)

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### getZoomDimension()

> **getZoomDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`IZoomLevel`\>

#### Source

[tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/types/tool/IHeatLayerToolDefaults.ts#L38)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`isEnabled`](ILayerToolDefaults.md#isenabled)

#### Source

[model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L26)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`isSingleton`](ILayerToolDefaults.md#issingleton)

#### Source

[model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L19)
