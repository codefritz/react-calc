import logo from './logo.svg';
import './App.css';
import {appendValue} from './functions';
import { useState } from 'react';


function CaclulatorField({calcField}) {
  return (
    <input type="text" value={calcField} className="calc-field" disabled="true"/>
  );
}


function CalculatorNumberButton(props) {
  return (
    <button 
      className={"calc-button" + (!props.className ? "" : " " + props.className)} 
      onClick={() => props.setter(appendValue(props.field, props.value))}
      >
    {props.value}
    </button>
  );
}


function App() {
  
  const [calcField, setCalcField] = useState("");

  return (
    <div className="calculator">
        <h1>CODI-1</h1>
          <CaclulatorField calcField={calcField} />
          <div className="button-container">
          {["*","/","+","-","."].map((elm, ix) => (
              <CalculatorNumberButton 
                value={elm} 
                setter={setCalcField} 
                field={calcField}
                className="operator"
                />
            )
          )}
          {[...Array(10)].map((elm, ix) => (
              <CalculatorNumberButton value={ix} setter={setCalcField} field={calcField}/>
            )
          )}
          <button 
            className="calc-button all-clear"
            onClick={() => setCalcField("")}>AC</button>
          <button 
            className="calc-button result"
            onClick={() => setCalcField(eval(calcField))}>=</button>
        </div>
    </div>
  );
}

export default App;
