import './Todo.css';

const Todo = ({ todoText, completed, handleDelete, handleComplete }) => {
    return (
        <div className={`Todo ${completed ? 'completed' : ''}`}>
            <p>{todoText}</p>
            <div className='buttons'>
                { !completed && <button className='completeBtn' onClick={handleComplete}>
                    Compelete
                </button>}
                <button className='deleteBtn' onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
 
export default Todo;