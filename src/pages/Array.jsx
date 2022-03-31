import React from 'react'

const Array = () => {

  const carros = ['Fusca', 'Gol', 'Celta', 'Corola', 'Corsa']
  const pessoas = ['Joao', 'Creitin', 'Jorgin', 'Klebin', 'Teobaldo']

  return (
    <div>

      <h1><b>Array</b></h1>
      <h2>Carros</h2>
      {
        carros.map(item => (
          <p>{item}</p>
        ))
      }
      <h2>Pessoas</h2>
      <ol>
        {
          pessoas.map(item => (
            <li>{item}</li>
          ))
        }
      </ol>

    </div>
  )
}

export default Array