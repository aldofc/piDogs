import './App.css';
import React from 'react';
import {Route , Switch} from "react-router-dom"
import Home from './Components/Home/Home.jsx';
import Landing from './Components/Landing/Landing';


function App() {
  return (
    <div className="App">

      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </React.Fragment>
      
   

      

      

    </div>
  );
}

export default App;
