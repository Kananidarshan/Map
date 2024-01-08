import React from "react";
function Array1() {
    const users=["user1","user2","user3"];
    const final=[];

    for(let user of users){
        final.push(<li key={user}>{user}</li>);
    }

    return (
        <div className="Array1">
            <ol>{final}</ol>
        </div>
    )
}
export default Array1;
