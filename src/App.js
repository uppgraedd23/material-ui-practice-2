import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Tab from "./pages/Tab";

export default (store) => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Route path='/' exact component={Tab} store = {store}/>
        </BrowserRouter>
    );
}
