import React  from 'react';
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <nav className="text-center ">
            
            <ul>
                
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
        </nav>
    )
}

export default Navigation;