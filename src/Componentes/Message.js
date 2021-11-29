import React from "react";

const Message =(msg, bgColor) =>{
    
    let styles={
        padding: "1rem",
        marginBottom: "1rem",
        testAlling: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor:bgColor
    }

    return (
        <div><h2>Message</h2>
        </div>
    );
};

export default Message;