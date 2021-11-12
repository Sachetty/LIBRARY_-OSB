import React from "react";
import "./List.css";
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillBook } from 'react-icons/ai';
import { AiOutlineLink } from 'react-icons/ai';

interface propsList{
    author: string;
    title: string;
    url: string;
}

export const List:React.FC<propsList> = ({author, title, url}) => {
    return(
        <div className="listcontainer">
            <dl className="controlList">
                <dt> <AiOutlineUser /> author:  { author } </dt>
                <dt> <AiFillBook/> title: { title } </dt>
                <dt> <AiOutlineLink/> url: { url } </dt>
            </dl>
        </div>
    );
}
