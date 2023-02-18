import { apartment_complex } from '../../../screens/object/ObjectData';

export interface ApartModel {
  id: number | null;
  name: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  class_type: string | null;
  image: string | null;
}
