**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMarkerLayerToolDefaults

# Interface: IMarkerLayerToolDefaults

This interface provides functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

## Methods

### getAggregationDimension()

> **getAggregationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

It returns the default aggregation function dimension.

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L52)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default category dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L57)

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

### getDimensions()

> **getDimensions**(`map`?): `object`

It returns the map of layer dimensions.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

##### category

> **category**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### geoData

> **geoData**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### round

> **round**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### units

> **units**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### value

> **value**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Overrides

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getDimensions`](ILayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L32)

***

### getGeoData()

> **getGeoData**(): [`IGeoData`](IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](IGeoData.md)[]

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:82](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L82)

***

### getGeoDataDimension()

> **getGeoDataDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

It returns the default geo data dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L37)

***

### getGeoIdDimension()

> **getGeoIdDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default geo ID dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L42)

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

### getMarker()

> **getMarker**(`latlng`, `options`?): [`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<`any`\>\>

It returns new marker for the given options.

#### Parameters

• **latlng**: `LatLngExpression`

• **options?**: `any`

#### Returns

[`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<`any`\>\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L90)

***

### getMarkerIcon()

> **getMarkerIcon**(`options`): [`IMarkerIcon`](IMarkerIcon.md)\<`any`\>

It returns new icon for the given options.

#### Parameters

• **options**: `any`

#### Returns

[`IMarkerIcon`](IMarkerIcon.md)\<`any`\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L97)

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

### getRoundDimension()

> **getRoundDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L77)

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

### getUnitsDescDimension()

> **getUnitsDescDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L67)

***

### getUnitsDimension()

> **getUnitsDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L62)

***

### getUnitsEnabledDimension()

> **getUnitsEnabledDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:72](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L72)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L47)

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
