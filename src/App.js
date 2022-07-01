import './App.css';
import dataBoxes from './Components/DataBoxes'
import {useState} from 'react'
import Box from './Components/Box';

function App() {

const [boxes,setBoxes]=useState(dataBoxes)


const boxesElement=boxes.map(box=>(
  <Box key={box.id} id={box.id} on={box.on} letter={box.letter} clicked={handleClick}/>
))

function handleClick(id){

  setBoxes(prevBoxes => prevBoxes.map(b=>{ return b.id===id?{...b,on:!b.on}:b}))
}



  return (
    <div className="App">
      {boxesElement}
    </div>
  );
}

export default App;
