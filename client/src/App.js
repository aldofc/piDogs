import './App.css';
import React from 'react';
import {Route , Switch} from "react-router-dom"
import Home from './Components/Home/Home.jsx';
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route  path="/" component={NavBar} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </React.Fragment>
      
   

      

      

    </div>
  );
}

export default App;
