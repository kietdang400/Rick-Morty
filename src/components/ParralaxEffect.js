import React,{useEffect,useState} from "react";
import spaceBackGround from '../IMG/space-background.png';
import Falling from '../IMG/Falling.png';

import curve1 from '../IMG/curvep1.jpg';
import curve2 from '../IMG/curvep2.jpeg';
import curve3 from '../IMG/curvep3.jpg';
import curve4 from '../IMG/curvep4.jpg';

import MortyTalking from '../IMG/MortyTalksJessica.jpg';
import RickMakesLovePotion from '../IMG/RickMakesLovePotion.jpg';
import Cronenberg from '../IMG/cronenberg.jpg';
import RickandMortyDead from '../IMG/RickandMortyDead.jpg';

import CitadelOfRicksP1 from '../IMG/CitadelOfRicksPart1.jpg';
import CitadelOfRicksP2 from '../IMG/CitadelOfRicksPart2.jpg';
import CitadelOfRicksP3 from '../IMG/CitadelOfRicksPart3.jpg';
import CitadelOfRicksP4 from '../IMG/CitadelOfRicksPart4.jpg';

import SnakePlanetP1 from '../IMG/SnakePlanetPart1.jpg';
import SnakePlanetP2 from '../IMG/SnakePlanetPart2.jpg';
import SnakePlanetP3 from '../IMG/SnakePlanetPart3.jpg';
import SnakePlanetP4 from '../IMG/SnakePlanetPart4.jpg';

import PlanetUnityP1 from '../IMG/PlanetUnityPart1.jpg';
import PlanetUnityP2 from '../IMG/PlanetUnityPart2.jpg';
import PlanetUnityP3 from '../IMG/PlanetUnityPart3.jpg';
import PlanetUnityP4 from '../IMG/PlanetUnityPart4.jpg';

import PlutoP1 from '../IMG/PlutoPart1.jpg';
import PlutoP2 from '../IMG/PlutoPart2.jpg';
import PlutoP3 from '../IMG/PlutoPart3.gif';
import PlutoP4 from '../IMG/PlutoPart4.jpg';

import ImmortalityFieldP1 from '../IMG/ImmortalityFieldPart1.jpg';
import ImmortalityFieldP2 from '../IMG/ImmortalityFieldPart2.jpg';
import ImmortalityFieldP3 from '../IMG/ImmortalityFieldPart3.jpg';
import ImmortalityFieldP4 from '../IMG/ImmortalityFieldPart4.jpg';

import Purge1 from '../IMG/Purge1.png';
import Purge2 from '../IMG/Purge2.png';
import Purge3 from '../IMG/Purge3.png';
import Purge4 from '../IMG/Purge4.png';

