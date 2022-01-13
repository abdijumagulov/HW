import React from 'react';
import "../css/card.css"

const card = (props) => {
    return (
        <div>
                <div className="card">
                    <img src={props.img} alt="" className="profileImg" />
                    <h3 className="name">
                        {props.name}
                    </h3>
                    <p className="age">{props.age}</p>
                    <p className="place">{props.place}</p>
                </div>
        </div>
    );
};

export default card;