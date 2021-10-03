import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
  <BrowserRouter>
    <Header></Header>

   <Switch>
   <Route path="/services">
      <Services></Services>
    </Route>
   </Switch>
  </BrowserRouter>
    </div>
  );
};

export default App;
