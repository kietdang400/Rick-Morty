import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import DisplayInformation from './components/displayInformation';
import ImageHandler from './components/ImageHandler';
import axios from 'axios';
import './App.css';

function App() {

const[location,selectLocation]=useState('');
const[Name,setName]=useState('');
const[type,setType]=useState('');
const[residents,setResidents]=useState([]);


const pickLocation=(place)=>{ //reset entire data if users click on a new location
  selectLocation(place);
};

useEffect(()=>{
axios.get(`https://rickandmortyapi.com/api/location/${location}`).then(async(response)=>{ 
return await setName(response.data.name),setType(response.data.type),setResidents([response.data.residents])
})
.catch(error=>{console.log(error)});
},[location])

let information={
  id:location,
  Name:Name,
  Type:type,
  Residents:[...residents]
}

  return (
    <div className="App">
      <NavBar locationPicked={pickLocation}></NavBar>
      <DisplayInformation information={information}></DisplayInformation>
      <ImageHandler id={location}></ImageHandler>
    </div>
  );
}

export default App;
