import './App.css';
import { useState } from 'react';


function App() {


  const [check,useCheck]=useState(true);


  function Onclick(){
    useCheck(check=>!check)
  }
  return (
    <div>
      <button onClick={Onclick}>is it true?</button>
      {check ? <div>I'm true!</div> : <div>it's false</div>}
    </div>
  );
}


export default App;