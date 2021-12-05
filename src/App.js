import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Find from './Components/Find';
import Home from './Components/Home';
import Upload from './Components/upload';
import Show from './Components/Show';
import logo from './logo.svg';
import "bootstrap-css-only/css/bootstrap.min.css";
import PrivateRoute from "./Components/PrivateRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/upload" component={Upload} />
          <PrivateRoute exact path="/show" component={Show} />
          <PrivateRoute
              exact
              path="/find"
              component={Find}
          />
          {/* <PrivateRoute
              exact
              path="/users/:handle"
              component={User}
          /> */}
      </Router>
    </div>
  );
}

export default App;
