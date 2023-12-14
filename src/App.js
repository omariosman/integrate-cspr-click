import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

const App = () => {

  const signIn = async () => {
    console.log("sign in clicked");
    window.csprclick.signIn();
  }

  return (
    <div className='container'>
        <button onClick={signIn}>Sign In</button>
    </div>  
  );
};

export default App;