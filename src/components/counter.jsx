import React, { Component } from 'react';

class Counter extends Component {
    render() {
        state = {
            count: 0,
            address: {
                street: ''
            }
        }
        return (
            <React.Fragment>
                <span> Hello World</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}
 
export default Counter;