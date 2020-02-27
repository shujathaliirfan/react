import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

import styled from 'styled-components'


const StyledButton  =styled.button`

background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover{
    background-color: orange;
    color:white;

  }`;

class App extends Component {

 state = {
   persons :[
     {id:'1',name:'shujath', age:44},
     {id:'2', name:'alssi', age:4},
     {id:'3', name:'irfan', age:444}
   ],
   showPerson:false
 }

  myFunction =()=>{

const doesShow = this.state.showPerson;
this.setState({
  showPerson: !doesShow
})
  }

  deleteHandler =(personIndex) =>{
    const drray = this.state.persons;
    drray.splice(personIndex,1);
    this.setState({
      persons:drray
    })
  }


  nameChange=(event,id)=>{
    const personIndex =this.state.persons.findIndex(p=>{
      return p.id===id
    }) 

    // ==updated details below is======

  const person ={ ...this.state.persons[personIndex]}

  person.name =event.target.value;
  const persons =[...this.state.persons];
  persons[personIndex] =person;
  this.setState({
    persons:persons
  })

}
  
  

render(){

  // myName  =(
  //   <div>
  // {this.state.persons.map(person=>{
  //   return <Person name={person.name}  age={person.age} />
  // })}

  //   </div>
  // )
  // }

  let style ={
    backgroundColor:'red',
    ':hover':{
      backgroundColor:'lightgreen',
      color:'black'
    }
  }


  let person =null;
   if(this.state.showPerson){
     person = (
       <div>
        {this.state.persons.map((person,index)=> {
          return <Person 
          click ={()=>this.deleteHandler(index)}

          changed ={(event)=>this.nameChange(event,person.id)}

          
          name={person.name} age={person.age} key={person.id} />
        })}
      
        
       </div>
     )
    style.backgroundColor ='blue';
    style[':hover']={
      backgroundColor:'yellow',
      colo:'brown'
    }
   }


   let classes =[];
   if(this.state.persons.length <=2){
     classes.push('red')
   }
   if(this.state.persons.length <=1){
    classes.push('red')
  }
  return (
    
    <div className="App">
      <p className={classes.join('')}>iam a developers</p>
      {/* <button style={style} onClick={this.myFunction}>click me</button> */}
      <StyledButton  onClick={this.myFunction}>click me</StyledButton> 
           {person}
      
    </div>
   
  )
}}

export default  App;