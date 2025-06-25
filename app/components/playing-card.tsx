import React from "react";
import "../blackjack/blackjack.css";
import * as playingCards from "../blackjack.json";
import FlipPage from "react-flip-page";

export default function PlayingCard(props) {

    let card = playingCards[props.card]

    return <>
        <div className="card-container" key={card.id}>
            <FlipPage flipOnTouch>
                <article className="card-back">
                    <h2>Testing</h2>
                </article>
                <article className="card-front">
                    <img src={"../images/projects" + card.image} />
                </article>
            </FlipPage>
        </div>
    </>
}