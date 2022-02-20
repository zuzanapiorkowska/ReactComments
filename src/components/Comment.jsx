import React from "react"
import faker from "faker"
import { Avatar } from "./Avatar"

export function Comment(props) {
    console.log(props);
    return (
        <div className="comment">
            <div className="content">
                <Avatar />
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">Nice post!</div>
            </div>
        </div>
    )
}