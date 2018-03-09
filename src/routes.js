import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ProfileCreator from "./components/ProfileCreator/ProfileCreator";
import UserProfile from "./components/UserProfile/UserProfile";
import BarterCreator from "./components/BarterMain/BarterCreator";
import ProfileForm from "./components/ProfileCreator/ProfileForm";
import MarketPlace from "./components/BarterMain/MarketPlace";


export default (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profilecreator" component={ProfileCreator} />
      <Route path="/userprofile" component={UserProfile} />
      <Route path="/barter" component={BarterCreator} />
      <Route path="/profileform" component={ProfileForm} />
      <Route path="/marketplace" component={MarketPlace} />
      
        path="*"
        render={() => (
            <div>
                <h1>Not Found</h1>
                </div>
        )}
        />
    </Switch>

  );