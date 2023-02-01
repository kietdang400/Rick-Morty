import React,{useState,useEffect} from 'react';
import Citadel from '../IMG/Citadel.jpg';
import Earth from "../IMG/Earth.jpg";
import Pluto from'../IMG/Pluto.jpg';
import Purge from'../IMG/Purge.jpg';
import Bathroom from'../IMG/Bathroom.jpg';
import Snake from '../IMG/Snake_Planet.jpg';
import Unity from '../IMG/Unity.jpg';
import PlanetSquanch from '../IMG/Planet Squanch.jpg';
import './ImageHandler.css'

const ImageHandler=(props)=>{

const[image,setImage]=useState('');
const[noImage,setNoImage]=useState('');

console.log(props.id) // rerenders this image depending on how many renders there are.

useEffect(()=>{
switch(props.id){
    case 1:
       setImage(Citadel);
        setNoImage('Citadel');
    break;
     case 3:
        setImage(Earth);
        setNoImage('Earth');
    break;
     case 78:
        setImage(Pluto);
        setNoImage('Pluto');
    break;
     case 9:
        setImage(Purge);
        setNoImage('Purge');
    break;
     case 28:
        setImage(Bathroom);
        setNoImage('Bathroom');
    break;
     case '?':
        setImage(Snake);
        setNoImage('Snake');
    break;
     case 47:
        setImage(PlanetSquanch);
        setNoImage('PlanetSquanch');
    break;
     case 35:
        setImage(Unity);
        setNoImage('Unity');
    break;
}
},[props.id])


//<img src={image} alt={noImage}></img>
    return(
        <div className='ImageHandler'>
           <img className="image" src={image} alt={noImage}></img>
        </div>
    );
}

export default ImageHandler