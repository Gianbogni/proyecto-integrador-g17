import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav>
            <ul className="main-nav">
                <li><Link  exact to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li>Elemento menu</li>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt="User" /></li>
            </ul>
        </nav>
    );
};



export default Navbar