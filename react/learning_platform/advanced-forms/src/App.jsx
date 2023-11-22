import { useState } from 'react'

import './App.css'
import Display from './components/display'
import Form from './components/form'

function App() {
  const [pizzaList, setPizzaList]= useState([]);


  return (
    <>
      <Form pizzaList = {pizzaList}  setPizzaList= {setPizzaList}/>
      <Display pizzaList={pizzaList}/>
    </>
  )
}

export default App
