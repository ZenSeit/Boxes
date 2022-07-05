import './App.css';
import dataBoxes from './Components/DataBoxes'
import {useState} from 'react'
import Box from './Components/Box';
import Form from './Components/Form';

function App() {

const [boxes,setBoxes]=useState([])

const[word,setWord]=useState('')

function handleWord(e){
  setWord(e.target.value)
}


function handleForm(e){
  e.preventDefault()
  let arr=[]
  word.split('').map((w,i)=>arr.push({id:i,letter:w,on:false}))
  setBoxes(arr)
  setWord('')
}

const boxesElement=boxes.map((box)=>(
  <Box key={box.id} id={box.id} letter={box.letter} on={box.on} clicked={handleClick}/>
))

function handleClick(id){
  setBoxes(prevBoxes => prevBoxes.map(b=>{ return b.id===id?{...b,on:!b.on}:b}))
}



  return (
    <div className="App">
      <div className="box--container">
      {boxesElement}
      </div>
      
      <Form trigger={handleForm} handleChange={handleWord} valIn={word}/>
    </div>
  );
}

export default App;
