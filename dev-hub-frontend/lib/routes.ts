import React from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Admin } from "../pages/admin/Admin";
import { NotFound } from "../pages/404";
import { Profile } from "../pages/profile/Profile";

interface IRoutes {
  path: string;
  component: React.ComponentType | any;
}

export enum RoutesNames {
  HOME = "/",
  LOGIN = "/login",
  ADMIN = "/admin",
  NOTFOUND = "*",
}

export const routesArray: IRoutes[] = [
  {
    path: RoutesNames.HOME,
    component: Home,
  },
  {
    path: RoutesNames.LOGIN,
    component: Login,
  },
  {
    path: RoutesNames.ADMIN,
    component: Admin,
  },
  {
    path: RoutesNames.NOTFOUND,
    component: NotFound,
  },
  {
    path: '/profile/:userId',
    component: Profile,
  }
  
];
