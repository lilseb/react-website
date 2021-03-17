import React  from 'react';
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center ">
            
            <a className="navbar-brand" href="###">Photosen</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto mx-auto text-center ">
                <li>
                    {/* Link place des balises "a". Verifier votre DOM pour comprendre*/}
                    <NavLink to='/' exact activeClassName="nav-active" >
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/service' exact activeClassName="nav-active">
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/galleryA' exact activeClassName="nav-active">
                        GalleryA
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/galleryB" exact activeClassName="nav-active">
                            GalleryB
                    </NavLink>
                </li>
            </ul>
            <div className="social text-center">
                <a className="navbar-brand" href=""><i class="fab fa-facebook-f"></i></a>
                <a className="navbar-brand" href=""><i class="fab fa-twitter"></i></a>
                <a className="navbar-brand" href=""><i class="fab fa-instagram-square"></i></a>
                <a className="navbar-brand" href=""><i class="fab fa-youtube"></i></a>
            </div>
            </div>
        </nav>
    )
}

export default Navigation;