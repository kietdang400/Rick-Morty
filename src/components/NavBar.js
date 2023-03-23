import React,{useEffect, useState} from "react";
import './NavBar.css'
const NavBar=(props)=>{

    const navBarToggle=()=>{
    var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
    }



const[place,selectPlace]=useState('');
useEffect(()=>{
var x = document.getElementById("myTopnav");
 x.className = "topnav";
},[place])

console.log(place);

props.locationPicked(place);



    return(
<div className='NavBar'>
<div className="topnav" id="myTopnav">
  <a href="#home" className="active">Rick and Morty Locations</a>
  <a href="#news" onClick={()=>{selectPlace(1)}} value='1'>Earth (C-137)</a>
  <a href="#contact" onClick={()=>{selectPlace(3)}} value='3'>Citadel of Ricks</a>
  <a href="#about" onClick={()=>{selectPlace(78)}} value='78'>Snake Planet</a>
  <a href="#about" onClick={()=>{selectPlace(28)}} value='28'>Unity’s Planet</a>
  <a href="#about" onClick={()=>{selectPlace(7)}} value='7'>Immortality Field Resort</a>
  <a href="#about" onClick={()=>{selectPlace(47)}} value='47'>Pluto</a>
    <a href="#about" onClick={()=>{selectPlace(9)}} value='9'>Purge Planet</a>
    <a href="#about" onClick={()=>{selectPlace(35)}} value='35'>Planet Squanch</a>
  <a href="javascript:void(0);" className="icon" onClick={navBarToggle}>
    <i className="fa fas fa-bars" ></i>
  </a>
</div>
</div>
    )
}

export default NavBar;