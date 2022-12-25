import "./Header.css"; 
import {Link} from 'react-router-dom';
const Header = () => {
  const companyName = "Just Scan It";
  return (
    <header id="pageHeader">
      <nav id="menu">
	<ul>
          {/*<Link to="/"></Link>*/}
          <li></li>
	  <li id="telephone">+34 631763324</li>
	  <li id="aboutUs">About us</li>
          <Link to="/register">
	  <button id="joinUs">Join Us!</button>
          </Link>
	</ul>
      </nav>            
    </header>
  )
}

export default Header;
