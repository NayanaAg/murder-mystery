import React from "react";
import "../artifact.css";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row">
                <div className="col-10 offset-1 mt-5 text-center">
                    <h1>The Compass</h1>
                    <img className="artifact-pic mt-2" src="/images/compass.jpg" />
                </div>
                
                <div className="col-10 offset-1 mt-5">
                    <p>To those who study the occult, The Dancing Man's compass may be one of the most valuable artifacts ever discovered. Of course, it has inherent value as one of his symbols of power; in fact, the compass always points towards the spirit, no matter how far away the two pieces  may be.</p>

                    <p>However, if one attunes to the artifact properly, it can show the nearby presence of any objects, writing, or symbols with paranormal energy. Be warned, though-- when wielded without the proper experience, the range of the compass is greatly diminished. <strong>One might have to be directly next to the clue that they are trying to investigate for an accurate reading.</strong></p>
                </div>
            </div>

            <footer>
                <div className="row">
                    <div className="col-10 offset-1 text-center">
                        <hr />
                        <h2>European Museum of Occult & Spiritual Arts</h2>
                    </div>
                </div>
            </footer>
        </div>
    </>
}