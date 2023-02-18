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
    const filterData = { square, floor, rooms, price, districts, class_type };

    const { data } = await $api.get(filterEndpoints.GET_FLATS(offset), { params: filterData });

    return { results: data.results, count: data.count };
  }

  async getFlat(id: number): Promise<ObjectModel> {
    const { data } = await $api.get(filterEndpoints.GET_FLAT(id));

    return data;
  }
}

export const filterService = new FilterService();
