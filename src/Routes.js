import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/AuthComponents/Login";
import Signup from "./components/AuthComponents/Signup";
import Home from "./components/LandPage/Home";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
