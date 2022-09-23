import './App.css';
import File from './Component/File';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Api from './Component/Api';
import React ,{useState} from 'react'

function App() {

const[details,setDetails]=useState('')
const getHandler=(a)=>{
 setDetails(a)
}
// console.log(details)




  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<File getHandler={getHandler} />}/>
        <Route path="Api" element={<Api details={details}  />}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
