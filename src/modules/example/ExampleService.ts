import { $api, API_URL } from '../../base/http/AxiosInstance';
import { BeerModel } from './types/ExampleTypes';

export const exampleEndpoints = {
  GET_BEER: (id: string) => `${API_URL}/beers/${id}`,
};

export class ExampleService {
  async getBeer(id: string): Promise<BeerModel> {
    const { data } = await $api.get(exampleEndpoints.GET_BEER(id));

    return data?.[0];
  }
}

export const exampleService = new ExampleService();
