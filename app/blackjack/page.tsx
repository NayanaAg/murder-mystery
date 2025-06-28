"use client";

import React, { useState, useEffect } from "react";
import "./blackjack.css";

export default function Page() {

    const [animation, setAnimation] = useState(true);
    const handleClick = () => setAnimation(false);

    function clickStand() {
        document.getElementById("hidden-dealer").style.display = 'block';
        const flipping = document.getElementsByClassName("flip-card")[0].className += " flipped";
    }

    function clickHit() {
        document.getElementById("hidden-player").style.display = 'block';
        document.getElementsByClassName("flip-card")[1].className += " flipped";

    }

    return <>
        <div id="container-fluid">

            <section>
                <div className="row g-0 mt-5 p-4">
                    <div className="text-center row d-flex justify-content-evenly">
                        <div className="col">
                            <div className="playing-card">
                                <img className="card-back" src="./images/4s.jpg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="playing-card">
                                <img className="card-back" src="./images/6d.jpg" />
                            </div>
                        </div>
                        <div className="col" id="hidden-dealer" style={{ display: "none" }}>
                            <div className="flip-card delay">
                                <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                        <img className="card-front" src="./images/queen.jpg" />
                                    </div>
                                    <div className="flip-card-front">
                                        <img className="card-back" src="./images/cardback.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row mt-5">
                    <div className="col-10 offset-1 text-center">
                        <h1>WELCOME TO CASINO ROYALE</h1>
                        <hr></hr>
                        <h2>Gamble responsibly!</h2>

                    </div>
                </div>
            </section>

            <section>
                <div className="modal fade" id="lose" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title text-center" id="exampleModalLabel">Uh oh! You lose</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4 text-center">
                                <h3>Your account has been suspended</h3>
                                <p>Please not your account is suspended due to an excessive balance pending.</p>
                                <p>You will regain access to our casino services upon paying: </p>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <h3>$14,034,134</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mb-3" id="player-cards">
                <div className="row g-0 mt-5 p-4">
                    <div className="text-center d-flex">
                        <div className="col">
                            <div className="playing-card">
                                <img className="card-back" src="./images/3d.jpg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="playing-card">
                                <img className="card-back" src="./images/10s.jpg" />
                            </div>
                        </div>
                        <div className="col show-stand" id="hidden-player" style={{ display: "none" }}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                        <img className="card-front" src="./images/6h.jpg" />
                                    </div>
                                    <div className="flip-card-front">
                                        <img className="card-back" src="./images/cardback.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mt-5 p-4">
                    <div className="col-10 offset-1 text-center">
                        <button type="button" className="btn btn-danger" onClick={() => clickHit()}>Hit</button>
                        <button type="button" className="btn btn-info" onClick={() => clickStand()} data-bs-toggle="modal" data-bs-target="#lose">Stand</button>
                    </div>
                </div>
            </section>
        </div>
    </>
}