import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

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
        {this.state.persons.map((person,index)=> {
          return <Person 
          click ={()=>this.deleteHandler(index)}

          
          name={person.name} age={person.age} key={person.id} />
        })}
      
        
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