import Header from "./components/UI/Header";
import {Route, Switch, Redirect} from "react-router-dom";

import './App.css';
import Dashboard from "./components/screen/Dashboard";
import Claims from "./components/screen/Claims";
import Policies from "./components/screen/Policies";
import Reports from "./components/screen/Reports";
import {useEffect, useState} from "react";
import Login from "./components/screen/Login";
import Logout from "./components/UI/Logout";
import Settings from "./components/screen/Settings";
import {getDeviceTypes} from "./data";





function App() {

    const [isLogin, setIsLogin] = useState(false)
    const [deviceTypes, setDeviceTypes] = useState([])


    useEffect(() => {
        const jwt = localStorage.getItem("token");
        if (jwt) {
            setIsLogin(true)
            setDeviceTypes(getDeviceTypes)

        }

    }, [])

    if (!isLogin) return <Login/>
    else return <div className="App">
        <Logout/>
        <Header/>
        <div className="content">
            <Switch>
                <Route path="/dashboard"
                       render={(props => <Dashboard name="Main Dashboard" {...props} deviceTypes={deviceTypes}/>)}/>
                <Route path="/claims/:id"
                       render={(props => <Claims name="Manage Claims" {...props} deviceTypes={deviceTypes}/>)}/>
                <Route path="/claims"
                       render={(props => <Claims name="Manage Claims" {...props} deviceTypes={deviceTypes}/>)}/>
                <Route path="/policies"
                       render={(props => <Policies name="Manage Policies" {...props} deviceTypes={deviceTypes}/>)}/>
                <Route path="/reports" render={(props => <Reports name="Reports" {...props} />)}/>
                <Route path="/settings" render={(props => <Settings name="Settings" {...props} />)}/>
                <Redirect from="/" to="/dashboard"/>
            </Switch>


        </div>

    </div>

}

export default App;
