"use client";

import React, {useState, useEffect} from "react";
import Data from "../puzzles.json";

export default function PasswordPlease(props) {

    const puzzle = Data[props.puzzle];
    const [username, setUsername] = useState('')


    function passwordCheck(input, solution) {

        let password = input.toString().toLowerCase()

        if (password === solution) {
            document.getElementById("clue").style.display = 'block';
        } else {
            document.getElementById("clue").style.display = 'none';
        }

        return console.log(password + solution)
    }

    return <>
        <h1>{puzzle.title}</h1>

        <form>
            <input type="text" className="form-control my-5" id="password" aria-describedby="password" onChange={e => setUsername(e.target.value)}></input>

            <button type="button" className="btn btn-primary" onClick={() => passwordCheck(username, puzzle.password)}>Submit</button>
        </form>

        <div id="clue" className="my-3" style={{display:"none"}}> {puzzle.reveal} </div>
    </>
}
