import { useState} from "react";

function App() {

 let [counter , faizCounter] = useState(0)
 let [step , fiazstep] = useState(1);

// for increasing value 
 const addvalue =() =>{
    console.log("Clicked ",counter);
    // if(counter<20){

      faizCounter(counter + step)
    // }
  }

  // For decreaseing value 
  const decreasevalue = () =>{
    console.log("clicked",counter);
    if(counter > 0){
      faizCounter(counter - step);
    }
  }

  // Reset to original Position 
  const resetvalue = () =>{
    faizCounter(counter =0)
    fiazstep(0);
  }

  const changevalue = () =>{
    const inputValue = Number(event.target.value);
    fiazstep(inputValue);
  }

  return (
   <>
   <h1>Cahi or react</h1>
   <h2>Counter value : {counter}</h2>

   <button
   onClick={addvalue}
   >Add Value</button>
   <br />
   <button
   onClick={decreasevalue}
   >Decrease Value</button>
   <button
   onClick={resetvalue}
   >Reset</button>

   <button>Custom Step <input type="number" value={step}
   onChange={changevalue}
   /></button>
   </>
  )
}

export default App
