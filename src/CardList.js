import React from "react";
import Card from "./Card";

const cardList = ({robots}) => {
    const cardsArray = robots.map((item, index) => {
        return <Card
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
        />
    });
    // const cardComponent = robots.map((item) => {
    //     return <Card id={item.id} name={item.name} email={item.email}/>
    // });
    return (
        <div>
            {cardsArray}
        </div>
    )
};

export default cardList;