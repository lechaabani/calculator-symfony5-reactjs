import React, { Component } from 'react';
import Button from './Button';
const axios = require('axios');
const CALC_URL = '/result';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {expression: ""};
    }

    /**
     * Listen to the click event
     *
     * @param button
     */
    onClick = button => {
        if(button === "="){
            let context = this;
            axios.post(CALC_URL, {
                data:  this.state.expression,
            }).then(function (response) {
                    context.setState({expression: eval(response.data.result)});
            })
            .catch(function (error) {
                context.setState({expression: error});
            });
        }
        else if(button == "C"){
            this.clear()
        }
        else if(button === "CE"){
            this.sliceSpace()
        }
        else {
            this.setState({
                expression:  this.state.expression + button
            })
        }
    };

    clear = () => {
        this.setState({
            expression: ""
        })
    };

    sliceSpace = () => {
        this.setState({
            expression: this.state.expression.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator">
                    <h1>Calculator With Symfony5 and ReactJs</h1>
                    <div className="result">
                        <p>{this.state.expression}</p>
                    </div>
                    <Button onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default Calculator;
