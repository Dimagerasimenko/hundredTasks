import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import Music from "./components/Music/Music";

// exact - это атрибут указывающий на то, что path в адресной строке браузера должен совпадать полностью

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper__content">

                    {/*<Route exact path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>

                    <Route path='/profile' render={() => <Profile />}/> /*Можно указывать или 'component' или 'render' */
                    <Route path='/dialogs' render={() => <Dialogs />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
