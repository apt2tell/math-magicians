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
      <tbody>
      <tr className="screen">
        <th>
        {total}
        {operation}
        {next}
        </th>
      </tr>
      <tr className="row">
        <td onClick={handleClick}>AC</td>
        <td onClick={handleClick}>+/-</td>
        <td onClick={handleClick}>%</td>
        <td onClick={handleClick} className="col-4">&#xf7;</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick}>7</td>
        <td onClick={handleClick}>8</td>
        <td onClick={handleClick}>9</td>
        <td onClick={handleClick} className="col-4">x</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick}>4</td>
        <td onClick={handleClick}>5</td>
        <td onClick={handleClick}>6</td>
        <td onClick={handleClick} className="col-4">-</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick}>1</td>
        <td onClick={handleClick}>2</td>
        <td onClick={handleClick}>3</td>
        <td onClick={handleClick} className="col-4">+</td>
      </tr>
      <tr className="row">
        <td onClick={handleClick} className="span-2">0</td>
        <td onClick={handleClick}>.</td>
        <td onClick={handleClick} className="col-4">=</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Calculator;
