import React from 'react';
import {ToucheViewModel} from "../models/ToucheViewModel";

export type ToucheComponentProps = {
    touche: ToucheViewModel,
    onToucheClicked: (touche: ToucheViewModel) => void
}

export const ToucheComponent = ({ touche, onToucheClicked }: ToucheComponentProps) => {

    const handleToucheClicked = ()=> {
        onToucheClicked(touche);
    }

    return (
        <button className={touche.style} onClick={handleToucheClicked}>
            {
                touche.libelle.includes(`<sup>`) ?
                    <span dangerouslySetInnerHTML={{ __html: touche.libelle }} /> :
                    touche.libelle
            }
        </button>
    );
};