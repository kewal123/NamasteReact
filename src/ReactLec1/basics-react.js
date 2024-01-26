import React from "react";
import ReactDOM from "react-dom/client";

// const createElement =React.createElement("h1",{
// },"Namaste React")

const Header=()=>{
    return(
        <div>
            <h2>Namaste React functional component</h2>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)            