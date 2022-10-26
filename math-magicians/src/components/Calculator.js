import React from 'react';
import './Calculator.css';

// Create Calculator and render class
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table className="container">
        <tr className="screen">0</tr>
        <colgroup>
          <col span="3" />
          <col span="1" className="col-4" />
        </colgroup>
        <tr className="row">
          <td className="button">AC</td>
          <td className="button">+/-</td>
          <td className="button">%</td>
          <td className="button col-4">&#xf7;</td>
        </tr>
        <tr className="row">
          <td className="button">7</td>
          <td className="button">8</td>
          <td className="button">9</td>
          <td className="button col-4">x</td>
        </tr>
        <tr className="row">
          <td className="button">4</td>
          <td className="button">5</td>
          <td className="button">6</td>
          <td className="button col-4">-</td>
        </tr>
        <tr className="row">
          <td className="button">1</td>
          <td className="button">2</td>
          <td className="button">3</td>
          <td className="button col-4">+</td>
        </tr>
        <tr className="row">
          <td className="button span-2">0</td>
          <td className="button">.</td>
          <td className="button col-4">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
