/* eslint-disable */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// Create Calculator and render class
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
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
          <td onClick={this.handleClick} className="button">AC</td>
          <td onClick={this.handleClick} className="button">+/-</td>
          <td onClick={this.handleClick} className="button">%</td>
          <td onClick={this.handleClick} className="button col-4">&#xf7;</td>
        </tr>
        <tr className="row">
          <td onClick={this.handleClick} className="button">7</td>
          <td onClick={this.handleClick} className="button">8</td>
          <td onClick={this.handleClick} className="button">9</td>
          <td onClick={this.handleClick} className="button col-4">x</td>
        </tr>
        <tr className="row">
          <td onClick={this.handleClick} className="button">4</td>
          <td onClick={this.handleClick} className="button">5</td>
          <td onClick={this.handleClick} className="button">6</td>
          <td onClick={this.handleClick} className="button col-4">-</td>
        </tr>
        <tr className="row">
          <td onClick={this.handleClick} className="button">1</td>
          <td onClick={this.handleClick} className="button">2</td>
          <td onClick={this.handleClick} className="button">3</td>
          <td onClick={this.handleClick} className="button col-4">+</td>
        </tr>
        <tr className="row">
          <td onClick={this.handleClick} className="button span-2">0</td>
          <td onClick={this.handleClick} className="button">.</td>
          <td onClick={this.handleClick} className="button col-4">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
