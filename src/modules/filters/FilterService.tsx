import { $api, API_URL } from '../../base/http/AxiosInstance';
import { ObjectModel } from '../../screens/object/ObjectData';
import { ApartModel } from './models/ApartModel';

export const filterEndpoints = {
  GET_FLATS: (offset: number) => `${API_URL}filteredflats?offset=${offset}`,
  GET_FLAT: (id: number) => `${API_URL}flats/${id}`,
  GET_REGIONS: () => `${API_URL}getallregions`,
  GET_APARTS: () => `${API_URL}apartmentcomplexes`,
};

export class FilterService {
  async getFlats(
    offset: number,
    square: [number, number],
    floor: [number, number],
    rooms: [number, number],
    price: [number, number],
    districts: string[],
    class_type: string[],
  ): Promise<{ results: ObjectModel[]; count: number }> {
    let filterData = {
      square: this.arrayStringify(square),
      floor: this.arrayStringify(floor),
      rooms: this.arrayStringify(rooms),
      price: this.arrayStringify(price),
    };
    if (!!districts.length) {
      filterData = Object.assign(filterData, { districts: this.arrayStringify(districts) });
    }

    if (!!class_type.length) {
      filterData = Object.assign(filterData, { class_type: this.arrayStringify(class_type) });
    }

    const { data } = await $api.get(filterEndpoints.GET_FLATS(offset), { params: filterData });

    return { results: data.results, count: data.count };
  }

  async getFlat(id: number): Promise<ObjectModel> {
    const { data } = await $api.get(filterEndpoints.GET_FLAT(id));

    return data;
  }

  async getRegions(): Promise<string[]> {
    const { data } = await $api.get(filterEndpoints.GET_REGIONS());

    return data;
  }

  async getAparts(): Promise<ApartModel[]> {
    const { data } = await $api.get(filterEndpoints.GET_APARTS());

    return data.results;
  }

  arrayStringify = (value: any) => {
    if (!value) {
      return null;
    }

    let result = '';

    value.forEach((item: any) => {
      result += item.toString() + '-';
    });

    return result.slice(0, -1);
  };
}

export const filterService = new FilterService();
