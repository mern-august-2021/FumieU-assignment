import React, {useState} from 'react';

const Form = (props) => {
    const { todoList, setTodoList } = props;
    const [newTodo, setNewTodo] =useState("")

    const todoItem = {
        text: newTodo,
        complete: false
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todoItem]);
        setNewTodo("");
    };
    const deleteHandler = (delIndex) => {
        const filteredTodos = todoList.filter((_result, index) => {
            return index !== delIndex;
        })
        setTodoList(filteredTodos);
    }
    const completeHandler = (completeIndex) => {
        const updatedTodos = todoList.map((todo, index) =>{
            if(completeIndex === index){
                todo.complete = !todo.complete;
            }
        return todo;
        })
        setTodoList(updatedTodos) ;
    }
return(
    <div>
        <form onSubmit = {submitHandler} >
            <p>
            <label htmlFor="todoList">Todo List: </label>
            <input value = { newTodo } name = "newTodo" onChange={(e) =>{
                setNewTodo(e.target.value)}} type="text"/>
            </p>
            <button> Add </button>
        </form>
        <div style ={{display: "flex", flexDirection: "column"}}>
        {
            todoList.map((newTodo, index) => (
                <p key={index}>{newTodo.text} 
                <input  onClick={(e)=> {
                    completeHandler(index);
                }} checked={todoList.comlete} type="checkbox" />
                <button onClick={(e) => {
                    deleteHandler(index);
                }}
                >Delete</button>
                </p> 
            ))
            }
        
        </div> 
    </div>
)}
        
export default Form;