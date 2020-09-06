import React from "react"

function ToDoItem(props){
  return (
  <div onClick = {
    ()=> props.onChecked(props.id)
  }>
  <li> {props.text}</li>
  </div>
  )
}

export default ToDoItem


//if we want to line-through instead of deleting the item

  //const [isDone, setIsDone]= useState(false)
  // function handleClick(){
  //   setIsDone(prevValue=>{
  //     return !prevValue
  //   })
  // }
  
  //   return (
  //   <div onClick={handleClick}>
  //   <li style={{ textDecoration: isDone && "line-through"}}>{props.text}</li>
  //   </div>
  //   )