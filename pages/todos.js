import React, { useEffect, useState } from 'react'

const todos = () => {
 

  const[todos,setTodos]=useState([])  
  useEffect(()=>{
    let todos = localStorage.getItem("todos")
    setTodos(JSON.parse(todos))
  },[])

  const deleteTodo=(title)=>{
    let newtodos = todos.filter(item=>{
      return item.title!=title
    })
    localStorage.setItem("todos",JSON.stringify(newtodos))
    setTodos(newtodos)
  }

const editTodo= (first) => { second }
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Your To-dos</h1>
      {todos.length==0 && <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your To-Dos will show up here, please add a To-do by going to the homepage</p>}
    </div>
    <div class="flex flex-wrap -m-4">


      {todos.map(item=>{
        return(
        <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`https://picsum.photos/600/900?a=${item.title}`}/>
          <div class="w-full">
      
            <p class="mb-4">{item.desc}</p>
            <span class="inline-flex">
              <a class="text-gray-500 cursor-pointer" onClick={()=>{deleteTodo(item.title)}} >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" ></path>
</svg>
              </a>
              
            </span>
          </div>
        </div>
      </div>
      )})}
      
    </div>
  </div>
</section>
  )
}

export default todos