[geovisto-map](../README.md) / [Exports](../modules.md) / IInfoData

# Interface: IInfoData

The interface declares functions for management of info data.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IInfoData`**

## Implemented by

- [`MarkDownData`](../classes/MarkDownData.md)

## Table of contents

### Methods

- [getInfoMD](IInfoData.md#getinfomd)
- [getName](IInfoData.md#getname)
- [getOriginalInfoData](IInfoData.md#getoriginalinfodata)

## Methods

### getInfoMD

▸ **getInfoMD**(): `string`

It returns the original representation of data domain.

#### Returns

`string`

#### Defined in

[src/tools/info/model/types/infodata/IInfoData.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/infodata/IInfoData.ts#L23)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

___

### getOriginalInfoData

▸ **getOriginalInfoData**(): `unknown`

It returns the original source of info data.

#### Returns

`unknown`

#### Defined in

[src/tools/info/model/types/infodata/IInfoData.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/infodata/IInfoData.ts#L18)
