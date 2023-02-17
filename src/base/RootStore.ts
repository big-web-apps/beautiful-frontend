import { UserStore } from '../modules/user/UserStore';
import { createContext, useContext } from 'react';
import { ExampleStore } from '../modules/example/ExampleStore';

class RootStore {
  exampleStore = new ExampleStore();
  userStore = new UserStore();

  constructor() {
    this.exampleStore = new ExampleStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);

export const useRootStore = () => useContext(storesContext);
