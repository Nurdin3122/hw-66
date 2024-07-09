import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand">
                        Just Do It
                    </NavLink>
                </div>
            </nav>

        </div>
    );
};

export default Header;