import React,{useState,useEffect} from "react";
import { CarouselProvider,Slider,Slide,ButtonBack,ButtonNext} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Character from "./character";
import Card from "./cards";
import './OverView.css'

const OverView=(prop)=>{

const[descriptionOverView,setDescriptionOverView]=useState('The Central Finite Curve was designed by the precursors of what would later become the Council of Ricks on The Citadel to wall off the infinite amount of universes in which Rick is the smartest person alive from the rest of the infinite multiverse.');
const[descriptionSummary,setDescriptionSummary]=useState('After Evil Morty breached the Curve and accessed the true multiverse and despite a hologram he activated from his wrist showing all of the universes that make up the Curve popping and disappearing in "Rickmurai Jack", it is currently unknown what the exact fate of the Curve is following these events. The Central Finite Curve was possibly built long before Rick C-137 constructed his Portal Gun.');
const[descriptionButton,setDescriptionButton]=useState(true);
const[SummaryButton,setSummaryButton]=useState(false);
const[CharacterButton,setCharacterButton]=useState(false);


useEffect(()=>{
switch(prop.location){
    case "Earth (C-137)":
setDescriptionOverView("Earth C-137: The universe in which “our” Rick and Morty originated, which they abandoned after they “Cronenberg’d” it.This is the universe the original Jerry, Summer, and Beth currently inhabit.");
setDescriptionSummary("Dimension C-137 is first mentioned in 'Close Rick-Counters of the Rick Kind', by the Council of Ricks. Morty also refers to himself as 'from Dimension C-137', unaware that he is not from the same dimension as Rick.Dimension C-137 is briefly mentioned in 'Mortynight Run', when Rick is asked to identify his home dimension for identification purposes when returning to pick up his Jerry. Because Jerry is not from Rick's home dimension of C-137, Rick marks him as 'N/A'. This might mean that Rick is (or was) uncertain of their current dimension's official alphanumeric identification.");    
break;
     case "Citadel of Ricks":
setDescriptionOverView("The Citadel was populated by Ricks and Mortys from across the Central Finite Curve and utilised as a leisure place, meeting point and place of protection for many Ricks and Mortys. However, the Citadel also served as a permanent residence for an untold number of Ricks and Mortys that decided to settle at there.");
setDescriptionSummary("Through various universes, Rick has been involved through resistance groups against the Galactic Federation, as well as other groups who consider his genius a threat, such as galactic terrorists, sub-galactic dictators and most of the entire Intergalactic government. In the Rick and Morty episode 'The Ricklantis Mixup,' the episode follows different storylines that take place within the Citadel of Ricks, revealing a darker side of the Ricks and Mortys' society. The episode features the election of a new president, the struggles of a Morty cop, and a rebellion led by a group of Mortys.");    
break;
     case "Snake Planet":
     setDescriptionOverView("Inhabited by sapient Snakes, which were later reverted out of existence by Time Cops after the snakes started thoughtlessly meddling with time travel technology.");
   setDescriptionSummary("Morty was bitten by a snake astronaut, so Rick analyzed this planet in order to find an antidote. This led to their discovery of snake jazz, and also the antidote. Morty later returned to this planet to deliver Slippy disguised as the astronaut snake that he previously killed; the return of which sparked a series of events and led to the snakes inventing time travel technology and set in motion a Terminator style war in the near future.");
     break;
     case "Unity's Planet":
setDescriptionOverView("The planet Unity was entirely assimilated, and plans to use to assimilate the Galactic Federation. However, Unity left the planet with its people following certain events with Rick Sanchez. Unity's current plans for the planet are unknown due to the Federation's destruction in 'The Rickshank Rickdemption'.");
setDescriptionSummary("In the Rick and Morty episode 'Auto Erotic Assimilation,' Rick stays with Unity for a while longer, but after leaving to use the bathroom, emerges to find that Unity has deserted the city (and possibly the planet) and written breakup letters across every surface. It confesses its love for Rick, but ultimately concedes that they cannot be together. The episode ends with Rick attempting suicide, but ultimately failing due to his advanced technology.");    
break;
     case "Pluto":
setDescriptionOverView("Pluto is a dwarf planet located in Earth's Solar System. inhabited by sentient Plutonians. The planet is first mentioned in Something Ricked This Way Comes, when Jerry and Morty Smith are abducted and transported there.")
setDescriptionSummary("Jerry chews NASA out about Pluto. The Plutonians decided to abduct him and Morty so the two could serve as representatives of Earth's science to convince the Plutonians that Pluto is a planet.Jerry claims that Pluto is still a planet to the Plutonians. Morty is taken by a environmental activist, who shows Morty that the dwarf planet is shrinking due to mass mining. If the mining continues, Pluto will 'poof' out of existence. Morty tell Jerry, who tells the population of Pluto that it is no longer a planet, resulting in him and Morty being returned to Earth.");    
break;
     case "Purge Planet":
setDescriptionOverView(" It is a planet that exists in the Dimension C-131, and is home of cat-like humanoids. On this planet, everyone is very blissful and happy toward everyone because every year there is a purge, where all laws are suspended for the night and everyone is free to kill whoever they want, releasing their anger without consequences.")
setDescriptionSummary("In the 'Purge Planet' episode of Rick and Morty, the duo travels to a planet where all crime is legal for one night each year. Morty becomes enamored with a local girl and gets caught up in the violent chaos. Meanwhile, Rick tries to acquire a valuable serum, leading to his own set of problems. They ended up participating in the purge by killing some rich magdalians and common magdalians with some of Rick's gadgets called 'Purge Suit'.");    
break;
    case "Planet Squanch":
setDescriptionOverView("It is the planet where Squanchy comes from and it is 6,000 light years away from Earth.Everything seen on Planet Squanch is either undisturbed nature or houses of inhabitants. ")
setDescriptionSummary("Birdperson and Tammy invited a large group of friends and acquaintances to their wedding, all of which were criminals. The Smith Family attended the wedding against Rick's wishes. Squanchy wed Birdperson and Tammy on a beach before a setting star.Later, Tammy exposed herself as an undercover agent for the Galactic Federation and shot Birdperson before Gromflomites crashed in through the roof and raided the event. The Smith family managed to escape in a flying catering van.");   
break;
     case "Immortality Field Resort":
setDescriptionOverView("A luxury resort built inside an immortality field.  Rick brought Jerry here in the episode 'The Whirly Dirly Conspiracy' on Morty's request. There is no direct mention of the immortality resort in 'The Whirly Dirly Conspiracy.' The episode focuses on Rick and Jerry's adventure at an alien resort with a deadly theme park ride. The immortality resort is featured in a separate episode called 'Big Trouble in Little Sanchez'.")
setDescriptionSummary("By Morty's wish, Rick brought Jerry to this resort in order to cheer him up. Once they had arrived Rick was attacked and killed by Shnoopy Bloopers, who in turn was killed by Rick; before resurrecting back to life due to the immortality field. Jerry would later be forced into a backroom by Risotto Groupon and his henchmen in a plot against Rick. This lead Jerry and Rick onto the Whirly Dirly, a popular park ride at the resort, where Risotto had positioned assassins to kill Rick. Jerry would then get cold feet and save Rick , with Rick defeating both Risotto's assassins and henchmen, as well as destroying the immortality field.");   
break;
}
},[prop.location])


const[defaultTitle,setDefaultTitle]=useState("Central Finite Curve");

prop.population(prop.characters.length)

const[scrollDown,setScrollDown]=useState(true);
prop.scrollingDown(scrollDown);


const[scrollDisplay,setScrollDisplay]=useState(true);
prop.ScrollDown(scrollDisplay);



    return(
        <div className="Overview">
          <div className="border">
            <h1 className="planet-name"><u>{prop.location===undefined?defaultTitle:prop.location}</u></h1>
            {descriptionButton&&<div className="description">{descriptionOverView}</div>}
            {SummaryButton&&<div className="summary">{descriptionSummary}</div>}

{CharacterButton&&
<CarouselProvider naturalSlideWidth={100}
naturalSlideHeight={120}
totalSlides={prop.characters.length}
className="carousel">
<Slider className="slider">{prop.characters.map(character=>{
return<Slide><Character 
        key={Math.random()*1000}
        name={character.data.name} 
        species={character.data.species} 
        image={character.data.image}
        gender={character.data.gender}
        status={character.data.status}>
        </Character>
     </Slide>
})}
</Slider>
<ButtonBack className="button-back">Back</ButtonBack>
<ButtonNext className="button-next">Next</ButtonNext>
</CarouselProvider>
}
        <button className="OverView-Button"onClick={()=>{return setDescriptionButton(true), setSummaryButton(false),setScrollDown(true), setCharacterButton(false),setScrollDisplay(true)}}>OverView</button>
        <button className="OverView-Button"onClick={()=>{return setDescriptionButton(false), setSummaryButton(true),setScrollDown(true), setCharacterButton(false),setScrollDisplay(false)}}>Summary</button>
        <button className="OverView-Button"onClick={()=>{return setDescriptionButton(false), setSummaryButton(false),setScrollDown(false), setCharacterButton(true),setScrollDisplay(false)}}>Characters</button>
</div>
        <Card type1={prop.type} dimension1={prop.dimension} population={prop.characters.length} ></Card>
        </div>
    )
}

export default OverView;