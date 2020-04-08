import React, { Component } from 'react';
import './Box.css';
//import RandomPerson from './RandomPerson'

class Box extends Component{


 

render(){
   
    return (<div>

<div>
<p>{this.props.paragraph}</p>
           
{this.props.option1!==undefined?  <button className='answerBtn'
             data-id='option1'
             onClick={this.props.handleChoice}>{this.props.option1}</button>:null}

            <button className='answerBtn'
             data-id='option2'
             onClick={this.props.handleChoice}>{this.props.option2}</button>

             {this.props.option3!==undefined?  <button className='answerBtn'
             data-id='option3'
             onClick={this.props.handleChoice}>{this.props.option3}</button>:null}

{this.props.option4!==undefined?  <button className='answerBtn'
             data-id='option4'
             onClick={this.props.handleChoice}>{this.props.option4}</button>:null}
         
                    </div>

    </div>
    )
}


}


export default Box;