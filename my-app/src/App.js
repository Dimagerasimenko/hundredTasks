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

function App(props) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage} /> }/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
/*Можно указывать или 'component' или 'render' */
export default App;
