import { makeAutoObservable } from 'mobx';
import { tempItems } from './data';

export class FilterStore {
  loading = false;

  priceRange: [number, number] = [500000, 30000000];
  squareRange: [number, number] = [10, 150];
  floorsRange: [number, number] = [0, 25];

  districts: string[] = [];
  classes: string[] = [];

  currentItems: any[] = tempItems;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setPriceRange = (value: [number, number]) => {
    this.priceRange = value;
  };

  setSquareRange = (value: [number, number]) => {
    this.squareRange = value;
  };

  setFloorsRange = (value: [number, number]) => {
    this.floorsRange = value;
  };

  setClasses = (value: string[]) => {
    this.classes = value;
  };

  setDistricts = (value: string[]) => {
    this.districts = value;
  };

  setCurrentItems = (value: any[]) => {
    this.currentItems = value;
  };

  resetStore = () => {};
}
