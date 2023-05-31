import './App.css';
import React from 'react'
import Classcomponent from './components/Classcomponent';
import Componentsandprops from './components/Componentsandprops';
import Functioncomponets from './components/Functioncomponets';
import Firstreactcomponent from './components/Firstreactcomponent';
import Stateandlifecycle from './components/Stateandlifecycle';
import Hooks from './components/Hooks';

const App=()=>{
  return (
  <> 
  <Firstreactcomponent/>
  <Functioncomponets/>
  <Classcomponent/>
  <Componentsandprops/> 
  <Stateandlifecycle/>
  <Hooks/>
  </>

  )
}

export default App;