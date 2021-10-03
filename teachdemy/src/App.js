import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import EditorsChoise from './Components/EditorsChoise/EditorsChoise';

const App = () => {
  return (
    <div className="container">
  <BrowserRouter>
    <Header></Header>
        {/* Switch paths */}
   <Switch>

     {/* Route to About page  */}
 <Route exact path="/about">
   <About></About>
 </Route>
         {/* Rout to Home Page  */}
     <Route exact path="/home">
       <Home></Home>
     </Route>

      {/* Route to Home Page  */}
     <Route exact path="/">
       <Home></Home>
     </Route>

     {/* Rout to services */}
   <Route exact path="/services">
      <Services></Services>
    </Route>

    {/* router For best Choise  */}
      <Route path="/editor-choise">
        <EditorsChoise></EditorsChoise>
      </Route>
      
    {/* Rout to 404 Not Found  */}
    <Route exact path="/*">
      <NotFound></NotFound>
    </Route>

   </Switch>
           


           {/* Foter Rout  */}
   <Footer></Footer>
  </BrowserRouter>
    </div>
  );
};

export default App;
