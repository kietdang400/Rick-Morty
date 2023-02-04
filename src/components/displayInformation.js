import React,{useEffect,useState} from "react";
import OverView from "./OverView";
import Character from "./character"; 
import Cards from "./cards";
import axios, { all } from "axios";
import './displayInformation.css'
const DisplayInformation=(props)=>{

    const[characters,setCharacters]=useState([]);
   
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


console.log(characters);
// population={props.information.Residents[0].length} population is unknown when DOM renders causes page to not load
/*{characters.map(character=>{
        return<Character 
        key={Math.random()*1000}
        name={character.data.name} 
        species={character.data.species} 
        image={character.data.image}
        gender={character.data.gender}
        status={character.data.status}>
        </Character>})}*/
    return(
        <div className="DisplayInformation">
        <OverView location={props.information.LocationName} characters={characters}></OverView>
        <Cards type={props.information.Type} dimension={props.information.Dimension} ></Cards>
        </div>
    )
}

export default DisplayInformation;