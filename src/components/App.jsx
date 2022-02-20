import React from "react";
import { Comment } from "./Comment";
import faker from "faker";

export function App() {
    return (
        <div className="ui container comments">
            <Comment name={faker.name.findName()} date="yesterday"/>
            <Comment name={faker.name.findName()} date="today"/>
            <Comment name={faker.name.findName()} date="today"/>
        </div>
    )
}