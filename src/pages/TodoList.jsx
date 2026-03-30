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

const TodoList = ({ todo, delTodo, editTodo }) => {

  // function handleDelete(id){
  //   delTodo(id)
  // }

  return (
    <ul className='bg-gray-200'>
      {
        todo.map((item) => <li key={item.id} className='bg-green-300 mb-2 p-2 text-center w-[200px] m-auto'>{item.title} <button className='ms-10' onClick={() => delTodo(item.id)}>Del</button>   <button className='ms-10' onClick={() => editTodo(item)}>Update</button></li>)
      }
    </ul>
  )
}

export default TodoList
