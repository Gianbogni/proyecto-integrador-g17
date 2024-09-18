
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css"
const Navbar = () => {
   return (
       <nav>
           <ul className="main-nav">
           <img src="/img/Logo.jpg" alt="Logo" className='site-logo' />
               <li className="navbartexto"><Link  exact to="/"> Home</Link></li>
               <li className="navbartexto"><Link to="/favorite">Favoritos</Link></li>
               <li className="navbartexto"><Link to="/showall">Ver Todas</Link></li>
                  
           </ul>
        
       </nav>
   );
};






export default Navbar


