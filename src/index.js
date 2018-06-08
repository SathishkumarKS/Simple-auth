import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

const app = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
