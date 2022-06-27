import './App.css';
import { Cards } from './Notes.js/Cards';
import Forms from './Notes.js/forms';
import Modals from './Notes.js/Modals';
import Nav from './Notes.js/nav';
import { React, useState } from 'react';

function App() {

  //all usestate is define here 
  const [title, settitle] = useState(" ");
  const [desc, setdesc] = useState(" ");
  const [notes, setnotes] = useState(getfromLocalstorage)
  const[editid,setEditid]=useState("")
  localStorage.setItem("notes",JSON.stringify(notes))



  return (
    <>
      <div className="App">

        <Nav />
        {/* value will be passed here in the form of attribute */}

        <Forms title={title} settitle={settitle} desc={desc} setdesc={setdesc} notes={notes} setnotes={setnotes}> </Forms>
        <Modals editid={editid} notes={notes} setnotes={setnotes} />
        <div className='container '>
        <h1>Your Notes</h1>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
              
              {
                notes.length === 0 ? <div className="card mb-3" style={{border:"2px solid black" , borderRadius:"10px"}} >
                  <div className="card-body">
                    <h5 className="card-title">Message</h5>
                    <p className="card-text">No notes are available</p>
                  </div>
                </div> : notes.map((item) => {
                  return (
                      <Cards item={item} key={item.id} notes={notes} setnotes={setnotes} setEditid={setEditid}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </ >
  );

function getfromLocalstorage(){
const note=JSON.parse(localStorage.getItem("notes"))
if(note){
  return note
}else{
  return []
}
}
}
export default App;
