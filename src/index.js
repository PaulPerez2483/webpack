import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');


const { Component } = React;
const {render} = ReactDom;

const App = () => {
    return <div><h1>hello world!!</h1></div>
}

render(<App/>, root)