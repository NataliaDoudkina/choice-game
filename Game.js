import React, { Component } from 'react';
import Box from './Box';
import './Game.css';
import Footer from './Footer'


class Game extends Component{

    static defaultProps={boxes:[
        {question:'Are you an animal or a human?', answer1:'human', answer2:'animal'},
        {question:'Are you a female or male?', answer1:'Female', answer2:'Male', iden:'human'},
        {question:'Are you a carnivour or omnivour?', answer1:'carnivour', answer2:'omnivour', iden:'animal'},
        {question: 'Do you like cooking or cleaning?', answer1:'cooking', answer2:'cleaning', iden: 'Female', last:'answer1'},
        {question: 'Do you like hunting?', answer1:'yes', answer2:'no', iden: 'Male'},
        {question: 'Do you like eating birds?', answer1:'yes', answer2:'no', iden: 'carnivour', last:true},
        {question: 'Do you have a mob?', answer1:'yes', answer2:'no', iden: 'cleaning'},
    ],
    
}
constructor(props){
    super(props);
    this.state={
        index:0,
        prevIndex:0,
        last:false
    }
    this.handleClick=this.handleClick.bind(this);
    this.prevQuestion=this.prevQuestion.bind(this);
    this.backToBegining=this.backToBegining.bind(this);


}

///Click the button to see next question
handleClick(e){
let ind;
let name=e.currentTarget.dataset.id; 
let prev;
if(this.props.boxes[this.state.index].last!==name){
prev = this.props.boxes.indexOf(this.props.boxes[this.state.index])
ind=this.props.boxes.findIndex(curr=>{
   
  if(name==='answer1'){return curr.iden===this.props.boxes[this.state.index].answer1
}    
   else{
    return curr.iden===this.props.boxes[this.state.index].answer2
   }

})

this.setState({
    index:ind,
    prevIndex:prev    
})

}else{    
this.setState({last:true})
}  
}

///go back to previous question
prevQuestion(){
  let newInd = this.state.prevIndex;
this.setState({index:newInd})
}

//// go back to the first question
backToBegining(){
    this.setState({
        index:0,
        prevIndex:0,
        last:false
    })
}

render (){
    
    return (
        <div className='mainContainer'>
           
<Box q={
    this.props.boxes[this.state.index].question} 
    answer1={this.props.boxes[this.state.index].answer1} 
    answer2 = {this.props.boxes[this.state.index].answer2}
    handleChoice = {this.handleClick}/>

            <div>
                <Footer goBack={this.backToBegining} goPrev={this.prevQuestion} status={this.state.last}/>
            </div>
            <p className='lastParagraph'>{this.state.last===true ? "Congrats! You reached the end of the game" : ''}</p>
        </div>
    )



    
  
   

}

}


export default Game;