import React from 'react';
import {touchesData} from "../../../../data/touchesData";
import {ToucheComponent} from "./ToucheComponent";
import {TypeTouche} from "../models/TypeTouche";
import {SwitchButtonComponent} from "./SwitchButtonComponent";

export const KeypadComponent = () => {
    const touches = touchesData;

    return (
        <section className="calc-container">
            {
                touches && touches.map((touche)=>
                    touche.typeTouche === TypeTouche.SWITCHMODE ? (
                        <SwitchButtonComponent key={touche.id}></SwitchButtonComponent>
                        ) : (
                    <ToucheComponent key={touche.id} touche={touche}></ToucheComponent>
                ))
            }
            <div id="hidden"></div>
        </section>
    );
};