import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    render () {
        return (
            <input type="text"  name='message' value={this.props.value} placeholder={this.props.placeholder} onChange={(event) => this.props.changed(event)} onKeyPress={this.props.onKeyPress}></input>
        ); 
    }
}

export default Form;