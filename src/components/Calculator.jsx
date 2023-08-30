import React, { useState } from "react";
import './Calculator.css'
import { Box, Container } from "@mui/material";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value
    if(num === 0){
      setNum(input);
  }else{
      setNum(num + input)
    }
  }

  function clear(e) {
    setNum(0);
    
  }

  function changeSign() {
    if(num>0){
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }

  function percentage() {
    setNum(num/100);
  }

  function operatorHandler(e){
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator==="/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    }else if (operator==="X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    }else if (operator==="+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }else if (operator==="-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
    }
  }

    return (
      <div>
        <Box m={1}/>
        <Container maxWidth="xs">
          <div className="wrapper">
          <Box m={1}/>  
            <h1 className="result">{num}</h1>
              <button onClick={clear} className="white">AC</button>
              <button onClick={changeSign} className="white">+/-</button>
              <button onClick={percentage} className="white">%</button>
              <button onClick={operatorHandler} value={"X"} className="orange">X</button>
              <button onClick={inputNum} value={7} className="grey">7</button>
              <button onClick={inputNum} value={8} className="grey">8</button>
              <button onClick={inputNum} value={9} className="grey">9</button>
              <button onClick={operatorHandler} value={"/"} className="orange">/</button>
              <button onClick={inputNum} value={4} className="grey">4</button>
              <button onClick={inputNum} value={5} className="grey">5</button>
              <button onClick={inputNum} value={6} className="grey">6</button>
              <button onClick={operatorHandler} value={"+"} className="orange">+</button>
              <button onClick={inputNum} value={1} className="grey">1</button>
              <button onClick={inputNum} value={2} className="grey">2</button>
              <button onClick={inputNum} value={3} className="grey">3</button>
              <button onClick={operatorHandler} value={"-"} className="orange">-</button>
              <button onClick={inputNum} value={0} className="grey">0</button>
              <button onClick={inputNum} value={"."} className="grey">.</button>
              <button className="grey" style={{visibility: "hidden"}}>.</button>
              <button onClick={calculate} className="white">=</button>
          </div>
        </Container>
      </div>
    );
}