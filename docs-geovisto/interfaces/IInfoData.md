**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IInfoData

# Interface: IInfoData

The interface declares functions for management of info data.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`IMapDomain`](IMapDomain.md)

## Methods

### getInfoMD()

> **getInfoMD**(): `string`

It returns the original representation of data domain.

#### Returns

`string`

#### Source

[tools/info/model/types/infodata/IInfoData.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/types/infodata/IInfoData.ts#L23)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getOriginalInfoData()

> **getOriginalInfoData**(): `unknown`

It returns the original source of info data.

#### Returns

`unknown`

#### Source

[tools/info/model/types/infodata/IInfoData.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/types/infodata/IInfoData.ts#L18)
