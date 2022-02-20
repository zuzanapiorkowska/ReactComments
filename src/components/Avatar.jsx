import React from "react";
import faker from "faker";

export function Avatar(props) {
    return (
        <a href="/" className="avatar">
            <img alt="avatar" src={props.imgSrc} />
        </a>
    )
}