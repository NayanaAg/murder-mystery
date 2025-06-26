import React from "react";
import PasswordAudio from "../../components/audiopw";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row my-5 d-flex text-center align-middle">
                <div className="col-8 offset-2 mt-5">
                    <PasswordAudio puzzle="2"></PasswordAudio>
                </div>
            </div>
        </div>
    </>
}