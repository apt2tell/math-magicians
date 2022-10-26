/* eslint-disable */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// Create Calculator class
const Calculator = () => {
  const [initalState, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    const obj = calculate(initalState, e.target.textContent);
    return setState(obj);
  };
  const { total, next, operation } = initalState;
  return (
    <table className="container">
      <tr className="screen">
        {total}
        {operation}
        {next}
      </tr>
      <colgroup>
        <col span="3" />
        <col span="1" className="col-4" />
      </colgroup>
      <tr className="row">
        <td onClick={handleClick} className="button">AC</td>
        <td onClick={handleClick} className="button">+/-</td>
        <td onClick={handleClick} className="button">%</td>
        <td onClick={handleClick} className="button col-4">&#xf7;</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick} className="button">7</td>
        <td onClick={handleClick} className="button">8</td>
        <td onClick={handleClick} className="button">9</td>
        <td onClick={handleClick} className="button col-4">x</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick} className="button">4</td>
        <td onClick={handleClick} className="button">5</td>
        <td onClick={handleClick} className="button">6</td>
        <td onClick={handleClick} className="button col-4">-</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick} className="button">1</td>
        <td onClick={handleClick} className="button">2</td>
        <td onClick={handleClick} className="button">3</td>
        <td onClick={handleClick} className="button col-4">+</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick} className="button span-2">0</td>
        <td onClick={handleClick} className="button">.</td>
        <td onClick={handleClick} className="button col-4">=</td>
      </tr>
    </table>
  );
};

export default Calculator;
