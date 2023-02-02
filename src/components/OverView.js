import React,{useState,useEffect} from "react";
import './OverView.css'

const OverView=(props)=>{

const[description,setDescription]=useState('')

useEffect(()=>{
switch(props.location){
    case "Earth (C-137)":
setDescription("Earth C-137: The universe in which “our” Rick and Morty originated, which they abandoned after they “Cronenberg’d” it.This is the universe the original Jerry, Summer, and Beth currently inhabit.")
    break;
     case "Citadel of Ricks":
setDescription("The Citadel was populated by Ricks and Mortys from across the Central Finite Curve and utilised as a leisure place, meeting point and place of protection for many Ricks and Mortys. However, the Citadel also served as a permanent residence for an untold number of Ricks and Mortys that decided to settle at there.")
    break;
     case "Snake Planet":
setDescription("inhabited by sapient Snakes, which were later reverted out of existence by Time Cops after the snakes started thoughtlessly meddling with time travel technology.")
    break;
     case "Unity's Planet":
setDescription("The planet Unity was entirely assimilated, and plans to use to assimilate the Galactic Federation. However, Unity left the planet with its people following certain events with Rick Sanchez. Unity's current plans for the planet are unknown due to the Federation's destruction in 'The Rickshank Rickdemption'.")
    break;
    case "Rick's Toilet":
setDescription("On a gorgeous lush planet with beautiful exotic plant life and landscape. Breathtaking view with its glittering aurora borealis-like light display in the night sky, running glistening stream nearby, gentle breeze, and distant calls of the wild, Rick takes a poop in isolation.")
    break;
     case "Pluto":
setDescription("Pluto is a dwarf planet located in Earth's Solar System. inhabited by sentient Plutonians. The planet is first mentioned in Something Ricked This Way Comes, when Jerry and Morty Smith are abducted and transported there.")
    break;
     case "Purge Planet":
setDescription(" It is a planet that exists in the Dimension C-131, and is home of cat-like humanoids. On this planet, everyone is very blissful and happy toward everyone because every year there is a purge, where all laws are suspended for the night and everyone is free to kill whoever they want, releasing their anger without consequences.")
    break;
    case "Planet Squanch":
setDescription("It is the planet where Squanchy comes from and it is 6,000 light years away from Earth.Everything seen on Planet Squanch is either undisturbed nature or houses of inhabitants. ")
    break;
     case "Immortality Field Resort":
setDescription("A luxury resort built inside an immortality field.")
    break;
}
},[props.location])
    return(
        <div className="Overview">
            <h1 className="planet-name">{props.location}</h1>
            <div className="description">{description}</div>
        </div>
    )
}

export default OverView;