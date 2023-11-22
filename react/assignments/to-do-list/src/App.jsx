import { useState } from 'react'
import Form from './components/form'
import Display from './components/display'
import './App.css'

function App() {

  const [toDoList, setToDoList] = useState([]);

  const updateToDoList = (newToDo) => {
    setToDoList((prevToDo) =>(
      [...prevToDo, newToDo]
    ))
  };

  const deleteButton = (idFromBelow) => {
    const filteredToDos = toDoList.filter((toDo)=>{
      return toDo.id !== idFromBelow;
    });
    setToDoList(filteredToDos);
  };

  const handleCompleted = (toDoFromBelow) => {
    let updateToDos = toDoList.map((toDo) =>{
      if (toDo === toDoFromBelow) {
        let newToDo = {...toDo}
        newToDo.isComplete = !newToDo.isComplete
        return newToDo;
      }
      else {
        return toDo;
      }
    })
    setToDoList(updateToDos)
  }

  return (
    <div>
      <Form updateToDoList = {updateToDoList}/>
      <Display toDoList = {toDoList} deleteButton = {deleteButton}
        handleCompleted = {handleCompleted} />
    </div>
  );
}

export default App
