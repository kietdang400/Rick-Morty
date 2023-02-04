import React,{useState,useEffect} from "react";
import Character from "./character";
import './OverView.css'

const OverView=(props)=>{

const[descriptionOverView,setDescriptionOverView]=useState('');
const[descriptionSummary,setDescriptionSummary]=useState('');
const[descriptionButton,setDescriptionButton]=useState(true);
const[SummaryButton,setSummaryButton]=useState(false);
const[CharacterButton,setCharacterButton]=useState(false);

useEffect(()=>{
switch(props.location){
    case "Earth (C-137)":
setDescriptionOverView("Earth C-137: The universe in which “our” Rick and Morty originated, which they abandoned after they “Cronenberg’d” it.This is the universe the original Jerry, Summer, and Beth currently inhabit.");
setDescriptionSummary("Dimension C-137 is first mentioned in 'Close Rick-Counters of the Rick Kind', by the Council of Ricks. Morty also refers to himself as 'from Dimension C-137', unaware that he is not from the same dimension as Rick.Dimension C-137 is briefly mentioned in 'Mortynight Run', when Rick is asked to identify his home dimension for identification purposes when returning to pick up his Jerry. Because Jerry is not from Rick's home dimension of C-137, Rick marks him as 'N/A'. This might mean that Rick is (or was) uncertain of their current dimension's official alphanumeric identification.");    
break;
     case "Citadel of Ricks":
setDescriptionOverView("The Citadel was populated by Ricks and Mortys from across the Central Finite Curve and utilised as a leisure place, meeting point and place of protection for many Ricks and Mortys. However, the Citadel also served as a permanent residence for an untold number of Ricks and Mortys that decided to settle at there.");
setDescriptionSummary("Through various universes, Rick has been involved through resistance groups against the Galactic Federation, as well as other groups who consider his genius a threat, such as galactic terrorists, sub-galactic dictators and most of the entire Intergalactic government. To protect themselves and hide from opposing groups, a 'few thousand' alternate versions of Rick decided to join together and create their own society. In its early stages, this society came into conflict with Rick C-137 who began killing many of its members as he hunted for Rick Prime, the Rick he believed to have killed his family. After C-137 had killed a great many of his counterparts, he and the alliance brokered a peace treaty, one that saw C-137 help design and construct the Citadel. It is presumed the Citadel was in a dimension specifically created by Ricks, similarly to how Evil Rick created his dimension. The Citadel is known to have existed for at least 15 years, which predates main Morty's birth. As revealed in Season 5, different dimensions have Ricks and Mortys at varying ages so Mortys may have existed when it was founded. The Citadel also had armed forces headed by a commander-in-chief comprised mostly of Ricks, though some Mortys could also be seen in their ranks. SEAL Team Ricks appear to be an elite component of these forces. Since many Ricks are against the idea of forming a government due to his own political views, a group of 'anti-Rick' activists are known to exist. Such Ricks include Rick C-137 and the Scientist Formerly Known as Rick.");    
break;
     case "Snake Planet":
     setDescriptionOverView("inhabited by sapient Snakes, which were later reverted out of existence by Time Cops after the snakes started thoughtlessly meddling with time travel technology.");
   setDescriptionSummary("Morty was bitten by a snake astronaut, so Rick analyzed this planet in order to find an antidote. This led to their discovery of snake jazz, and also the antidote. Morty later returned to this planet to deliver Slippy disguised as the astronaut snake that he previously killed; the return of which sparked a series of events and led to the snakes inventing time travel technology and set in motion a Terminator style war in the near future. Rick and Morty then returned to this planet in its past to covertly deliver instructions to the students of Snake M.I.T. covering everything they would need to know to invent time travel many years in advance using snake math. The recently enlightened inhabitants used time travel to alter events in the past and future; the increased activity eventually got picked up by the Time Police. This was at least partially due to one of the students using the technology to prevent the assassination of Snake Abraham Lincoln, leading to a butterfly effect which likely caused Snake Adolf Hitler to win Snake World War II. Shleemypants and his colleague promptly time-traveled to the planet in the distant past after learning what had taken place and beat up the first snake to use a stick as a tool, which prevented the snakes from ever again becoming an advanced species.");
     break;
     case "Unity's Planet":
setDescriptionOverView("The planet Unity was entirely assimilated, and plans to use to assimilate the Galactic Federation. However, Unity left the planet with its people following certain events with Rick Sanchez. Unity's current plans for the planet are unknown due to the Federation's destruction in 'The Rickshank Rickdemption'.");
setDescriptionSummary("Morty was bitten by a snake astronaut, so Rick analyzed this planet in order to find an antidote. This led to their discovery of snake jazz, and also the antidote. Morty later returned to this planet to deliver Slippy disguised as the astronaut snake that he previously killed; the return of which sparked a series of events and led to the snakes inventing time travel technology and set in motion a Terminator style war in the near future. Rick and Morty then returned to this planet in its past to covertly deliver instructions to the students of Snake M.I.T. covering everything they would need to know to invent time travel many years in advance using snake math. The recently enlightened inhabitants used time travel to alter events in the past and future; the increased activity eventually got picked up by the Time Police. This was at least partially due to one of the students using the technology to prevent the assassination of Snake Abraham Lincoln, leading to a butterfly effect which likely caused Snake Adolf Hitler to win Snake World War II. Shleemypants and his colleague promptly time-traveled to the planet in the distant past after learning what had taken place and beat up the first snake to use a stick as a tool, which prevented the snakes from ever again becoming an advanced species.");    
break;
     case "Pluto":
setDescriptionOverView("Pluto is a dwarf planet located in Earth's Solar System. inhabited by sentient Plutonians. The planet is first mentioned in Something Ricked This Way Comes, when Jerry and Morty Smith are abducted and transported there.")
setDescriptionSummary("Pluto first appeared in Something Ricked This Way Comes, when Morty and his father Jerry were making a model of the solar system as a science project for school. When Jerry started to add Pluto to the model, Morty pointed out to him that Pluto was 'no longer a planet.' He then Googled it and confirmed that the celestial body is, in fact, no longer considered a planet, due to several other bodies in the solar system being larger and/or having more planetary mass than Pluto. Jerry, outraged at this change from the science he grew up with, called NASA to chew them out about Pluto, claiming that it is still a planet. Unbeknownst to the Smiths, the Plutonians were monitoring Jerry's phone call, and decided to abduct him and Morty so the two could serve as representatives of Earth's science, and convince the Plutonians once and for all that Pluto is a planet. After Jerry makes several public appearances to the Plutonians, claiming that Pluto is still a planet, Morty is taken aside by the environmental activist Scroopy Noopers, who shows Morty that the dwarf planet is shrinking due to mass mining of Pluto's resources; namely, plutonium. Noopers explains that if the mining continues, Pluto will continue to shrink until it 'poofs' out of existence. Morty reveals this fact to Jerry, who finally folds and announces to the population of Pluto that it is no longer classifiable as a planet, enraging them and resulting in him and Morty being returned to Earth. The future of the planet is unknown, but it is likely that the planet will continue to shrink until it is destroyed, or until the seismic activity caused by the mining of plutonium destroys all life on the planet, as well as the mining facilities.");    
break;
     case "Purge Planet":
setDescriptionOverView(" It is a planet that exists in the Dimension C-131, and is home of cat-like humanoids. On this planet, everyone is very blissful and happy toward everyone because every year there is a purge, where all laws are suspended for the night and everyone is free to kill whoever they want, releasing their anger without consequences.")
setDescriptionSummary();    
break;
    case "Planet Squanch":
setDescriptionOverView("It is the planet where Squanchy comes from and it is 6,000 light years away from Earth.Everything seen on Planet Squanch is either undisturbed nature or houses of inhabitants. ")
setDescriptionSummary("Birdperson and Tammy, for unknown reasons, decided to hold their wedding on this planet. They invited a large group of friends and acquaintances to this special occasion, all of which were criminals in the eyes of the Galactic Federation. The Smith Family attended the wedding against Rick's wishes. Squanchy wed Birdperson and Tammy on a beach before a setting star.Later at the wedding reception, Tammy exposed herself as an undercover agent for the Galactic Federation and shot Birdperson before Gromflomites crashed in through the roof and raided the event. The ensuing shootout killed most of the guests, with Squanchy's fate unknown. The Smith family managed to escape in a flying catering van.");   
break;
     case "Immortality Field Resort":
setDescriptionOverView("A luxury resort built inside an immortality field.")
setDescriptionSummary("The area in which the resort resides was once the kingdom of the Blue Ape Aliens. The kingdom was at one point usurped by another alien race using weapons supplied by Rick, enslaving the native aliens to work at the resort.By Morty's wish, Rick brought Jerry to this resort in order to cheer him up. Once they had arrived Rick was attacked and killed by Shnoopy Bloopers, who in turn was killed by Rick; before resurrecting back to life due to the immortality field. Jerry would later be forced into a backroom by Risotto Groupon and his henchmen to be included in a plot against Rick. This lead Jerry and Rick onto the Whirly Dirly, a popular theme park ride at the resort, where Risotto had positioned assassins to kill Rick. Jerry would then get cold feet and save Rick on the ride, with Rick defeating both Risotto's assassins and henchmen, as well as destroying the immortality field.");   
break;
}
},[props.location])


/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/ 

    return(
        <div className="Overview">
            <h1 className="planet-name">{props.location}</h1>
            {descriptionButton&&<div className="description">{descriptionOverView}</div>}
            {SummaryButton&&<div className="summary">{descriptionSummary}</div>}

{CharacterButton&&<div class="slideshow-container">{props.characters.map(character=>{
return<div className="mySlides fade">
        <Character 
        key={Math.random()*1000}
        name={character.data.name} 
        species={character.data.species} 
        image={character.data.image}
        gender={character.data.gender}
        status={character.data.status}>
        </Character>
  <a class="prev" onclick="plusSlides(-1)"></a>
  <a class="next" onclick="plusSlides(1)"></a>
</div>})}
</div>}

        <button onClick={()=>{ return setDescriptionButton(true), setSummaryButton(false), setCharacterButton(false)}}>OverView</button>
        <button onClick={()=>{return setDescriptionButton(false), setSummaryButton(true), setCharacterButton(false)}}>Summary</button>
        <button onClick={()=>{return setDescriptionButton(false), setSummaryButton(false), setCharacterButton(true)}}>Characters</button>
        </div>
    )
}

export default OverView;