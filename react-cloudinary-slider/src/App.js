import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from './pages/homepage/homepage.component.jsx'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
