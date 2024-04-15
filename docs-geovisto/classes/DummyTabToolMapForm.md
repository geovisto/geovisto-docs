[geovisto-map](../README.md) / [Exports](../modules.md) / DummyTabToolMapForm

# Class: DummyTabToolMapForm

This class provides the settings sidebar tab.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IDummyTabTool`](../modules.md#idummytabtool)\>

  ↳ **`DummyTabToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](DummyTabToolMapForm.md#constructor)

### Properties

- [htmlContent](DummyTabToolMapForm.md#htmlcontent)

### Methods

- [getContent](DummyTabToolMapForm.md#getcontent)
- [getMapObject](DummyTabToolMapForm.md#getmapobject)

## Constructors

### constructor

• **new DummyTabToolMapForm**(`tool`): [`DummyTabToolMapForm`](DummyTabToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IDummyTabTool`](../modules.md#idummytabtool) |

#### Returns

[`DummyTabToolMapForm`](DummyTabToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L23)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L16)

## Methods

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns generic layer tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L30)

___

### getMapObject

▸ **getMapObject**(): [`IDummyTabTool`](../modules.md#idummytabtool)

#### Returns

[`IDummyTabTool`](../modules.md#idummytabtool)

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
