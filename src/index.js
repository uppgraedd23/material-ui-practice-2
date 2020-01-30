import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {darkBaseTheme, lightBaseTheme} from "material-ui/styles/index";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import priceReducer from "./redux/priceReducer";
import {Provider} from "react-redux";
import {createStore} from 'redux'

const store = createStore(priceReducer)


ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
        <App/>
        </Provider>
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
