import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import ProfileCreator from "./components/ProfileCreator/ProfileCreator";
import UserProfile from "./components/UserProfile/UserProfile";
import BarterMain from "./components/BarterMain/BarterMain";
import ProfileForm from "./components/ProfileCreator/ProfileForm";


export default (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profilecreator" component={ProfileCreator} />
      <Route path="/userprofile" component={UserProfile} />
      <Route path="/barter" component={BarterMain} />
      <Route path="/profileform" component={ProfileForm} />
      
        path="*"
        render={() => (
            <div>
                <h1>Not Found</h1>
                </div>
        )}
        />
    </Switch>

  );