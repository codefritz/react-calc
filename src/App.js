import logo from './logo.svg';
import './App.css';
import {appendValue, calculate} from './functions';
import { useState, useEffect } from 'react';


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
  

  const title = "Codi Master #1"
  useEffect(() => {document.title = title}, []);

  const [calcField, setCalcField] = useState("0");

  return (
    <div className="calculator">
        <h1>{title.toUpperCase()}</h1>
          <CaclulatorField calcField={calcField} />
          <div className="button-container" id="button-container">
          {["*","/","+","-"].map((elm, ix) => (
              <CalculatorNumberButton 
                value={elm} 
                setter={setCalcField} 
                field={calcField}
                className="operator"
                />
            )
          )}
          {[...Array(9)].map((elm, ix) => (
              <CalculatorNumberButton value={ix + 1} setter={setCalcField} field={calcField}/>
              )
              )}
          <CalculatorNumberButton value="0" setter={setCalcField} field={calcField}/>
          <CalculatorNumberButton value="." setter={setCalcField} field={calcField}/>
          <button 
            className="calc-button all-clear"
            onClick={() => setCalcField("0")}>AC</button>
          <button 
            className="calc-button result"
            onClick={() => setCalcField(calculate(calcField))}>=</button>
        </div>
    </div>
  );
}

export default App;
