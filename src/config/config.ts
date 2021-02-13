// Components
import Bookmarks from '../pages/Bookmarks'
import Comics from '../pages/Comics'
import Characters from '../pages/Characters'
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
    path: '/comics',
    name: 'comics',
    component: Comics,
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
