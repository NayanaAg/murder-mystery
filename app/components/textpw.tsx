"use client";

import React, { useState, useEffect } from "react";
import Data from "../puzzles.json";
import "../gated/gated.css";

export default function PasswordAudio(props) {

    const puzzle = Data[props.puzzle];
    const [username, setUsername] = useState('')


    function passwordCheck(input, solution) {

        let password = input.toString().toLowerCase()

        if (password === solution) {
            document.getElementById("clue").style.display = 'block';
        } else {
            document.getElementById("clue").style.display = 'none';
        }
    }

    return <>
        <h1>{puzzle.title}</h1>

        <form>
            <input type="text" className="form-control my-5" id="password" aria-describedby="password" onChange={e => setUsername(e.target.value)}></input>

            <button type="button" className="btn btn-primary btn-lg" onClick={() => passwordCheck(username, puzzle.password)}>ENTER</button>
        </form>

        <div id="clue" className="my-3" style={{ display: "none" }}> {puzzle.reveal} </div>
    </>
}
