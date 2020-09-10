import React,{Component} from 'react';
import './Person.css';

const person = (props) => {
  return(
      <div className="Person">
        <p onClick={props.click}>Image tags for  {props.age}  years old {props.name} are</p>
          <p>underEyeWrinkles : {props.underEyeWrinkles} foreheadWrinkles : {props.foreheadWrinkles}  darkCircles : {props.darkCircles}</p>
          <p>skinage : {props.skinage}  elasticity : {props.elasticity} firmness : {props.firmness}</p>
          <p>UVINDEX : {props.uvindex} SunburnTime : {props.SunburnTime} O3- Ozone level : {props.o3Level}</p>
          <p>CautionaryStatement : {props.CautionaryStatement}</p>
          <p> Recommended Sydney Article : (Show Relevant article, Enroll Action plans)</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    )};

export default person;
