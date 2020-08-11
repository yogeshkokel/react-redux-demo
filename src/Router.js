import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import CombinedReduerContainer from './components/CombinedReduerContainer';
import AsyncConatiner from './components/AsyncConatiner';

const Router = () => (
    <Switch>
        <Route exact path="/" component={CakeContainer} />
        <Route exact path="/with-hooks" component={HooksCakeContainer} />
        <Route exact path="/combined-reducer" component={CombinedReduerContainer} />
        <Route exact path="/async-function" component={AsyncConatiner} />
    </Switch>
)

export default Router