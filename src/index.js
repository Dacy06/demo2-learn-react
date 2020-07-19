import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Room from './case/Room';
import Films from './case/Api';

function App(){
  return (
    <div>
      <Room /> 
      <Films />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));