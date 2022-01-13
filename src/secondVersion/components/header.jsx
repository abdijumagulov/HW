import React from 'react';
import "../css/header.css";
import Nav from "../ui/nav"

const header = () => {
    return (
            <header className="header">
                <Nav/>
                <h1 className="h1">И да я адаптивный, но это не мешает нам быть лучшыми.</h1>
                <p className="prg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet unde deleniti possimus perspiciatis expedita.</p>
            </header>
    );
};

export default header;