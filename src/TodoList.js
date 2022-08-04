import './TodoList.css';
import Todo from "./components/Todo";
import useData from './hooks/useData';
import Add from './components/Add';
import { useState } from 'react';

const TodoList = () => {
    const { data: todoItems, setData } = useData();
    const [message, setMessage] = useState('');

    const deleteItem = (id) => {
        setData((old) => {
            return old.filter((item) => item.id !== id);
        })
    }
    
    const completeItem = (id) => {
        setData((old) => {
            return old.map((item) => {
                if ( item.id === id ) {
                    item.completed = true;
                }
                return item;
            })
        });
    }

    const addNewItem = (content) => {
        if  ( content === '' ) {
            setMessage(`Can't add an empty todo item!`);
            return;
        }

        if ( message ) {
            setMessage('');
        }

        /* 
            We need to sort the items so we can get the last id
            so we make a clone then sort them by id and get the last id then adds 1 on it
        */
        const id = [...todoItems].sort((a, b) => a.id - b.id)[todoItems.length - 1].id + 1;
        console.log(id);
        setData((old) => [...old, {
            id,
            content,
            completed: false,
        }]);
    }

    return (
        <div className="TodoList">
            <header>
                <h1 className='title'>Todo - List App</h1>
            </header>
            <div className='List'>
                {(todoItems && todoItems.length > 0) ? todoItems.map((item) => {
                    return (
                        <Todo
                            key={`todo_list_${item.content}_${item.id}`}
                            todoText={item.content}
                            completed={item.completed}
                            handleDelete={() => deleteItem(item.id)}
                            handleComplete={() => completeItem(item.id)}
                        />
                    );
                }) : <p>There's no todo item, please add one!</p>}
            </div>
            { message && <p className='errorMessage'>{message}</p>}
            <Add addNewItem={addNewItem} />
        </div>
    );
}
 
export default TodoList;