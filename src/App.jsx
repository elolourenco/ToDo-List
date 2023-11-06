import React from 'react';

const Styleheader = {
  background: 'Aquamarine',
  border: '1px solid black',
  margin: '5px',
  borderRadius: '10px'
}

const StyleMain = {
  background: 'PaleTurquoise',
  border: '1px solid black',
  margin: '5px',
  textAlign: 'center',
  borderRadius: '10px'
}

const StyleBtnAdd =  {
  margin: '10px',
  fontSize: '25px',
  padding: '5px',
  border: '1px solid black',
  borderRadius: '10px',
}

const StylelistAddMain = {
  background: 'blue',
  width: '200px',
  margin: '10px',
  borderRadius: '5px',
  paddingLeft: '7px',
  paddingRight: '7px'
}

const StyleBtnList = {
  margin:'5px'
}

const TitleList = {
  margin: '0px'
}

const AddList = () => {
  return (
    <div style={StylelistAddMain} id='listAddMain'>
      <h2 style={TitleList}>Aqui consta uma nova lista</h2>
      <button style={StyleBtnList}>ver lista</button>
    </div>
  )
}

const Btn = () => {
  return (
  <button style={StyleBtnAdd} id='btnadd' onClick={AddList}>Nova lista</button>
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
          <AddList />
        </main>
      </div>
  )
}

export default App
