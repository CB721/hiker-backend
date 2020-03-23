import React from "react";
import { Col } from "../Grid";
import "./style.scss";

function Input(props) {
    return (
        <Col size="md-4">
            <div className="input-section">
                <p className="cust-input-name">
                    {props.name}
                </p>
                <input
                    className="cust-input"
                    type={props.type}
                    value={props.value}
                    disabled={props.disabled}
                    name={props.name}
                    placeholder={props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                    onChange={props.handleInputChange}
                />
            </div>
        </Col>
    )
}

export default Input;