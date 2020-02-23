import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

state ={
  username:'shujath ali irfan'
}

  state ={
    Persons:[
      {name:"shujath", age:"22"},
      {name:"alih", age:"28"},
      {name:"irfan", age:"29"}
    ],

    showPerson:false
  }


  myFunctionn =() => {

    const doesShow =this.state.showPerson;
    this.setState({showPerson: !doesShow})

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
  render() {
    const mee = {
      fontSize: '16px',
      padding: '9px',
      backgroundColor: 'yellow',
      color: 'black'
    }

    let mai =null;

    if(this.state.showPerson){
      mai =(
      <div>
        <Person changed={this.changed} click={this.myFunction.bind(this,"pathan")}  name={this.state.Persons[0].name} age={this.state.Persons[0].age} currentName={this.state.username} />
    <Person   name={this.state.Persons[1].name} age={this.state.Persons[1].age} />
    <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} />

    </div>)
    }

    return (

      <div className="App">
        <h1>iam a React  developer</h1>
        <button onClick={this.myFunctionn} style={mee} >click me</button>
        {mai}
  </div> 
   )}
}

export default App;