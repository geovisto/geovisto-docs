**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeovistoFiltersTool

# Variable: GeovistoFiltersTool

> `const` **GeovistoFiltersTool**: `object`

## Type declaration

### createFilterOperationEq()

> **createFilterOperationEq**: () => [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

### createFilterOperationNeq()

> **createFilterOperationNeq**: () => [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

### createFilterOperationReg()

> **createFilterOperationReg**: () => [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

### createFiltersManager()

> **createFiltersManager**: (`filterOperations`) => [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Parameters

• **filterOperations**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)[]

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

### createTool()

> **createTool**: (`props`?) => [`IFiltersTool`](../interfaces/IFiltersTool.md)

#### Parameters

• **props?**: [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

#### Returns

[`IFiltersTool`](../interfaces/IFiltersTool.md)

### getType()

> **getType**: () => `string`

#### Returns

`string`

## Source

[tools/filters/GeovistoFiltersTool.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/GeovistoFiltersTool.ts#L17)
