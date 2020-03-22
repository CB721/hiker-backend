import React from "react";
import "./style.scss";

function navbar() {
    return (
        <nav className="navigation">
            <div className="logo">
                Hiker
        </div>
            <ul className="links">
                <li className="link">
                    About
                </li>
            </ul>
        </nav>
    )
}

export default navbar;