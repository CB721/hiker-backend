import React from "react";
import "./style.scss";

function Footer() {
    const now = new Date();
    return (
        <footer className="footer navbar-fixed-bottom">
            <div className="bottom">
                Hiker
            </div>
            <span>Copyright &copy; {now.getFullYear()} Clint Brodar</span>
        </footer>
    )
}

export default Footer;