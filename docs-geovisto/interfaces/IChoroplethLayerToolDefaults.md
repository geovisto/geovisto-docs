**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IChoroplethLayerToolDefaults

# Interface: IChoroplethLayerToolDefaults

This interface declares functions which return the default state values.

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

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L46)

***

### getColorDimension()

> **getColorDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the color dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L56)

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

### getCustomColorDimension()

> **getCustomColorDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L51)

***

### getCustomMinMaxDimension()

> **getCustomMinMaxDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the custom min-max dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L71)

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

##### color

> **color**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### customColor

> **customColor**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### customMinMax

> **customMinMax**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### geoData

> **geoData**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### maxValue

> **maxValue**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### minValue

> **minValue**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### range

> **range**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\>

##### round

> **round**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### scaling

> **scaling**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\>

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

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L26)

***

### getGeoData()

> **getGeoData**(): [`IGeoData`](IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](IGeoData.md)[]

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L106)

***

### getGeoDataDimension()

> **getGeoDataDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

It returns the default geo data dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L31)

***

### getGeoIdDimension()

> **getGeoIdDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default geo ID dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L36)

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

### getMaxValueDimension()

> **getMaxValueDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L81)

***

### getMinValueDimension()

> **getMinValueDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the min value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L76)

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

### getRangeDimension()

> **getRangeDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\>

It returns the range dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L61)

***

### getRoundDimension()

> **getRoundDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:101](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L101)

***

### getScalingDimension()

> **getScalingDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\>

It returns the scaling dimension.

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L66)

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

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L91)

***

### getUnitsDimension()

> **getUnitsDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L86)

***

### getUnitsEnabledDimension()

> **getUnitsEnabledDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L96)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L41)

***

### getZIndex()

> **getZIndex**(): `number`

It returns preferred z index for the choropoleth layer

#### Returns

`number`

#### Source

[tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L111)

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
