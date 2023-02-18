import { UserStore } from '../modules/user/UserStore';
import { createContext, useContext } from 'react';
import { ExampleStore } from '../modules/example/ExampleStore';
import { FilterStore } from '../modules/filters/FilterStore';

class RootStore {
  exampleStore = new ExampleStore();
  userStore = new UserStore();

  filterStore = new FilterStore();

  constructor() {
    this.exampleStore = new ExampleStore();
    this.userStore = new UserStore();
    this.filterStore = new FilterStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);

export const useRootStore = () => useContext(storesContext);
