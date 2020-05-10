import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, changeNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
export let RerenderEntireTree = (state)=> {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost} changeNewPostText={changeNewPostText}/></BrowserRouter>, document.getElementById('root')
    );
};