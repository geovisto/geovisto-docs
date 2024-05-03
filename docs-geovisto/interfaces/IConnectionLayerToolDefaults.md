**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IConnectionLayerToolDefaults

# Interface: IConnectionLayerToolDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

## Methods

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

### getDimensions()

> **getDimensions**(`map`?): `object`

It returns the map of layer dimensions.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### direction

> **direction**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### from

> **from**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### geoData

> **geoData**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

##### to

> **to**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Overrides

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getDimensions`](ILayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L22)

***

### getDirectionDimension()

> **getDirectionDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L42)

***

### getFromDimension()

> **getFromDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default geo source ID dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L32)

***

### getGeoData()

> **getGeoData**(): [`IGeoData`](IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](IGeoData.md)[]

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L52)

***

### getGeoDataDimension()

> **getGeoDataDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

It returns the default geo data dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L27)

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

### getProjectionZoom()

> **getProjectionZoom**(): `number`

It returns optiomal zoom for D3 projections.

#### Returns

`number`

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L47)

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

### getToDimension()

> **getToDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default geo target ID dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/types/tool/IConnectionLayerToolDefaults.ts#L37)

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
