import Header from "./components/UI/Header";
import {Route,Switch,Redirect} from "react-router-dom";

import './App.css';
import Dashboard from "./components/screen/Dashboard";
import Claims from "./components/screen/Claims";
import Policies from "./components/screen/Policies";
import Reports from "./components/screen/Reports";
import {useEffect, useState} from "react";
import Login from "./components/screen/Login";


function App() {

    const [isLogin, setIsLogin]=useState(false)

    useEffect(()=>{
        const jwt = localStorage.getItem("token");
        if (jwt) {
            setIsLogin(true)

        }

    },[])

    if (!isLogin) return  <Login/>
    else return  <div className="App">
        <Header />
        <div className="content">
            <Switch>
                <Route path="/dashboard" render={(props => <Dashboard name="Main Dashboard" {...props} />)} />
                <Route path="/claims/:id" render={(props => <Claims name="Manage Claims" {...props} />)} />
                <Route path="/claims" render={(props => <Claims name="Manage Claims" {...props} />)} />
                <Route path="/policies" render={(props => <Policies name="Manage Policies" {...props} />)} />
                <Route path="/reports" render={(props => <Reports name="Reports" {...props} />)} />
                <Redirect from="/" to="/dashboard" />
            </Switch>


        </div>

    </div>

}

export default App;
