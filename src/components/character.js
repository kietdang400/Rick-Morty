import React,{useState} from "react"

const Character=(props)=>{

     const[charactersName,setcharactersName]=useState('');
    const[charactersSpecies,setcharactersSpecies]=useState('');
    const[charactersIMG,setcharactersIMG]=useState('');

    console.log(props.name)
    return(
        <div className='character'>
        </div>
    )
}

export default Character