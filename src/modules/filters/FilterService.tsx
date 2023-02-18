import { $api, API_URL } from '../../base/http/AxiosInstance';
import { ObjectModel } from '../../screens/object/ObjectData';

export const filterEndpoints = {
  GET_FLATS: (offset: number) => `${API_URL}filteredflats?offset=${offset}`,
  GET_FLAT: (id: number) => `${API_URL}flats/${id}`,
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
    if (districts) {
      filterData = Object.assign(filterData, this.arrayStringify(districts));
    }

    if (class_type) {
      filterData = Object.assign(filterData, this.arrayStringify(class_type));
    }

    const { data } = await $api.get(filterEndpoints.GET_FLATS(offset), { params: filterData });

    return { results: data.results, count: data.count };
  }

  async getFlat(id: number): Promise<ObjectModel> {
    const { data } = await $api.get(filterEndpoints.GET_FLAT(id));

    return data;
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
