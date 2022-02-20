import React from "react";
import faker from "faker";

export function App() {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">{faker}</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice post!</div>
                </div>
            </div>
        </div>
    )
}