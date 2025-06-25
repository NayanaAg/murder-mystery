"use client";

import React, { useState, useEffect } from "react";
import "../blackjack/blackjack.css";
import playingCards from "../blackjack.json";

export default function PlayingCard(props) {

    const card = playingCards[props.card]

      const [animation, setAnimation] = useState(true);
      const handleClick = () => setAnimation(false);


    return <>
        <div className= {animation ? 'flip-card' : 'flip-card flipped'} onClick={handleClick} key={card.id}>
            <div className="flip-card-inner">
                <div className="flip-card-back">
                    <img className="card-front" src={"./images" + card.image} />
                </div>
                <div className="flip-card-front">
                    <img className="card-back" src="./images/cardback.jpg" />
                </div>
            </div>
        </div>
    </>
}