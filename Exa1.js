import React from "react";

function Exa1() {
    let myarray = [
        { firstName: "Kanani", lastName: "Darshan" },
        { firstName: "Khokhar", lastName: "Nevil" },
        { firstName: "Baravaliya", lastName: "Dhruvin" }
    ];
    return (
        <>
        
            {myarray.map((mydata, index) => {
                return <div>
                    
                    <h1>{index}-FirstName : {mydata.firstName} | Last Name : {mydata.lastName}</h1>
                </div>
            })}
        </>
    )
}
export default Exa1;