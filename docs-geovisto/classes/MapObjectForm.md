[geovisto-map](../README.md) / [Exports](../modules.md) / MapObjectForm

# Class: MapObjectForm\<T\>

The interface declares functions for management of form inputs.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- **`MapObjectForm`**

  ↳ [`MapLayerToolForm`](MapLayerToolForm.md)

  ↳ [`FiltersToolMapForm`](FiltersToolMapForm.md)

  ↳ [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

  ↳ [`HieararchyToolMapForm`](HieararchyToolMapForm.md)

  ↳ [`InfoToolMapForm`](InfoToolMapForm.md)

  ↳ [`SelectionToolMapForm`](SelectionToolMapForm.md)

  ↳ [`DummyTabToolMapForm`](DummyTabToolMapForm.md)

  ↳ [`ThemesToolMapForm`](ThemesToolMapForm.md)

## Table of contents

### Constructors

- [constructor](MapObjectForm.md#constructor)

### Properties

- [mapObject](MapObjectForm.md#mapobject)

### Methods

- [getContent](MapObjectForm.md#getcontent)
- [getMapObject](MapObjectForm.md#getmapobject)

## Constructors

### constructor

• **new MapObjectForm**\<`T`\>(`mapObject`): [`MapObjectForm`](MapObjectForm.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapObject` | `T` |

#### Returns

[`MapObjectForm`](MapObjectForm.md)\<`T`\>

#### Defined in

[src/model/internal/form/MapObjectForm.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L12)

## Properties

### mapObject

• `Private` **mapObject**: `T`

#### Defined in

[src/model/internal/form/MapObjectForm.ts:10](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L10)

## Methods

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Defined in

[src/model/internal/form/MapObjectForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L23)

___

### getMapObject

▸ **getMapObject**(): `T`

#### Returns

`T`

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
