"use client";

import React from "react";
import "../blackjack/blackjack.css";
import playingCards from "../blackjack.json";
import FlipPage from "react-flip-page";

export default function PlayingCard(props) {

    const card = playingCards[props.card]

    return <>
        <div className="card-container" key={card.id}>
            <FlipPage orientation="horizontal" disableSwipe flipOnTouch flipOnTouchZone="400" responsive style={{fill: "none"}}>
                <article>
                    <img className="card-back" src="../images/cardback.jpg" />
                </article>
                <article>
                    <img className="card-front" src={"../images/" + card.image} />
                </article>
            </FlipPage>
        </div>
    </>
}