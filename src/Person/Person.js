import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <React.Fragment>
        <h1 className="Person">my name is {props.name} </h1>
        <button onClick={props.clickMe}>click from childern</button>
        <h2>{props.children}</h2>
        </React.Fragment>
    );
}   

export default person;