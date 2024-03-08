import { Link } from "react-router-dom";
// import icon from "../components/Pic/My new design (2).png"
function Navbar () {
    return (
        <>
        <div className="nav">
            <Link to='/' style={{ color: 'rgb(240, 222, 166)' }}><div className="logo">Splitz</div></Link>
            {/* <img src={icon} alt="" /> */}
            <div className="guide"><Link to='/guide' style={{ color: 'rgba(0, 0, 0, 0.661)' }}>How to use</Link></div>
        </div>
        </>
    )
}

export default Navbar;
