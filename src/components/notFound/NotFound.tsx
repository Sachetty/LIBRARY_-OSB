import React from "react";
import "./NotFound.css"

interface propsNotFound{
    title: string;
}

export const NotFound : React.FC<propsNotFound> = ({title}) =>{
    return(
        <div>
            <label>{title}</label>
        </div>
    );
}