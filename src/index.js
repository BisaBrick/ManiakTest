import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TestimonialPage from './TestimonialPage'
import CalculatorPage from './CalculatorPage'


const App = () => {
    return (

        <BrowserRouter>
            <div>
                <Switch>
                <Route exact path="/" component={TestimonialPage} />
                <Route path="/calculator" component={CalculatorPage} />
                </Switch> 
            </div>

        </BrowserRouter>

    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
