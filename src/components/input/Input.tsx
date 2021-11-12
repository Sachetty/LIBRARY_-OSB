import React from "react";
import "./Input.css";

interface propsInput{
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const Input: React.FC<propsInput> = ({setText}) => {
    return(
       <input 
       placeholder="Busque seu autor ou livro" type="text" id="search" 
       onChange={(search: React.FormEvent<HTMLInputElement>)=>setText(search.currentTarget.value)}
       />
    );
}