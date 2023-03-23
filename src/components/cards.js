import React,{} from "react"
import './card.css'


const card=(props)=>{

    console.log(props.dimension1)
    return(
        <div className="card" >
            <div className="grid-container">
            <div className="grid-items card1"><label className="title"> <u>Type </u></label>
            <div className="content">{props.type1===undefined?'N/A':props.type1}</div>
            
            </div>
            <div className="grid-items"><label className="title"> <u>Dimension </u></label><div className="content">{props.dimension1===undefined?'N/A':props.dimension1}</div>
            </div>
            <div className="grid-items"><label className="title"> <u>Population </u></label><div className="content">{props.population}</div>
            </div>
            </div>
        </div>
    )
}

export default card