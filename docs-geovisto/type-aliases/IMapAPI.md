**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapAPI

# Type alias: IMapAPI

> **IMapAPI**: `object`

API for the map.

## Author

Jiri Hynek

## Type declaration

### createMap()

> **createMap**: (`props`) => [`IMap`](../interfaces/IMap.md)

#### Parameters

• **props**: [`IMapProps`](IMapProps.md)

#### Returns

[`IMap`](../interfaces/IMap.md)

### createMapDomainDimension()

> **createMapDomainDimension**: \<`T`\>(`name`, `domainManager`, `dataDomain`) => [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`T`\>

#### Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

#### Parameters

• **name**: `string`

• **domainManager**: [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

• **dataDomain**: `T` \| `undefined`

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`T`\>

### createMapDynamicDomainDimension()

> **createMapDynamicDomainDimension**: \<`T`\>(`name`, `domainManagerLoader`, `domainName`) => [`IMapDynamicDomainDimension`](../interfaces/IMapDynamicDomainDimension.md)\<`T`\>

#### Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

#### Parameters

• **name**: `string`

• **domainManagerLoader**

• **domainName**: `string`

#### Returns

[`IMapDynamicDomainDimension`](../interfaces/IMapDynamicDomainDimension.md)\<`T`\>

### createMapObjectsManager()

> **createMapObjectsManager**: \<`T`\>(`objects`) => [`IMapObjectsManager`](../interfaces/IMapObjectsManager.md)\<`T`\>

#### Type parameters

• **T** *extends* [`IMapObject`](../interfaces/IMapObject.md)

#### Parameters

• **objects**: `T`[] \| `undefined`

#### Returns

[`IMapObjectsManager`](../interfaces/IMapObjectsManager.md)\<`T`\>

### createMapToolsManager()

> **createMapToolsManager**: \<`T`\>(`tools`) => [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Type parameters

• **T** *extends* [`IMapTool`](../interfaces/IMapTool.md)

#### Parameters

• **tools**: `T`[]

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

### createMapTypeDimension()

> **createMapTypeDimension**: \<`T`, `C`\>(`name`, `typeManager`, `value`) => [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`T`, `C`\>

#### Type parameters

• **T**

• **C** *extends* [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> = [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\>

#### Parameters

• **name**: `string`

• **typeManager**: `C`

• **value**: `T` \| `undefined`

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`T`, `C`\>

### getBooleanTypeManager()

> **getBooleanTypeManager**: () => [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>

#### Returns

[`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>

### getGeoDataFactory()

> **getGeoDataFactory**: () => [`IGeoDataFactory`](../interfaces/IGeoDataFactory.md)

#### Returns

[`IGeoDataFactory`](../interfaces/IGeoDataFactory.md)

### getGeoDataManager()

> **getGeoDataManager**: (`geoDataArray`) => [`IGeoDataManager`](IGeoDataManager.md)

#### Parameters

• **geoDataArray**: [`IGeoData`](../interfaces/IGeoData.md)[]

#### Returns

[`IGeoDataManager`](IGeoDataManager.md)

### getIntegerRangeManager()

> **getIntegerRangeManager**: (`min`, `max`) => [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)

#### Parameters

• **min**: `number`

• **max**: `number`

#### Returns

[`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)

### getIntegerTypeManager()

> **getIntegerTypeManager**: () => [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>

#### Returns

[`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>

### getMapAggregationFunctionFactory()

> **getMapAggregationFunctionFactory**: () => [`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md)

#### Returns

[`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md)

### getMapConfigManagerFactory()

> **getMapConfigManagerFactory**: () => [`IMapConfigManagerFactory`](../interfaces/IMapConfigManagerFactory.md)

#### Returns

[`IMapConfigManagerFactory`](../interfaces/IMapConfigManagerFactory.md)

### getMapDataManagerFactory()

> **getMapDataManagerFactory**: () => [`IMapDataManagerFactory`](../interfaces/IMapDataManagerFactory.md)

#### Returns

[`IMapDataManagerFactory`](../interfaces/IMapDataManagerFactory.md)

### getMapDomainManagerFactory()

> **getMapDomainManagerFactory**: () => [`IMapDomainManagerFactory`](../interfaces/IMapDomainManagerFactory.md)

#### Returns

[`IMapDomainManagerFactory`](../interfaces/IMapDomainManagerFactory.md)

### getMapEventFactory()

> **getMapEventFactory**: () => [`IMapEventFactory`](../interfaces/IMapEventFactory.md)

#### Returns

[`IMapEventFactory`](../interfaces/IMapEventFactory.md)

### getStringTypeManager()

> **getStringTypeManager**: () => [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>

#### Returns

[`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>

### getType()

> **getType**: () => `string`

#### Returns

`string`

## Source

[model/types/api/IMapAPI.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/api/IMapAPI.ts#L28)
