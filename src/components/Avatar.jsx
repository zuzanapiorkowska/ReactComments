import React from "react";
import faker from "faker";

export function Avatar() {
    return (
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.image()} />
        </a>
    )
}