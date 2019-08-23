import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid  from 'uuid/v4';
import useLocalStorageState from './Hooks/useLocalStorageState';

function TodoApp(){
    const initialTodos = [{id: 1, task: "Pet a Monkey", completed: false}]
    // const initialTodos = [
    //     {id: uuid(), task: "Clean fishtank", completed: false},
    //     {id: uuid(), task: "Wash car", completed: true},
    //     {id: uuid(), task: "Cut hair", completed: false},
    // ];
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

 

    const addTodo = newTodoText =>{
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };

    const removeTodo = todoId =>{
        //filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        //call setTodos with new Todo array
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId =>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, completed : !todo.completed}: todo);
            setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) =>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, task: newTask}: todo);
            setTodos(updatedTodos);
    }
    return(
    <Paper style ={{padding: 0, margin: 0, height: "100vh", backgroundColor:"#fafafa"}} elevation={0} >

        <AppBar color='primary' position='static' style ={{height: "64px"}} >
            <Toolbar>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{marginTop: "1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        </Grid>
        </Grid>
    </Paper>


    );
}

export default TodoApp;