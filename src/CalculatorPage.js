import React from 'react';
import Calculator from './Calculator';
import NavBar from './NavBar';


const CalculatorPage = () =>{
    return (

        <div className="container"> 
            <NavBar/>
            <Calculator/>
        </div>
    );
}

export default CalculatorPage;