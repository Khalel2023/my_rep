import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function Card() {

  return(

    <div>
          <h1 style={{color:'red'}} >Hey</h1>

          <h2 style = {{color:'blue'}}> here</h2>
    </div>

  )

}


function App() {

  return(

    <div>
          <h1 style={{color:'red'}} >Hello</h1>

          <h2 style = {{color:'yellow'}}> There</h2>

          <Card/>
          <Card/>
          <Card/>
          <Card/>
    </div>

  )

}

export default App

