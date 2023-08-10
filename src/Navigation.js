import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation:
* Visual element with links to home
*
* props:
* - none
* state:
* - none
*  NavLinks
*       to: Home
*/
function Navigation() {
  return (
    <nav className="Navigation Navigation-loggedIn">
      <NavLink to="/home" className="Navigation" end>
        View all providers
      </NavLink>
    </nav>
  );
}

export default Navigation;
