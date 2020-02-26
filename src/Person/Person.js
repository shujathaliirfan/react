import React,{Component} from 'react';
import './Person.css'

var Person =(props) =>{
return(
<div className="pperson">
<p onClick={props.click}>I'm a  {props.name} react developer  and iam just {props.age} </p>

 <input type="text" onChange={props.changed} value={props.currentName} />
</div>
 ) 
}

export default Person;