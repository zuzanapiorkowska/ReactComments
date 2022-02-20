import React from "react";
import { Comment } from "./Comment";
import faker from "faker";

export function App() {
    return (
        <div className="ui container comments">
            <Comment name={faker.name.findName()} date="yesterday" content={faker.lorem.words()} imgSrc={faker.image.image()}/>
            <Comment name={faker.name.findName()} date="today" content={faker.lorem.words()} imgSrc={faker.image.image()}/>
            <Comment name={faker.name.findName()} date="today" content={faker.lorem.words()} imgSrc={faker.image.image()}/>
        </div>
    )
}