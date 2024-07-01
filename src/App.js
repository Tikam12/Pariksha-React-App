import React, { Component } from 'react';
import Navbar from './navbar';
import { Route, Routes } from "react-router";
import Home from './home';
import Test from './test';
import Result from './result';
import TestDetail from './testDetail';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{minHeight:'85vh'}}>
          <Navbar />
          <switch>
            <Routes>
              <Route path='/' Component={Home}></Route>
              <Route path='/test' Component={Test}></Route>
              <Route path='/result' Component={Result}></Route>
              <Route path='/testDetail/:id' Component={TestDetail}></Route>
            </Routes>
          </switch>
        </div>
        <Footer />
      </div>
    )
  }
}


export default App;
