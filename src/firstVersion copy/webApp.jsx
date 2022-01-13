import React from 'react';
import "./webApp.css"

const WebApp = () => {
    return (
        <div>
            <header className="header">
            <nav className="navigation">
                    <p className="logo">Logo</p>
                    <menu className="menu">
                        <li className="menuLi">Exemple</li>
                        <li className="menuLi">Exemple</li>
                        <li className="menuLi">Exemple</li>
                        <li className="menuLi">Exemple</li>
                        <li className="menuLi">Exemple</li>
                    </menu>
                </nav>
                <h1 className="h1">И да я адаптивный, но это не мешает нам быть лучшыми.</h1>
                <p className="prg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet unde deleniti possimus perspiciatis expedita.</p>
            </header>
            <main className="main">
            <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdAdpisDmOzSJM2_GfwxdUXyo386wGTgvNQ&usqp=CAU" alt="" className="profileImg" />
                    <h3 className="name">
                        Tom Krus
                    </h3>
                    <p className="age">35</p>
                    <p className="place">Америка</p>
                </div>
            </main>
        </div>
    );
};

export default WebApp;