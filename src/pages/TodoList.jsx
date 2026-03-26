// import React from 'react'

// const TodoList = (props) => {
//   return (
//    <ul>
//         {
//           props.todo.map((item) => <li key={item.id}>{item.title}</li>)
//         }
//       </ul>
//   )
// }

// export default TodoList


// import React from 'react'

// const TodoList = ({todo}) => {
//   return (
//    <ul>
//         {
//           todo.map((item) => <li key={item.id}>{item.title}</li>)
//         }
//       </ul>
//   )
// }

// export default TodoList

import React from 'react'

const TodoList = ({todo, delTodo}) => {

// function handleDelete(id){
//   delTodo(id)
// }

  return (
   <ul>
        {
          todo.map((item) => <li key={item.id}>{item.title} <button onClick={()=>delTodo(item.id)}>Del</button></li>)
        }
      </ul>
  )
}

export default TodoList
