import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';

export default(
    <div>
        <Switch>
            <Route path='/' component={ Dashboard } exact />
            <Route path='/wizard' component={ Wizard } />
        </Switch>
    </div>
)