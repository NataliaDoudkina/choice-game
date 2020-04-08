import React, { Component } from 'react';


class Character extends Component{

render(){
    return(
        <div>

<p>Your character'name is : {this.props.username}</p>
<p>Your character is :     {this.props.character}</p>
<p>Your character's job is : {this.props.job}</p>
<p>Your character'gender is : {this.props.gender}</p>
<p>You have a bag of money</p>


        </div>
    )
}

}

export default Character