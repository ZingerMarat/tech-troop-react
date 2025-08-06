import React, { useState } from "react";

function Hudini () {
    const [show, setShow] = useState(false)

    return(
        <>
        <div>{show ? "Now you see me" : "Now you don't"}</div>
        <button onClick={() => setShow(!show)}>click</button>
        </>
    )

}

export default Hudini