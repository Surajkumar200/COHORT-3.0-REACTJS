import React from 'react'
import RForm from './brute force form componets/RForm.jsx'
import Bform from './better form/Bform.jsx';
import Ofrom from './optimised-form/Ofrom.jsx';

const App = () => {
  return (
    <div>
      <h1>brutel force way</h1>
      <RForm />
      <br />
      <h1>better way</h1>
      <Bform />
      <br />
      <h1>optimised way</h1>
      <Ofrom/>
    </div>
  );
}

export default App