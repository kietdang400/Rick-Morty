import React,{} from "react"
import './card.css'

const card=(props)=>{

    return(
        <div className="card">
            <div className="Type"><label>Type: </label>{props.type}</div>
            <div className="Dimension"><label>Dimension: </label>{props.dimension}</div>
            <div className="Population"><label>Population: </label>{props.population}</div>
        </div>
    )
}

export default card