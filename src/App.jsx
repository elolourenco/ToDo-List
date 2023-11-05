import React from 'react';

const Styleheader = {
  background: 'Aquamarine',
  border: '1px solid black',
  height: '7rem',
}

const StyleMain = {
  background: 'PaleTurquoise',
  borderLeft: '1px solid black',
  borderButton: '1px solid black',
  borderRight: '1px solid black',
}

const StyleBtnAdd =  {
  margin: '10px',
  fontSize: '25px',
  padding: '5px',
  background: 'LightCyan',
  border: '1px solid black',
  borderRadius: '10px',
}

const AddList = (event) => {
  return (
    <h1></h1>
  )
}

const Btn = () => {
  return (
  <button style={StyleBtnAdd} id='btnadd' onClick={AddList}>Adicionar lista</button>
  )
}



function App() {
  return (
      <div>
        <header style={Styleheader}>
          <div>
            <Btn />
          </div>
        </header>
        <main style={StyleMain} id='mainList'>

        </main>
      </div>
  )
}

export default App
