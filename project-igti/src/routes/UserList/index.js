import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/userlist',

  getComponent (nextState, cb) {

    require.ensure([], (require) => {

      const UserList = require('./containers/UserListContainer').default
      const reducer = require('./modules/userlist').default

      injectReducer(store, { key: 'userlist', reducer })

      cb(null, UserList)

    }, 'userlist')
  }
})
