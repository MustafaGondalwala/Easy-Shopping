import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage"
function App() {
  return (
    <div style={{padding:10}}>
      <Route path="/" exact component={HomePage}/>
    </div>
  );
}

export default App;
