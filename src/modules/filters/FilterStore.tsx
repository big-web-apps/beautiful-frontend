import { makeAutoObservable } from 'mobx';
import { FilterService } from './FilterService';
import { ObjectModel } from '../../screens/object/ObjectData';
import { ApartModel } from './models/ApartModel';

export class FilterStore {
  static LIMIT = 12;
  loading = false;
  loadingMore = false;
  regionsLoading = false;

  priceRange: [number, number] = [500000, 30000000];
  squareRange: [number, number] = [10, 150];
  floorsRange: [number, number] = [0, 25];
  roomsRange: [number, number] = [1, 5];

  districts: string[] = [];
  classes: string[] = ['Комфорт', 'Элит', 'Стандарт', 'Бизнес'];
  chooseDistricts: string[] = [];
  chooseClasses: string[] = [];

  apartments: ApartModel[] = [];

  currentItems: ObjectModel[] = [];
  currentItem: ObjectModel | null = null;
  currentItemsOffset: number = 0;
  currentItemsCount: number = 0;
  popularItems: ObjectModel[] = [];
  analyticItems: ObjectModel[] = [];
  private filterService: FilterService;

  constructor() {
    makeAutoObservable(this);
    this.filterService = new FilterService();
  }

  get haveNewItems() {
    return !!this.currentItems.length && this.currentItemsCount > this.currentItemsOffset - FilterStore.LIMIT;
  }

  getFlats = () => {
    if (this.currentItemsOffset) {
      this.setLoadingMore(true);
    } else {
      this.setLoading(true);
    }

    this.filterService
      .getFlats(
        this.currentItemsOffset,
        this.squareRange,
        this.floorsRange,
        this.roomsRange,
        this.priceRange,
        this.chooseDistricts,
        this.chooseClasses,
      )
      .then(({ count, results }) => {
        if (this.currentItemsOffset) {
          this.setCurrentItems([...this.currentItems, ...results]);
        } else {
          this.setCurrentItems(results);
        }
        this.setCurrentItemsOffset(this.currentItemsOffset + FilterStore.LIMIT);
        this.setCurrentItemsCount(count);
      })
      .finally(() => {
        this.setLoading(false);
        this.setLoadingMore(false);
      });
  };

  getPopular = () => {
    this.setLoading(true);

    this.filterService
      .getAllFlats(410)
      .then(item => {
        this.setPopularItems(item);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  getAnalytic = () => {
    this.setLoading(true);

    this.filterService
      .getAllFlats(1500)
      .then(item => {
        this.setAnalyticItems(item);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  getFlat = (id: number) => {
    this.setLoading(true);

    this.filterService
      .getFlat(id)
      .then(item => {
        this.setCurrentItem(item);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  getRegions = () => {
    this.setRegionsLoading(true);

    this.filterService
      .getRegions()
      .then(item => {
        this.setDistricts(item);
      })
      .finally(() => {
        this.setRegionsLoading(false);
      });
  };

  getAparts = () => {
    this.setLoading(true);

    this.filterService
      .getAparts()
      .then(item => {
        this.setApartments(item);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setLoadingMore = (value: boolean) => {
    this.loadingMore = value;
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

  setRoomsRange = (value: [number, number]) => {
    this.roomsRange = value;
  };

  setClasses = (value: string[]) => {
    this.classes = value;
  };

  setDistricts = (value: string[]) => {
    this.districts = value;
  };

  setChooseDistricts = (value: string[]) => {
    this.chooseDistricts = value;
  };

  setChooseClasses = (value: string[]) => {
    this.chooseClasses = value;
  };

  setCurrentItems = (value: ObjectModel[]) => {
    this.currentItems = value;
  };

  setCurrentItem = (value: ObjectModel | null) => {
    this.currentItem = value;
  };

  setPopularItems = (value: ObjectModel[]) => {
    this.popularItems = value;
  };

  setAnalyticItems = (value: ObjectModel[]) => {
    this.analyticItems = value;
  };

  setCurrentItemsOffset = (value: number) => {
    this.currentItemsOffset = value;
  };

  setCurrentItemsCount = (value: number) => {
    this.currentItemsCount = value;
  };

  setRegionsLoading = (value: boolean) => {
    this.regionsLoading = value;
  };

  setApartments = (value: ApartModel[]) => {
    this.apartments = value;
  };

  resetStore = () => {
    this.setCurrentItems([]);
    this.setCurrentItem(null);
    this.setCurrentItemsCount(0);
    this.setCurrentItemsOffset(0);
  };
}
