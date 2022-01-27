import React ,{useEffect,useState}from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Signup from '../components/Signup';
import SignIn from '../components/SignIn';

import AboutUs from '../containers/Home/AboutUs';
import ContactUs from '../containers/Home/ContactUs';
import Hirings  from '../containers/Home/Hirings';
import Gallery  from '../containers/Home/Gallery';

import AllBlogs from '../containers/Home/Blogs';
import BlogDetails from '../containers/Home/BlogDetails';

import userDashboard from '../containers/User/Dashboard';

export default function AllRoute() {
    return (
        <div>
           <Switch>
               <Route path="/signup"   component={Signup} />
               <Route path="/signin"   component={SignIn} />

               <Route path="/about"   component={AboutUs} />
               <Route path="/contact"   component={ContactUs} />
               <Route path="/hirings"   component={Hirings} />
               <Route path="/gallery"   component={Gallery} />
               <Route path="/blogs"   component={AllBlogs} />
               <Route path="/details"   component={BlogDetails} />

               <PrivateRoute path="/dashboard"   component={userDashboard} />
           </Switch>
        </div>
    )
}
