import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import { StatScreen } from '../screens/stat/StatScreen';
import { ObjectScreen } from '../screens/object/ObjectScreen';
import { ForumScreen } from '../screens/forum/ForumScreen';

export const Routes = {
  main: '/main',
  auth: '/',
  profile: '/profile',
  stat: '/stat',
  object: '/object/:id',
  forum: '/forum',
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
  { path: '/forum', title: 'Форум' },
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
  {
    path: Routes.object,
    element: <ObjectScreen />,
  },
  { path: Routes.forum, element: <ForumScreen /> },
]);

export type NavLinkModel = {
  path: string;
  title?: string;
  icon?: JSX.Element;
};
