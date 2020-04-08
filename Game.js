import React, { Component } from 'react';
import Box from './Box';
import './Game.css';
import Footer from './Footer'
import CharacterForm from './CharacterForm'
import Character from './Character'
import data from './data/data.json'



class Game extends Component{

constructor(props){
    super(props);
    this.state={
        index:0,
        prevIndex:0,
        last:false,
        character:'',
        job:'',
        gender:'',
        username:'',
        charStatus:false,
        optionsLength:4,
        person:'',
        randomPersons:['burly man', 'thief', 'rich man', 'wizard'],
        lastOption:false,
        removeOption:false
            
    }
    this.handleClick=this.handleClick.bind(this);
    this.prevQuestion=this.prevQuestion.bind(this);
    this.backToBegining=this.backToBegining.bind(this);
    this.changeState=this.changeState.bind(this);
   // this.chooseRandomPersonIndex=this.chooseRandomPersonIndex(this)
}


handleClick(e){
    let ind;
let name=e.currentTarget.dataset.id; 
let optionsLength;
let prev;
let person;
this.setState({
    lastOption:false,
   })
 /*  if(this.state.randomPersons.length===0){
       this.setState({
        removeOption:true
       })
   }*/
//if(data.paragraphs[this.state.index].last!==name)
if((!data.paragraphs[this.state.index].options[0].randomPerson&&
    (!data.paragraphs[this.state.index].last))){//name
prev = data.paragraphs.indexOf(data.paragraphs[this.state.index])
ind=data.paragraphs.findIndex(curr=>{
   
  if(name==='option1'){return curr.id===data.paragraphs[this.state.index].options[0].id
}    
   else {
    return curr.id===data.paragraphs[this.state.index].options[1].id
   }

})

if(data.paragraphs[ind].hasOwnProperty('options')){
    optionsLength=data.paragraphs[ind].options.length
}else{
    if(data.paragraphs[ind].hasOwnProperty('lastOption')){
        ind=3
        this.setState({
            lastOption:true,
                   })
                   optionsLength=3
    }
    if(data.paragraphs[ind].hasOwnProperty('last')){
        this.setState({
            last:true
        })
    }
  
}    
this.setState({
    index:ind,
    prevIndex:prev,
    optionsLength:optionsLength    
})

}else{   
    console.log('IN HANDLE EMPTY PERSONS')
    console.log('arra y length '+this.state.randomPersons.length)
    console.log('removeOption '+this.state.removeOption)
    this.handleEmptyArrayOfRandomPersons(this.state.randomPersons)
 /*   if(this.state.randomPersons.length>0){
        person= this.genRandomPerson(this.state.randomPersons);
        this.handleRandomPerson(person);
    }else{
        let removeOption;
        let indexLast=data.paragraphs[ind].options[0].option1.id
        if(indexLast==='randomPerson'){
removeOption=true
        }
       this.setState({
           index:3,
           removeOption:removeOption
       })
    }*/
    } 
}

//handle empty array of random persons
handleEmptyArrayOfRandomPersons(arr){
    let person;
    let index;
    let removeOption;
    if(arr.length>0){
        person= this.genRandomPerson(this.state.randomPersons);
        this.handleRandomPerson(person);
    }else{
       
    //    let indexLast=data.paragraphs[this.state.index].options[0].option1.id
     //   if(indexLast==='randomPerson'){
        removeOption=true
      //  }
       this.setState({
           index:3,
           removeOption:removeOption
       })
    }
}





//generate random person

genRandomPerson(arr){

    let rand = Math.round(Math.random()*(arr.length-1))
    let person=arr[rand] 
    this.setState({
        person:person,
        randomPersons:arr
    })  
    arr.splice(rand,1) 
    if(arr.length===0){
        this.setState({
            removeOption:true
        })
    } 
    return person;
    
}
//random person function
handleRandomPerson(person){
    let ind;

    if ((person==='burly man'||person==='rich man')){       
        let ind = 3;
        this.setState({index:ind})
   
    }else if(person==='thief'){
        ind=data.paragraphs.findIndex(curr=>{
            return curr.id==='thief'
    })
        this.setState({
            optionsLength:2,
            index:ind,
                    })
    }else if(person==='wizard'){
        ind=data.paragraphs.findIndex(curr=>{
            return curr.id==='wizard'
    })
    this.setState({
        optionsLength:2,
        index:ind,
                })
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
        last:false,
           })
}

////CHange state with the values from character form
changeState(character,job,gender,username, charStatus){

this.setState({
    character: character,
    job:job,
    gender:gender,
    username:username,
    charStatus:true  
})
   
}


chooseRandomPersonIndex(person){
    let ind;
    if(person==='burly man'){
        ind=data.paragraphs.findIndex(curr=>{
            return curr.id==='burly_man'
        })
    }
    
    else if(person==='rich man'){
        ind=data.paragraphs.findIndex(curr=>{
            return curr.id==='rich_man'
    })
    }
    
    if (this.state.lastOption){
        if(person==='thief'){
            ind=9
        }
    else if(person==='wizard'){
        ind=11
    }
    }

return ind;

}


render (){

    let charStatus=this.state.charStatus
    let part; 
    let ind;
    ind = this.chooseRandomPersonIndex(this.state.person)

/*if(this.state.person==='burly man'){
    ind=data.paragraphs.findIndex(curr=>{
        return curr.id==='burly_man'
    })
}

else if(this.state.person==='rich man'){
    ind=data.paragraphs.findIndex(curr=>{
        return curr.id==='rich_man'
})
}

if (this.state.lastOption){
    if(this.state.person==='thief'){
        ind=9
    }
else if(this.state.person==='wizard'){
    ind=11
}
}*/

    if(!charStatus)
    {
      part= <CharacterForm changeState={this.changeState} />    
    }else{
        
        if(!this.state.last){
            part= 
            <div>
            <Character character={this.state.character}
            job={this.state.job}
            gender={this.state.gender}
            username={this.state.username}/>
    
        <Box paragraph={(this.state.person===''||this.state.person==='thief'||this.state.person==='wizard')&&!this.state.lastOption?data.paragraphs[this.state.index].paragraph: data.paragraphs[ind].paragraph}
         
        option1={(!this.state.removeOption)?data.paragraphs[this.state.index].options[0].option1:undefined}
        
        option2={data.paragraphs[this.state.index].options[1].option2}
        option3={this.state.optionsLength>2?data.paragraphs[this.state.index].options[2].option3:undefined}
        option4={ this.state.optionsLength===4?data.paragraphs[this.state.index].options[3].option4:undefined}
        handleChoice = {this.handleClick}/>

<Footer goBack={this.backToBegining} goPrev={this.prevQuestion} status={this.state.last}/>
        </div>
        }else{
            part=
            <div>
        <p>{data.paragraphs[this.state.index].paragraph}</p>
            <p className='lastParagraph'>{ "Congrats! You reached the end of the game" }</p>
            </div>
        }
    }
    return (
        <div className='mainContainer'>          
       {part}
             <div>              
            </div>          
        </div>
    )
}
}


export default Game;