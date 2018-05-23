import CoreLayout from '../layouts/PageLayout/PageLayout'

import Home from './Home'
import User from './User'
import UserList from './UserList'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
    User(store),
    UserList(store)
  ]
})

export default createRoutes
