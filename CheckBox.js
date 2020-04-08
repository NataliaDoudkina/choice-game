import React, { Component } from 'react';

class CheckBox extends Component{


render(){
    return (

        <div>
        
            <label htmlFor={this.props.id}>{this.props.label}
            <input type='radio'
            name={this.props.name}
             value={this.props.value}
              id={this.props.id} 
     checked={this.props.checked}
               onChange={this.props.handleChange}/>
            </label>
     
        </div>
    )
}

}

export default CheckBox;