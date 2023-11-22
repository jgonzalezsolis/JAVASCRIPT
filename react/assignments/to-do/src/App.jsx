
import React, { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [toDoList, setToDoList] = useState([]);
  
  // const updateList = (newList) => {
  //   setToDoList ([...toDoList, newList]);
  // }
  const updateList = (newList) => {
    setToDoList ((prevList)=>(
      [...prevList, newList]
    ))
  }

  const deleteItem = (itemId) => {
    const filteredItems = toDoList.filter((item)=>{
      return item.id !== itemId;
    });
    setToDoList(filteredItems);
  };

  const handleCompleted = (itemFromBelow) => {
    let updateListItem = toDoList.map((item)=>{
      if (item ===itemFromBelow){
        let newItem = {...item}
        newItem.isComplete = !newItem.isComplete;
        return newItem
      }
      else{
        return item;
      }
    })
    setToDoList(updateListItem)

  }

  return (
    <div className="App">
    <Form  updateList= {updateList}/>
    <Display toDoList={toDoList} deleteItem={deleteItem}  handleCompleted={handleCompleted}/>
  </div>
  );
}

export default App
