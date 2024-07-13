import React from 'react';
import {ToucheViewModel} from "../models/ToucheViewModel";

export type ToucheComponentProps = {
    touche: ToucheViewModel
}

export const ToucheComponent = ({ touche }: ToucheComponentProps) => {

    const handleToucheClicked = ()=> {

    }

    return (
        <button className={touche.style} onClick={handleToucheClicked}>{touche.libelle}</button>
    );
};