import React from 'react';
import TestimonialDB from './posts/Testimonials.json'


class PostTestimonials extends React.Component {
    render() {

    var selectedID = this.props.buttonCounter;
    var arr = TestimonialDB.filter(TestimonialDB => TestimonialDB.id === selectedID)

    return arr.map(item => <TestimonialLayout Name={item.Name} Position={item.Position} Content={item.Content}/>);
    }
  }
  
  class TestimonialLayout extends React.Component {
    render() {
      return (
      <React.Fragment>         
      <p className="testimonialAuthor " key={PostTestimonials.id}> {this.props.Name} </p> 
      <p className="testimonialPosition" key={PostTestimonials.id}> {this.props.Position} </p>
      <p className="testimonialText" key={PostTestimonials.id}> {this.props.Content} </p>
      </React.Fragment> 
      );
    }
  }
  

export default PostTestimonials;