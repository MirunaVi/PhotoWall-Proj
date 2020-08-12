
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'
//const tasks = ['take out', 'star dust', 'walk me']


// const element = React.createElement('ol',null,
//  tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// const element =
//                 <div>
//                   <h1>Photo wall tasks</h1>
//                   <ol>
//                     {tasks.map((task, index) => <li key={index}>{task}</li>)}
//                   </ol>
//                 </div>





ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));