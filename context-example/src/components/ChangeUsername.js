import { useState, useContext } from 'react';
import { ChangeContext } from '../App';

function ChangeUsername() {
    const [newUsername, setNewUsername] = useState('');
    const setUsername = useContext(ChangeContext);
    
    return (
        <section>
            <input type="text" onKeyUp={ (event) => setNewUsername(event.target.value) } />
            <button onClick={ () => setUsername(newUsername) }>Ändra</button>
        </section>
    )
}

export default ChangeUsername;