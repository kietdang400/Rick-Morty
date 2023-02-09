import React,{useState} from "react"
import './character.css'
const Character=(props)=>{


    //console.log(props.name)
    return(
        <div className='character'>
            <img src={props.image} alt={props.name}></img>
            <div className="info-container">
                <label className="labels"><u>Name</u></label> <div className="info">{props.name}</div>
                <label className="labels"><u>Species</u></label> <div className="info">{props.species}</div>
                <label className="labels"><u>Gender</u></label> <div className="info">{props.gender}</div>
                <label className="labels"><u>Status:</u></label> <div className="info">{props.status}</div>
            </div>
        </div>
    )
}

export default Character