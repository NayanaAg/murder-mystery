import React from "react";
import PasswordAudio from "../../components/audiopw";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row my-5 d-flex text-center">
                <div className="col-8 offset-2">
                    <PasswordAudio puzzle="5"></PasswordAudio>
                </div>
            </div>
        </div>
    </>
}