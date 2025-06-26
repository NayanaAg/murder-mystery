import React from "react";
import "../artifact.css";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row">
                <div className="col-10 offset-1 mt-5 text-center">
                    <h1>The Amulet</h1>
                    <img className="artifact-pic mt-2" src="/images/amulet.jpg" />
                </div>

                <div className="col-10 offset-1 mt-4">
                    <p>The Dancing Man's amulet may be the most critical component of the three-piece artifact. Although it may look unassuming on the surface, the necklace acts as an anchor for the spirit's soul and energy.</p>

                    <p>When paired with the amulet, <strong>the Dancing Man loses his ability to disappear and reappear at will.</strong> This simple yet effective technique has been used by many historians and occultists to safely transport the artifact to museum exhibits. Great peril lies ahead for those who attempt to separate and resell the amulet separately. It's a tempting offer, considering the rare gemstones embedded in its avian eyes, but your life is too high a price to pay for it.</p>
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
        </div >
    </>
}
