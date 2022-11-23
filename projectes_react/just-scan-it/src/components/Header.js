import "./Header.css"; 

const Header = () => {
  const companyName = "Just Scan It";
  return (
    <header id="pageHeader">
      <nav id="menu">
	<ul>
	  <li></li>
	  <li>+34 631763324</li>
	  <li>About us</li>
	  <button id="joinUs">Join Us!</button>
	</ul>
      </nav>            
    </header>
  )
}

export default Header;
