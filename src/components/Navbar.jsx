import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            {/* <NavLink className="navbar-brand" to="/">
                AdminPanel
            </NavLink> */}

            <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/career-list">Career</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin-contacts">Contacts</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    {!token ? (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Login</NavLink>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
