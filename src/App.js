import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import MediumCards from './components/MediumCards';
import Filactualite from './components/filact/Filactualite';
import { useEffect, useState } from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import Filteredsearch from './components/filact/recherche/Filteredsearch';

function App() {
  return (
    <BrowserRouter>
         <Header />
    <div className="App"> 
      <Switch> 
        <Route exact path="/">
              <Banner />
              <div className='py-10'>
                 <h1 className=' text-4xl font-semibold p-14'>Suggestions: </h1>
                  <MediumCards img="/pic3.jpg" title='Une seggestion pour vous'/>
               </div>
           </Route>
          <Route path="/logedinfileactualite">
               <Filactualite />
           </Route>
           <Route path="/filtered_search">
               <Filteredsearch />
           </Route>
           
        
      </Switch>
    </div>
      <footer className='footer'>
      </footer>
     
    </BrowserRouter>
  );
}

export default App;
