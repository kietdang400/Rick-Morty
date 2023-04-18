import React,{useState,useEffect, useRef} from 'react';
import Citadel from '../IMG/Citadel.jpg';
import Earth from "../IMG/Earth.jpg";
import Pluto from'../IMG/Pluto.jpg';
import Purge from'../IMG/Purge.jpg';
import Immortality from'../IMG/Immortality.jpg';
import Snake from '../IMG/Snake_Planet.jpg';
import Unity from '../IMG/Unity.jpg';
import PlanetSquanch from '../IMG/Planet Squanch.jpg';
import Central from '../IMG/Central Finite.jpg';
import EvilMorty from '../IMG/Evil Morty.png'
import Rick from '../IMG/Rick Sanchez.png';
import CitadelOfRicks from '../IMG/Council of Ricks.png';
import snake from '../IMG/Snakes.png';
import UnityPerson from '../IMG/Unity.png';
import Whirly from '../IMG/Whirly.png';
import Plutonium from '../IMG/Plutonium.png';
import Purgers from '../IMG/Purgers.png';
import squanch from '../IMG/Squanchy.png';
import './ImageHandler.css';



const ImageHandler=(props)=>{

const[image,setImage]=useState(Central);
const[noImage,setNoImage]=useState('');
const[popUp,setPopUp]=useState('');
const[translateUp,setTranslateUp]=useState();
console.log(props.id) // rerenders this image depending on how many renders there are.

useEffect(()=>{
switch(props.id){
    case 1:
       setImage(Earth);
        setNoImage('Earth');
        setPopUp(Rick);
    break;
     case 3:
        setImage(Citadel);
        setNoImage('Citadel');
        setPopUp(CitadelOfRicks);
    break;
     case 78:
        setImage(Snake);
        setNoImage('Snake');
        setPopUp(snake);
    break;
     case 9:
        setImage(Purge);
        setNoImage('Purge');
        setPopUp(Purgers);
    break;
     case 28:
        setImage(Unity);
        setNoImage("Unity's Planet");
        setPopUp(UnityPerson);
    break;
     case 7:
        setImage(Immortality);
        setNoImage('Immortality Field');
        setPopUp(Whirly);
    break;
     case 47:
        setImage(Pluto);
        setNoImage('Pluto');
        setPopUp(Plutonium);
    break;
     case 35:
        setImage(PlanetSquanch);
        setNoImage('PlanetSquanch');
        setPopUp(squanch);
    break;
}
},[props.id])

const windowSize = useRef(window.innerWidth);

const[imortalityImage,setImortalityImage]=useState('');


    return(
        <div className='ImageHandler'>
           {window.innerWidth>1200&&<img className="popUp" src={popUp} alt="Pop up Image" style={{transform:translateUp}}></img>}
           <img className="image" src={image} alt={noImage} onMouseEnter={()=>{setTranslateUp("translateY(-250px)")}} onMouseLeave={()=>{setTranslateUp("translateY(0px)")}}></img>
        </div>
    );
}

export default ImageHandler