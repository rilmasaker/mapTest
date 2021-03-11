import React from 'react';
import { Switch } from 'react-router-dom';

import { LogInRoute, LogOutRoute } from '../client/helpers/routesHelpers';
import Layout from '../client/components/Layout.jsx';
import Home from '../client/components/Home';
import OffbeatMap from '../client/components/OffbeatMap';

const App = () => (
  <>
    <Layout>
      <Switch>
        <LogOutRoute path="/" exact component={Home} />
        <LogOutRoute path="/map" component={OffbeatMap} />
      </Switch>
    </Layout>
  </>
);

export default App;
