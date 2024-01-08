import React from "react";

function Exa2(){
    let myarray=[
        { firstName: "Kanani", lastName : "Darshan" },
        { firstName: "Khokhar", lastName : "Nevil" },
        { firstName: "Baravaliya", lastName : "Dhruvin" }
    ];
    return(
        <>
        <table border={1}>
            <thead>
            <tr>
                <th>Index</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
            {myarray.map((mydata,index)=>
            {
                return<tr key={index}>
                    <td>{index+1}</td>
                    <td>{mydata.firstName}</td>
                    <td>{mydata.lastName}</td>
                </tr>
            })}
            </tbody>
        </table>
        </>
    );
}
export default Exa2;