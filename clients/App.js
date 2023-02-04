import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyOffice from './pages/MyOffice/MyOffice';
import Finance from './pages/Finance/Finance';
import Rates from './pages/Rates/Rates';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/myoffice' component={MyOffice} />
      <Route path='/finance' component={Finance} />
      <Route path='/rates' component={Rates} />
    </Switch>
  )
}

export default App;
