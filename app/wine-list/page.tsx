import React from "react";
import "./wine.css";

export default function Page() {
    return <>
        <div id="container-fluid">
            <div className="row py-3">
                <div className="col-12 mt-3 text-center">
                    <h1>Specialty Wine Cellar</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-10 offset-1">
                    <table className="table table-striped table-dark my-3">
                        <thead>
                            <tr>
                                <th scope="col">Label</th>
                                <th scope="col">Shelf</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Acquarella</td>
                                <td>P23</td>
                            </tr>
                            <tr>
                                <td>Agate</td>
                                <td>T19</td>
                            </tr>
                            <tr>
                                <td>Bartenura</td>
                                <td>J47</td>
                            </tr>
                            <tr>
                                <td>Casarena</td>
                                <td>E93</td>
                            </tr>
                            <tr>
                                <td>Gamay</td>
                                <td>M21</td>
                            </tr>
                            <tr>
                                <td>Mas Des Bressades</td>
                                <td>T20</td>
                            </tr>
                            <tr>
                                <td>Codem</td>
                                <td>M13</td>
                            </tr>
                            <tr>
                                <td>Periquita</td>
                                <td>R50</td>
                            </tr>
                            <tr>
                                <td>Rioja Vega</td>
                                <td id="missing-wine">MISSING</td>
                            </tr>
                            <tr>
                                <td>Sabanis</td>
                                <td>S80</td>
                            </tr>
                            <tr>
                                <td>Tabanco</td>
                                <td>R96</td>
                            </tr>
                            <tr>
                                <td>Terre Davau</td>
                                <td>T12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="mt-4 p-2">
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <img id="will-logo" src="images/will-logo.png"></img>
                            <p>FROM THE PRIVATE COLLECTION OF WILLIAM CHATEAUDIX</p>
                        </div>
                    </div>
                </footer>
        </div>

    </>
}