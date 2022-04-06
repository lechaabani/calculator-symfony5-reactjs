import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './components/Calculator.js';

class App extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <Calculator />
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