import Squanchy1 from '../IMG/Squanchy1.png';
import Squanchy2 from '../IMG/Squanchy2.png';
import Squanchy3 from '../IMG/Squanchy3.png';
import Squanchy4 from '../IMG/Squanchy4.png';

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './ParralaxEffects.css'
const ParralaxEffect=(props)=>{


 const[img1,setIMG1]=useState(curve4); 
 const[img2,setIMG2]=useState(curve1);
 const[img3,setIMG3]=useState(curve2);
 const[img4,setIMG4]=useState(curve3);  
 const[content1,setContent1]=useState("");
const[content2,setContent2]=useState("");
const[content3,setContent3]=useState("");
const[content4,setContent4]=useState("");


useEffect(()=>{
    switch(props.information.LocationName){
        case "Earth (C-137)":
            setIMG1(MortyTalking);
            setContent1("Morty ask Jessica to the annual school dance");
            setIMG2(RickMakesLovePotion);
            setContent2("Rick makes Morty Love Potion");
            setIMG3(Cronenberg);
            setContent3("People started turning into Cronenberg");
            setIMG4(RickandMortyDead);
            setContent4("Rick and Morty jump dimension");
        break;
          case "Citadel of Ricks":
            setIMG1(CitadelOfRicksP1);
            setContent1("Many Rick and Morty living in the Citadel.");
            setIMG2(CitadelOfRicksP2);
            setContent2("The Ricks are divided into different classes based on their level of intelligence.");
            setIMG3(CitadelOfRicksP3);
            setContent3("Mortys tell Morty about their disenchantment with their lack of upward mobility in Citadel.");
            setIMG4(CitadelOfRicksP4);
            setContent4("Ends with a twist ");
        break;
          case "Snake Planet":
            setIMG1(SnakePlanetP1);
            setContent1("Planet is inhabited by highly advanced and intelligent snakes.");
            setIMG2(SnakePlanetP2);
            setContent2("Snake bites Morty and Morty returns the snake.");
            setIMG3(SnakePlanetP3);
            setContent3("Snake realize they are not alone in the universe and tries to kill Morty.");
            setIMG4(SnakePlanetP4);
            setContent4("Shleemypants went back in time to stop snakes from evolving to smart creatures.");
        break;
          case "Unity's Planet":
            setIMG1(PlanetUnityP1);
            setContent1("Rick reocndile's relationship with Unity.");
            setIMG2(PlanetUnityP2);
            setContent2("Unity becomes self destructive.");
            setIMG3(PlanetUnityP3);
            setContent3("Morty tries to persuade Unity to leave Rick.");
            setIMG4(PlanetUnityP4);
            setContent4("Unity dates a different Alien.");
        break;
          case "Pluto":
            setIMG1(PlutoP1);
            setContent1("Jerry and Morty invited to Pluto");
            setIMG2(PlutoP2);
            setContent2("Jerry persuades Plutonian that Pluto is a planet");
            setIMG3(PlutoP3);
            setContent3("Jerry takes back his word about Pluto being a planet");
            setIMG4(PlutoP4);
            setContent4("Morty and Jerry returns home");
        break;
          case "Purge Planet":
            setIMG1(Purge1);
            setContent1("Rick and Morty visit Purge Planet");
            setIMG2(Purge2);
            setContent2("They save Arthricia");
            setIMG3(Purge3);
            setContent3("Morty participates in the Purge");
            setIMG4(Purge4);
            setContent4("Rick and Morty overthrow the rich running the Purge");
        break;
          case "Planet Squanch":
            setIMG1(Squanchy1);
            setContent1("Family get's invited to Birdperson and Tammy's wedding");
            setIMG2(Squanchy2);
            setContent2("BirdPerson and Tammy marry on the beach");
            setIMG3(Squanchy3);
            setContent3("Tammy reveals shes a Galatic Agent");
            setIMG4(Squanchy4);
            setContent4("Rick turns himself into the Galactic Federation to protect his family");
        break;

          case "Immortality Field Resort":
            setIMG1(ImmortalityFieldP1);
            setContent1("Rick invites Jerry on a adventure");
            setIMG2(ImmortalityFieldP2);
            setContent2("They lounge at the bar. Then Jerry turns on Rick.");
            setIMG3(ImmortalityFieldP3);
            setContent3("Jerry saves Rick on the Whirly Dirly");
            setIMG4(ImmortalityFieldP4);
            setContent4("Rick and Jerry call truths");
        break;
    }
},[props.information.LocationName])


console.log()
    return(
        <div className="Parralax">
            <Parallax pages={2} className="parralax" style={{backgroundImage:`url(${spaceBackGround})`}}>
                <ParallaxLayer className="parralaxLayer"offset={0} speed={1} style={{backgroundImage:`url(${img1})`, backgroundSize:"contain"}}>
                    </ParallaxLayer>
                <ParallaxLayer offset={0.7} speed={1.5}  style={{backgroundImage:`url(${img2})`, backgroundSize:"contain"}} >
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={2} factor={1}style={{backgroundImage:`url(${img3})`, backgroundSize:"contain"}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.5} speed={3} factor={2} style={{backgroundImage:`url(${img4})`, backgroundSize:"contain"}}>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{start:0.2, end:3}} style={{textAlign:'center'}}>
                        <img src={Falling} alt="falling in portal"></img>
                        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.01}>
          <h2 className="parralax-content">{content1}</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.05}>
         <h2>{content2}</h2>
        </ParallaxLayer>
         <ParallaxLayer offset={1} speed={0.05}>
         <h2>{content3}</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={0.05}>
         <h2>{content4}</h2>
        </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ParralaxEffect;