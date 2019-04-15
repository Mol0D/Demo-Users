import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, HashRouter} from 'react-router-dom';
import rootReducer from './Reducers/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey'
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

const theme = createMuiTheme({
    palette:{
        primary: {
            main: blue[500]
        },
        secondary: {
            main: blueGrey[50]
        }
        
    }
}) 

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
        <MuiThemeProvider theme={theme}>
            <App />
            {/* <Route exact path="/" component={Home}/> */}
        </MuiThemeProvider>  
        </HashRouter>
    </Provider>
, document.getElementById('root'));


serviceWorker.unregister();
