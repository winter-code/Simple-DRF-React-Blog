import React from 'react';
import { Route, Switch } from "react-router-dom";
import Blog from "../containers/Blog";
import List from "../containers/List";

const routes = () => {
    return (
        <Switch>
            <Route path="/blog/;id" component={Blog} ></Route>
            <Route path="/" component={List} ></Route>
        </Switch>
    );
}

export default routes;
