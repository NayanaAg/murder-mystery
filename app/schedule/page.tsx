import React from "react";
import "../global.css";

export default function Page() {
    return <>
        <div id="container-fluid">

            <header>
                <div className="row">
                    <div className="col-10 offset-1 mt-5">
                        <h1 className="meeting-heading text-center">MEETING SCHEDULE</h1>
                        <h3 className="text-center" id="date">Saturday, 28th June 2025</h3>
                    </div>
                </div>
            </header>

            <hr />

            <div className="row">
                <div className="col-10 offset-1 mt-5">
                    <h2 className="meeting-time">09:00 a.m.</h2>
                    <p className="meeting-details">Ivan Naydenov <span id="request-denied">[REQUEST DENIED]</span></p>

                    <h2 className="meeting-time">10:00 a.m.</h2>
                    <p className="meeting-details">Lt. Scarlett Béchamel</p>

                    <h2 className="meeting-time">12:00 p.m.</h2>
                    <p className="meeting-details">Jennifer Wog</p>

                    <h2 className="meeting-time">3:00 p.m.</h2>
                    <p className="meeting-details">Bernardino Lefrandt Vega III <br />
                        Unregistered Visitor</p>
                </div>

                <hr />

                <footer>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <img id="will-logo" src="images/will-logo.png"></img>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    </>
}
