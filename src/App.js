import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

 state = {
   persons :[
     {name:'shujath', age:44},
     {name:'alssi', age:4},
     {name:'irfan', age:444}
   ],
   showPerson:false
 }

  myFunction =()=>{

const doesShow = this.state.showPerson;
this.setState({
  showPerson: !doesShow
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


  let person =null;
   if(this.state.showPerson){
     person = (
       <div>
        <Person name={this.state.persons[0].name}  age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
       </div>
     )

   }
  return (
    <div className="App">
      <p>iam a developers</p>
      <button onClick={this.myFunction}>click me</button>
      {person}
      
    </div>
  )
}}

export default App;