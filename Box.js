import React, { Component } from 'react';
import './Box.css';

class Box extends Component{

render(){
    return (<div>

<div>
            <h2 className='question'>{this.props.q}</h2>
            <button className='answerBtn' data-id='answer1' onClick={this.props.handleChoice}>{this.props.answer1}</button>
            <button className='answerBtn' data-id='answer2' onClick={this.props.handleChoice}>{this.props.answer2}</button>
            </div>

    </div>
    )
}


}


export default Box;