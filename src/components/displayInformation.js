import React,{useEffect,useState} from "react";
import OverView from "./OverView";
import Cards from "./cards";
import axios, { all } from "axios";
import './displayInformation.css'
const DisplayInformation=(props)=>{

    const[characters,setCharacters]=useState([]);
   const[population,setPopulation]=useState(0);
   
useEffect(()=>{
setCharacters([])
},[props.information.LocationName])

    useEffect(()=>{
        if(props.information.Residents[0]!==undefined){
            props.information.Residents[0].map(characters=>{axios.get(characters).then((response)=>{
           setCharacters((previouse)=>{return[...previouse,response]})
        })})
        }
    },[props.information.Residents[0]])

const populationFunction=(population)=>{
setPopulation(population)
}

        const scrollDownFunction=(state)=>{
props.scrollDown(state)
        }
    return(
        <div className="DisplayInformation">
        <OverView 
        location={props.information.LocationName} 
        characters={characters} 
        population={populationFunction} 
        type={props.information.Type}
        dimension={props.information.Dimension}
        scrollingDown={scrollDownFunction}
        >
        </OverView>
        
        </div>
    )
}

export default DisplayInformation;