import React from "react";
import "./Button.css"
import {AiOutlineSearch} from "react-icons/ai"

interface propsButton {
    onClick: () => void 
}

export const Button: React.FC<propsButton> = ({onClick}) => {
    return(
        <div className="containerButton">
            <button className="buttonHomePage" onClick={onClick}> <AiOutlineSearch/> </button>
        </div>
    );
}

