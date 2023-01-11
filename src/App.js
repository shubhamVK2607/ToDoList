import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {

  const [notes,setNotes]=useState([])

  const addNote=(newNote)=>{
     setNotes((prevNotes)=>{
      return [...prevNotes,newNote]
     })
     
  }

  const deleteNote=(id)=>{
      setNotes(prevNotes=>prevNotes.filter((noteItem,index)=>{
          return index!==id
      }))
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((eachNote,index)=>{
        return(
          <Note key={index} id={index} title={eachNote.title} content={eachNote.content} onDelete={deleteNote}/>
        )
      })}


      <Footer/>
    </div>
  );
}

export default App;
