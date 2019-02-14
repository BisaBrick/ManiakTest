import React from 'react';
import "./css/index.css";
import NavBar from './NavBar';
import Testimonial from './Testimonial';



const TestimonialPage = () =>{
    return (

        <div className="container">        
        <NavBar />  
        <Testimonial/>
        </div>
    );
}

export default TestimonialPage;