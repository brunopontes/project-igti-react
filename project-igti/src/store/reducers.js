import { combineReducers } from 'redux'

import UserReducer from './../reducers/userReducer'
import UserListReducer from './../reducers/userlistReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    user: UserReducer,
    userlist: UserListReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
}

export default makeRootReducer
