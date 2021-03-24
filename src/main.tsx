import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import routes from './routes/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navigation />
      <Switch>
        {routes.map((route, i) => (
          <Route key={`route_${i}`} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
