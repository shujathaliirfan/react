import React,{Component} from 'react';
// import './Person.css'
import styled from 'styled-components'

const StyleDiv = styled.div`

    width:60%;
    margin:16px auto;
    border:1px solid #eee;
    box-shadow: 0px 2px 3px #cccc;
    padding:16px;
    text-align:center;  


@media (min-width:500px){
    width:450px;
}
`

var Person =(props) =>{   
   
return(
<StyleDiv>
<p onClick={props.click}>I'm a  {props.name} react developer  and iam just {props.age} </p>

 <input type="text" onChange={props.changed} value={props.currentName} />
 </StyleDiv>
 ) 
}

export default Person;