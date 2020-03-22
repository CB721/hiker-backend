import React from "react";
import "./style.scss";

function Button(props) {
    return(
        <button className="cust-button" onClick={props.action} disabled={props.disable}>
            {props.text}
        </button>
    )
}

export default Button;