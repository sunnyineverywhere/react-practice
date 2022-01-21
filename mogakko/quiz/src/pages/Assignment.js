import Layout from "../components/shared/Layout";
import { useState } from "react";

function Assignment(){

    const [check,useCheck]=useState(true);


  function Onclick(){
    useCheck(check=>!check)
  }

    return(
        <div>
            <div>* 과제</div>
            <div>
              <button onClick={Onclick}>is it true?</button>
              {check ? <div>I'm true!</div> : <div>it's false</div>}
            </div>
        </div>
        
    );
}

export default Assignment;