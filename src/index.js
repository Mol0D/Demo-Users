import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, HashRouter} from 'react-router-dom';
import rootReducer from './Reducers/index';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
            {/* <Route exact path="/" component={Home}/> */}
        </HashRouter>
    </Provider>
, document.getElementById('root'));


serviceWorker.unregister();
