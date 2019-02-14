import React from 'react';
import "./css/Testimonial.css";
import PostTestimonials from './PostTestimonials';
var arrow = require('./static/img/arrow.svg');

class Testimonial extends React.Component {
  state = {
    counter: 1 ,
    visible : false 
  };

  sumButton() {
    if (this.state.counter < 3) {
      this.setState({ counter: this.state.counter + 1 })
    }
    else {
      this.setState({ counter: this.state.counter - 2 });
    }
  }
  substractButton() {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    }
    else {
      this.setState({ counter: this.state.counter + 2 });
    }
  }
  render() {


    return (
      <div className="pageContent2">
        <div className="tTitle-box">
          <h2>Our customers love us</h2>
        </div>
        <div className="testimonialBox" key={Testimonial.id} ><PostTestimonials buttonCounter={this.state.counter} /></div>    
        <div className="btnArea d-flex ">
          <div className="btnCounter btnFont">
            <div className="counterArea d-flex flex-nowrap">
              <span id="p1Display"> {this.state.counter} </span>/3
            </div>
          </div>
          <div className="button2 btnPrev d-flex align-items-center" onClick={this.substractButton.bind(this)} >
            <img src={arrow} className="arrow" alt="z" />
          </div>
          <div className="button1 btnNext d-flex align-items-center" onClick={this.sumButton.bind(this)} >
            <img src={arrow} className="arrow" alt="z" />
          </div>
        </div>
      </div>
    )
  }
}


export default Testimonial;