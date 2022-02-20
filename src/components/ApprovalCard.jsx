import React from "react";
import { Comment } from "./Comment";

export function ApprovalCard(props) {
    console.log("ApprovalCard children: ", props);
    return (
        <div className="ui two buttons">
            <div className="content"></div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Accept</div>
                    <div className="ui basic red button">Remove</div>
                </div>
            </div>
            {props.children}
        </div>
    )
}