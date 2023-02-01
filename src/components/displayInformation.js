import React,{useEffect,useState} from "react";
import Character from "./character"; 
import axios, { all } from "axios";
const DisplayInformation=(props)=>{

    const[characters,setCharacters]=useState([]);
   
    useEffect(()=>{
        if(props.information.Residents[0]!==undefined){
            props.information.Residents[0].map(characters=>{axios.get(characters).then(async(response)=>{
          await setCharacters((previouse)=>{return[...previouse,response]})})})
        }
    },[props.information.Residents[0]])
console.log(characters);

    return(
        <div className="DisplayInformation">
        {characters.map(character=>{
        return<Character 
        key={Math.random()*1000}
        name={character.data.name} 
        species={character.data.species} 
        image={character.data.image}
        gender={character.data.gender}
        status={character.data.status}>
        </Character>})}
        </div>
    )
}

export default DisplayInformation;