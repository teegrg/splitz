import { Link } from "react-router-dom";
import icon from "../components/Pic/My new design (2).png"
function Navbar () {
    return (
        <div className="nav">
            <div className="logo"><Link to='/'>Splitz</Link></div>
            <img src={icon} alt="" />
        </div>
    )
}

export default Navbar;
