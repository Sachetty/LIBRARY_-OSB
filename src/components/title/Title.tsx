import React from "react";
import "./Title.css";

interface propsTitle{
    text: string;
}

export const  Title: React.FC<propsTitle> = ({text}) => {
    return(
        <div className="titleHome">
            <label className="titleText"> {text} </label>
        </div>
    );
}   