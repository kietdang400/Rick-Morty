import React,{useState} from "react"

const Character=(props)=>{


    //console.log(props.name)
    return(
        <div className='character'>
            <img src={props.image} alt={props.name}></img>
            <div className="info-container">
                <label>Name:</label> <div>{props.name}</div>
                <label>Species:</label> <div>{props.species}</div>
                <label>Gender:</label> <div>{props.gender}</div>
                <label>Status:</label> <div>{props.status}</div>
            </div>
        </div>
    )
}

export default Character