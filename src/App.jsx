import React from 'react';

const Styleheader = {
  background: 'Aquamarine',
  border: '1px solid black',
  margin: '5px',
}

const StyleMain = {
  background: 'PaleTurquoise',
  border: '1px solid black',
  margin: '5px',
  textAlign: 'center',
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

const TitleMain = () => {
  return (
  <h1>Listas Adicionadas</h1>
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
          <TitleMain />
        </main>
      </div>
  )
}

export default App
