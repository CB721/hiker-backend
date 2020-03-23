import React from "react";
import "./style.scss";

function navbar() {
    return (
        <nav className="navigation">
            <div className="top">
                <div className="logo">
                    Hiker
                </div>
                <ul className="links">
                    <li className="link">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="link">
                        <a href="#search">
                            Search
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar;