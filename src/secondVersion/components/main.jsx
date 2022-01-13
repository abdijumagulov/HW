import React from 'react';
import "../css/main.css";
import Card from "../ui/card"

const data = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdAdpisDmOzSJM2_GfwxdUXyo386wGTgvNQ&usqp=CAU",
        name:"Jastin Biber",
        age:"23",
        place:"Америка"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAXdncWarJo4mZ7XD4kOQBqMKiUBGkY9V4A&usqp=CAU",
        name:"Tom Krus",
        age:"45",
        place:"Америка"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAXdncWarJo4mZ7XD4kOQBqMKiUBGkY9V4A&usqp=CAU",
        name:"Tom Krus",
        age:"45",
        place:"Америка"
    }
]

const main = () => {
    return (
            <main className="main">
                {data.map((el) => {
                    return(
                        <Card img={el.img} name={el.name} age={el.age} place={el.place}/>
                    )
                })}
            </main>
    );
};

export default main;