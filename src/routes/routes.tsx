import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { CheckRoleScreen } from '../screens/auth/modules/CheckRoleScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import { InfoSquare, Mailbox } from 'tabler-icons-react';
import { StatScreen } from '../screens/stat/StatScreen';

export const Routes = {
  main: '/main',
  auth: '/',
  profile: '/profile',
  stat: '/stat',
};

export const NavLinks: NavLinkModel[] = [
  {
    path: '/main',
    title: 'Покупка недвижимости',
  },
  {
    path: '/stat',
    title: 'Статистика',
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
