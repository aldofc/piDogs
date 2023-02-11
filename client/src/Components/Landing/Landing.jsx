import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import GitHub from "../Images/github.png"
import Linkedin from "../Images/linkedin2.jpg"
import Instagram from "../Images/Instagram2.jpg"

const Landing = () => {
  return (
    
  <div className='container'>

  <div className='letra'> PETS GIVE 
  <div className='letra2'> TRUE LOVE 

  
    
  <div className='centrar'>
    
        <Link to={"/home"}> <button className='botonHome'>Vamos!!</button> </Link>

        <div className='bajar'>


        <ul class="wrapper">
    <li class="icon facebook">
        <span class="tooltip">Linkedin</span>
        <span><i class="fab fa-facebook-f"></i></span>
        <a href="https://www.linkedin.com/in/aldo-flores-carreon-20bb66256"><img className='logos' src={Linkedin} alt="linkedin"  /></a>
    </li>

    

    <li class="icon twitter">
        <span class="tooltip">GitHub</span>
        <span>  <i class="fab fa-twitter"> </i></span>
        <a href="https://github.com/aldofc"><img className='logos' src={GitHub} alt="git"  /></a>
    </li>



    <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><i class="fab fa-instagram"></i></span>
        <a href="https://www.instagram.com/aldo.fc1/"><img className='logos' src={Instagram} alt="instagram" /></a>
    </li>


    </ul>
   </div>
   </div>
   </div>
   </div>
   </div>
   
   

  

    
    
    
  )
}

export default Landing