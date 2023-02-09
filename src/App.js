import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import DisplayInformation from './components/displayInformation';
import ImageHandler from './components/ImageHandler';
import Card from './components/cards';
import axios from 'axios';
import './App.css';

function App() {

const[location,selectLocation]=useState('');
const[Name,setName]=useState('');
const[type,setType]=useState('');
const[locationName,setLocationName]=useState('');
const[dimension,setDimension]=useState('');
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



//console.log(residents);
  return (
    <div className="App">
      <NavBar locationPicked={pickLocation}></NavBar>
      <ImageHandler id={location}></ImageHandler>
      <DisplayInformation information={information}></DisplayInformation>
    </div>
  );
}

export default App;
