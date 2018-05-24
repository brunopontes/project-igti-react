import 'modules/bootstrap/dist/css/bootstrap.min.css';  
import 'modules/font-awesome/css/font-awesome.min.css';
import '../component/custom.css';

import React from 'react';

import Menu from '../component/menu';
import Routes from './routes';

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
);