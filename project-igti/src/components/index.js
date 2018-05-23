import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Router } from 'react-router'

import Loading from './utils/Loading'

class Index extends React.Component {

    render() {
        return (
            <Router history={this.props.history} children={this.props.children} />
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDespatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDespatchToProps)(Index);
