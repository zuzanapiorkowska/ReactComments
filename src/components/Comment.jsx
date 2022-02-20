import React from "react"
import { ApprovalCard } from "./ApprovalCard";
import { Avatar } from "./Avatar"
import { Content } from "./Content";

export function Comment(props) {
    console.log(props);
    return (
        <div className="comment" style={{border: "1px solid lightgrey", margin:"0.5rem", padding:"1rem", borderRadius:"5px"}}>
            <Avatar imgSrc={props.imgSrc} />
            <Content name={props.name} date={props.date} content={props.content} />
            <ApprovalCard/>
        </div>
    )
}