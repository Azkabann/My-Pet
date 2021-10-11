import Sidebar from "../components/sidebar.js"
import "../styles/pet.css";
import picturePet from '../images/ivosk.jpg'
import {FiUser, FiX} from 'react-icons/fi'
import api from "../services/api.js";
import React, { Component } from "react";




class Pet extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      pet: []
    }
  }
async componentDidMount() {
  
  const response = await api.post('/clients/1/pets');
  console.log(response.data)
  this.setState({user: response.data, pet:response.data.client[0]})
  //response.data.client[0].name
}

 render() {
  


  return (
    <div id= "page-Pet">
      <Sidebar/>
      <main>
        <div className= "pet-details">
          
            <div className= "main-image">
              <img src={picturePet} alt=""/>
            </div>

            <div className= "images">
            <button key="" className="active" type= "button" onClick= "">
              <img src={picturePet} alt=""/>
            </button>

            <button key="" className="active" type= "button" onClick= "">
              <img src={picturePet} alt=""/>
            </button>
            </div>
          <div className= "pet-details-content">
            <div className= "titular">
              <h1>{this.state.pet.name}</h1>
              <h3> <span><FiUser size={24} color= "#12406a;"/></span>{this.state.user.name}</h3>
            </div>
          
          <hr/>

            <div className= "pet-details-field">
              <h2>Idade</h2>
              <p>{this.state.pet.age} Anos</p>
            </div>

            <div className= "pet-details-field">
              <h2>Raça</h2>
              <p>{this.state.pet.breed}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Peso</h2>
              <p>{this.state.pet.weight}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Sexo</h2>
              <p></p>
            </div>

            <button type= "button" className= "contact-button">
                Contactar o dono por Whatsapp 
            </button>
            
          </div>
          
          <div className= "operacoes">

            <button type= "button">
                Editar
            </button>

            <button type= "button" className= "red-button">
               <span> <FiX size= {45} color= "#FFF"/></span>
            </button>

          </div>
          
        </div>
      </main>
    </div>
  )
}

}


export default Pet