"use client";

import React, { useState, useEffect } from "react";
import "./blackjack.css";
import PlayingCard from "../components/playing-card";

export default function Page() {

    const [popup, setPopup] = useState(true);
    const handleClick = () => setPopup(false);

    return <>
        <div id="container-fluid">

            <section>
                <div className="row g-0 mt-5 p-4">
                    <div className="text-center d-flex">
                        <div className="col">
                            <PlayingCard card="0" />
                        </div>
                        <div className="col">
                            <PlayingCard card="2" />
                        </div>
                        <div className="col">
                            <PlayingCard card="4" />
                        </div>
                    </div>
                </div>
            </section>

            <section>

            </section>

            <section className="mb-3" id="player-cards">
                <div className="row g-0 mt-5 p-4">
                    <div className="text-center d-flex">
                        <div className="col">
                            <PlayingCard card="0" />
                        </div>
                        <div className="col">
                            <PlayingCard card="2" />
                        </div>
                        <div className="col">
                            <PlayingCard card="4" />
                        </div>
                    </div>
                </div>

                <div className="row g-0">
                    <div className="col-10 offset-1 text-center">
                        <button type="button" className="btn btn-danger">Hit</button>
                        <button type="button" className="btn btn-info">Stand</button>
                        <button className="btn btn-warning" type="button" disabled>Raise</button>
                        <p>WARNING: Insufficient funds</p>
                    </div>
                </div>
            </section>
        </div>
    </>
}