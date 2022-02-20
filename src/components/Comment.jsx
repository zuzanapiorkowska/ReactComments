import React from "react"
import { Avatar } from "./Avatar"
import { Content } from "./Content";

export function Comment(props) {
    console.log(props);
    return (
        <div className="comment">
            <Avatar imgSrc={props.imgSrc} />
            <Content name={props.name} date={props.date} content={props.content} />
        </div>
    )
}