import React, { useState } from 'react';
import '../src/styles/App.css';
import Header from './component/Header';
import Main from './component/Main';
import Middleicons from './component/middleIcons';
import { mainBody } from './component/Main';
function App() {

const [hederbuttonActive,setHeaderButtonActive]=useState('About');
let [mainVisible, mainSetVisible]=useState(true);

  return (
    <div className="App">
      <div className='AppHeader'>
          <Header hederbuttonActive={hederbuttonActive} setHeaderButtonActive={setHeaderButtonActive}/>
      </div>

      

      <div className='AppMain'>
          {mainVisible===true?
            <Main buttonActive={hederbuttonActive} visible={mainVisible} setVisible={mainSetVisible}/>
          :null
          }
      </div>
    </div>
  );
  
}

export default App;
