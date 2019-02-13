import React from 'react';
import "./Calculator.css";
import "./slider.css";
/* import 'rc-slider/assets/index.css'; */
import Slider from 'rc-slider';

class Calculator extends React.Component {
  state = {
    sliderValue1: 50, sliderValue2: 5,
    totalMonth: null, totalAnnual: null
  };

  render() {

    var self = this;

    return (
      <div className="pageContent">
        <div className="configIntro">
          <div className="tTitle-box1">
            <p className="saveText">Save more with</p>
          </div>
          <div className="tTitle-box2">
            <p className="belloText">Bellotero.io</p>
          </div>
          <div className="description">With Bellotero.io you save time and money make real-time decisions that boost your
            business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no
            need to worry about safety. </div>
        </div>
        <div className="calculator">
          <div className="operations">
            <div className="opTextbox1" id="smText">
              <p> Monthly</p>
              <p> ingredient spending </p>
            </div>
            <div className="opExpensesBox">
              <p className="moneySymbol1">$</p><p className="expenses1">{this.state.sliderValue1}</p>
            </div>
            <div className="opExpensesBar wrapperStyle">
              <Slider min={1} max={100} defaultValue={this.state.sliderValue1}
                onChange={sliderValue1 => this.setState({ sliderValue1 })}

              ref= {(el) => self._input = el}
              />


            </div>
            <div className="opTextbox2" id="smText">
              <p> Full-time employees that
                process invoices </p>
            </div>
            <div className="opEmployeesBox">
              <p className="expenses">{this.state.sliderValue2}</p>
            </div>
            <div className="opEmployeesBar wrapperStyle">
              <Slider min={1} max={10} defaultValue={this.state.sliderValue2} onChange={sliderValue2 => this.setState({ sliderValue2 })} />


            </div>
          </div>
          <div className="results">
            <div className="moneySymbol2" id="moneySymbol">$</div>
            <div className="moneySymbol3" id="moneySymbol">$</div>
            <div className="foodSaving" id="quantity"> {parseInt(this.state.sliderValue1 * .30)} </div>
            <div className="annualSaving" id="quantity">
            {parseInt((this.state.sliderValue2 *1137) +(this.state.sliderValue1 * .30))} 
            </div>
            <div className="opTextbox3" id="smText">Estimated cost food savings</div>
            <div className="opTextbox4" id="smText">Your estimated annual savings</div>
          </div>
        </div>
      </div>
    )
  }
}


export default Calculator;