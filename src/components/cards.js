import React,{} from "react"
import './card.css'


const card=(props)=>{

    return(
        <div className="card">
            <div className="grid-container">
            <div className="grid-items card1"><label className="title"> Type </label>
            <div className="content">{props.type1}</div>
            <div>String temp=null System.out.println(File not found!)</div>
            </div>
            <div className="grid-items"><label className="title">Dimension: </label><div className="content">{props.dimension1}</div>
            <div>String temp=null System.out.println(File not found!)</div></div>
            <div className="grid-items"><label className="title">Population: </label><div className="content">{props.population}</div>
            <div>String temp=null System.out.println(File not found!)</div></div>
            </div>
        </div>
    )
}

export default card