import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { CheckRoleScreen } from '../screens/auth/modules/CheckRoleScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import { InfoSquare, Mailbox } from 'tabler-icons-react';

export const Routes = {
  main: '/',
  auth: '/auth',
  profile: '/profile',
  checkRole: '/check-role',
};

export const NavLinks: NavLinkModel[] = [
  {
    path: '/link1',
    title: 'Ссылка 1',
    icon: <Mailbox />,
  },
  {
    path: '/link2',
    title: 'Ссылка 2',
    icon: <InfoSquare />,
  },
  {
    path: '/link2',
    title: 'Ссылка 3',
    icon: <InfoSquare />,
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
    path: Routes.checkRole,
    element: <CheckRoleScreen />,
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
