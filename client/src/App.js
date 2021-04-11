import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Nav from './components/Nav';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Nav />
        <main>
          <Route exact path = "/" component={
              prop => <Landing 
              />
            } />
        </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
