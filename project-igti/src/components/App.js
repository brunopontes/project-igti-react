import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl';

import Index from './index'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {

    return (
      <IntlProvider locale="en">
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            <Index history={browserHistory} children={this.props.routes} />
            {/* <Router history={browserHistory} children={this.props.routes} /> */}
          </div>
        </Provider>
      </IntlProvider>
    )
  }
}

export default App
