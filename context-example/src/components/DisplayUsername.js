import { useContext } from 'react';
import { UserContext } from '../App';

function DisplayUsername() {
    const username = useContext(UserContext);

    return (
        <p>Välkommen, { username }</p>
    )
}

export default DisplayUsername;