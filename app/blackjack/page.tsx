"use client";

import React from "react";
import "./blackjack.css";
import PlayingCard from "../components/playing-card";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row">
                <div className="col-10 offset-1">
                    <h1>Welcome to Casino Royale</h1>
                    
                    <PlayingCard card="1" />
                </div>
            </div>
        </div>
    </>
}