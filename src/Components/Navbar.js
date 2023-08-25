import { Outlet, Link } from "react-router-dom";
import Event from "./Event";

export default function Navbar(props) {

  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.check}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">LandingPage</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
        <Link className="nav-link"  to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">Events</Link>
        </li> 
        <li className="nav-item">
        <Link className="nav-link" to="/about">Pages</Link>
        </li> 
        <li className="nav-item">
        <Link className="nav-link" to="/about">LogIn/Register</Link>
        </li> 
        <li className="nav-item">
        <Link className="nav-link" to="/about">Profile <i className="ri-notification-3-line"></i></Link>
        </li> 
      </ul>
      <div className="form-check form-switch" >
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.check==='dark'?'white':'black'} }>Enable Darkmode</label>
</div>
    </div>
  </div>
</nav>
 <Event checked={props.check}/>
<Outlet/>

</>
  )
}
