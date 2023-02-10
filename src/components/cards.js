import React,{} from "react"
import './card.css'

const card=(props)=>{

    return(
        <div className="card">
            <div className="grid-container">
            <div className="grid-items card1"><label className="title">Type: </label>{props.type1}</div>
            <div className="grid-items"><label className="title">Dimension: </label>{props.dimension1}</div>
            <div className="grid-items"><label className="title">Population: </label>{props.population}</div>
            </div>
        </div>
    )
}

export default card