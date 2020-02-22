import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {



  state ={
    Persons:[
      {name:"shujath", age:"22"},
      {name:"alih", age:"28"},
      {name:"irfan", age:"29"}



    ]
  }

myFunction = (newName) =>{
  this.setState({
    Persons:[
      {name:"kamran", age:"266"},
      {name:newName, age:"666"},
      {name:"muzammil", age:"88"}
    ]

  })
}



changed =(event)=>{
  this.setState({
    Persons:[
      {name:event.target.value, age:"266"},
      {name:'max', age:"666"},
      {name:"muzammil", age:"88"}
    ]

  })

}
render(){
  const mee={
    fontSize:'16px',
    padding:'9px',
    backgroundColor:'yellow',
    color:'black'



  }

  return (

  <div className="App">
    <h1>iam  React a developer</h1>

    <button style={mee} onClick={this.myFunction.bind(this,'khaaali')}>click me</button>

    <Person changed={this.changed} click={this.myFunction.bind(this,"pathan")}  name={this.state.Persons[0].name} age={this.state.Persons[0].age}  currentName/>
    <Person   name={this.state.Persons[1].name} age={this.state.Persons[1].age} />
    <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} />






  </div> 
   )}
}

export default App;