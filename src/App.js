import React from 'react'
import './App.css'

const App = () => {
  return (
    
    <div>
  
      <div class="card-container"  style ={{marginLeft:'0px'}}>
    
      <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      <h3>DIANA</h3>
      <h6>KAZAKISTHAN</h6>
      <p>HIGH_FREQUENCY_TRADER</p>
    
      <div class="buttons">
      <button class="primary">
          BLOCK USER
        </button>
        <button class="primary ghost">
        EDIT CONTACT

        </button>
      </div>
      <div class="skills">
        <h6>contact number</h6>
       
         <ul><li>9899898988</li></ul> 

          <h6>EMAIL</h6> 
          <ul><li>USER43@gmail.com</li></ul>

         <h6>About</h6>
          <ul><li>urgent call only</li> </ul>

          <h6>HOBBIES</h6>
          <ul><li>high frequency trading </li> </ul>
          <ul><li>playing badminton</li></ul>
          
      </div>
      <h1><button class="primary" input type =
      "button">DELETE CONTACT</button></h1>
   </div>
    
    
      
    
      
    </div>



  )
}

export default App
