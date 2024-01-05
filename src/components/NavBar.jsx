import { Link } from "react-router-dom";
import React from "react";

export default function NavBar({ token, setToken, setUser }) {
    return (
        <div id="nav-bar">
            <Link to="/">Home</Link> |
            {!token && <Link to="/login">Login</Link>} |
            {!token && <Link to="/register">Register</Link>} |
            <Link to="/cart">Cart</Link> |
            {token && (
                <Link 
                  to="/login" 
                  onClick={() => {
                    setUser(null);
                    localStorage.removeItem("token");
                    setToken(null);
                  }}
                >
                    Logout
                </Link>
            )}
        </div>
    );
}