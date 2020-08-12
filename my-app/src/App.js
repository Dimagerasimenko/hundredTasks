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

                    {/*<Route exact path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>

                    <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
/*Можно указывать или 'component' или 'render' */
export default App;
