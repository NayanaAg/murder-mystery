import React from "react";
import PasswordPlease from "../../components/password";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row my-5 d-flex text-center">
                <div className="col-8 offset-2">
                    <PasswordPlease puzzle="0"></PasswordPlease>
                </div>
            </div>
        </div>
    </>
}