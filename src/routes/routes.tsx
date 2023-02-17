import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import {StatScreen} from "../screens/stat/StatScreen";

export const Routes = {
  main: '/main',
  auth: '/',
  profile: '/profile',
  stat: '/stat',
};

export const NavLinks: NavLinkModel[] = [
  {
    path: '/main',
    title: 'Найти недвижимость',
    icon: <MainScreen />,
  },
  {
    path: '/stat',
    title: 'Статистика',
    icon: <StatScreen />,
  },
];

export const router = createBrowserRouter([
  {
    path: Routes.auth,
    element: <AuthScreen />,
  },
  {
    path: Routes.main,
    element: <MainScreen />,
  },
  {
    path: Routes.stat,
    element: <StatScreen />,
  },
  {
    path: Routes.profile,
    element: <ProfileScreen />,
  },
]);

export type NavLinkModel = {
  path: string;
  title?: string;
  icon?: JSX.Element;
};
