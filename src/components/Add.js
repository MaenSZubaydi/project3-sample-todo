import './Add.css';
import { useState } from "react";

const Add = ({ addNewItem }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='Add'>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                addNewItem(inputValue);
                setInputValue('');
            }}>Add</button>
        </div>
    );
}
 
export default Add;