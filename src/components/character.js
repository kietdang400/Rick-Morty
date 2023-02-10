import React,{useState} from "react"
import './character.css'
const Character=(props)=>{


    //console.log(props.name)
    return(
        <div className='character'>
            <img src={props.image} alt={props.name}></img>
            <div className="info-container">
                <label className="labels">Name:</label> <div className="info">{props.name}</div>
                <label className="labels">Species:</label> <div className="info">{props.species}</div>
                <label className="labels">Gender:</label> <div className="info">{props.gender}</div>
                <label className="labels">Status:</label> <div className="info">{props.status}</div>
            </div>
        </div>
    )
}

export default Character