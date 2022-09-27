import React from 'react'
import {Box} from '@chakra-ui/react'

const ComponenteEventos = () => {

  const handlerClick = (event) => {
    console.log(event.target)
  }

  const handlerChange = (event) => {
    console.log(event.target)
    console.dir(event.target.parentElement)
    console.log(event.value)
  }

  const tecleoPrevenido = (e) => {
    e.preventDefault()
    console.log('Tecleo prevenido (El comportamiento default del input)')
  }

  const eventBubbleDiv = (e) => {
    console.log('Evento en el div PADRE')
  }
  
  const eventBubbleButton = (e) => {
    //Peor si agregamos algo lo evitamos:
    e.preventDefault()
    console.log('Evento en el botón CHILD')
  }

  return (
    <Box bgColor='gray'>
      <h2>ComponenteEventos</h2>
      <h4>Eventos y Target</h4>
      <button id='button' onClick={handlerClick}>Click Me</button>
      <input type="text" onChange={handlerChange}/>

      <h4>Prevent Default</h4>
      <input type="text" placeholder='No vas a poder escribir acá...' onKeyDown={tecleoPrevenido}/>

      <div onClick={eventBubbleDiv}>
        <button onClick={eventBubbleButton}>Click para propagar evento</button>
      </div>
    </Box>
  )
}

export default ComponenteEventos