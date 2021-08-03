import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import routesConfig from './config.routes';

function App() {
  return (
    <BrowserRouter>
      <Menu routes={routesConfig} />
      <div className="margen">
        <Switch>
          {routesConfig.map((route, idx) => (
            <Route
              {...route}
              key={`route-${idx}`}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
