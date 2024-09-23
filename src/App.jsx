// eslint-disable-next-line no-unused-vars
import React from 'react';
import CounterToDO from './components/TodoApp/Counter';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ArryDestructure from './components/ArryDestructure';

export default function App(){
  return(
    <div className="container-fluid vh-20 d-flex flex-column
    justify-content-center bg-light text-dark">
      <h1 className="text-center display-4 font-weight-bold">
        Simple Counter Application
      </h1>

      <div className="max-auto mt-5">

       <Counter/>
       <ArryDestructure/>
       {/* <CounterToDO/> */}
      </div>
    </div>
  );
}