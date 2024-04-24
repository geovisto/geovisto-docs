**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeovistoInfoTool

# Variable: GeovistoInfoTool

> `const` **GeovistoInfoTool**: `object`

## Type declaration

### createInfoManager()

> **createInfoManager**: (`infoDataArray`) => [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Parameters

• **infoDataArray**: [`IInfoData`](../interfaces/IInfoData.md)[]

#### Returns

[`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

### createTool()

> **createTool**: (`props`?) => [`IInfoTool`](../interfaces/IInfoTool.md)

#### Parameters

• **props?**: [`IInfoToolProps`](../type-aliases/IInfoToolProps.md)

#### Returns

[`IInfoTool`](../interfaces/IInfoTool.md)

### getInfoDataFactory()

> **getInfoDataFactory**: () => [`IInfoDataFactory`](../interfaces/IInfoDataFactory.md)

#### Returns

[`IInfoDataFactory`](../interfaces/IInfoDataFactory.md)

### getType()

> **getType**: () => `string`

#### Returns

`string`

## Source

[tools/info/GeovistoInfoTool.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/GeovistoInfoTool.ts#L11)
