**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IDotLayerToolDefaults

# Interface: IDotLayerToolDefaults

This interface provides functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

## Methods

### getCategoryColorDimension()

> **getCategoryColorDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L34)

***

### getCategoryColorOperationDimension()

> **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L30)

***

### getCategoryColorValueDimension()

> **getCategoryColorValueDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L32)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L28)

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

It returns list of map dimensions.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### category

> **category**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### categoryColor

> **categoryColor**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### categoryColorOp

> **categoryColorOp**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

##### categoryColorValue

> **categoryColorValue**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### color

> **color**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### latitude

> **latitude**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Overrides

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getDimensions`](ILayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L22)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](IMapFilterManager.md)

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L20)

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

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L24)

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

[tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/types/tool/IDotLayerToolDefaults.ts#L26)

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
