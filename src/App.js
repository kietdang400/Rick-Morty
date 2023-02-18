import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import DisplayInformation from './components/displayInformation';
import ImageHandler from './components/ImageHandler';
import ParralaxEffect from './components/ParralaxEffect';
import Portal from "./IMG/Portal Gif.gif";
import axios from 'axios';
import './App.css';

function App() {

  const[load,setLoad]=useState(false);



  

const[location,selectLocation]=useState('');
const[Name,setName]=useState('N/A');
const[type,setType]=useState('N/A');
const[locationName,setLocationName]=useState('Central Finite Curve');
const[dimension,setDimension]=useState('N/A');
const[residents,setResidents]=useState([]);



const pickLocation=(place)=>{ //reset entire data if users click on a new location
  selectLocation(place);
};



useEffect(()=>{
axios.get(`https://rickandmortyapi.com/api/location/${location}`).then(async(response)=>{ 
return await setName(response.data.name),setType(response.data.type),setLocationName(response.data.name),setResidents([response.data.residents], 
setDimension(response.data.dimension),  console.log(response.data))
})
.catch(error=>{console.log(error)});
},[location])

let information={
  id:location,
  LocationName:locationName,
  Name:Name,
  Type:type,
  Dimension:dimension,
  Residents:[...residents]
}

useEffect(()=>{
setLoad(true);
setTimeout(setLoad,2000);
  },[])

//console.log(residents);
  return (
    
    <div className="App">
      {load?<img className="portal" src={Portal} alt="portal"></img>:<NavBar locationPicked={pickLocation}></NavBar>}
      {!load&&<ImageHandler id={location}></ImageHandler>}
      {!load&&<DisplayInformation information={information}></DisplayInformation>}
      <div><ParralaxEffect information={information}></ParralaxEffect></div>
    </div>
    
  );
}

export default App;
