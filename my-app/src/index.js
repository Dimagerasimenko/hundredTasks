import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'How are You', likesCount: 12},
    {id: 2, message: 'How are You', likesCount: 12},
    {id: 3, message: 'How are You', likesCount: 12},
    {id: 4, message: 'How are You', likesCount: 12},
    {id: 5, message: 'How are You', likesCount: 12},
    {id: 6, message: 'How are You', likesCount: 12},
    {id: 7, message: 'It\'s my first post', likesCount: 15}
];

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sweta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Petya'},
    {id: 6, name: 'Pasha'}
];

let messagesData = [
    {id: 1, message: 'How are You'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Yo1'},
    {id: 4, message: 'Yo2'},
    {id: 5, message: 'Yo3'},
    {id: 6, message: 'Yo4'}
];

ReactDOM.render(
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
