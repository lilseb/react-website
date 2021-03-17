import React from 'react';
import { BrowserRouter as Browser, Redirect, Route, Switch, } from 'react-router-dom'
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import GalleryA from './pages/GalleryA.js';
import GalleryB from './pages/GalleryB.js'
import './scss/style.scss';


function App() {
  return (
    <Browser>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/service' component={Services} />
      <Route exact path='/galleryA' component={GalleryA} />
      <Route exact path='/galleryB' component={GalleryB} />
      </Switch>
    </Browser>
  );
}

export default App;