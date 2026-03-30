
// //using map
// import { useState } from "react"

// function App() {
//   const [val, setVal] = useState("")
//   const [todo, setTodo] = useState([])

//   function addTodo(){
//     // console.log("val", val)
//     setTodo([...todo, {id: Date.now(), title: val}])
//     setVal('')
//   }
//   console.log(todo)

//   return (
//     <>
//       <h1>Todo App</h1>
//       <input type="text" placeholder="Enter Text" value={val}  onChange={(e)=> setVal(e.target.value)}/>
//       <button onClick={addTodo}>Add</button>

//       {/* <ul>
//           {
//             todo.map((item)=> <li key={item.id}>{item.title}</li>)
//           }

//         </ul> */}
//       <div>
//           {
//             todo.map((item)=> <p key={item.id}>{item.title}</p>)
//           }
//         </div>

//     </>
//   )
// }

// export default App



//using seperate files
// import { useState } from "react"
// import TodoForm from "./pages/TodoForm"
// import TodoList from "./pages/TodoList"

// function App() {
//   const [todo, setTodo] = useState([])

//   function addTodo(val) {
//     setTodo([...todo, { id: Date.now(), title: val }])

//   }

//   return (
//     <>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo}/>
//       <TodoList todo={todo}/>
//     </>
//   )
// }

// export default App


//localStorage
// import { useEffect, useState } from "react"
// import TodoForm from "./pages/TodoForm"
// import TodoList from "./pages/TodoList"

// function App() {
//   // const [todo, setTodo] = useState([])
//   const [todo, setTodo] = useState(() => {
//     const storedTodos = localStorage.getItem('data');
//     return storedTodos ? JSON.parse(storedTodos) : []})

//   function addTodo(val) {
//     setTodo([...todo, { id: Date.now(), title: val }])

//   }

// useEffect(()=>{
//   localStorage.setItem('data', JSON.stringify(todo));
// },[todo])


//   return (
//     <>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo}/>
//       <TodoList todo={todo}/>
//     </>
//   )
// }

// export default App

//delete
// import { useEffect, useState } from "react"
// import TodoForm from "./pages/TodoForm"
// import TodoList from "./pages/TodoList"

// function App() {
//   const [todo, setTodo] = useState(() => {
//     const storedTodos = localStorage.getItem('data');
//     return storedTodos ? JSON.parse(storedTodos) : []})

//   function addTodo(val) {
//     setTodo([...todo, { id: Date.now(), title: val }])

//   }


// function delTodo(id){
//   console.log(id)
//   setTodo(todo.filter((item)=>item.id !== id))
// }


// useEffect(()=>{
//   localStorage.setItem('data', JSON.stringify(todo));
// },[todo])


//   return (
//     <>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo}/>
//       <TodoList todo={todo} delTodo={delTodo}/>
//     </>
//   )
// }

// export default App



//delete using Modals

// import { useEffect, useState } from "react"
// import TodoForm from "./pages/TodoForm"
// import TodoList from "./pages/TodoList"
// import DeleteModal from "./components/DeleteModal";

// function App() {
//   const [todo, setTodo] = useState(() => {
//     const storedTodos = localStorage.getItem('data');
//     return storedTodos ? JSON.parse(storedTodos) : []})

//     const [delModal, setDelModal] = useState(false)
//     const [todoToDel, setTodoToDel] =useState(null)

//   function addTodo(val) {
//     setTodo([...todo, { id: Date.now(), title: val }])

//   }

//   const handleDeleteClick = (id)=>{
//     setDelModal(true)
//     setTodoToDel(id)
//   }

//   function cancelDel(){
//     setDelModal(false)
//     setTodoToDel(null)
//   }

//   function confirmDel (){
//     setTodo(todo.filter((item)=>item.id !== todoToDel))
//      setDelModal(false)
//     setTodoToDel(null)

//   }


// useEffect(()=>{
//   localStorage.setItem('data', JSON.stringify(todo));
// },[todo])


//   return (
//     <>
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo}/>
//       <TodoList todo={todo} delTodo={handleDeleteClick}/>

//       {delModal && (<DeleteModal cancelDel={cancelDel} confirmDel={confirmDel}/>)}
//     </>
//   )
// }

// export default App


//edit
import { useEffect, useState } from "react"
import TodoForm from "./pages/TodoForm"
import TodoList from "./pages/TodoList"
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";

function App() {
  const [todo, setTodo] = useState(() => {
    const storedTodos = localStorage.getItem('data');
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  const [delModal, setDelModal] = useState(false)
  const [todoToDel, setTodoToDel] = useState(null)

  const [editModal, setEditModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(null)

  function addTodo(val) {
    setTodo([...todo, { id: Date.now(), title: val }])

  }

  //delete
  const handleDeleteClick = (id) => {
    setDelModal(true)
    setTodoToDel(id)
  }

  function cancelDel() {
    setDelModal(false)
    setTodoToDel(null)
  }

  function confirmDel() {
    setTodo(todo.filter((item) => item.id !== todoToDel))
    setDelModal(false)
    setTodoToDel(null)

  }

  //update
  const handleEditClick = (todo) => {
    setEditModal(true)
    setTodoToEdit(todo)
  }

  function cancelEdit() {
    setEditModal(false)
    setTodoToEdit(null)
  }

  function confirmEdit(newText) {
    console.log("newText", newText)
    setTodo(todo.map((todo) =>
      todo.id === todoToEdit.id ? { ...todo, title: newText } : todo
    ))

    setEditModal(false)
    setTodoToEdit(null)

  }


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todo));
  }, [todo])


  return (
    <>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} delTodo={handleDeleteClick} editTodo={handleEditClick} />

      {/* delete */}
      {delModal && (<DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />)}

      {/* edit */}
      {editModal && (<UpdateModal cancelEdit={cancelEdit} confirmEdit={confirmEdit} currentText={todoToEdit.title}/>)}
    </>
  )
}

export default App

