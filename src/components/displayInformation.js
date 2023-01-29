import React,{useEffect,useState} from "react";
import axios, { all } from "axios";
const DisplayInformation=(props)=>{

    const[characters,setCharacters]=useState([]);
    const[charactersName,setcharactersName]=useState('');
    const[charactersSpecies,setcharactersSpecies]=useState('');
    const[charactersIMG,setcharactersIMG]=useState('');
    useEffect(()=>{
        if(props.information.Residents[0]!==undefined){
            props.information.Residents[0].map(characters=>{axios.get(characters).then(async(response)=>{
          await setCharacters((previouse)=>{return[...previouse,response]})})})
        }
    },[props.information.Residents[0]])
console.log(characters)

    return(
        <div className="DisplayInformation">

        </div>
    )
}

export default DisplayInformation;