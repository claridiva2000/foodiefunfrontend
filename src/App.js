import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
// import AddNew from './components/AddNew';
import Nav from './components/Nav';
// import NavBottom from './components/NavBottom';
// import EditForm from './components/EditForm';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path="/login" render={props => <Login {...props} />} />

        <Route exact path="/register" component={Register} />
        <Route path="/" component={Main} />
        
      </div>
    </Router>
  );
}

export default App;


