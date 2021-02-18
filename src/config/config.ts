// Components
import Bookmarks from '../pages/Bookmarks'
import Comics from '../pages/Comics'
import Comic from '../pages/Comic'
import Characters from '../pages/Characters'
import Character from '../pages/Character'
import Dashboard from '../pages/Dashboard'

// type definitions
import { IRouteProps } from '../types/routes'

const routes: IRouteProps[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters,
    exact: true,
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: Character,
    exact: true,
  },
  {
    path: '/comics',
    name: 'comics',
    component: Comics,
    exact: true,
  },
  {
    path: '/comics/:id',
    name: 'comic',
    component: Comic,
    exact: true,
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: Bookmarks,
    exact: true,
  },
]

export default routes
