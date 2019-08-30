import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Provider } from 'react-redux';
import Store from './Store';


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <PostForm />
      <Post />
    </div>
    </Provider>
  );
}

export default App;
