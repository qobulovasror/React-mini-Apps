import { Link } from 'react-router-dom';
function Home() {
    return ( 
        <>
            <h1>This is home component</h1>
            <ul>
                <li>
                    <Link to="/todo">ToDO lits</Link>
                </li>
                <li>
                    <Link to="/calculator">Calculator</Link>
                </li>
            </ul>
        </>
     );
}

export default Home;