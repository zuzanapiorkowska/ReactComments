import React from "react";
export function Content(props) {
    return (
        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
            <div className="metadata">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    );
};