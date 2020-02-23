import React,{Component} from 'react';
import './Person.css'

var Person =(props) =>{
return(
<div className="pperson">
<p>I'm a {props.name} react developer  and iam just {props.age}</p>
 {/* <p onClick={props.click}>my secomd p re beta maafi chaahta hoon</p>9 */}
 <input type="text" onChange={props.changed} value={props.currentName} />
</div>
 ) 
}

export default Person;